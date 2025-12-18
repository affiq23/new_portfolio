"use client";
import WindowFrame from "@/components/WindowFrame";

const projects = [
  {
    title: "LightHouse",
    tech: "React, FastAPI, Ollama, AWS EC2, Commander.js",
    description: `Developed real-time disaster monitoring platform processing Bluesky tweets through ML classifier and Ollama
LLM integration for automated event detection and categorization.`,
    features: [
      "Designed workflow pipeline for preprocessing tweet data and classfying using XGBoost classifier",
      "Integrated local Ollama LLM with custom prompting for disaster metadata extraction including event type, geographic location, and urgency level",
      "Built React UI dashboard displaying real-time disaster alerts with interactive filtering and maps",
    ],
    githubUrl: "https://github.com/EJcoding/LightHouse",
    demoUrl: "http://lighthouse-2025.netlify.app",
  },
  {
    title: "Kvault",
    tech: "React, Node.js, LangChain, Supabase, Commander.js",
    description: `Created a version-controlled note-taking platform with real-time synchronization for seamless markdown document management.`,
    features: [
      "Developed CLI tool using Commander.js for efficient note synchronization and offline workflows",
      "Integrated LangChain AI for document summarization and QA chatbot interactions with user content",
      "Built scalable PostgreSQL database with Supabase for robust data persistence",
    ],
    githubUrl: "https://github.com/affiq23/kvault",
    demoUrl: "https://kvault.vercel.app/",
  },
  {
    title: "Expense Tracker",
    tech: "React, Next.js, TypeScript, Express.js, Tesseract.js, Multer",
    description: `Developed full-stack expense tracking application with receipt image upload and OCR data extraction.`,
    features: [
      "Implemented Tesseract.js OCR engine to automatically extract expense data from receipt images",
      "Built RESTful API with Express.js and Multer for file uploads and expense management",
      "Created responsive interface with expense history, sorting, filtering, and receipt display features",
    ],
    githubUrl: "https://github.com/affiq23/expense-tracker",
  },
  {
    title: "STEM4stems",
    tech: "React, TypeScript, Three.js, OpenAI API",
    description: `Developed interactive educational platform teaching STEM concepts to younger students through engaging experiences.`,
    features: [
      "Built responsive frontend with Three.js integration for dynamic 3D visualizations optimized for performance",
      "Integrated OpenAI API to generate real-time educational content and adaptive quiz questions",
    ],
    githubUrl: "https://github.com/affiq23/stem4stems",
    demoUrl: "https://stem4stems.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="space-y-8 text-[15px] font-[Tahoma]">
      {" "}
      <WindowFrame title="Projects" titleFont="Trebuchet MS">
        <div className="space-y-4 text-sm text-black">
          {projects.map(
            ({ title, tech, description, features, githubUrl, demoUrl }) => (
              <div
                key={title}
                className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc,2px_2px_4px_rgba(0,0,0,0.3)] rounded-sm hover:shadow-[inset_1px_1px_#fff,2px_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-black">{title}</h3>
                      <div className="flex space-x-2">
                        {githubUrl !== "#" && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-200 border border-gray-400 rounded text-xs hover:bg-gray-300 transition-colors shadow-[inset_1px_1px_#fff,1px_1px_2px_rgba(0,0,0,0.2)]"
                          >
                            GitHub
                          </a>
                        )}
                        {demoUrl && (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-blue-100 border border-blue-400 rounded text-xs hover:bg-blue-200 transition-colors shadow-[inset_1px_1px_#fff,1px_1px_2px_rgba(0,0,0,0.2)]"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-yellow-100 border border-yellow-300 rounded text-xs font-mono">
                        {tech}
                      </span>
                    </div>

                    <p className="text-sm mb-3 leading-relaxed">
                      {description}
                    </p>

                    <ul className="list-disc ml-5 space-y-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="text-sm leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </WindowFrame>
    </main>
  );
}
