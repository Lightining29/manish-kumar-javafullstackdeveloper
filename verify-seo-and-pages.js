const fs = require('fs');
const path = require('path');

console.log('--- Starting Comprehensive SEO & Quality Verification ---');

// 1. Get all HTML files
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
console.log(`Found ${files.length} total HTML pages.`);

let errors = [];
let canonicalMap = new Map();

for (const file of files) {
  // Skip google site verification token files
  if (file.startsWith('google') && file.length < 35) continue;

  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');

  // Check title
  if (!content.match(/<title[^>]*>/i)) {
    errors.push(`${file} is missing <title> tag!`);
  }

  // Check meta description
  if (!content.includes('name="description"')) {
    errors.push(`${file} is missing meta description!`);
  }

  // Check meta refresh
  if (content.toLowerCase().includes('http-equiv="refresh"')) {
    errors.push(`CRITICAL ERROR: ${file} contains meta-refresh redirect!`);
  }

  // Check canonical
  const canonicalMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                         content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  if (!canonicalMatch) {
    errors.push(`${file} is missing canonical tag!`);
  } else {
    const canonicalHref = canonicalMatch[1];
    
    // Check if canonical matches file
    if (file === 'index.html') {
      if (canonicalHref !== 'https://manish-javafullstackdeveloper.netlify.app/') {
        errors.push(`index.html canonical should be root '/' but found: ${canonicalHref}`);
      }
    } else {
      const expectedHref = `https://manish-javafullstackdeveloper.netlify.app/${file}`;
      if (canonicalHref !== expectedHref) {
        errors.push(`${file} canonical mismatch! Expected ${expectedHref}, found: ${canonicalHref}`);
      }
    }

    if (canonicalMap.has(canonicalHref) && file !== 'index.html') {
      errors.push(`Duplicate canonical detected: ${canonicalHref} in ${file} and ${canonicalMap.get(canonicalHref)}`);
    } else {
      canonicalMap.set(canonicalHref, file);
    }
  }
}

// 2. Check sitemap.xml
if (!fs.existsSync(path.join(__dirname, 'sitemap.xml'))) {
  errors.push('sitemap.xml is missing!');
} else {
  const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');
  if (sitemap.includes('index.html</loc>')) {
    errors.push('CRITICAL: sitemap.xml contains index.html! Should only contain root URL /');
  }

  const matches = sitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
  console.log(`sitemap.xml contains ${matches.length} canonical URLs.`);
}

// 3. Check robots.txt
if (!fs.existsSync(path.join(__dirname, 'robots.txt'))) {
  errors.push('robots.txt is missing!');
} else {
  const robots = fs.readFileSync(path.join(__dirname, 'robots.txt'), 'utf8');
  if (!robots.includes('Allow: /')) {
    errors.push('robots.txt does not have Allow: /');
  }
  if (!robots.includes('Sitemap:')) {
    errors.push('robots.txt does not reference sitemap!');
  }
}

// 4. Check _redirects
if (!fs.existsSync(path.join(__dirname, '_redirects'))) {
  errors.push('_redirects file is missing!');
} else {
  const redirects = fs.readFileSync(path.join(__dirname, '_redirects'), 'utf8');
  if (!redirects.includes('/index.html  /  301!')) {
    errors.push('_redirects does not have 301 for /index.html');
  }
}

// 5. Check images
const images = ['images/manish-profile.jpg', 'images/manish-standing.jpg', 'images/manish-portrait.jpg'];
for (const img of images) {
  if (!fs.existsSync(path.join(__dirname, img))) {
    errors.push(`Required image missing: ${img}`);
  }
}

console.log('----------------------------------------------------');
if (errors.length === 0) {
  console.log('✅ ALL VERIFICATION CHECKS PASSED PERFECTLY!');
  console.log('0 canonical errors, 0 duplicate URLs, 0 meta-refreshes, 0 robots.txt blockages.');
} else {
  console.log(`❌ Found ${errors.length} errors:`);
  errors.forEach(e => console.log(' - ' + e));
}
