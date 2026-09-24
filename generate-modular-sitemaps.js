const fs = require('fs');

const DOMAIN = 'https://manishkumarjava.netlify.app';
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && !f.startsWith('google') && f !== '404.html');
const today = new Date().toISOString().split('T')[0];

const knownLocalities = ['indirapuram', 'vaishali', 'vasundhara', 'raj-nagar', 'crossings-republik', 'kaushambi', 'mohan-nagar', 'sahibabad', 'kavi-nagar', 'shastri-nagar', 'govindpuram', 'pratap-vihar', 'sanjay-nagar', 'wave-city', 'loni', 'bulandshahr', 'gt-road', 'meerut-road', 'anand-vihar', 'surya-nagar', 'chander-nagar', 'vijay-nagar', 'siddharth-vihar'];

const categories = {
  main: [],
  citywide: [],
  localities: [],
  courses: [],
  guides: []
};

for (const f of files) {
  if (['index.html', 'seo-directory.html', 'java-programs-library.html', 'music-hub.html', 'project-afsha-enterprises.html', 'project-programmingwala.html', 'project-rancom-technologies.html'].includes(f)) {
    categories.main.push(f);
  } else if (f.startsWith('blog-') || f.startsWith('tutorial-') || f.includes('interview') || f.includes('program')) {
    categories.guides.push(f);
  } else if (f.includes('course') || f.includes('training') || f.includes('learn-') || f.includes('classes') || f.includes('institute')) {
    categories.courses.push(f);
  } else if (f.endsWith('-ghaziabad.html') && !f.includes('-in-')) {
    const isLocality = knownLocalities.some(loc => f.includes(loc));
    if (isLocality) {
      categories.localities.push(f);
    } else {
      categories.citywide.push(f);
    }
  } else {
    categories.citywide.push(f);
  }
}

function buildXml(urlsWithPriority) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const item of urlsWithPriority) {
    xml += `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${item.freq || 'weekly'}</changefreq>\n    <priority>${item.priority || '0.80'}</priority>\n  </url>\n`;
  }
  xml += '</urlset>\n';
  return xml;
}

// 1. sitemap-main.xml
const mainUrls = [
  { url: `${DOMAIN}/`, priority: '1.00', freq: 'daily' },
  { url: `${DOMAIN}/seo-directory.html`, priority: '0.95', freq: 'daily' },
  { url: `${DOMAIN}/java-programs-library.html`, priority: '0.90', freq: 'weekly' },
  { url: `${DOMAIN}/music-hub.html`, priority: '0.85', freq: 'monthly' },
  { url: `${DOMAIN}/project-afsha-enterprises.html`, priority: '0.90', freq: 'weekly' },
  { url: `${DOMAIN}/project-programmingwala.html`, priority: '0.90', freq: 'weekly' },
  { url: `${DOMAIN}/project-rancom-technologies.html`, priority: '0.90', freq: 'weekly' }
];
fs.writeFileSync('sitemap-main.xml', buildXml(mainUrls), 'utf8');

// 2. sitemap-citywide.xml
const citywideUrls = categories.citywide.map(f => ({ url: `${DOMAIN}/${f}`, priority: '0.90', freq: 'weekly' }));
fs.writeFileSync('sitemap-citywide.xml', buildXml(citywideUrls), 'utf8');

// 3. sitemap-localities.xml
const localityUrls = categories.localities.map(f => ({ url: `${DOMAIN}/${f}`, priority: '0.85', freq: 'weekly' }));
fs.writeFileSync('sitemap-localities.xml', buildXml(localityUrls), 'utf8');

// 4. sitemap-courses.xml
const courseUrls = categories.courses.map(f => ({ url: `${DOMAIN}/${f}`, priority: '0.85', freq: 'weekly' }));
fs.writeFileSync('sitemap-courses.xml', buildXml(courseUrls), 'utf8');

// 5. sitemap-guides.xml
const guideUrls = categories.guides.map(f => ({ url: `${DOMAIN}/${f}`, priority: '0.80', freq: 'weekly' }));
fs.writeFileSync('sitemap-guides.xml', buildXml(guideUrls), 'utf8');

// 6. sitemap-index.xml
const sitemaps = [
  'sitemap-main.xml',
  'sitemap-citywide.xml',
  'sitemap-localities.xml',
  'sitemap-courses.xml',
  'sitemap-guides.xml'
];

let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const sm of sitemaps) {
  indexXml += `  <sitemap>\n    <loc>${DOMAIN}/${sm}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n`;
}
indexXml += '</sitemapindex>\n';
fs.writeFileSync('sitemap-index.xml', indexXml, 'utf8');

// 7. Full sitemap.xml & sitemap.txt
const allUrls = [
  ...mainUrls,
  ...citywideUrls,
  ...localityUrls,
  ...courseUrls,
  ...guideUrls
];
fs.writeFileSync('sitemap.xml', buildXml(allUrls), 'utf8');
fs.writeFileSync('sitemap.txt', allUrls.map(u => u.url).join('\n'), 'utf8');

console.log('✅ Generated sitemap-index.xml and 5 modular sitemaps:');
console.log(`- sitemap-main.xml: ${mainUrls.length} URLs`);
console.log(`- sitemap-citywide.xml: ${citywideUrls.length} URLs`);
console.log(`- sitemap-localities.xml: ${localityUrls.length} URLs`);
console.log(`- sitemap-courses.xml: ${courseUrls.length} URLs`);
console.log(`- sitemap-guides.xml: ${guideUrls.length} URLs`);
console.log(`- sitemap.xml: ${allUrls.length} URLs`);
