import WindowFrame from "@/components/WindowFrame";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 font-[Tahoma] text-[15px]">
      <WindowFrame title="Experience" titleFont="Trebuchet MS">
        <div className="space-y-6 text-sm text-black">
          <section>
            <div className="space-y-3">
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm">
                <p className="font-bold">Software Track Lead - Theta Tau</p>
                <p className="text-sm">January 2025 – Present</p>
                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>
                    Currently developing cross-platform health monitoring app
                    using <b>React Native</b>, integrating <b>Firebase</b> for
                    real-time data sync and secure cloud storage
                  </li>
                  <li>
                    Building analytics dashboards to process heart rate,
                    activity, and sleep metrics, turning raw data into insights
                  </li>
                </ul>
              </div>
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm">
                <p className="font-bold">
                  Software Engineer Intern – Texas A&M Health Science Center
                </p>
                <p className="text-sm">May 2024 – September 2024</p>
                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>
                    Worked on frontend and data-layer development building a
                    user-focused digital portal to replace paper forms; reduced
                    nurse data entry time by 70%
                  </li>
                  <li>
                    Engineered <b>50+</b> dynamic intake and assessment
                    workflows in <b>Next.js</b> with reusable React components,
                    collaborating with UI/UX designers to refine form layouts
                    and streamline user flows
                  </li>
                  <li>
                    Implemented <b>PostgreSQL data layer</b> using <b>Prisma ORM</b> models,
                    enabling efficient CRUD operations for robust patient record
                    management
                  </li>
                </ul>
              </div>

              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm">
                <p className="font-bold">
                  Member – Association for Computing Machinery
                </p>
                <p className="text-sm text-gray-700">
                  Workshops, hackathons, and mentorships since Fall 2022.
                </p>
              </div>
            </div>
          </section>
        </div>
      </WindowFrame>
    </main>
  );
}
