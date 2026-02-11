const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Context API"],
  },
  {
    title: "Animations",
    items: ["Framer Motion", "CSS Transitions", "Intersection Observer"],
  },
  {
    title: "Auth & Database",
    items: ["Firebase Auth", "Firestore", "MongoDB", "Mongoose", "JWT"],
  },
  {
    title: "Payments & Deployment",
    items: ["Stripe", "Netlify Functions", "Vercel", "PWA"],
  },
] as const;

export default skillGroups;
