const fs = require('fs');

const DOMAIN = 'https://manishkumarjava.netlify.app';
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && !f.startsWith('google'));
const now = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
const txtUrls = [];

xml += `  <url>\n    <loc>${DOMAIN}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.00</priority>\n  </url>\n`;
txtUrls.push(`${DOMAIN}/`);

for (const f of files) {
  if (f === 'index.html' || f === '404.html') continue;
  const url = `${DOMAIN}/${f}`;
  xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.90</priority>\n  </url>\n`;
  txtUrls.push(url);
}

xml += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', xml, 'utf8');
fs.writeFileSync('sitemap.txt', txtUrls.join('\n'), 'utf8');
console.log('Sitemaps refreshed with', txtUrls.length, 'URLs.');
