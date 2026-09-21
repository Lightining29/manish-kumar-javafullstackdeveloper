const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://manishkumarjava.netlify.app';

const citywidePages = [
  {
    slug: 'java-developer-ghaziabad',
    title: 'Java Developer in Ghaziabad — Manish Kumar | Spring Boot, React & Cloud',
    keyword: 'Java Developer in Ghaziabad',
    summary: 'Looking for a top-rated Java Developer in Ghaziabad? Manish Kumar specializes in Java 17/21, Spring Boot REST microservices, React JS, MySQL, and Docker CI/CD cloud deployments.'
  },
  {
    slug: 'hire-java-developer-ghaziabad',
    title: 'Hire Java Developer in Ghaziabad — Dedicated Freelance & Full-Time Engineer',
    keyword: 'Hire Java Developer in Ghaziabad',
    summary: 'Hire Manish Kumar, an experienced Java Full Stack Developer & DevOps Engineer in Ghaziabad. Proven delivery on commercial e-commerce, LMS portals, and enterprise backends.'
  },
  {
    slug: 'java-course-ghaziabad',
    title: 'Java Course in Ghaziabad — Full Stack, Spring Boot & Live Project Training',
    keyword: 'Java Course in Ghaziabad',
    summary: 'Enroll in the comprehensive Java Full Stack Course in Ghaziabad led by Manish Kumar. Learn Core Java, OOPs, Collections, Spring Boot, React JS, and deploy live on AWS cloud.'
  },
  {
    slug: 'java-training-ghaziabad',
    title: 'Best Java Training in Ghaziabad — Industry-Standard Backend Mentorship',
    keyword: 'Java Training in Ghaziabad',
    summary: 'Professional Java training in Ghaziabad with hands-on coding, live enterprise projects (Afsha Enterprises, ProgrammingWala), and placement interview preparation.'
  },
  {
    slug: 'spring-boot-developer-ghaziabad',
    title: 'Spring Boot Developer in Ghaziabad — Microservices & REST API Specialist',
    keyword: 'Spring Boot Developer in Ghaziabad',
    summary: 'Enterprise Spring Boot development services in Ghaziabad: high-throughput REST APIs, Spring Data JPA, Spring Security JWT authentication, and Docker containerization.'
  },
  {
    slug: 'java-backend-developer-ghaziabad',
    title: 'Java Backend Developer in Ghaziabad — High-Performance API Engineering',
    keyword: 'Java Backend Developer in Ghaziabad',
    summary: 'Specialized Java backend engineering in Ghaziabad: relational databases (MySQL), NoSQL (MongoDB), multithreaded concurrency, and automated Jenkins CI/CD on AWS.'
  },
  {
    slug: 'best-java-training-institute-ghaziabad',
    title: 'Best Java Training Institute in Ghaziabad — 100% Practical Mentorship',
    keyword: 'Best Java Training Institute in Ghaziabad',
    summary: 'Discover premier Java training in Ghaziabad. Direct mentorship from Manish Kumar (Appletree Infotech intern & B.Tech CS) with production portfolio building.'
  },
  {
    slug: 'java-full-stack-course-ghaziabad',
    title: 'Java Full Stack Course in Ghaziabad — Spring Boot, React & Cloud',
    keyword: 'Java Full Stack Course in Ghaziabad',
    summary: 'Master full stack development in Ghaziabad: Java Spring Boot backends combined with responsive React JS frontends, Razorpay payment APIs, and AWS cloud hosting.'
  },
  {
    slug: 'java-dsa-interview-course-ghaziabad',
    title: 'Java DSA & Coding Interview Preparation in Ghaziabad — LeetCode Prep',
    keyword: 'Java DSA Interview Course in Ghaziabad',
    summary: 'Crack technical coding rounds in Ghaziabad: Data Structures, Algorithms, Binary Trees, Dynamic Programming, and System Design patterns in Java.'
  },
  {
    slug: 'core-java-classes-ghaziabad',
    title: 'Core Java Programming Classes in Ghaziabad — Beginner to Advanced',
    keyword: 'Core Java Classes in Ghaziabad',
    summary: 'Learn Java from the fundamentals in Ghaziabad: variables, control flow, Object-Oriented Programming (OOPS), exception handling, and collections framework.'
  },
  {
    slug: 'java-industrial-internship-ghaziabad',
    title: 'Java Industrial Internship & Live Project Training in Ghaziabad',
    keyword: 'Java Industrial Internship in Ghaziabad',
    summary: 'Get real industry experience in Ghaziabad working on live enterprise code: e-commerce shopping carts, payment webhooks, and automated Docker/Jenkins pipelines.'
  },
  {
    slug: 'java-devops-training-ghaziabad',
    title: 'Java with Docker & Jenkins DevOps Training in Ghaziabad',
    keyword: 'Java DevOps Training in Ghaziabad',
    summary: 'Bridge the gap between Java development and cloud operations in Ghaziabad: containerizing Spring Boot with Docker and automating builds via Jenkins.'
  },
  {
    slug: 'java-aws-cloud-course-ghaziabad',
    title: 'Java with AWS Cloud Architecture Course in Ghaziabad',
    keyword: 'Java AWS Cloud Course in Ghaziabad',
    summary: 'Learn how to deploy and scale Java Spring Boot applications on AWS EC2, S3, and ECS with Nginx reverse proxy configuration in Ghaziabad.'
  },
  {
    slug: 'learn-java-from-scratch-ghaziabad',
    title: 'Learn Java Programming from Scratch in Ghaziabad — Mentorship by Manish',
    keyword: 'Learn Java from Scratch in Ghaziabad',
    summary: 'A structured, beginner-friendly roadmap to learning Java in Ghaziabad. Master syntax, OOPs logic, and build your first full-stack application.'
  },
  {
    slug: 'java-live-project-training-ghaziabad',
    title: 'Java Live Project-Based Training in Ghaziabad — Build Commercial Apps',
    keyword: 'Java Live Project Training in Ghaziabad',
    summary: 'Stop building toy apps. Learn Java in Ghaziabad by developing real-world platforms like Afsha Enterprises (e-commerce) and ProgrammingWala (LMS).'
  },
  {
    slug: 'java-spring-security-jwt-course-ghaziabad',
    title: 'Java Spring Security & JWT Certification Course in Ghaziabad',
    keyword: 'Java Spring Security JWT in Ghaziabad',
    summary: 'Implement enterprise security in Ghaziabad: stateless JWT tokens, BCrypt password hashing, role-based access control, and OAuth2 integration.'
  },
  {
    slug: 'advanced-java-course-ghaziabad',
    title: 'Advanced Java & Enterprise J2EE Course in Ghaziabad',
    keyword: 'Advanced Java Course in Ghaziabad',
    summary: 'Deep-dive advanced Java course in Ghaziabad covering JDBC, Servlets, Hibernate ORM, microservices architecture, and high-performance server design.'
  },
  {
    slug: 'java-multithreading-course-ghaziabad',
    title: 'Java Multithreading & High Concurrency Course in Ghaziabad',
    keyword: 'Java Multithreading Course in Ghaziabad',
    summary: 'Master asynchronous Java in Ghaziabad: thread synchronization, ExecutorService, CompletableFuture, locks, and Java 21 virtual threads.'
  },
  {
    slug: 'java-placement-preparation-ghaziabad',
    title: 'Java Placement Preparation & Mock Interviews in Ghaziabad',
    keyword: 'Java Placement Preparation in Ghaziabad',
    summary: 'Prepare for top tech jobs in Ghaziabad and NCR: resume building, GitHub portfolio optimization, mock coding tests, and behavioral interviews.'
  },
  {
    slug: 'freelance-java-consultant-ghaziabad',
    title: 'Freelance Java Consultant in Ghaziabad — System Audits & Architecture',
    keyword: 'Freelance Java Consultant in Ghaziabad',
    summary: 'On-demand Java consulting in Ghaziabad: application performance tuning, Spring Boot refactoring, database optimization, and cloud migration.'
  },
  {
    slug: 'java-devops-engineer-ghaziabad',
    title: 'Java DevOps Engineer in Ghaziabad — CI/CD Pipeline Automation',
    keyword: 'Java DevOps Engineer in Ghaziabad',
    summary: 'End-to-end DevOps engineering for Java applications in Ghaziabad: Docker multi-stage containers, Jenkins automated testing, and AWS hosting.'
  },
  {
    slug: 'java-react-developer-ghaziabad',
    title: 'Java React Full Stack Developer in Ghaziabad — Spring Boot & React',
    keyword: 'Java React Developer in Ghaziabad',
    summary: 'Unified full stack engineering in Ghaziabad: Java Spring Boot REST APIs connected with modern, responsive React JS single-page applications.'
  }
];

