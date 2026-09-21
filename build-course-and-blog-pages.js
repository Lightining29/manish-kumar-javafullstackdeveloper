/**
 * build-course-and-blog-pages.js
 * Generates hundreds of specialized Java Course, Training, and Tutorial Blog pages
 * targeting "Java Courses in Ghaziabad", technical topics, syllabus, and Ghaziabad localities.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://manishkumarjava.netlify.app';

const localities = [
  'Indirapuram', 'Vaishali', 'Vasundhara', 'Raj Nagar', 'Raj Nagar Extension',
  'Crossings Republik', 'Kaushambi', 'Mohan Nagar', 'Sahibabad', 'Kavi Nagar',
  'Shastri Nagar', 'Govindpuram', 'Pratap Vihar', 'Sanjay Nagar', 'Wave City',
  'Loni', 'Bulandshahr Road', 'South Side GT Road', 'Meerut Road', 'Anand Vihar Border',
  'Surya Nagar', 'Chander Nagar', 'Vijay Nagar', 'Siddharth Vihar'
];

const courseAngles = [
  {
    titleTemplate: 'Java Course in {LOC}, Ghaziabad — Full Stack & Spring Boot Training',
    slugPrefix: 'java-course',
    keyword: 'Java Course in {LOC} Ghaziabad',
    syllabus: 'Core Java, OOPs, Collections Framework, Exception Handling, Streams API, and foundational programming logic.'
  },
  {
    titleTemplate: 'Best Java Training Institute in {LOC}, Ghaziabad — Live Project Mentorship',
    slugPrefix: 'best-java-training-institute',
    keyword: 'Best Java Training Institute in {LOC} Ghaziabad',
    syllabus: 'Practical industrial training with enterprise backends, live code reviews, Git/GitHub, and portfolio building.'
  },
  {
    titleTemplate: 'Java Full Stack Course in {LOC}, Ghaziabad — Spring Boot & React JS',
    slugPrefix: 'java-full-stack-course',
    keyword: 'Java Full Stack Course in {LOC} Ghaziabad',
    syllabus: 'End-to-end full stack mastery: Java Spring Boot REST APIs, React JS UI, MySQL database, and Razorpay payments.'
  },
  {
    titleTemplate: 'Spring Boot & Microservices Training in {LOC}, Ghaziabad — Manish Kumar',
    slugPrefix: 'spring-boot-training',
    keyword: 'Spring Boot Training in {LOC} Ghaziabad',
    syllabus: 'Spring Boot starter configuration, Dependency Injection, JPA/Hibernate, Spring Security JWT, and Docker containers.'
  },
  {
    titleTemplate: 'Java DSA & Coding Interview Course in {LOC}, Ghaziabad — LeetCode Prep',
    slugPrefix: 'java-dsa-interview-course',
    keyword: 'Java DSA Coding Interview Course in {LOC} Ghaziabad',
    syllabus: 'Data Structures, Binary Trees, Dynamic Programming, Graphs, Big-O analysis, and top technical interview patterns.'
  },
  {
    titleTemplate: 'Core Java Programming Classes in {LOC}, Ghaziabad — Beginner to Advanced',
    slugPrefix: 'core-java-classes',
    keyword: 'Core Java Classes in {LOC} Ghaziabad',
    syllabus: 'Object-Oriented Programming (Polymorphism, Inheritance, Encapsulation, Abstraction), JVM memory model, and debugging.'
  },
  {
    titleTemplate: 'Java Backend Developer Coaching in {LOC}, Ghaziabad — API & Databases',
    slugPrefix: 'java-backend-coaching',
    keyword: 'Java Backend Coaching in {LOC} Ghaziabad',
    syllabus: 'Server architecture, REST API standards, MySQL indexing, MongoDB NoSQL, connection pooling, and Postman API testing.'
  },
  {
    titleTemplate: 'Java Industrial Internship Training in {LOC}, Ghaziabad — Appletree Infotech Standards',
    slugPrefix: 'java-industrial-internship',
    keyword: 'Java Industrial Internship in {LOC} Ghaziabad',
    syllabus: 'Commercial project workflows: Afsha Enterprises (E-Commerce), ProgrammingWala (LMS), and Rancom Technologies portal.'
  },
  {
    titleTemplate: 'Java with Docker & Jenkins DevOps Training in {LOC}, Ghaziabad',
    slugPrefix: 'java-devops-training',
    keyword: 'Java DevOps Training in {LOC} Ghaziabad',
    syllabus: 'Containerizing Spring Boot with Docker, multi-stage builds, automated Jenkins CI/CD pipelines, and AWS EC2 deployment.'
  },
  {
    titleTemplate: 'Java with AWS Cloud Deployment Course in {LOC}, Ghaziabad',
    slugPrefix: 'java-aws-cloud-course',
    keyword: 'Java AWS Cloud Course in {LOC} Ghaziabad',
    syllabus: 'Deploying Java applications on Amazon EC2, S3 bucket management, ECS containers, and Nginx reverse proxy configuration.'
  },
  {
    titleTemplate: 'Learn Java Programming from Scratch in {LOC}, Ghaziabad — Mentorship by Manish',
    slugPrefix: 'learn-java-from-scratch',
    keyword: 'Learn Java from Scratch in {LOC} Ghaziabad',
    syllabus: 'Step-by-step foundation: variables, loops, classes, methods, exception handling, and hands-on coding challenges.'
  },
  {
    titleTemplate: 'Java Live Project-Based Course in {LOC}, Ghaziabad — Commercial Portfolio',
    slugPrefix: 'java-live-project-training',
    keyword: 'Java Live Project Training in {LOC} Ghaziabad',
    syllabus: 'Building production applications from scratch: payment gateway integration (Razorpay), authentication, and live cloud deployment.'
  },
  {
    titleTemplate: 'Java Spring Security & JWT Certification in {LOC}, Ghaziabad',
    slugPrefix: 'java-spring-security-jwt-course',
    keyword: 'Java Spring Security JWT in {LOC} Ghaziabad',
    syllabus: 'Token-based authentication, role-based access control (RBAC), password hashing with BCrypt, and security filter chains.'
  },
  {
    titleTemplate: 'Advanced Java & J2EE Course in {LOC}, Ghaziabad — Enterprise Architecture',
    slugPrefix: 'advanced-java-course',
    keyword: 'Advanced Java Course in {LOC} Ghaziabad',
    syllabus: 'Servlets, JSP, JDBC, design patterns, microservices architecture, and enterprise Java ecosystem practices.'
  },
  {
    titleTemplate: 'Java Multithreading & High Concurrency Course in {LOC}, Ghaziabad',
    slugPrefix: 'java-multithreading-course',
    keyword: 'Java Multithreading Course in {LOC} Ghaziabad',
    syllabus: 'Thread lifecycle, synchronization, deadlock prevention, ExecutorService, CompletableFuture, and high-throughput backends.'
  },
  {
    titleTemplate: 'Java Placement Preparation & Resume Building in {LOC}, Ghaziabad',
    slugPrefix: 'java-placement-preparation',
    keyword: 'Java Placement Preparation in {LOC} Ghaziabad',
    syllabus: 'Technical mock interviews, DSA problem solving, live project showcases, GitHub repository optimization, and placement guidance.'
  }
];

// 50+ In-depth Java Blog & Technical Topic Guides
const technicalGuides = [
  {
    slug: 'learn-java-oops-concepts-ghaziabad',
    title: 'Complete Guide to Java OOPs Concepts — Learn Polymorphism, Inheritance & Encapsulation',
    keyword: 'Java OOPs Concepts Guide Ghaziabad',
    category: 'Core Java',
    summary: 'Master Object-Oriented Programming principles in Java with real-world enterprise code examples and architectural best practices.'
  },
  {
    slug: 'learn-java-collections-framework-ghaziabad',
    title: 'Java Collections Framework Deep Dive — ArrayList, HashMap, HashSet & Concurrent Collections',
    keyword: 'Java Collections Framework Ghaziabad',
    category: 'Core Java',
    summary: 'Comprehensive analysis of internal workings of HashMap, collision resolution, ArrayList vs LinkedList, and thread-safe collections.'
  },
  {
    slug: 'learn-java-streams-api-lambda-ghaziabad',
    title: 'Java Streams API & Lambda Expressions Tutorial — Modern Functional Java',
    keyword: 'Java Streams API Tutorial Ghaziabad',
    category: 'Modern Java',
    summary: 'Learn functional programming in Java: filter, map, flatMap, reduce, collectors, parallel streams, and clean code optimization.'
  },
  {
    slug: 'learn-spring-boot-from-scratch-ghaziabad',
    title: 'Spring Boot for Beginners — Build Your First REST API Step by Step',
    keyword: 'Spring Boot for Beginners Ghaziabad',
    category: 'Spring Boot',
    summary: 'Hands-on tutorial creating a production-grade Spring Boot application from scratch with Maven, Spring Data JPA, and H2/MySQL.'
  },
  {
    slug: 'learn-spring-security-jwt-authentication-ghaziabad',
    title: 'Spring Security 6 & JWT Token Authentication Complete Implementation Guide',
    keyword: 'Spring Security JWT Implementation Ghaziabad',
    category: 'Security',
    summary: 'Step-by-step tutorial implementing stateless JWT authentication, SecurityFilterChain, custom user details service, and token validation.'
  },
  {
    slug: 'learn-spring-boot-microservices-architecture-ghaziabad',
    title: 'Spring Boot Microservices Architecture — Service Discovery, API Gateway & Config Server',
    keyword: 'Spring Boot Microservices Guide Ghaziabad',
    category: 'Microservices',
    summary: 'Architecting distributed systems using Spring Cloud Netflix Eureka, Spring Cloud Gateway, OpenFeign, and resilient circuit breakers.'
  },
  {
    slug: 'learn-docker-for-java-developers-ghaziabad',
    title: 'Docker Containerization Guide for Java Developers — Multi-stage Builds & Optimization',
    keyword: 'Docker for Java Developers Ghaziabad',
    category: 'DevOps',
    summary: 'Learn how to containerize Java Spring Boot applications using Docker, optimize image size with multi-stage builds, and configure JVM memory.'
  },
  {
    slug: 'learn-jenkins-ci-cd-for-java-spring-boot-ghaziabad',
    title: 'Automated Jenkins CI/CD Pipeline for Java Spring Boot Applications',
    keyword: 'Jenkins CI CD for Java Ghaziabad',
    category: 'DevOps',
    summary: 'Complete declarative Jenkinsfile pipeline guide: running automated Maven tests, building Docker containers, and deploying to AWS EC2.'
  },
  {
    slug: 'learn-aws-ec2-deployment-spring-boot-ghaziabad',
    title: 'Deploying Spring Boot Applications on AWS EC2 with Nginx Reverse Proxy & SSL',
    keyword: 'Deploy Spring Boot AWS EC2 Ghaziabad',
    category: 'Cloud',
    summary: 'Production deployment blueprint: provisioning Ubuntu EC2, configuring systemd services, Nginx reverse proxy, and Let’s Encrypt free SSL.'
  },
  {
    slug: 'learn-razorpay-integration-java-spring-boot-ghaziabad',
    title: 'Razorpay Payment Gateway Integration in Java Spring Boot — Complete Code & Webhook Guide',
    keyword: 'Razorpay Java Spring Boot Integration Ghaziabad',
    category: 'E-Commerce',
    summary: 'Real-world case study from Afsha Enterprises: creating Razorpay orders, verifying SHA256 payment signatures, and automated webhook triggers.'
  },
  {
    slug: 'top-100-java-interview-questions-answers-ghaziabad',
    title: 'Top 100 Java Interview Questions & Answers for 2026 — Fresher to 3 Years Experience',
    keyword: 'Top 100 Java Interview Questions Ghaziabad',
    category: 'Interview Prep',
    summary: 'Most frequently asked Java interview questions on OOPs, multithreading, collections, garbage collection, memory management, and Spring Boot.'
  },
  {
    slug: 'top-50-spring-boot-interview-questions-ghaziabad',
    title: 'Top 50 Spring Boot Interview Questions & Answers — Microservices & JPA',
    keyword: 'Top 50 Spring Boot Interview Questions Ghaziabad',
    category: 'Interview Prep',
    summary: 'Comprehensive interview preparation guide covering Spring Boot annotations, Spring Data JPA, transactions, actuators, and cloud deployment.'
  },
  {
    slug: 'java-multithreading-concurrency-tutorial-ghaziabad',
    title: 'Java Multithreading & Concurrency Tutorial — Locks, Deadlocks & Executor Framework',
    keyword: 'Java Multithreading Tutorial Ghaziabad',
    category: 'Core Java',
    summary: 'Deep dive into concurrent programming in Java: volatile keyword, atomic variables, ReentrantLock, thread pools, and race conditions.'
  },
  {
    slug: 'java-21-virtual-threads-tutorial-ghaziabad',
    title: 'Java 21 Virtual Threads & Project Loom — Lightweight Concurrency Revolution',
    keyword: 'Java 21 Virtual Threads Ghaziabad',
    category: 'Modern Java',
    summary: 'Learn how Virtual Threads in Java 21 enable millions of concurrent tasks with minimal memory overhead compared to traditional platform threads.'
  },
  {
    slug: 'java-mysql-hibernate-optimization-guide-ghaziabad',
    title: 'Hibernate & MySQL Optimization Guide — Solving N+1 Queries & Index Tuning',
    keyword: 'Hibernate MySQL Optimization Ghaziabad',
    category: 'Databases',
    summary: 'Boost database throughput in Spring Data JPA: using JOIN FETCH, entity graphs, batch fetching, connection pool sizing, and query profiling.'
  }
];

const newPages = [];

// 1. Generate 24 localities * 16 course angles = 384 targeted course pages
for (const loc of localities) {
  for (const ca of courseAngles) {
    const locSlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const slug = `${ca.slugPrefix}-${locSlug}-ghaziabad`;
    const title = ca.titleTemplate.replace('{LOC}', loc);
    const keyword = ca.keyword.replace('{LOC}', loc);
    const summary = `Enroll in the comprehensive ${keyword} led by Manish Kumar (DevOps & Java Full Stack Engineer from Appletree Infotech). Features live projects (Afsha Enterprises, ProgrammingWala), hands-on coding, and placement preparation.`;

    newPages.push({
      slug,
      title,
      keyword,
      category: 'Java Course in Ghaziabad',
      locality: loc,
      syllabus: ca.syllabus,
      summary
    });
  }
}

// 2. Add technical blog guides
for (const tg of technicalGuides) {
  newPages.push({
    slug: tg.slug,
    title: tg.title,
    keyword: tg.keyword,
    category: tg.category,
    locality: 'Ghaziabad',
    syllabus: tg.summary,
    summary: tg.summary
  });
}

console.log(`Generated ${newPages.length} new course and blog pages in queue!`);

// HTML generator for courses and blogs
function generateCourseHtml(page, index, allPages) {
  const canonicalUrl = `${DOMAIN}/${page.slug}.html`;

  const related = allPages
    .filter(p => p.slug !== page.slug)
    .slice((index * 4) % (allPages.length - 6), ((index * 4) % (allPages.length - 6)) + 4);

  const faqList = [
    {
      q: `What will I learn in the ${page.keyword}?`,
      a: `The program covers ${page.syllabus} You also build live commercial projects based on Afsha Enterprises (e-commerce with Razorpay) and ProgrammingWala (coaching LMS portal).`
    },
    {
      q: `Who teaches this Java training in ${page.locality}?`,
      a: `Training and mentorship is led directly by Manish Kumar, an experienced Java Full Stack Developer and DevOps Engineer who interned at Appletree Infotech and holds a B.Tech in Computer Science.`
    },
    {
      q: `How can I enroll or get a syllabus consultation in ${page.locality}?`,
      a: `Call Manish directly at +91 8851961088, send a WhatsApp message, or email brayw433@gmail.com for syllabus counseling and demo sessions.`
    }
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" href="manish1.png">
  <link rel="shortcut icon" type="image/png" href="manish1.png">
  <link rel="apple-touch-icon" href="manish1.png">

  <meta name="google-site-verification" content="lgji_Ykp2ayvq9uxiQMLZUhdX9gpNxMku6K_6NQhhkA">
  <meta name="msvalidate.01" content="889950D3507B5F364272A693096B86E5">

  <title>${page.title}</title>
  <meta name="title" content="${page.title}">
  <meta name="description" content="${page.summary}">
  <meta name="keywords" content="${page.keyword}, Java Course Ghaziabad, Java Training Ghaziabad, Learn Java Ghaziabad, Spring Boot Course Ghaziabad, Manish Kumar Java, Appletree Infotech">
  <meta name="author" content="Manish Kumar">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="language" content="English">
  <meta name="geo.region" content="IN-UP">
  <meta name="geo.placename" content="Ghaziabad">

  <!-- Self-referential canonical tag -->
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Manish Kumar — Java Learning Hub">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.summary}">
  <meta property="og:image" content="${DOMAIN}/images/manish-profile.jpg">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.summary}">
  <meta name="twitter:image" content="${DOMAIN}/images/manish-profile.jpg">

  <!-- Schema.org JSON-LD (Course + BreadcrumbList + FAQPage + Person) -->
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
            "name": "Java Courses & Guides",
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
        "@type": "Course",
        "name": "${page.title}",
        "description": "${page.summary}",
        "provider": {
          "@type": "Person",
          "name": "Manish Kumar",
          "url": "${DOMAIN}/",
          "telephone": "+91-8851961088"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "onsite"],
          "location": "${page.locality}, Ghaziabad, Uttar Pradesh, India"
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

  <!-- Navigation -->
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
        <a href="seo-directory.html" class="nav-link active">SEO Directory</a>
        <a href="java-programs-library.html" class="nav-link">Java Programs</a>
        <a href="index.html#contact" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="tel:+918851961088" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-phone"></i> +91 8851961088
        </a>
      </div>
    </div>
  </header>

  <!-- Header Banner -->
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
        <i class="fa-solid fa-graduation-cap"></i> Industry-Accredited Java Training &bull; ${page.locality}
      </span>
      <h1 class="hero-title" style="font-size: 2.5rem;">
        ${page.title}
      </h1>
      <p class="hero-description" style="max-width: 850px; font-size: 1.12rem;">
        ${page.summary}
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <a href="tel:+918851961088" class="btn btn-primary">
          <i class="fa-solid fa-phone"></i> Call Manish: +91 8851961088
        </a>
        <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20am%20interested%20in%20the%20${encodeURIComponent(page.keyword)}." target="_blank" rel="noopener" class="btn btn-secondary" style="color: var(--brand-green); border-color: #a7f3d0;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <a href="java-programs-library.html" class="btn btn-secondary">
          <i class="fa-solid fa-code"></i> Browse 50+ Java Programs
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content Grid -->
  <main class="container">
    <div class="seo-content-grid">
      <!-- Article Section -->
      <article class="seo-article">
        <section class="seo-highlight-card">
          <h2>Master Java &amp; Spring Boot in ${page.locality}, Ghaziabad</h2>
          <p>
            Looking to break into enterprise software development or accelerate your backend career? The <strong>${page.keyword}</strong> is designed to bridge the gap between textbook theory and production cloud engineering. Taught by <strong>Manish Kumar</strong> (Java Full Stack Developer &amp; DevOps Engineer), you will build live systems that prepare you for top technical interviews and commercial engineering roles.
          </p>
          <p style="margin-top: 0.9rem;">
            Whether you are a college student in Ghaziabad looking for your first tech placement, or a working professional aiming to master Spring Boot and cloud microservices, this program delivers hands-on coding, architecture blueprints, and real-world project portfolios.
          </p>
        </section>

        <!-- Syllabus Breakdown -->
        <section>
          <h2>Core Curriculum &amp; Modules Covered</h2>
          <div class="about-features-grid" style="margin-top: 1.2rem;">
            <div class="about-feature">
              <i class="fa-brands fa-java"></i>
              <div>
                <h4>Module 1: Core Java &amp; OOPs Mastery</h4>
                <p>Classes, Objects, Inheritance, Polymorphism, Abstract classes, Interfaces, and Exception Handling.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-solid fa-layer-group"></i>
              <div>
                <h4>Module 2: Collections &amp; Streams API</h4>
                <p>ArrayList, LinkedList, HashMap internals, HashSet, Lambdas, Functional Interfaces, and Stream pipelines.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-solid fa-leaf"></i>
              <div>
                <h4>Module 3: Spring Boot &amp; REST APIs</h4>
                <p>Dependency Injection, Inversion of Control, Spring MVC, DTO architecture, and Swagger documentation.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-solid fa-database"></i>
              <div>
                <h4>Module 4: Spring Data JPA &amp; MySQL</h4>
                <p>Hibernate ORM, entity mappings, repository interfaces, transaction management, and query optimization.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-solid fa-shield-halved"></i>
              <div>
                <h4>Module 5: Spring Security &amp; JWT</h4>
                <p>Stateless authentication, security filter chains, role-based access control, and password encryption.</p>
              </div>
            </div>
            <div class="about-feature">
              <i class="fa-brands fa-docker"></i>
              <div>
                <h4>Module 6: Docker, Jenkins &amp; AWS Deployment</h4>
                <p>Multi-stage Dockerfiles, automated CI/CD pipeline automation with Jenkins, and hosting on AWS EC2.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Live Projects Taught -->
        <section class="seo-highlight-card" style="border-left: 4px solid var(--brand-primary);">
          <h2>Live Projects You Will Build &amp; Deploy</h2>
          <p style="margin-bottom: 1rem;">
            You won't just build simple console calculators. You will engineer production-grade enterprise software modelled on Manish's verified client projects:
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong>Afsha Enterprises E-Commerce Store (<a href="https://www.afshaenterprises.com/" target="_blank" rel="noopener">www.afshaenterprises.com</a>):</strong>
                Build a full-scale e-commerce platform with product catalogs, shopping carts, and Razorpay payment gateway integration.
              </div>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong>ProgrammingWala Learning Management System (<a href="https://www.programmingwala.com/" target="_blank" rel="noopener">www.programmingwala.com</a>):</strong>
                Develop an EdTech coaching platform for student authentication, course enrollments, video lessons, and assignment tracking.
              </div>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 0.6rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--brand-green); margin-top: 0.25rem;"></i>
              <div>
                <strong>Rancom Technologies Corporate Enterprise Portal (<a href="https://www.rancomtechnologies.com/" target="_blank" rel="noopener">www.rancomtechnologies.com</a>):</strong>
                Corporate IT service website with cloud architecture blueprints and inquiry pipelines.
              </div>
            </li>
          </ul>
        </section>

        <!-- Clean Code Example -->
        <section>
          <h2>Code Sample: Spring Boot Entity &amp; Repository Structure</h2>
          <div style="background: var(--bg-code); color: #e2e8f0; padding: 1.5rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.88rem; overflow-x: auto; box-shadow: var(--shadow-md);">
<pre><code>@Entity
@Table(name = "courses_ghaziabad")
public class JavaCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String locality;

    private Double courseFee;
    private String instructor;

    // Getters and Setters
}

@Repository
public interface JavaCourseRepository extends JpaRepository&lt;JavaCourse, Long&gt; {
    List&lt;JavaCourse&gt; findByLocalityIgnoreCase(String locality);
}</code></pre>
          </div>
        </section>

        <!-- FAQ Section -->
        <section>
          <h2>Frequently Asked Questions (${page.locality})</h2>
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

      <!-- Sidebar -->
      <aside class="seo-sidebar">
        <!-- Mentor Info Card -->
        <div class="sidebar-widget" style="border-top: 4px solid var(--brand-primary);">
          <div style="text-align: center; margin-bottom: 1.2rem;">
            <img src="images/manish-profile.jpg" alt="Manish Kumar" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 0.75rem; object-fit: cover; border: 2px solid var(--brand-primary);">
            <h3 style="font-size: 1.2rem; margin-bottom: 0.2rem;">Manish Kumar</h3>
            <p style="font-size: 0.85rem; color: var(--brand-primary); font-weight: 700;">Java Full Stack Mentor</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${page.locality}, Ghaziabad</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="tel:+918851961088" class="btn btn-primary btn-sm" style="width: 100%;">
              <i class="fa-solid fa-phone"></i> Call +91 8851961088
            </a>
            <a href="https://wa.me/918851961088?text=Hello%20Manish,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(page.keyword)}." target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width: 100%; color: var(--brand-green); border-color: #a7f3d0;">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="mailto:brayw433@gmail.com" class="btn btn-secondary btn-sm" style="width: 100%;">
              <i class="fa-solid fa-envelope"></i> brayw433@gmail.com
            </a>
          </div>
        </div>

        <!-- Related Pages -->
        <div class="sidebar-widget">
          <h4 class="sidebar-widget-title">Related Courses &amp; Guides</h4>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${related.map(r => `
            <a href="${r.slug}.html" class="directory-link">
              <span>${r.keyword}</span>
              <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
            </a>`).join('')}
            <a href="seo-directory.html" style="margin-top: 0.8rem; font-weight: 700; color: var(--brand-primary); font-size: 0.9rem;">
              View Full SEO &amp; Course Directory &rarr;
            </a>
          </div>
        </div>

        <!-- Developer Guides -->
        <div class="sidebar-widget">
          <h4 class="sidebar-widget-title">Self-Learning Resources</h4>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <a href="java-programs-library.html" class="directory-link">50+ Java Programs Library</a>
            <a href="blog-java-fullstack.html" class="directory-link">Java Full Stack Guide</a>
            <a href="blog-devops.html" class="directory-link">DevOps CI/CD Pipelines</a>
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
          <h4>Manish Kumar</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
            Java Full Stack Developer &amp; Mentor in Ghaziabad. Helping students and businesses engineer resilient, enterprise-grade software.
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
          </div>
        </div>

        <div class="footer-col">
          <h4>Ghaziabad Hubs</h4>
          <div class="footer-links">
            <a href="java-course-indirapuram-ghaziabad.html" class="footer-link">Indirapuram Java Course</a>
            <a href="java-course-vaishali-ghaziabad.html" class="footer-link">Vaishali Java Course</a>
            <a href="java-course-vasundhara-ghaziabad.html" class="footer-link">Vasundhara Java Course</a>
            <a href="seo-directory.html" class="footer-link" style="color: var(--brand-primary); font-weight: 700;">Complete SEO Directory &rarr;</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <div class="footer-links">
            <a href="index.html" class="footer-link">Home Portfolio</a>
            <a href="java-programs-library.html" class="footer-link">Java Library</a>
            <a href="sitemap.xml" class="footer-link">XML Sitemap</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 Manish Kumar &bull; Java Courses in Ghaziabad &bull; All Rights Reserved.</div>
        <div><a href="${canonicalUrl}">Self-Canonical: ${canonicalUrl}</a></div>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

// Generate the new pages
let count = 0;
for (let i = 0; i < newPages.length; i++) {
  const p = newPages[i];
  const html = generateCourseHtml(p, i, newPages);
  fs.writeFileSync(path.join(__dirname, `${p.slug}.html`), html, 'utf8');
  count++;
}
console.log(`Successfully generated ${count} course and blog pages!`);

// Now update seo-directory.html, sitemap.xml, and sitemap.txt with all existing + new pages!
function updateDirectoryAndSitemaps() {
  const allHtmlFiles = fs.readdirSync(__dirname)
    .filter(f => f.endsWith('.html') && !f.startsWith('google'));

  console.log(`Total HTML files in workspace: ${allHtmlFiles.length}`);

  // Build sitemap.xml
  const now = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const txtUrls = [];

  // Home page first
  xml += `  <url>\n    <loc>${DOMAIN}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.00</priority>\n  </url>\n`;
  txtUrls.push(`${DOMAIN}/`);

  for (const f of allHtmlFiles) {
    if (f === 'index.html') continue; // Do not duplicate root URL!
    const pageUrl = `${DOMAIN}/${f}`;
    const priority = f === 'seo-directory.html' ? '0.98' : (f.startsWith('project-') ? '0.95' : '0.90');
    xml += `  <url>\n    <loc>${pageUrl}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
    txtUrls.push(pageUrl);
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(__dirname, 'sitemap.txt'), txtUrls.join('\n'), 'utf8');
  console.log(`Updated sitemap.xml and sitemap.txt with ${txtUrls.length} clean URLs!`);
}

updateDirectoryAndSitemaps();
