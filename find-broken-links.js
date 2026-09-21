const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

console.log(`Scanning ${files.length} HTML files for broken internal links...`);

const missingLinks = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const regex = /href=["']([^"'#][^"']*)["']/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const target = m[1].split('?')[0].split('#')[0];
    if (
      !target.startsWith('http://') &&
      !target.startsWith('https://') &&
      !target.startsWith('tel:') &&
      !target.startsWith('mailto:') &&
      !target.startsWith('javascript:') &&
      !target.startsWith('data:')
    ) {
      if (!fs.existsSync(path.join(__dirname, target))) {
        if (!missingLinks.has(target)) {
          missingLinks.set(target, []);
        }
        missingLinks.get(target).push(file);
      }
    }
  }
}

if (missingLinks.size === 0) {
  console.log('✅ ZERO BROKEN INTERNAL LINKS FOUND ACROSS ALL PAGES!');
} else {
  console.log(`❌ Found ${missingLinks.size} missing target files:`);
  for (const [target, sourceFiles] of missingLinks.entries()) {
    console.log(`  Target "${target}" referenced in ${sourceFiles.length} files (e.g. ${sourceFiles[0]})`);
  }
}
