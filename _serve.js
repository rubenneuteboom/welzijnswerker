const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3458;
const ROOT = __dirname;

function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const filePath = path.join(ROOT, urlPath);
  
  // Security: prevent path traversal
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
  
  try {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      // Always show directory listing (never auto-serve index.html)
      const files = fs.readdirSync(filePath).sort();
      const items = files
        .filter(f => !f.startsWith('.') && f !== '_serve.js' && f !== 'node_modules')
        .map(f => {
          const isDir = fs.statSync(path.join(filePath, f)).isDirectory();
          const icon = isDir ? '📁' : f.endsWith('.html') ? '🌐' : '📄';
          const href = urlPath.replace(/\/?$/, '/') + f + (isDir ? '/' : '');
          return `<li>${icon} <a href="${href}">${escHtml(f)}${isDir ? '/' : ''}</a></li>`;
        }).join('\n');
      
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Welzijnswerker - ${escHtml(urlPath)}</title>
<style>body{font-family:system-ui;max-width:800px;margin:2rem auto;padding:0 1rem;background:#1a1a2e;color:#e0e0e0}
a{color:#64b5f6;text-decoration:none}a:hover{text-decoration:underline}
li{padding:4px 0;font-size:1.1rem}ul{list-style:none;padding:0}h1{color:#90caf9}</style></head>
<body><h1>📂 ${escHtml(urlPath || '/')}</h1>${urlPath !== '/' ? '<p><a href="../">⬆️ Parent directory</a></p>' : ''}
<ul>${items}</ul></body></html>`);
    } else {
      // Serve file
      const ext = path.extname(filePath).toLowerCase();
      const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.md':'text/plain; charset=utf-8'};
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      fs.createReadStream(filePath).pipe(res);
    }
  } catch (e) {
    res.writeHead(404); res.end('Not found');
  }
}).listen(PORT, '0.0.0.0', () => console.log(`Welzijnswerker file server on http://0.0.0.0:${PORT}/`));