function generateCitywideHtml(page) {
  const canonicalUrl = `${DOMAIN}/${page.slug}.html`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" href="manish1.png">
  <link rel="shortcut icon" type="image/png" href="manish1.png">
  <link rel="apple-touch-icon" href="manish1.png">

  <title>${page.title}</title>
  <meta name="title" content="${page.title}">
  <meta name="description" content="${page.summary}">
  <meta name="keywords" content="${page.keyword}, Java Ghaziabad, Manish Kumar, Java Full Stack Ghaziabad, Spring Boot Ghaziabad, Appletree Infotech">
  <meta name="author" content="Manish Kumar">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="language" content="English">
  <meta name="geo.region" content="IN-UP">
  <meta name="geo.placename" content="Ghaziabad">

  <link rel="canonical" href="${canonicalUrl}">

  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.summary}">
  <meta property="og:image" content="${DOMAIN}/images/manish-profile.jpg">
  <meta property="og:locale" content="en_IN">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.summary}">
  <meta name="twitter:image" content="${DOMAIN}/images/manish-profile.jpg">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "${DOMAIN}/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ghaziabad Tech Hub",
            "item": "${DOMAIN}/seo-directory.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${page.keyword}",
            "item": "${canonicalUrl}"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "${page.title}",
        "url": "${canonicalUrl}",
        "description": "${page.summary}",
        "telephone": "+91-8851961088",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ghaziabad",
          "addressLocality": "Ghaziabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201001",
          "addressCountry": "IN"
        },
        "provider": {
          "@type": "Person",
          "name": "Manish Kumar",
          "telephone": "+91-8851961088",
          "email": "brayw433@gmail.com",
          "image": "${DOMAIN}/images/manish-profile.jpg"
        }
      }
    ]
  }
  </script>

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
          <span class="brand-subtitle">Ghaziabad Java Specialist</span>
        </div>
      </a>
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="index.html#projects" class="nav-link">Projects</a>
        <a href="index.html#experience" class="nav-link">Experience</a>
        <a href="seo-directory.html" class="nav-link active">Directory</a>
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
      <div class="breadcrumbs">
        <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
        <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
        <a href="seo-directory.html">Ghaziabad Java Directory</a>
        <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
        <span class="current">${page.keyword}</span>
      </div>

      <span class="badge badge-green" style="margin-bottom: 1rem;">
        <i class="fa-solid fa-location-dot"></i> Central Ghaziabad Tech &bull; Uttar Pradesh
      </span>
      <h1 class="hero-title" style="font-size: 2.6rem;">${page.title}</h1>
      <p class="hero-description" style="max-width: 850px; font-size: 1.15rem;">${page.summary}</p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <a href="tel:+918851961088" class="btn btn-primary"><i class="fa-solid fa-phone"></i> Call +91 8851961088</a>
        <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20am%20inquiring%20about%20${encodeURIComponent(page.keyword)}." target="_blank" rel="noopener" class="btn btn-secondary" style="color: var(--brand-green); border-color: #a7f3d0;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <a href="index.html#projects" class="btn btn-secondary"><i class="fa-solid fa-layer-group"></i> View Live Projects</a>
      </div>
    </div>
  </section>

  <main class="container">
    <div class="seo-content-grid">
      <article class="seo-article">
        <section class="seo-highlight-card">
          <h2>Premier Java &amp; Cloud Expertise Across Ghaziabad</h2>
          <p>
            Manish Kumar is a <strong>B.Tech Computer Science graduate</strong> and experienced <strong>Java Full Stack Developer &amp; DevOps Engineer</strong> based in Ghaziabad. Having interned at <strong>Appletree Infotech</strong>, he has delivered end-to-end commercial solutions including <strong>Afsha Enterprises</strong> (<a href="https://www.afshaenterprises.com/" target="_blank" rel="noopener">www.afshaenterprises.com</a>), <strong>ProgrammingWala</strong> (<a href="https://www.programmingwala.com/" target="_blank" rel="noopener">www.programmingwala.com</a>), and <strong>Rancom Technologies</strong> (<a href="https://www.rancomtechnologies.com/" target="_blank" rel="noopener">www.rancomtechnologies.com</a>).
          </p>
          <p style="margin-top: 0.9rem;">
            Whether you require enterprise backend architecture, Spring Boot REST microservices, React client applications, payment gateway integration (Razorpay), or containerized Docker/Jenkins CI/CD deployment on AWS, Manish delivers robust, production-tested software.
          </p>
        </section>

        <section>
          <h2>Key Deliverables &amp; Technical Capabilities</h2>
          <div class="about-features-grid" style="margin-top: 1.2rem;">
            <div class="about-feature">
              <i class="fa-brands fa-java"></i>
              <div>
                <h4>Java 17/21 &amp; Spring Boot</h4>
                <p>High-throughput RESTful controllers, Spring Data JPA, Hibernate, and Spring Security JWT.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-react"></i>
              <div>
                <h4>React JS Frontend Architecture</h4>
                <p>Component-driven responsive UIs, state management, and modern Tailwind styling.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-docker"></i>
              <div>
                <h4>Docker &amp; Jenkins CI/CD</h4>
                <p>Automated deployment pipelines with automated Maven testing and container orchestration.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-aws"></i>
              <div>
                <h4>AWS Cloud &amp; Hardening</h4>
                <p>Deployment on AWS EC2/ECS with Nginx reverse proxies, SSL certificates, and security scanning.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="seo-highlight-card" style="border-left: 4px solid var(--brand-primary);">
          <h2>Explore Neighborhood Tech Hubs in Ghaziabad</h2>
          <p style="margin-bottom: 1rem;">Browse specialized landing pages for every major sector and locality across Ghaziabad:</p>
          <div class="local-chips">
            <a href="java-developer-indirapuram-ghaziabad.html" class="local-chip">Indirapuram Java</a>
            <a href="java-developer-vaishali-ghaziabad.html" class="local-chip">Vaishali Java</a>
            <a href="java-developer-vasundhara-ghaziabad.html" class="local-chip">Vasundhara Java</a>
            <a href="java-developer-raj-nagar-ghaziabad.html" class="local-chip">Raj Nagar Java</a>
            <a href="java-developer-raj-nagar-extension-ghaziabad.html" class="local-chip">Raj Nagar Ext.</a>
            <a href="java-developer-crossings-republik-ghaziabad.html" class="local-chip">Crossings Republik</a>
            <a href="java-developer-kaushambi-ghaziabad.html" class="local-chip">Kaushambi</a>
            <a href="java-developer-sahibabad-ghaziabad.html" class="local-chip">Sahibabad</a>
            <a href="seo-directory.html" class="local-chip" style="background: var(--bg-accent-subtle); color: var(--brand-primary); font-weight: 700;">View All 600+ Pages &rarr;</a>
          </div>
        </section>
      </article>

      <aside class="seo-sidebar">
        <div class="sidebar-widget" style="border-top: 4px solid var(--brand-primary); text-align: center;">
          <img src="images/manish-profile.jpg" alt="Manish Kumar" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 0.75rem; object-fit: cover; border: 2px solid var(--brand-primary);">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Manish Kumar</h3>
          <p style="font-size: 0.85rem; color: var(--brand-primary); font-weight: 700;">Java Full Stack Engineer</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.2rem;">Ghaziabad, Uttar Pradesh</p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="tel:+918851961088" class="btn btn-primary btn-sm" style="width: 100%;"><i class="fa-solid fa-phone"></i> +91 8851961088</a>
            <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20am%20inquiring%20about%20${encodeURIComponent(page.keyword)}." target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width: 100%; color: var(--brand-green); border-color: #a7f3d0;">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="mailto:brayw433@gmail.com" class="btn btn-secondary btn-sm" style="width: 100%;"><i class="fa-solid fa-envelope"></i> brayw433@gmail.com</a>
          </div>
        </div>
      </aside>
    </div>
  </main>

  <footer class="footer">
    <div class="container" style="text-align: center;">
      <p style="color: var(--text-muted);">&copy; 2026 Manish Kumar &bull; ${page.keyword} &bull; <a href="sitemap.xml">XML Sitemap</a></p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

let count = 0;
for (const p of citywidePages) {
  const html = generateCitywideHtml(p);
  fs.writeFileSync(path.join(__dirname, `${p.slug}.html`), html, 'utf8');
  count++;
}
console.log(`Generated ${count} central citywide Ghaziabad pages!`);
