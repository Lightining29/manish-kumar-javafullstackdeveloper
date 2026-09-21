const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

console.log(`Scanning and removing GitHub links across ${files.length} HTML files...`);

let updatedFilesCount = 0;

for (const file of files) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('github.com')) {
    // 1. Remove <a> tags pointing to github.com
    content = content.replace(/<a\s+[^>]*href=["']https?:\/\/github\.com[^"']*["'][^>]*>[\s\S]*?<\/a>/gi, '');

    // 2. Remove <li> elements that contain github.com links
    content = content.replace(/<li[^>]*>[\s\r\n]*<a\s+[^>]*href=["']https?:\/\/github\.com[^"']*["'][^>]*>[\s\S]*?<\/a>[\s\r\n]*<\/li>/gi, '');
    content = content.replace(/<li[^>]*>[\s\S]*?https?:\/\/github\.com[\s\S]*?<\/li>/gi, '');

    // 3. Remove "https://github.com..." from JSON-LD schema
    content = content.replace(/,\s*"https?:\/\/github\.com[^"]*"/gi, '');
    content = content.replace(/"https?:\/\/github\.com[^"]*",?\s*/gi, '');

    // 4. Any standalone remaining github urls in text
    content = content.replace(/https?:\/\/github\.com[^\s<"']+/gi, '');

    fs.writeFileSync(filePath, content, 'utf8');
    updatedFilesCount++;
  }
}

console.log(`Successfully removed GitHub links from ${updatedFilesCount} files.`);
