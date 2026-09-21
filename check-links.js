const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const regex = /href=["']([^"'#][^"']*)["']/g;
let m;
const hrefs = new Set();
while ((m = regex.exec(content)) !== null) {
  const url = m[1];
  if (!url.startsWith('http') && !url.startsWith('tel:') && !url.startsWith('mailto:')) {
    hrefs.add(url);
  }
}

console.log('Internal links in index.html:');
for (const h of hrefs) {
  const exists = fs.existsSync(h);
  console.log(`${h}: ${exists ? 'EXISTS LOCALLY' : 'MISSING LOCALLY'}`);
}
