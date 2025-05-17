"use client";

import WindowFrame from "@/components/WindowFrame";

const projects = [
  {
    title: "Expense Tracker",
    description: `Built a full-stack expense tracker that lets users upload receipt
      images, automatically extracts totals and dates via OCR,
      and provides an organized, searchable history with category filters.`,
    githubUrl: "https://github.com/affiq23/expense-tracker",
  },
  {
    title: "Kvault",
    description: `Version-controlled note-taking system with a unified command
      line and web interface for managing markdown notes
      with authentication and local snapshot tracking.`,
    githubUrl: "https://github.com/affiq23/kvault",
    demoUrl: "https://kvault.vercel.app/",
  },
  {
    title: "Stem4Stems",
    description: `Developed a browser-based learning tool that uses engaging
      visuals and AI-powered quizzes to help younger students grasp
      STEM concepts through interactivity.`,
    githubUrl: "#",
    demoUrl: "https://stem4stems.vercel.app/",
  },
  {
    title: "ML Classifier",
    description: `Built reliable text classification models that handle a range
      of natural language processing tasks with ease and flexibility.`,
    githubUrl: "https://github.com/affiq23/text_classification_project",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 font-[Tahoma] text-[15px]">
      <WindowFrame title="Projects" titleFont="Trebuchet MS">
        <div className="grid grid-cols-1 gap-4">
          {projects.map(({ title, description, githubUrl, demoUrl }) => (
            <div key={title} className="border p-3 bg-white rounded-sm">
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm mb-2">{description}</p>

              <a
                href={githubUrl}
                className="text-blue-700 underline text-sm mr-4"
              >
                View GitHub
              </a>

              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline text-sm"
                >
                  View Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </WindowFrame>
    </main>
  );
}
