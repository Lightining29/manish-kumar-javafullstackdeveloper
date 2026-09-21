const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://manishkumarjava.netlify.app';

const allHtmlFiles = fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.html') && !f.startsWith('google') && f !== 'index.html' && f !== 'seo-directory.html');

console.log(`Categorizing ${allHtmlFiles.length} pages for seo-directory.html...`);

// Categorize files
const courses = [];
const services = [];
const guides = [];
const projects = [];

for (const f of allHtmlFiles) {
  const content = fs.readFileSync(path.join(__dirname, f), 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : f;

  const item = { file: f, title };

  if (f.startsWith('project-')) {
    projects.push(item);
  } else if (f.includes('course') || f.includes('training') || f.includes('classes') || f.includes('coaching') || f.includes('internship') || f.includes('preparation')) {
    courses.push(item);
  } else if (f.startsWith('learn-') || f.startsWith('top-') || f.startsWith('blog-') || f.startsWith('java-programs-')) {
    guides.push(item);
  } else {
    services.push(item);
  }
}

console.log(`Courses: ${courses.length}, Services: ${services.length}, Guides: ${guides.length}, Projects: ${projects.length}`);

const directoryHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="manish1.png">
  <title>Ghaziabad Java &amp; DevOps SEO Directory — 600+ Pages | Manish Kumar</title>
  <meta name="description" content="Complete directory of 600+ Java Full Stack, Spring Boot, DevOps, and Java Courses across Ghaziabad localities and technical topics by Manish Kumar.">
  <link rel="canonical" href="${DOMAIN}/seo-directory.html">
  <meta name="robots" content="index, follow">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="index.html" class="brand-logo">
        <img src="images/manish-profile.jpg" alt="Manish Kumar" class="brand-avatar">
        <div class="brand-title">
          <span class="brand-name">Manish Kumar</span>
          <span class="brand-subtitle">Ghaziabad Java Directory</span>
        </div>
      </a>
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="index.html#projects" class="nav-link">Projects</a>
        <a href="index.html#experience" class="nav-link">Experience</a>
        <a href="seo-directory.html" class="nav-link active">Directory (${allHtmlFiles.length} Pages)</a>
        <a href="java-programs-library.html" class="nav-link">Java Library</a>
        <a href="index.html#contact" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="tel:+918851961088" class="btn btn-primary btn-sm"><i class="fa-solid fa-phone"></i> +91 8851961088</a>
      </div>
    </div>
  </header>

  <section class="seo-header-hero">
    <div class="container">
      <span class="badge badge-green" style="margin-bottom: 0.9rem;">
        <i class="fa-solid fa-sitemap"></i> Comprehensive Crawl Hub &bull; ${allHtmlFiles.length}+ Indexed Pages
      </span>
      <h1 class="hero-title">Ghaziabad Java Full Stack &amp; Courses Directory</h1>
      <p class="hero-description" style="max-width: 850px;">
        Explore all verified Java Full Stack Development, Spring Boot training, DevOps pipelines, and neighborhood-specific course guides in Ghaziabad.
      </p>
      <div style="margin-top: 1.5rem; max-width: 600px;">
        <input type="text" id="dirSearch" class="form-control" placeholder="Type locality, skill, or keyword (e.g. Indirapuram, Spring Boot, Courses)..." onkeyup="filterDirectory()">
      </div>
    </div>
  </section>

  <main class="container section-padding">
    <!-- Projects Section -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;"><i class="fa-solid fa-rocket" style="color: var(--brand-orange);"></i> Verified Commercial Projects &amp; Case Studies</h2>
    <div class="directory-grid" style="margin-bottom: 3.5rem;">
      <div class="directory-category-card" style="grid-column: 1 / -1;">
        <div class="directory-list" style="max-height: none;">
          ${projects.map(p => `
          <a href="${p.file}" class="directory-link dir-item">
            <span><strong>${p.title}</strong></span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8rem; color: var(--brand-primary);"></i>
          </a>`).join('')}
        </div>
      </div>
    </div>

    <!-- Java Courses in Ghaziabad -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;"><i class="fa-solid fa-graduation-cap" style="color: var(--brand-green);"></i> Java Courses &amp; Training in Ghaziabad (${courses.length} Pages)</h2>
    <div class="directory-grid" style="margin-bottom: 3.5rem;">
      <div class="directory-category-card" style="grid-column: 1 / -1;">
        <div class="directory-list" style="max-height: 500px;">
          ${courses.map(p => `
          <a href="${p.file}" class="directory-link dir-item">
            <span>${p.title}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>
    </div>

    <!-- Java Developer & Enterprise Services -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;"><i class="fa-brands fa-java" style="color: var(--brand-primary);"></i> Java Development &amp; DevOps Services in Ghaziabad (${services.length} Pages)</h2>
    <div class="directory-grid" style="margin-bottom: 3.5rem;">
      <div class="directory-category-card" style="grid-column: 1 / -1;">
        <div class="directory-list" style="max-height: 500px;">
          ${services.map(p => `
          <a href="${p.file}" class="directory-link dir-item">
            <span>${p.title}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>
    </div>

    <!-- Technical Guides & Coding Tutorials -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;"><i class="fa-solid fa-book-open" style="color: var(--brand-secondary);"></i> Java Tutorials, Guides &amp; Coding Programs (${guides.length} Pages)</h2>
    <div class="directory-grid">
      <div class="directory-category-card" style="grid-column: 1 / -1;">
        <div class="directory-list" style="max-height: 400px;">
          ${guides.map(p => `
          <a href="${p.file}" class="directory-link dir-item">
            <span>${p.title}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container" style="text-align: center;">
      <p style="color: var(--text-muted);">&copy; 2026 Manish Kumar &bull; Java Full Stack Developer Ghaziabad &bull; <a href="sitemap.xml">XML Sitemap</a></p>
    </div>
  </footer>

  <script>
    function filterDirectory() {
      const q = document.getElementById('dirSearch').value.toLowerCase();
      document.querySelectorAll('.dir-item').forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(q) ? 'flex' : 'none';
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'seo-directory.html'), directoryHtml, 'utf8');
console.log('seo-directory.html successfully updated with all categories and pages!');
