import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: "hyra",
    title: "Hybrid Router Agent (HyRA)",
    image: "/images/projects/hyra.png",
    imageAlt: "Hybrid Router Agent",
    what: "A routing framework that intelligently directs queries to the best open-source model, using an 'LLM-as-a-Judge' feedback loop to refine accuracy over time.",
    why: "To solve the inefficiency of static model selection by dynamically balancing cost and performance constraints.",
    how: "#vLLM #LangGraph #GCP #Langfuse #PostgreSQL #Flask #React #Python",
    githubLink: "https://github.com/UmarAhmed30/hybrid-routing-agents-framework"
  },
  {
    id: "distributed-log-processing-system", 
    title: "Distributed Log Processing System",
    image: "/images/projects/distributed-log-processing-system.png",
    imageAlt: "Distributed Log Processing System",
    what: "An end-to-end analytics pipeline combined with a full-stack observability dashboard for monitoring system health and metrics. (Something like Splunk)",
    why: "To tackle the challenge of ingesting and analyzing massive volumes of log data (1 million events per minute) in real-time without data loss.",
    how: "#Flink #Kafka #ClickHouse #Redis #FastAPI #Next.js",
    githubLink: "https://github.com/UmarAhmed30/distributed-log-processing-system"
  },
  {
    id: "fyp",
    title: "Multimodal Text-Based Neural Image Inpainting using Attention GAN", 
    image: "/images/projects/fyp.png",
    imageAlt: "Multimodal Text-Based Neural Image Inpainting using Attention GAN",
    what: "A text-guided generative system that synthesizes visually plausible and semantically coherent content in missing image regions based on a user's specific textual description.",
    why: "Traditional inpainting often fails on large missing regions because it lacks context, leading to blurry results. Text guidance was introduced to give the model the semantic information needed to fill these gaps realistically and allow user control.",
    how: "Built using a Generative Adversarial Network with a Dual Multi-Modal Attention mechanism to align text and image features. It utilizes a 7-layer ResNet for visual feature extraction, GRU Word Embeddings for text processing, and projects them into a Gaussian Latent Space for fusion and generation."
  },
  {
    id: "cip",
    title: "Sequence to Sequence Models for Generating Video Captions",
    image: "/images/projects/cip.png", 
    imageAlt: "Sequence to Sequence Models for Generating Video Captions",
    what: "A deep learning model that effectively translates a variable sequence of video frames into a natural language sentence that accurately describes the events occurring in the scene.",
    why: "To bridge the gap between computer vision and natural language processing, enabling applications like automated video indexing and accessibility tools for the visually impaired.",
    how: "Developed using a Stacked Encoder-Decoder LSTM architecture to handle variable-length inputs and outputs. Visual features are extracted frame-by-frame using a pre-trained ResNet-50 CNN, and the model is trained on the MSVD dataset using Word Embeddings and the Adam optimizer.",
  },
  {
    id: "abacus",
    title: "Abacus'21",
    image: "/images/projects/abacus.png",
    imageAlt: "Abacus'21", 
    what: "A full-stack event management website handling user authentication, event registration, and payment processing modules for the symposium.",
    why: "To facilitate a large-scale inter-college technical symposium by digitizing the attendee experience.",
    how: "#React #CSS #Node.js",
    githubLink: "https://github.com/UmarAhmed30/abacus-21-frontend",
    demoLink: "https://abacus-2021.netlify.app/"
  },
  {
    id: "dbms",
    title: "Online Organic Marketplace",
    image: "/images/projects/online-organic-store.png",
    imageAlt: "Online Organic Marketplace",
    what: "An e-commerce platform featuring distinct interfaces for different user types to manage stock and purchases.",
    why: "To remove middlemen from the supply chain by directly connecting farmers with consumers.",
    how: "#HTML #CSS #JavaScript #jQuery #Bootstrap #Flask #MySQL",
    githubLink: "https://github.com/UmarAhmed30/Online-Organic-Store"
  },
  {
    id: "java",
    title: "Attendance Manager",
    image: "/images/projects/attendance-manager.png",
    imageAlt: "Attendance Manager", 
    what: "A desktop application that tracks timetables, calculates attendance percentages, and automates the creation of leave forms.",
    why: "To help students prevent unintentional absences by providing a clear view of their academic standing.",
    how: "#Java #Swing #AWT",
    githubLink: "https://github.com/UmarAhmed30/Attendance-Manager"
  },
  {
    id: "moviebase",
    title: "MovieBase",
    image: "/images/projects/moviebase.png",
    imageAlt: "MovieBase", 
    what: "A movie discovery interface allowing users to browse and explore titles, powered by a JSON server backend.",
    why: "To learn the Angular framework through the development of a media content browser.",
    how: "#Angular #CSS #JavaScript #Bootstrap",
    githubLink: "https://github.com/UmarAhmed30/moviebase-app",
    demoLink: "https://moviebase-app-ecad1c.netlify.app/"
  },
  {
    id: "flutter",
    title: "Flutter Mini Projects",
    image: "/images/projects/flutter.png",
    imageAlt: "Flutter Mini Projects", 
    what: "A versatile suite of mobile applications including a Bitcoin ticker, a Firebase-integrated chat app, a weather tracker, and a BMI calculator.",
    why: "To gain proficiency in cross-platform mobile development and UI design through rapid prototyping.",
    how: "#Flutter #Dart #Figma #Firebase"
  },
  {
    id: "corona-tracker",
    title: "Corona Tracker",
    image: "/images/projects/corona-tracker.png",
    imageAlt: "Corona Tracker", 
    what: "A dynamic data visualization website using custom components to render country-wise COVID-19 statistics.",
    why: "To master the React ecosystem by building a tool with real-world relevance during the pandemic.",
    how: "#React #CSS #JavaScript #Bootstrap",
    githubLink: "https://github.com/UmarAhmed30/Corona-Tracker",
    demoLink: "https://moviebase-app-ecad1c.netlify.app/"
  }
];