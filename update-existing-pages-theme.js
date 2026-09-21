const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'project-afsha-enterprises.html',
  'project-programmingwala.html',
  'project-rancom-technologies.html',
  'blog-devops.html',
  'blog-java-fullstack.html',
  'java-programs-library.html',
  'java-programs-string-array.html',
  'java-programs-dsa-algorithms.html',
  'java-programs-oops-design.html',
  'java-programs-spring-boot.html'
];

const lightThemeCss = `
    body { background: #f8fafc; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; padding: 0; line-height: 1.7; }
    h1, h2, h3, h4, h5 { font-family: 'Outfit', sans-serif; color: #0f172a; }
    .project-hero, .blog-hero, .lib-hero { background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%); padding: 60px 40px 50px; text-align: center; border-bottom: 1px solid #e2e8f0; }
    .project-hero h1, .blog-hero h1, .lib-hero h1 { font-size: 2.6rem; margin-bottom: 12px; color: #0f172a; font-weight: 800; }
    .project-hero p, .blog-hero p, .lib-hero p { color: #475569; font-size: 1.1rem; max-width: 750px; margin: 0 auto 20px; font-weight: 500; }
    .site-url-badge { display: inline-flex; align-items: center; gap: 8px; background: #eef2ff; color: #4338ca; border: 1px solid rgba(67,56,202,0.2); padding: 8px 22px; border-radius: 30px; font-size: 0.95rem; font-weight: 600; text-decoration: none; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(15,23,42,0.04); }
    .container { max-width: 1100px; margin: 40px auto; padding: 0 24px; }
    .screenshot-box { border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -3px rgba(15,23,42,0.08), 0 4px 6px -4px rgba(15,23,42,0.04); margin-bottom: 40px; background: #fff; }
    .screenshot-box img { width: 100%; height: auto; display: block; }
    .content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 35px; }
    @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr; } .project-hero h1 { font-size: 2rem; } }
    .info-card, .program-card, .article-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 28px; margin-bottom: 26px; box-shadow: 0 4px 6px -1px rgba(15,23,42,0.06), 0 2px 4px -2px rgba(15,23,42,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .info-card:hover, .program-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -4px rgba(15,23,42,0.1); }
    .info-card h3, .program-card h3 { color: #4338ca; margin-top: 0; font-size: 1.35rem; font-weight: 800; }
    .tag { display: inline-block; padding: 4px 12px; background: #eef2ff; color: #4338ca; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin: 0 4px 8px 0; border: 1px solid rgba(67,56,202,0.15); }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background: linear-gradient(135deg, #4338ca 0%, #2563eb 100%); color: #fff !important; border-radius: 50px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 12px rgba(67,56,202,0.25); }
    .backlinks-box { max-width: 1100px; margin: 50px auto 60px; padding: 32px 36px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(15,23,42,0.06); }
    .backlinks-box h3 { color: #4338ca; margin-top: 0; font-size: 1.35rem; font-weight: 800; }
    .backlinks-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 20px; }
    .backlink-group h4 { color: #0f172a; font-size: 0.95rem; margin: 0 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-weight: 700; }
    .backlink-group ul { list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 1.8; }
    .backlink-group a { color: #64748b; text-decoration: none; transition: color 0.2s; }
    .backlink-group a:hover { color: #4338ca; text-decoration: underline; }
    pre { background: #0f172a !important; color: #e2e8f0 !important; border-radius: 12px; padding: 18px; overflow-x: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    code { font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; }
`;

for (const f of filesToUpdate) {
  const filePath = path.join(__dirname, f);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <style>...</style> block
  if (content.includes('<style>') && content.includes('</style>')) {
    content = content.replace(/<style>[\s\S]*?<\/style>/i, `<style>${lightThemeCss}</style>`);
  }

  // Also replace any lingering dark background inline styling
  content = content.replace(/background:\s*#08080a/gi, 'background: #f8fafc');
  content = content.replace(/color:\s*#fff;/gi, 'color: #0f172a;');
  content = content.replace(/#111118/gi, '#ffffff');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Modernized theme to Light Theme in: ${f}`);
}
