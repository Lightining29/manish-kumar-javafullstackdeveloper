/**
 * build-seo-pages.js
 * Generates 200 high-ranking, semantic SEO pages targeting "Java in Ghaziabad",
 * Spring Boot, Full Stack, and DevOps, with exact self-canonical tags,
 * JSON-LD structured data, FAQ accordions, and zero duplicate/indexing errors.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://manish-javafullstackdeveloper.netlify.app';

// Localities in Ghaziabad and NCR hubs
const localities = [
  { name: 'Indirapuram', desc: 'Indirapuram, Ghaziabad (Ahinsa Khand, Vaibhav Khand, Niti Khand, Nyay Khand)' },
  { name: 'Vaishali', desc: 'Vaishali, Ghaziabad (Sectors 1 to 9, Metro corridor)' },
  { name: 'Vasundhara', desc: 'Vasundhara, Ghaziabad (Sectors 1 to 19, Link Road hub)' },
  { name: 'Raj Nagar', desc: 'Raj Nagar, Ghaziabad (Central administrative and commercial district)' },
  { name: 'Raj Nagar Extension', desc: 'Raj Nagar Extension, Ghaziabad (Rapidly expanding residential and tech corridor)' },
  { name: 'Crossings Republik', desc: 'Crossings Republik, Ghaziabad (NH-24 / Delhi-Meerut Expressway hub)' },
  { name: 'Kaushambi', desc: 'Kaushambi, Ghaziabad (Delhi-NCR border corporate and metro zone)' },
  { name: 'Mohan Nagar', desc: 'Mohan Nagar, Ghaziabad (Major industrial, educational and transit junction)' },
  { name: 'Sahibabad', desc: 'Sahibabad Industrial Area, Ghaziabad (Site 4, manufacturing & IT setups)' },
  { name: 'Kavi Nagar', desc: 'Kavi Nagar, Ghaziabad (Commercial and industrial area)' },
  { name: 'Shastri Nagar', desc: 'Shastri Nagar, Ghaziabad (Central tech & services pocket)' },
  { name: 'Govindpuram', desc: 'Govindpuram, Ghaziabad (Educational institutions and startups hub)' },
  { name: 'Pratap Vihar', desc: 'Pratap Vihar, Ghaziabad (Educational institutes & commercial zones)' },
  { name: 'Sanjay Nagar', desc: 'Sanjay Nagar (Sector 23), Ghaziabad' },
  { name: 'Wave City', desc: 'Wave City, NH-24 Ghaziabad (Modern smart city tech corridor)' },
  { name: 'Loni', desc: 'Loni, Ghaziabad (Industrial and logistics zone)' },
  { name: 'Bulandshahr Road', desc: 'Bulandshahr Road Industrial Area, Ghaziabad' },
  { name: 'South Side GT Road', desc: 'South Side GT Road Industrial Area, Ghaziabad' },
  { name: 'Meerut Road', desc: 'Meerut Road Industrial Area & Engineering Hub, Ghaziabad' },
  { name: 'Anand Vihar Border', desc: 'Anand Vihar Border & Maharajpur, Ghaziabad' },
  { name: 'Surya Nagar', desc: 'Surya Nagar & Brij Vihar, Ghaziabad' },
  { name: 'Chander Nagar', desc: 'Chander Nagar & Ramprastha, Ghaziabad' },
  { name: 'Vijay Nagar', desc: 'Vijay Nagar, Ghaziabad (Near NH-9 Highway)' },
  { name: 'Siddharth Vihar', desc: 'Siddharth Vihar, Ghaziabad (Emerging urban & IT hub)' }
];

// Technical roles & specializations focused heavily on "Java in Ghaziabad"
const roles = [
  {
    role: 'Java Developer',
    slugSuffix: 'java-developer',
    keyword: 'Java Developer in',
    focus: 'Core Java, Collections, Multithreading, OOPs architecture and robust backend API development'
  },
  {
    role: 'Java Full Stack Developer',
    slugSuffix: 'java-full-stack-developer',
    keyword: 'Java Full Stack Developer in',
    focus: 'End-to-end full stack delivery combining Java Spring Boot backends with modern React JS client applications'
  },
  {
    role: 'Spring Boot Developer',
    slugSuffix: 'spring-boot-developer',
    keyword: 'Spring Boot Developer in',
    focus: 'High-throughput Spring Boot microservices, Spring Data JPA, Spring Security JWT, and RESTful API endpoints'
  },
  {
    role: 'Java Backend Engineer',
    slugSuffix: 'java-backend-engineer',
    keyword: 'Java Backend Engineer in',
    focus: 'Enterprise data pipelines, database query optimization in MySQL/MongoDB, and secure transaction handling'
  },
  {
    role: 'Hire Java Developer',
    slugSuffix: 'hire-java-developer',
    keyword: 'Hire Java Developer in',
    focus: 'Dedicated freelance or full-time Java developer contract services for startups, agencies, and businesses'
  },
  {
    role: 'Freelance Java Consultant',
    slugSuffix: 'freelance-java-consultant',
    keyword: 'Freelance Java Consultant in',
    focus: 'On-demand architectural advisory, code audits, bug troubleshooting, and modernization of legacy Java systems'
  },
  {
    role: 'Java DevOps Engineer',
    slugSuffix: 'java-devops-engineer',
    keyword: 'Java DevOps Engineer in',
    focus: 'Containerizing Java applications with Docker and automating deployment via Jenkins CI/CD on AWS cloud'
  },
  {
    role: 'Java React Full Stack Specialist',
    slugSuffix: 'java-react-developer',
    keyword: 'Java React Full Stack Developer in',
    focus: 'Seamless integration of Java Spring Boot REST controllers with responsive, stateful React JS components'
  }
];

// Specific tech and domain topics for the remaining pages
const technicalTopics = [
  {
    slug: 'spring-boot-microservices-ghaziabad',
    title: 'Spring Boot Microservices Architecture in Ghaziabad — Manish Kumar',
    keyword: 'Spring Boot Microservices Ghaziabad',
    category: 'Architecture',
    summary: 'Design, decouple, and scale enterprise distributed systems with Spring Boot, Docker, and API Gateways in Ghaziabad.'
  },
  {
    slug: 'java-rest-api-development-ghaziabad',
    title: 'Java REST API Development Services in Ghaziabad — Manish Kumar',
    keyword: 'Java REST API Development Ghaziabad',
    category: 'Backend',
    summary: 'Secure, high-speed RESTful JSON APIs developed with Java 17/21, Spring Boot, and Swagger documentation in Ghaziabad.'
  },
  {
    slug: 'java-spring-security-jwt-ghaziabad',
    title: 'Java Spring Security & JWT Authentication in Ghaziabad — Manish Kumar',
    keyword: 'Spring Security JWT Ghaziabad',
    category: 'Security',
    summary: 'Implementing role-based access control, token refresh workflows, and encrypted communications for Java applications.'
  },
  {
    slug: 'java-docker-containerization-ghaziabad',
    title: 'Java Docker Containerization & Microservices in Ghaziabad — Manish Kumar',
    keyword: 'Java Docker Ghaziabad',
    category: 'DevOps',
    summary: 'Multi-stage Docker container builds for lightweight, secure, and reproducible Java Spring Boot production containers.'
  },
  {
    slug: 'jenkins-ci-cd-pipeline-java-ghaziabad',
    title: 'Jenkins CI/CD Automation for Java Applications in Ghaziabad — Manish Kumar',
    keyword: 'Jenkins Java CI CD Ghaziabad',
    category: 'DevOps',
    summary: 'Automated continuous integration and deployment pipelines for Java projects deploying to AWS EC2 instances.'
  },
  {
    slug: 'aws-cloud-deployment-java-ghaziabad',
    title: 'AWS Cloud Architecture for Java Spring Boot in Ghaziabad — Manish Kumar',
    keyword: 'AWS Java Deployment Ghaziabad',
    category: 'Cloud',
    summary: 'Deploying scalable Java backends on AWS EC2, S3, ECS, with Nginx reverse proxies and SSL hardening in Ghaziabad.'
  },
  {
    slug: 'java-mysql-database-optimization-ghaziabad',
    title: 'Java MySQL & Hibernate Performance Tuning in Ghaziabad — Manish Kumar',
    keyword: 'Java MySQL Hibernate Ghaziabad',
    category: 'Databases',
    summary: 'Solving N+1 queries, optimizing indexing, and tuning connection pools with HikariCP and Spring Data JPA.'
  },
  {
    slug: 'razorpay-java-payment-gateway-ghaziabad',
    title: 'Razorpay Payment Gateway Integration in Java Spring Boot — Ghaziabad Case Study',
    keyword: 'Razorpay Java Integration Ghaziabad',
    category: 'E-Commerce',
    summary: 'Production payment integration as engineered for Afsha Enterprises: webhooks, signature verification, and automated invoicing.'
  },
  {
    slug: 'java-full-stack-internship-appletree-infotech',
    title: 'Java Full Stack Internship at Appletree Infotech Ghaziabad & Noida — Case Study',
    keyword: 'Appletree Infotech Java Intern Ghaziabad',
    category: 'Experience',
    summary: 'Comprehensive review of live production work delivered at Appletree Infotech: Afsha Enterprises, ProgrammingWala, Rancom.'
  },
  {
    slug: 'java-freelancer-near-me-ghaziabad',
    title: 'Best Java Freelance Developer Near Me in Ghaziabad — Manish Kumar',
    keyword: 'Java Freelancer Near Me Ghaziabad',
    category: 'Hiring',
    summary: 'Looking for a reliable, verified Java developer near you in Ghaziabad? Get in touch with Manish Kumar (+91 8851961088).'
  },
  {
    slug: 'btech-computer-science-java-developer-ghaziabad',
    title: 'B.Tech Computer Science Java Full Stack Engineer in Ghaziabad — Manish Kumar',
    keyword: 'B.Tech CS Java Developer Ghaziabad',
    category: 'Education',
    summary: 'Strong academic computer science foundations combined with live commercial software delivery in Ghaziabad.'
  },
  {
    slug: 'react-js-java-spring-boot-ghaziabad',
    title: 'React JS & Java Spring Boot Full Stack Development in Ghaziabad — Manish Kumar',
    keyword: 'React Spring Boot Ghaziabad',
    category: 'Full Stack',
    summary: 'Unified full-stack applications combining modern reactive frontends with enterprise Spring Boot REST microservices.'
  }
];

// Generate the 200 pages list
const pages = [];

// 1. Existing four key pages to overhaul (no meta-refresh, clean self-canonical)
pages.push({
  slug: 'java-full-stack-developer',
  title: 'Java Full Stack Developer in Ghaziabad — Manish Kumar | Spring Boot & React',
  keyword: 'Java Full Stack Developer Ghaziabad',
  category: 'Core Service',
  locality: 'Ghaziabad',
  summary: 'Manish Kumar is a premier Java Full Stack Developer based in Ghaziabad, specializing in Java 17/21, Spring Boot, React JS, MySQL, and Docker CI/CD.'
});

pages.push({
  slug: 'devops-engineer',
  title: 'DevOps Engineer in Ghaziabad & Delhi NCR — Manish Kumar | Docker, Jenkins, AWS',
  keyword: 'DevOps Engineer Ghaziabad',
  category: 'Core Service',
  locality: 'Ghaziabad',
  summary: 'Automate deployment pipelines and cloud infrastructure with Docker, Jenkins CI/CD, AWS EC2, and Linux server hardening in Ghaziabad.'
});

pages.push({
  slug: 'aws-solution-architect',
  title: 'AWS Solution Architect in Ghaziabad — Manish Kumar | Cloud Deployment',
  keyword: 'AWS Solution Architect Ghaziabad',
  category: 'Core Service',
  locality: 'Ghaziabad',
  summary: 'Architecting resilient, auto-scaling, and secure cloud environments on Amazon Web Services for Java enterprise web applications.'
});

pages.push({
  slug: 'linux-admin',
  title: 'Linux Administrator in Ghaziabad — Manish Kumar | Server Management & Security',
  keyword: 'Linux Administrator Ghaziabad',
  category: 'Core Service',
  locality: 'Ghaziabad',
  summary: 'Ubuntu and Debian server configuration, Bash shell scripting, SSH hardening, firewall management, and network scanning in Ghaziabad.'
});

// 2. Generate locality * role matrix (24 localities * 8 roles = 192 pages)
for (const loc of localities) {
  for (const r of roles) {
    const locSlug = loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const slug = `${r.slugSuffix}-${locSlug}-ghaziabad`;
    const title = `${r.role} in ${loc.name}, Ghaziabad — Manish Kumar | Java Specialist`;
    const keyword = `${r.keyword} ${loc.name} Ghaziabad`;
    pages.push({
      slug,
      title,
      keyword,
      category: 'Ghaziabad Locality Hub',
      locality: loc.name,
      localityDesc: loc.desc,
      role: r.role,
      summary: `Looking for an experienced ${r.role} in ${loc.name}, Ghaziabad? Manish Kumar delivers enterprise Spring Boot backends, React frontends, and automated cloud deployments.`
    });
  }
}

// 3. Add technical topics
for (const t of technicalTopics) {
  pages.push({
    slug: t.slug,
    title: t.title,
    keyword: t.keyword,
    category: t.category,
    locality: 'Ghaziabad',
    summary: t.summary
  });
}

// Cap or ensure exactly 200+ pages
console.log(`Total SEO landing pages generated in queue: ${pages.length}`);

// Template generator function
function generateHtml(page, index, allPages) {
  const canonicalUrl = `${DOMAIN}/${page.slug}.html`;
  
  // Pick 4 related sibling pages for internal cross-linking
  const related = allPages
    .filter(p => p.slug !== page.slug)
    .slice((index * 3) % (allPages.length - 5), ((index * 3) % (allPages.length - 5)) + 4);

  const faqList = [
    {
      q: `Why should businesses in ${page.locality || 'Ghaziabad'} hire Manish Kumar for ${page.keyword}?`,
      a: `Manish Kumar brings verified commercial software delivery experience from Appletree Infotech, with live projects including Afsha Enterprises (e-commerce), ProgrammingWala (LMS), and Rancom Technologies (corporate IT). He combines Java 17/21 Spring Boot backends with React JS and automated Docker/Jenkins cloud CI/CD.`
    },
    {
      q: `Is Manish Kumar available for in-person or remote consultations in ${page.locality || 'Ghaziabad'}?`,
      a: `Yes, Manish is permanently located in Ghaziabad, Uttar Pradesh, and offers on-site visits across ${page.locality || 'Ghaziabad'} (including Indirapuram, Vaishali, Vasundhara, and Raj Nagar) as well as full remote availability for clients worldwide.`
    },
    {
      q: `How can I contact Manish Kumar for a project in ${page.locality || 'Ghaziabad'}?`,
      a: `You can reach Manish immediately via phone at +91 8851961088, via WhatsApp, or by emailing brayw433@gmail.com. Quotes and technical feasibility discussions are provided within 24 hours.`
    }
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Favicon Icons -->
  <link rel="icon" type="image/png" href="manish1.png">
  <link rel="shortcut icon" type="image/png" href="manish1.png">
  <link rel="apple-touch-icon" href="manish1.png">

  <!-- Search Engine Verification -->
  <meta name="google-site-verification" content="lgji_Ykp2ayvq9uxiQMLZUhdX9gpNxMku6K_6NQhhkA">
  <meta name="msvalidate.01" content="889950D3507B5F364272A693096B86E5">

  <!-- Unique Primary Meta Tags -->
  <title>${page.title}</title>
  <meta name="title" content="${page.title}">
  <meta name="description" content="${page.summary}">
  <meta name="keywords" content="${page.keyword}, Java in Ghaziabad, Java Developer Ghaziabad, Manish Kumar, Spring Boot Ghaziabad, Full Stack Developer Ghaziabad, Appletree Infotech">
  <meta name="author" content="Manish Kumar">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="language" content="English">
  <meta name="geo.region" content="IN-UP">
  <meta name="geo.placename" content="Ghaziabad">
  <meta name="geo.position" content="28.6692;77.4538">
  <meta name="ICBM" content="28.6692, 77.4538">

  <!-- CRITICAL: Exact Self-Referential Canonical Tag to eliminate GSC duplicate/canonical errors -->
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Manish Kumar — Java Portfolio">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.summary}">
  <meta property="og:image" content="${DOMAIN}/images/manish-profile.jpg">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.summary}">
  <meta name="twitter:image" content="${DOMAIN}/images/manish-profile.jpg">

  <!-- JSON-LD Structured Data: Breadcrumbs, ProfessionalService, FAQPage & Person -->
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
        "@id": "${canonicalUrl}#service",
        "name": "${page.title}",
        "url": "${canonicalUrl}",
        "description": "${page.summary}",
        "telephone": "+91-8851961088",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "${page.locality || 'Ghaziabad'}",
          "addressLocality": "Ghaziabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201001",
          "addressCountry": "IN"
        },
        "provider": {
          "@type": "Person",
          "name": "Manish Kumar",
          "jobTitle": "Java Full Stack Developer",
          "telephone": "+91-8851961088",
          "email": "brayw433@gmail.com",
          "image": "${DOMAIN}/images/manish-profile.jpg"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ${faqList.map(item => `{
            "@type": "Question",
            "name": "${item.q.replace(/"/g, '\\"')}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${item.a.replace(/"/g, '\\"')}"
            }
          }`).join(',\n          ')}
        ]
      }
    ]
  }
  </script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top Navigation -->
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="index.html" class="brand-logo">
        <img src="images/manish-profile.jpg" alt="Manish Kumar" class="brand-avatar">
        <div class="brand-title">
          <span class="brand-name">Manish Kumar</span>
          <span class="brand-subtitle">Java in Ghaziabad</span>
        </div>
      </a>
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="index.html#projects" class="nav-link">Projects</a>
        <a href="index.html#experience" class="nav-link">Experience</a>
        <a href="index.html#skills" class="nav-link">Skills</a>
        <a href="seo-directory.html" class="nav-link active">SEO Directory</a>
        <a href="java-programs-library.html" class="nav-link">Java Library</a>
        <a href="index.html#contact" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="tel:+918851961088" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-phone"></i> +91 8851961088
        </a>
        <button class="menu-toggle" aria-label="Open Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="drawer-backdrop"></div>
  <aside class="mobile-drawer">
    <div class="drawer-header">
      <div class="brand-title">
        <span class="brand-name">Manish Kumar</span>
        <span class="brand-subtitle">Ghaziabad, India</span>
      </div>
      <button class="drawer-close" aria-label="Close Drawer"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <nav class="drawer-nav">
      <a href="index.html" class="drawer-link"><i class="fa-solid fa-house"></i> Home</a>
      <a href="index.html#projects" class="drawer-link"><i class="fa-solid fa-laptop-code"></i> Projects</a>
      <a href="seo-directory.html" class="drawer-link"><i class="fa-solid fa-sitemap"></i> 200 SEO Directory</a>
      <a href="java-programs-library.html" class="drawer-link"><i class="fa-solid fa-code"></i> Java Library</a>
      <a href="index.html#contact" class="drawer-link"><i class="fa-solid fa-envelope"></i> Contact Me</a>
    </nav>
  </aside>

  <!-- Page Header Hero -->
  <section class="seo-header-hero">
    <div class="container">
      <div class="breadcrumbs">
        <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
        <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
        <a href="seo-directory.html">Ghaziabad SEO Directory</a>
        <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
        <span class="current">${page.keyword}</span>
      </div>

      <span class="badge badge-green" style="margin-bottom: 1rem;">
        <i class="fa-solid fa-location-dot"></i> Ghaziabad Tech Hub &bull; ${page.locality || 'Uttar Pradesh'}
      </span>
      <h1 class="hero-title" style="font-size: 2.6rem;">
        ${page.title}
      </h1>
      <p class="hero-description" style="max-width: 850px; font-size: 1.15rem;">
        ${page.summary}
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <a href="tel:+918851961088" class="btn btn-primary">
          <i class="fa-solid fa-phone"></i> Call +91 8851961088
        </a>
        <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20am%20interested%20in%20your%20${encodeURIComponent(page.keyword)}%20services." target="_blank" rel="noopener" class="btn btn-secondary" style="color: var(--brand-green); border-color: #a7f3d0;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <a href="index.html#projects" class="btn btn-secondary">
          <i class="fa-solid fa-layer-group"></i> View Live Projects
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content Grid -->
  <main class="container">
    <div class="seo-content-grid">
      <!-- Left Column: Detailed Semantic Content -->
      <article class="seo-article">
        <section class="seo-highlight-card">
          <h2>Professional Java &amp; Full Stack Expertise in ${page.locality || 'Ghaziabad'}</h2>
          <p>
            When building resilient, high-volume digital systems, businesses in <strong>${page.locality || 'Ghaziabad'}</strong> require a developer who understands both algorithmic efficiency and cloud automation. Manish Kumar delivers full-cycle engineering: from low-latency <strong>Java Spring Boot REST microservices</strong> to stateful, intuitive <strong>React JS client interfaces</strong>.
          </p>
          <p style="margin-top: 0.9rem;">
            Holding a <strong>B.Tech in Computer Science</strong> and practical enterprise experience from his internship at <strong>Appletree Infotech</strong>, Manish brings deep knowledge in database indexing (MySQL/MongoDB), multithreaded concurrency, Docker container packaging, and automated Jenkins CI/CD deployment pipelines on AWS.
          </p>
        </section>

        <!-- Technical Capabilities -->
        <section>
          <h2>Key Technical Capabilities Delivered</h2>
          <div class="about-features-grid" style="margin-top: 1.2rem;">
            <div class="about-feature">
              <i class="fa-brands fa-java"></i>
              <div>
                <h4>Java 17/21 &amp; Spring Boot</h4>
                <p>RESTful APIs, Spring Data JPA, Hibernate ORM, and Spring Security with JWT token workflows.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-react"></i>
              <div>
                <h4>React JS Frontend Architecture</h4>
                <p>Component-driven UI, responsive mobile design, Redux/Context state management, and Tailwind CSS.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-docker"></i>
              <div>
                <h4>Docker &amp; Jenkins CI/CD</h4>
                <p>Continuous integration, unit test automation, and multi-stage Docker builds for rapid cloud shipping.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-aws"></i>
              <div>
                <h4>AWS Cloud &amp; Security Auditing</h4>
                <p>AWS EC2, S3, ECS, Nginx reverse proxy configuration, and Metasploit penetration scanning.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Live Commercial Project Highlights -->
        <section class="seo-highlight-card" style="border-left: 4px solid var(--brand-primary);">
          <h2>Verified Commercial Case Studies</h2>
          <p style="margin-bottom: 1rem;">
            Explore verified live commercial projects engineered by Manish Kumar during his internship at Appletree Infotech and freelance engagements:
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong><a href="https://www.afshaenterprises.com/" target="_blank" rel="noopener">Afsha Enterprises (www.afshaenterprises.com)</a>:</strong>
                Full e-commerce platform for premium body &amp; pain relief massagers with Razorpay payment integration, shopping cart workflow, and automated order notifications.
              </div>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong><a href="https://www.programmingwala.com/" target="_blank" rel="noopener">ProgrammingWala (www.programmingwala.com)</a>:</strong>
                EdTech Learning Management System (LMS) built for Appletree Infotech students with video course distribution, student dashboards, and registration portals.
              </div>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong><a href="https://www.rancomtechnologies.com/" target="_blank" rel="noopener">Rancom Technologies (www.rancomtechnologies.com)</a>:</strong>
                Corporate IT portal for Rancom Technologies Pvt Ltd (software company in Noida &amp; partner of Appletree Infotech).
              </div>
            </li>
          </ul>
        </section>

        <!-- Java Clean Code Showcase -->
        <section>
          <h2>Sample Production Architecture: Spring Boot REST Controller</h2>
          <p style="margin-bottom: 1rem;">
            Clean code practices with standardized HTTP response entities, exception handling, and service layer decoupling:
          </p>
          <div style="background: var(--bg-code); color: #e2e8f0; padding: 1.5rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.88rem; overflow-x: auto; box-shadow: var(--shadow-md);">
<pre><code>@RestController
@RequestMapping("/api/v1/ghaziabad/orders")
@CrossOrigin(origins = "https://manish-javafullstackdeveloper.netlify.app")
public class EnterpriseOrderController {

    private final OrderProcessingService orderService;

    public EnterpriseOrderController(OrderProcessingService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/checkout")
    public ResponseEntity&lt;OrderResponseDto&gt; processClientOrder(
            @Valid @RequestBody OrderRequestDto request) {
        OrderResponseDto response = orderService.initiateRazorpayTransaction(request);
        return ResponseEntity.ok(response);
    }
}</code></pre>
          </div>
        </section>

        <!-- FAQ Accordion -->
        <section>
          <h2>Frequently Asked Questions (${page.locality || 'Ghaziabad'})</h2>
          <div class="faq-container" style="margin-top: 1.5rem;">
            ${faqList.map((item, idx) => `
            <div class="faq-item ${idx === 0 ? 'active' : ''}">
              <button class="faq-question">
                <span>${item.q}</span>
                <i class="fa-solid fa-chevron-down faq-icon"></i>
              </button>
              <div class="faq-answer">
                <p>${item.a}</p>
              </div>
            </div>`).join('')}
          </div>
        </section>
      </article>

      <!-- Right Column: Sidebar with Contact, Local Hub Links & Cross-Links -->
      <aside class="seo-sidebar">
        <!-- Direct Hire Card -->
        <div class="sidebar-widget" style="border-top: 4px solid var(--brand-primary);">
          <div style="text-align: center; margin-bottom: 1.2rem;">
            <img src="images/manish-profile.jpg" alt="Manish Kumar" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 0.75rem; object-fit: cover; border: 2px solid var(--brand-primary);">
            <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Manish Kumar</h3>
            <p style="font-size: 0.85rem; color: var(--brand-primary); font-weight: 700;">Java Full Stack &amp; DevOps</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Ghaziabad, Uttar Pradesh</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="tel:+918851961088" class="btn btn-primary btn-sm" style="width: 100%;">
              <i class="fa-solid fa-phone"></i> +91 8851961088
            </a>
            <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20am%20inquiring%20about%20${encodeURIComponent(page.keyword)}." target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width: 100%; color: var(--brand-green); border-color: #a7f3d0;">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="mailto:brayw433@gmail.com" class="btn btn-secondary btn-sm" style="width: 100%;">
              <i class="fa-solid fa-envelope"></i> brayw433@gmail.com
            </a>
          </div>
        </div>

        <!-- Related Localities & Tech Topics -->
        <div class="sidebar-widget">
          <h4 class="sidebar-widget-title">Related Ghaziabad Pages</h4>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${related.map(r => `
            <a href="${r.slug}.html" class="directory-link">
              <span>${r.keyword}</span>
              <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
            </a>`).join('')}
            <a href="seo-directory.html" style="margin-top: 0.8rem; font-weight: 700; color: var(--brand-primary); font-size: 0.9rem;">
              View All 200 Ghaziabad SEO Pages &rarr;
            </a>
          </div>
        </div>

        <!-- Useful Developer Guides -->
        <div class="sidebar-widget">
          <h4 class="sidebar-widget-title">Coding &amp; DevOps Resources</h4>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <a href="java-programs-library.html" class="directory-link">50+ Java Programs Library</a>
            <a href="blog-java-fullstack.html" class="directory-link">Java Full Stack Guide</a>
            <a href="blog-devops.html" class="directory-link">DevOps &amp; Docker Pipelines</a>
            <a href="music-hub.html" class="directory-link">🎵 Music Hub</a>
            <a href="resume.pdf" target="_blank" class="directory-link">Download CV (PDF)</a>
          </div>
        </div>
      </aside>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="color: var(--text-primary);">Manish Kumar</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
            Premier Java Full Stack Developer, DevOps Engineer &amp; AWS Solution Architect in Ghaziabad, Uttar Pradesh, India.
          </p>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">
            Phone: <strong>+91 8851961088</strong><br>
            Email: <strong>brayw433@gmail.com</strong>
          </p>
        </div>

        <div class="footer-col">
          <h4>Client Projects</h4>
          <div class="footer-links">
            <a href="https://www.afshaenterprises.com/" target="_blank" rel="noopener" class="footer-link">Afsha Enterprises</a>
            <a href="https://www.programmingwala.com/" target="_blank" rel="noopener" class="footer-link">ProgrammingWala</a>
            <a href="https://www.rancomtechnologies.com/" target="_blank" rel="noopener" class="footer-link">Rancom Technologies</a>
            <a href="project-afsha-enterprises.html" class="footer-link">Afsha Case Study</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Ghaziabad Hubs</h4>
          <div class="footer-links">
            <a href="java-developer-indirapuram-ghaziabad.html" class="footer-link">Indirapuram Java</a>
            <a href="java-full-stack-developer-vaishali-ghaziabad.html" class="footer-link">Vaishali Full Stack</a>
            <a href="spring-boot-developer-vasundhara-ghaziabad.html" class="footer-link">Vasundhara Spring Boot</a>
            <a href="java-developer-raj-nagar-ghaziabad.html" class="footer-link">Raj Nagar Java</a>
            <a href="seo-directory.html" class="footer-link" style="color: var(--brand-primary); font-weight: 700;">Full 200 Directory &rarr;</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <div class="footer-links">
            <a href="index.html" class="footer-link">Home Portfolio</a>
            <a href="java-programs-library.html" class="footer-link">Java Library</a>
            <a href="blog-devops.html" class="footer-link">DevOps Blueprint</a>
            <a href="sitemap.xml" class="footer-link">XML Sitemap</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 Manish Kumar &bull; Java in Ghaziabad &bull; All Rights Reserved.</div>
        <div><a href="${canonicalUrl}">Self-Canonical: ${canonicalUrl}</a></div>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

// Generate all pages
let count = 0;
for (let i = 0; i < pages.length; i++) {
  const p = pages[i];
  const html = generateHtml(p, i, pages);
  fs.writeFileSync(path.join(__dirname, `${p.slug}.html`), html, 'utf8');
  count++;
}
console.log(`Successfully generated ${count} SEO pages!`);

// Generate seo-directory.html
function generateDirectoryHtml(allPages) {
  // Group pages by category or locality
  const localitiesMap = {};
  const techPages = [];

  for (const p of allPages) {
    if (p.locality && p.locality !== 'Ghaziabad') {
      if (!localitiesMap[p.locality]) localitiesMap[p.locality] = [];
      localitiesMap[p.locality].push(p);
    } else {
      techPages.push(p);
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="manish1.png">
  <title>Ghaziabad Java Tech Directory — 200+ Specialized Landing Pages | Manish Kumar</title>
  <meta name="description" content="Explore all 200+ specialized Java, Spring Boot, Full Stack, and DevOps landing pages for Ghaziabad localities and NCR engineering hubs by Manish Kumar.">
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
          <span class="brand-subtitle">Ghaziabad Tech Hub</span>
        </div>
      </a>
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="index.html#projects" class="nav-link">Projects</a>
        <a href="index.html#experience" class="nav-link">Experience</a>
        <a href="seo-directory.html" class="nav-link active">SEO Directory</a>
        <a href="java-programs-library.html" class="nav-link">Java Library</a>
        <a href="index.html#contact" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>

  <section class="seo-header-hero">
    <div class="container">
      <span class="badge badge-green" style="margin-bottom: 0.9rem;">
        <i class="fa-solid fa-sitemap"></i> Comprehensive Crawl Hub &bull; 200 Pages
      </span>
      <h1 class="hero-title">Ghaziabad Java &amp; Full Stack SEO Directory</h1>
      <p class="hero-description" style="max-width: 850px;">
        Browse the complete directory of 200 indexable landing pages covering every neighborhood in Ghaziabad, specialized Java Spring Boot microservices, React full stack engineering, and DevOps automated cloud architecture.
      </p>
    </div>
  </section>

  <main class="container section-padding">
    <!-- Search / Filter input -->
    <div style="margin-bottom: 2.5rem; max-width: 600px;">
      <input type="text" id="dirSearch" class="form-control" placeholder="Search locality or technology (e.g. Indirapuram, Spring Boot, DevOps)..." onkeyup="filterDirectory()">
    </div>

    <!-- Core Tech & Services -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">Core Java, Cloud &amp; Specialized Services</h2>
    <div class="directory-grid" style="margin-bottom: 3.5rem;">
      <div class="directory-category-card">
        <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--brand-primary);"><i class="fa-brands fa-java"></i> Core Enterprise Services</h3>
        <div class="directory-list">
          ${techPages.slice(0, 8).map(p => `
          <a href="${p.slug}.html" class="directory-link dir-item">
            <span>${p.keyword}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>
      <div class="directory-category-card">
        <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--brand-secondary);"><i class="fa-brands fa-docker"></i> DevOps &amp; Cloud Systems</h3>
        <div class="directory-list">
          ${techPages.slice(8).map(p => `
          <a href="${p.slug}.html" class="directory-link dir-item">
            <span>${p.keyword}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>
      <div class="directory-category-card">
        <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--brand-orange);"><i class="fa-solid fa-rocket"></i> Verified Projects &amp; Guides</h3>
        <div class="directory-list">
          <a href="project-afsha-enterprises.html" class="directory-link dir-item"><span>Afsha Enterprises Case Study</span><i class="fa-solid fa-angle-right"></i></a>
          <a href="project-programmingwala.html" class="directory-link dir-item"><span>ProgrammingWala LMS Case Study</span><i class="fa-solid fa-angle-right"></i></a>
          <a href="project-rancom-technologies.html" class="directory-link dir-item"><span>Rancom Technologies Case Study</span><i class="fa-solid fa-angle-right"></i></a>
          <a href="java-programs-library.html" class="directory-link dir-item"><span>50+ Java Programs Library</span><i class="fa-solid fa-angle-right"></i></a>
          <a href="blog-java-fullstack.html" class="directory-link dir-item"><span>Java Full Stack Guide</span><i class="fa-solid fa-angle-right"></i></a>
          <a href="blog-devops.html" class="directory-link dir-item"><span>DevOps CI/CD Pipelines Guide</span><i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>

    <!-- Ghaziabad Localities Directory -->
    <h2 style="font-size: 1.8rem; margin-bottom: 1.2rem;">Ghaziabad Localities &amp; Industrial Tech Hubs</h2>
    <div class="directory-grid">
      ${Object.keys(localitiesMap).map(loc => `
      <div class="directory-category-card">
        <h3 style="font-size: 1.15rem; margin-bottom: 0.4rem; color: var(--text-primary);"><i class="fa-solid fa-location-dot" style="color: var(--brand-primary);"></i> ${loc}</h3>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.9rem;">Ghaziabad, Uttar Pradesh</p>
        <div class="directory-list">
          ${localitiesMap[loc].map(p => `
          <a href="${p.slug}.html" class="directory-link dir-item">
            <span>${p.role || p.keyword}</span>
            <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
          </a>`).join('')}
        </div>
      </div>`).join('')}
    </div>
  </main>

  <footer class="footer">
    <div class="container" style="text-align: center;">
      <p style="color: var(--text-muted);">&copy; 2026 Manish Kumar &bull; Java Full Stack Developer Ghaziabad &bull; <a href="sitemap.xml">Sitemap.xml</a></p>
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
}

fs.writeFileSync(path.join(__dirname, 'seo-directory.html'), generateDirectoryHtml(pages), 'utf8');
console.log('Successfully generated seo-directory.html');

// Generate clean, canonical XML Sitemap and TXT sitemap
function generateSitemaps(allPages) {
  const staticPages = [
    { url: `${DOMAIN}/`, priority: '1.00', freq: 'weekly' },
    { url: `${DOMAIN}/seo-directory.html`, priority: '0.98', freq: 'weekly' },
    { url: `${DOMAIN}/java-programs-library.html`, priority: '0.95', freq: 'weekly' },
    { url: `${DOMAIN}/java-programs-string-array.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/java-programs-dsa-algorithms.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/java-programs-oops-design.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/java-programs-spring-boot.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/project-afsha-enterprises.html`, priority: '0.95', freq: 'weekly' },
    { url: `${DOMAIN}/project-programmingwala.html`, priority: '0.95', freq: 'weekly' },
    { url: `${DOMAIN}/project-rancom-technologies.html`, priority: '0.95', freq: 'weekly' },
    { url: `${DOMAIN}/blog-devops.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/blog-java-fullstack.html`, priority: '0.90', freq: 'weekly' },
    { url: `${DOMAIN}/music-hub.html`, priority: '0.85', freq: 'weekly' }
  ];

  const now = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const txtUrls = [];

  // Add static pages
  for (const sp of staticPages) {
    xml += `  <url>
    <loc>${sp.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${sp.freq}</changefreq>
    <priority>${sp.priority}</priority>
  </url>
`;
    txtUrls.push(sp.url);
  }

  // Add all 200 SEO pages
  for (const p of allPages) {
    const pageUrl = `${DOMAIN}/${p.slug}.html`;
    xml += `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
`;
    txtUrls.push(pageUrl);
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(__dirname, 'sitemap.txt'), txtUrls.join('\n'), 'utf8');
  console.log(`Generated sitemap.xml and sitemap.txt with ${txtUrls.length} clean URLs!`);
}

generateSitemaps(pages);
