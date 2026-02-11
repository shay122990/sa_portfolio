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
        "/projects/audion/desktop-1.webp",
        "/projects/audion/desktop-2.webp",
      ],
      mobile: [
        "/projects/audion/mobile-1.webp",
        "/projects/audion/mobile-2.webp",
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
    repo: "https://github.com/shay122990/weave-and-way",
    live: "https://weave-way.vercel.app/",
    screenshots: {
      desktop: [
        "/projects/audion/desktop-1.webp",
        "/projects/audion/desktop-2.webp",
      ],
      mobile: [
        "/projects/audion/mobile-1.webp",
        "/projects/audion/mobile-2.webp",
      ],
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
        "/projects/today-fitness/desktop-dashboard.webp",
        "/projects/today-fitness/desktop-planner.webp",
        "/projects/today-fitness/desktop-insights.webp",
      ],
      mobile: [
        "/projects/today-fitness/mobile-dashboard.webp",
        "/projects/today-fitness/mobile-planner.webp",
        "/projects/today-fitness/mobile-insights.webp",
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
        "/projects/shays-tree/desktop-home.webp",
        "/projects/shays-tree/desktop-category.webp",
        "/projects/shays-tree/desktop-checkout.webp",
      ],
      mobile: [
        "/projects/shays-tree/mobile-home.webp",
        "/projects/shays-tree/mobile-cart.webp",
        "/projects/shays-tree/mobile-checkout.webp",
      ],
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
        "/projects/crwn/desktop-home.webp",
        "/projects/crwn/desktop-category.webp",
        "/projects/crwn/desktop-checkout.webp",
      ],
      mobile: [
        "/projects/crwn/mobile-home.webp",
        "/projects/crwn/mobile-cart.webp",
        "/projects/crwn/mobile-checkout.webp",
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
        "/projects/alleyway/desktop-hero.webp",
        "/projects/alleyway/desktop-events.webp",
        "/projects/alleyway/desktop-contact.webp",
      ],
      mobile: [
        "/projects/alleyway/mobile-hero.webp",
        "/projects/alleyway/mobile-menu.webp",
        "/projects/alleyway/mobile-contact.webp",
      ],
    },

    overview:
      "Alleyway is a corporate events and project management website built to establish a strong digital presence for a real-world client. The platform showcases services, portfolio work, and upcoming events while acting as a lead-generation channel through its contact forms.",

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
];
