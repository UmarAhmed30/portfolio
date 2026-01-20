import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    image: "/images/projects/ecommerce-platform.jpg",
    imageAlt: "E-Commerce Platform Screenshot",
    what: "A full-stack e-commerce platform built with Next.js and TypeScript, featuring product catalog, shopping cart, and payment processing capabilities.",
    why: "Created to demonstrate modern web development skills and understanding of complex user flows in e-commerce applications.",
    how: "Built using Next.js, TypeScript, Tailwind CSS, Stripe API for payments, and PostgreSQL for data persistence. Implemented responsive design and optimized for performance."
  },
  {
    id: "project-2", 
    title: "AI-Powered Task Manager",
    image: "/images/projects/task-manager.jpg",
    imageAlt: "AI Task Manager Interface",
    what: "An intelligent task management application that uses machine learning to prioritize tasks and suggest optimal scheduling.",
    why: "Developed to explore AI integration in productivity tools and solve the common problem of task prioritization.",
    how: "Implemented with React, Python backend, OpenAI API for intelligent suggestions, and MongoDB for data storage. Features real-time updates and collaborative functionality."
  },
  {
    id: "project-3",
    title: "Real-Time Chat Application", 
    image: "/images/projects/chat-app.jpg",
    imageAlt: "Real-Time Chat Application",
    what: "A scalable real-time messaging platform supporting group chats, file sharing, and video calls.",
    why: "Built to understand WebSocket technology and real-time communication patterns in modern web applications.",
    how: "Developed using Node.js, Socket.io, React, and Redis for session management. Implemented WebRTC for video calls and AWS S3 for file storage."
  },
  {
    id: "project-4",
    title: "Data Visualization Dashboard",
    image: "/images/projects/dashboard.jpg", 
    imageAlt: "Data Visualization Dashboard",
    what: "An interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time data updates.",
    why: "Created to demonstrate data visualization skills and ability to make complex information accessible and actionable.",
    how: "Built with D3.js, React, and Express.js backend. Integrated with multiple data sources and implemented caching for performance optimization."
  },
  {
    id: "project-5",
    title: "Mobile Fitness Tracker",
    image: "/images/projects/fitness-tracker.jpg",
    imageAlt: "Mobile Fitness Tracker App",
    what: "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features.",
    why: "Developed to explore mobile development and create a comprehensive fitness tracking solution.",
    how: "Built using React Native, Firebase for backend services, and integrated with health APIs. Features offline functionality and data synchronization."
  },
  {
    id: "project-6",
    title: "Blockchain Voting System",
    image: "/images/projects/voting-system.jpg",
    imageAlt: "Blockchain Voting System Interface", 
    what: "A secure, transparent voting system built on blockchain technology ensuring vote integrity and anonymity.",
    why: "Created to explore blockchain applications in governance and demonstrate understanding of cryptographic principles.",
    how: "Implemented using Solidity smart contracts, Web3.js, React frontend, and deployed on Ethereum testnet. Features voter authentication and result verification."
  }
];