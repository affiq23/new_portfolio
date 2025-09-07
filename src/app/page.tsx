"use client";
import { useState, useEffect } from "react";
import WindowFrame from "@/components/WindowFrame";
import SkillItem from "@/components/SkillItem";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Hi! I'm currently a senior studying computer science at UT Dallas. I've worked hands on in the fields of web and mobile app development, and am currently exploring fields such as artificial intelligence and cloud computing.";

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => {
      clearInterval(timeInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <main className="mx-auto max-w-4xl pt-2 px-6 space-y-8 text-[15px] font-[Tahoma]">

      <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
            Online
          </span>
          <span>📍 Dallas, TX</span>
        </div>
        <span className="font-mono">{currentTime}</span>
      </div>

      <WindowFrame title="Affiq's Portfolio" titleFont="Trebuchet MS">
        <div className="space-y-4">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-3 min-h-[120px]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </h3>
            
            </div>
          </div>
        </div>
      </WindowFrame>

      <WindowFrame title="Education" titleFont="Trebuchet MS">
        <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc,2px_2px_4px_rgba(0,0,0,0.2)] rounded-sm hover:shadow-[inset_1px_1px_#fff,2px_2px_6px_rgba(0,0,0,0.3)] transition-shadow">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="/utd_logo.png"
                alt="UTD Logo"
                className="w-12 h-12 rounded-full border-2 border-orange-400"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                🎓
              </div>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">The University of Texas at Dallas</p>
              <p className="text-base">Bachelor of Science in Computer Science</p>
              <div className="flex items-center space-x-4 mt-1">
                <p className="text-sm text-gray-700">Aug 2022 – May 2026</p>
                <span className="px-2 py-1 bg-orange-100 border border-orange-300 rounded text-xs">
                  📍 Richardson, TX
                </span>
              </div>
            </div>
          </div>
        </div>
      </WindowFrame>

      <WindowFrame title="Skills" titleFont="Trebuchet MS">
        <div className="space-y-6 text-sm text-black font-[Tahoma]">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded border border-blue-200">
            <h3 className="font-bold text-[16px] mb-3 flex items-center">
              <span className="mr-2">🔤</span>
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <SkillItem icon="/icons/java.svg" label="Java" />
              <SkillItem icon="/icons/swift.png" label="Swift" />
              <SkillItem icon="/icons/javascript.svg" label="JavaScript" />
              <SkillItem icon="/icons/typescript.svg" label="TypeScript" />
              <SkillItem icon="/icons/python.svg" label="Python" />
              <SkillItem icon="/icons/cpp.svg" label="C++" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded border border-green-200">
            <h3 className="font-bold text-[16px] mb-3 flex items-center">
              <span className="mr-2">🔧</span>
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <SkillItem icon="/icons/react.svg" label="React.js" />
              <SkillItem icon="/icons/nextjs.jpeg" label="Next.js" />
              <SkillItem icon="/icons/tailwind.png" label="Tailwind" />
              <SkillItem icon="/icons/nodejs.png" label="Node.js" />
              <SkillItem icon="/icons/flask.png" label="Flask" />
              <SkillItem icon="/icons/express.png" label="Express" />
              <SkillItem icon="/icons/langchain.png" label="LangChain" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded border border-purple-200">
            <h3 className="font-bold text-[16px] mb-3 flex items-center">
              <span className="mr-2">⚙️</span>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <SkillItem icon="/icons/github.png" label="GitHub" />
              <SkillItem icon="/icons/mongodb.svg" label="MongoDB" />
              <SkillItem icon="/icons/supabase.jpg" label="Supabase" />
              <SkillItem icon="/icons/postgres.png" label="PostgreSQL" />
              <SkillItem icon="/icons/docker.png" label="Docker" />
              <SkillItem icon="/icons/prisma.jpg" label="Prisma" />
            </div>
          </div>
        </div>
      </WindowFrame>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-300">
        <p>This portfolio was built with Next.js, React, and lots of ☕</p>
      </div>
    </main>
  );
}