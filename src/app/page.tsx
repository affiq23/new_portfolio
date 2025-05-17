import WindowFrame from "@/components/WindowFrame";
import SkillItem from "@/components/SkillItem";

export default function Home() {
  return (
   <main className="mx-auto max-w-4xl pt-2 px-6 space-y-8 text-[15px] font-[Tahoma]">
      <WindowFrame title="Affiq's Portfolio" titleFont="Trebuchet MS">
        <h3 className="text-xl mb-2">Hi! I'm currently a junior studying computer science at UT Dallas.
          I've worked hands on in the fields of web and mobile app development,
          and am currently exploring fields such as artificial intelligence and
          cloud computing.</h3>
        
      </WindowFrame>
      <WindowFrame title="Education" titleFont="Trebuchet MS">
        <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm">
          <div className="flex items-center gap-4">
            <img
              src="/utd_logo.png"
              alt="UTD Logo"
              className="w-10 h-10"
            />
            <div>
              <p className="font-bold">The University of Texas at Dallas</p>
              <p>Bachelor of Science in Computer Science</p>
              <p className="text-xs text-gray-700">
                Aug 2022 – May 2026 · Richardson, TX
              </p>
            </div>
          </div>
        </div>
      </WindowFrame>
      <WindowFrame title="Skills" titleFont="Trebuchet MS">
        <div className="space-y-6 text-sm text-black font-[Tahoma]">
          <div>
            <h3 className="font-bold text-[16px] mb-2">
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
          <div>
            <h3 className="font-bold text-[16px] mb-2">
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
          <div>
            <h3 className="font-bold text-[16px] mb-2">Tools & Technologies</h3>
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
    </main>
  );
}
