/**
 * migrate-domain-to-manishkumarjava.js
 * Completely switches all domain references from
 * https://manish-javafullstackdeveloper.netlify.app
 * to
 * https://manishkumarjava.netlify.app
 * across all HTML files, sitemaps, robots.txt, _redirects, and scripts.
 */

const fs = require('fs');
const path = require('path');

const OLD_DOMAIN = 'https://manish-javafullstackdeveloper.netlify.app';
const NEW_DOMAIN = 'https://manishkumarjava.netlify.app';

console.log(`Starting domain migration: ${OLD_DOMAIN} -> ${NEW_DOMAIN}`);

// 1. Update all HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
let htmlCount = 0;

for (const file of htmlFiles) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(OLD_DOMAIN)) {
    content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    fs.writeFileSync(filePath, content, 'utf8');
    htmlCount++;
  }
}
console.log(`Updated domain in ${htmlCount} HTML files.`);

// 2. Update robots.txt
const robotsPath = path.join(__dirname, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  let robots = fs.readFileSync(robotsPath, 'utf8');
  robots = robots.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
  fs.writeFileSync(robotsPath, robots, 'utf8');
  console.log('Updated robots.txt with new sitemap URLs.');
}

// 3. Update sitemap.xml
const sitemapXmlPath = path.join(__dirname, 'sitemap.xml');
if (fs.existsSync(sitemapXmlPath)) {
  let sitemapXml = fs.readFileSync(sitemapXmlPath, 'utf8');
  sitemapXml = sitemapXml.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
  fs.writeFileSync(sitemapXmlPath, sitemapXml, 'utf8');
  console.log('Updated sitemap.xml with new domain.');
}

// 4. Update sitemap.txt
const sitemapTxtPath = path.join(__dirname, 'sitemap.txt');
if (fs.existsSync(sitemapTxtPath)) {
  let sitemapTxt = fs.readFileSync(sitemapTxtPath, 'utf8');
  sitemapTxt = sitemapTxt.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
  fs.writeFileSync(sitemapTxtPath, sitemapTxt, 'utf8');
  console.log('Updated sitemap.txt with new domain.');
}

// 5. Update _redirects
const redirectsPath = path.join(__dirname, '_redirects');
if (fs.existsSync(redirectsPath)) {
  const redirectsContent = `# Netlify Redirects File for ${NEW_DOMAIN}
# Solves canonical duplication: Redirect /index.html permanently to /
/index.html  /  301!

# Enforce canonical HTTPS
http://manishkumarjava.netlify.app/* https://manishkumarjava.netlify.app/:splat 301!
`;
  fs.writeFileSync(redirectsPath, redirectsContent, 'utf8');
  console.log('Updated _redirects for manishkumarjava.');
}

// 6. Update builder scripts
const builderScripts = ['build-seo-pages.js', 'build-course-and-blog-pages.js', 'update-directory.js', 'verify-seo-and-pages.js'];
for (const script of builderScripts) {
  const sp = path.join(__dirname, script);
  if (fs.existsSync(sp)) {
    let sc = fs.readFileSync(sp, 'utf8');
    sc = sc.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    sc = sc.replaceAll('manish-javafullstackdeveloper', 'manishkumarjava');
    fs.writeFileSync(sp, sc, 'utf8');
    console.log(`Updated domain constant in ${script}`);
  }
}

console.log('--- Domain Migration Complete ---');
