const fs = require('fs');
const https = require('https');

const HOST = 'manishkumarjava.netlify.app';
const KEY = 'manishkumarjava2026indexnowkey01';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = fs.readFileSync('sitemap.txt', 'utf8')
  .split('\n')
  .map(u => u.trim())
  .filter(Boolean);

console.log(`Submitting ${urls.length} URLs to IndexNow via api.indexnow.org...`);

// IndexNow accepts up to 10,000 URLs per batch
const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
});

const req = https.request({
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  console.log(`IndexNow response status: ${res.statusCode} ${res.statusMessage}`);
  res.on('data', (d) => process.stdout.write(d));
});

req.on('error', (e) => {
  console.error('IndexNow error:', e);
});

req.write(payload);
req.end();
