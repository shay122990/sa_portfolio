import type { Project } from "../../types/project";

export const projects: Project[] = [
  {
    id: "audion",
    slug: "audion",
    title: "Audion — Concert Booking Platform",
    blurb:
      "Multi-date ticket booking • Role-based admin dashboard • Secure checkout flow",
    tags: [
      "Next.js 16",
      "React 19",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/audion.webp",
    repo: "https://github.com/shay122990/audion-concert-booking-app",
    live: "https://audion-concert-booking-app.vercel.app/",

    screenshots: {
      desktop: [
        "/audion/desktop-1.webp",
        "/audion/desktop-2.webp",
        "/audion/desktop-3.webp",
      ],
      mobile: [
        "/audion/mobile-1.webp",
        "/audion/mobile-2.webp",
        "/audion/mobile-3.webp",
      ],
    },

    overview:
      "Audion is a full-stack ticket booking platform designed to handle multi-date events with role-based admin access and secure Stripe checkout.",

    architecture:
      "The application uses Next.js App Router for routing, Firebase for authentication and data storage, and Stripe for payment processing. Admin role validation is handled via Firestore user documents.",

    challenges: [
      "Implementing multi-date event selection logic",
      "Securing admin routes based on role",
      "Handling Stripe payment confirmation flow",
    ],

    improvements: [
      "Add server-side validation for booking limits",
      "Introduce caching for event listings",
      "Add automated tests for checkout flow",
    ],
  },
  {
    id: "weave-way",
    slug: "weave-way",
    title: "Weave & Way — Fabric Catalog Platform",
    blurb:
      "Full-stack textile catalog with protected admin dashboard, RESTful API, and MongoDB database.",
    tags: [
      "Next.js 15",
      "React 19",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "JWT Auth",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/weave&way.webp",
    repo: "https://github.com/shay122990/weave-n-way-2.0",
    live: "https://weave-n-way-2-0.vercel.app/",
    screenshots: {
      desktop: [
        "/weave&way/desktop-1.webp",
        "/weave&way/desktop-2.webp",
        "/weave&way/desktop-3.webp",
      ],
      mobile: ["/weave&way/mobile-1.webp", "/weave&way/mobile-2.webp"],
    },
    overview:
      "Weave & Way is a full-stack fabric catalog application built to simulate a real-world content management workflow. Users can browse fabrics by category or search, while authenticated admins manage inventory through a protected dashboard with full CRUD functionality.",

    architecture:
      "The application uses Next.js App Router for both frontend rendering and RESTful API routes. MongoDB serves as the database layer, accessed through Mongoose ODM for schema modeling and validation. Admin access is secured using JWT-based authentication, with protected routes validating tokens before granting access. Redux Toolkit is used for predictable client-side state management, particularly for filtering and UI state synchronization.",

    challenges: [
      "Designing a scalable RESTful API structure inside Next.js API routes",
      "Implementing secure JWT-based route protection for admin dashboard",
      "Synchronizing MongoDB updates with frontend state without unnecessary refetching",
      "Handling image uploads and JSON seed data ingestion cleanly",
    ],

    improvements: [
      "Introduce server-side input validation and rate limiting",
      "Add role-based permission tiers instead of single admin access",
      "Implement caching or ISR for category pages",
      "Add integration tests for API endpoints",
    ],
  },
  {
    id: "today-fitness",
    slug: "today-fitness",
    title: "Today — Fitness Planner PWA",
    blurb:
      "Progressive web app for workout planning, calorie tracking, and weekly insights with persistent state.",
    tags: [
      "Next.js 15",
      "React 18",
      "Firebase",
      "Redux Toolkit",
      "Redux Persist",
      "Chart.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/today-fitness-app.webp",
    repo: "https://github.com/shay122990/fitness-dashboard-nextjs",
    live: "https://fitness-dashboard-nextjs.vercel.app/",

    screenshots: {
      desktop: [
        "/today-fitness-app/desktop-1.webp",
        "/today-fitness-app/desktop-2.webp",
      ],
      mobile: [
        "/today-fitness-app/mobile-1.webp",
        "/today-fitness-app/mobile-2.webp",
        "/today-fitness-app/mobile-3.webp",
      ],
    },

    overview:
      "Today is a fitness planning app that helps users organize weekly workouts, track daily nutrition and water intake, and review progress through weekly insights. It’s designed as a PWA so users can add it to their phone for quick access and a more app-like experience.",

    architecture:
      "The app is built with Next.js (App Router) and uses Firebase Authentication for sign-in and Firestore for user-specific data (workouts, calories, water intake, and profiles). Client state is managed with Redux Toolkit, while Redux Persist keeps key UI and tracking state across refreshes. Chart.js powers the insights dashboards by aggregating stored daily metrics into weekly summaries.",

    challenges: [
      "Designing a Firestore data structure that keeps user data isolated and easy to query (workouts, calories, water intake, profiles)",
      "Keeping Redux state and Firestore data consistent without creating duplicate sources of truth",
      "Building weekly insights from daily entries and ensuring charts update correctly when data changes",
      "Making the UI feel “app-like” on mobile while staying responsive across desktop and tablet",
    ],

    improvements: [
      "Add stronger input validation and edge-case handling (e.g., missing days, partial logs, time zone boundaries)",
      "Improve performance by caching derived weekly stats and minimizing recomputation",
      "Add testing for reducers and critical flows like workout creation and nutrition logging",
      "Expand insights (monthly trends, PR tracking, streaks) and allow data export",
    ],
  },
  {
    id: "shays-tree",
    slug: "shays-tree",
    title: "Shay’s Tree — Plant E-Commerce Shop",
    blurb:
      "Responsive e-commerce app with authentication, cart persistence, and Stripe-powered checkout.",
    tags: [
      "React 18",
      "Vite",
      "Firebase",
      "Stripe",
      "Context API",
      "React Router",
      "Bootstrap",
    ],
    image: "/projects/shays-tree.webp",
    repo: "https://github.com/shay122990/shay-tree-plant-shop-react",
    live: "https://shays-tree.netlify.app",

    screenshots: {
      desktop: [
        "/shays-tree/desktop-1.webp",
        "/shays-tree/desktop-2.webp",
        "/shays-tree/desktop-3.webp",
      ],
      mobile: ["/shays-tree/mobile-1.webp", "/shays-tree/mobile-2.webp"],
    },

    overview:
      "Shay’s Tree is a plant-focused e-commerce application built to simulate a real-world online shop. Users can browse categorized products, authenticate securely, manage a cart, and complete purchases through Stripe. The app emphasizes smooth client-side navigation and persistent cart state across sessions.",

    architecture:
      "The application is built with React and Vite for fast development and bundling. Routing is handled via React Router, while global state (authentication, products, cart) is managed using the Context API. Firebase provides authentication and Firestore database storage for products and user data. Stripe is integrated for secure checkout, with Netlify Functions used to handle payment intents in a serverless environment.",

    challenges: [
      "Designing a clean global state structure using Context without over-complicating updates",
      "Keeping cart state synchronized with local storage for persistence across refreshes",
      "Handling secure Stripe checkout flow with serverless Netlify functions",
      "Structuring Firestore collections for products and user-specific data",
    ],

    improvements: [
      "Refactor cart logic into a more scalable reducer-based pattern for complex updates",
      "Add product search and filtering capabilities",
      "Improve checkout validation and error handling UX",
      "Introduce automated tests for cart and authentication flows",
    ],
  },
  {
    id: "crwn",
    slug: "crwn",
    title: "CRWN — Clothing eCommerce",
    blurb:
      "E-commerce app with category browsing, cart + checkout, authentication, and persistent state.",
    tags: [
      "React 18",
      "Firebase",
      "Firestore",
      "Stripe",
      "Redux Toolkit",
      "Redux Persist",
      "React Router",
      "Sass",
    ],
    image: "/projects/crwn.webp",
    repo: "https://github.com/shay122990/ecom-react-crwn",
    live: "https://crwn-clothing-dxb.netlify.app",

    screenshots: {
      desktop: [
        "/crwn/desktop-1.webp",
        "/crwn/desktop-2.webp",
        "/crwn/desktop-3.webp",
      ],
      mobile: [
        "/crwn/mobile-1.webp",
        "/crwn/mobile-2.webp",
        "/crwn/mobile-3.webp",
      ],
    },

    overview:
      "CRWN is a clothing e-commerce application designed to replicate a production-style shopping experience. Users can browse products by category, authenticate securely, manage their cart, and complete purchases via Stripe. The project focuses heavily on predictable state management and persistent cart behavior.",

    architecture:
      "The app is built with React and React Router for client-side navigation. Global state is handled with Redux Toolkit, while Redux Persist ensures cart and user state survive page reloads. Firebase Authentication manages user sessions, and Firestore stores product and user-related data. Stripe is integrated for secure payment processing, with server-side logic handled through Netlify Functions.",

    challenges: [
      "Designing a normalized Redux store structure for products and cart items",
      "Preventing cart duplication and keeping derived totals consistent",
      "Synchronizing Redux state with Firestore without unnecessary re-fetching",
      "Handling Stripe payment confirmation and cart reset after successful checkout",
    ],

    improvements: [
      "Add role-based admin panel for product management",
      "Introduce memoized selectors optimization with reselect for larger datasets",
      "Improve error handling and user feedback during checkout failures",
      "Add automated testing for reducers, selectors, and payment flow",
    ],
  },
  {
    id: "alleyway",
    slug: "alleyway",
    title: "Alleyway — Events & Project Management Website",
    blurb:
      "Responsive corporate website with animated sections, SEO optimization, and contact form integration.",
    tags: [
      "Next.js 14",
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "TypeScript",
    ],
    image: "/projects/alleyway.webp",
    repo: "https://github.com/shay122990/alleyway-nextjs-ts",
    live: "https://alleywaydxb.com",

    screenshots: {
      desktop: [
        "/alleyway/desktop-1.webp",
        "/alleyway/desktop-2.webp",
        "/alleyway/desktop-3.webp",
      ],
      mobile: [
        "/alleyway/mobile-1.webp",
        "/alleyway/mobile-2.webp",
        "/alleyway/mobile-3.webp",
      ],
    },

    overview:
      "Alleyway is a corporate 2 and project management website built to establish a strong digital presence for a real-world client. The platform showcases services, portfolio work, and upcoming events while acting as a lead-generation channel through its contact forms.",

    architecture:
      "The site is built with Next.js 14 using the App Router for structured routing and SEO optimization. Tailwind CSS provides a consistent design system, while Framer Motion enhances user experience through smooth entrance animations and scroll-based transitions. React Hook Form is used to manage form state efficiently, and reCAPTCHA integration helps protect against spam submissions. The project is deployed with production-ready optimizations including sitemap generation and metadata configuration.",

    challenges: [
      "Balancing animation effects with performance and SEO requirements",
      "Structuring reusable UI components for a scalable marketing website",
      "Implementing secure and user-friendly contact form validation",
      "Optimizing images and layout shifts for improved Core Web Vitals",
    ],

    improvements: [
      "Add a CMS integration for easier content updates by non-technical users",
      "Introduce analytics tracking and performance monitoring",
      "Expand structured data (schema markup) for enhanced SEO visibility",
      "Add a blog or insights section with dynamic content rendering",
    ],
  },
  {
    id: "react",
    slug: "react-projects",
    title: "React Projects Archive",
    blurb:
      "A collection of React projects built to practice and demonstrate core frontend concepts, reusable components, state management, API integration, interactive UI, and responsive design.",
    tags: ["React", "JavaScript", "CSS", "React Hooks"],
    image: "/projects/react-projects.webp",
    repo: "https://github.com/shay122990/ReactJS-basics-practice-projects",
    live: "https://react-js-basics-practice-projects.vercel.app/",

    screenshots: {
      desktop: [
        "/react-projects/desktop-1.webp",
        "/react-projects/desktop-2.webp",
        "/react-projects/desktop-3.webp",
      ],
      mobile: [
        "/react-projects/mobile-1.webp",
        "/react-projects/mobile-2.webp",
      ],
    },

    overview:
      "The React Projects Archive is a growing collection of projects built to strengthen practical React and JavaScript skills through hands-on development. Rather than focusing on a single application, the archive covers a variety of interfaces and interactive features, including reusable components, state-driven UI, forms, dynamic lists, API-based applications, and custom UI interactions. Each project focuses on solving a specific frontend problem while reinforcing patterns used in real-world React development.",

    architecture:
      "The projects are built primarily with React and modern JavaScript, with TypeScript and Next.js used across selected projects. React Hooks are used extensively for managing component state, side effects, and reusable logic. The archive also includes a search feature. This allows anyone who wants to learn or practice a specific hook or JS method to search that project.",

    challenges: [
      "Building a wide range of interfaces while maintaining reusable and organized React component patterns",
      "Managing state and user interactions across different types of applications",
      "Implementing interactive UI features from scratch rather than relying entirely on third-party libraries",
      "Working with APIs, asynchronous data, forms, and dynamic content",
      "Creating responsive interfaces that work across desktop and mobile screen sizes",
    ],

    improvements: [
      "Continue expanding the archive with more complex real-world applications",
      "Add additional projects focused on advanced state management and application architecture",
    ],
  },
];
