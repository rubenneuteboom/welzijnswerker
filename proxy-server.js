const http = require('http');
const https = require('https');
const url = require('url');

const BRAVE_API_KEY = 'BSAX21VLfhXyIjl8tzWViFXlaDC4Mql';
const PORT = 3459;

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/brave-search') {
        const query = parsedUrl.query.q;
        if (!query) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing query parameter q' }));
            return;
        }

        const braveUrl = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=8&country=nl&search_lang=nl`;
        
        const options = {
            headers: {
                'Accept': 'application/json',
                'X-Subscription-Token': BRAVE_API_KEY
            }
        };

        https.get(braveUrl, options, (braveRes) => {
            let data = '';
            braveRes.on('data', chunk => data += chunk);
            braveRes.on('end', () => {
                res.writeHead(braveRes.statusCode, { 'Content-Type': 'application/json' });
                res.end(data);
            });
        }).on('error', (err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`🔍 Brave Search proxy running at http://localhost:${PORT}`);
});
