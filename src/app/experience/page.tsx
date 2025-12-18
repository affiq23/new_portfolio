import WindowFrame from "@/components/WindowFrame";

export default function ExperiencePage() {
  return (
    <main className="space-y-8 text-[15px] font-[Tahoma]">
      {" "}
      <WindowFrame title="Experience" titleFont="Trebuchet MS">
        <div className="space-y-6 text-sm text-black">
          <section>
            <div className="space-y-3">
              {/* SRE/DevOps Fellow */}
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm flex items-start space-x-4">
                <img
                  src="/mlh.jpg"
                  alt="Major League Hacking Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-bold">
                    Site Reliability Engineer Fellow – Major League Hacking
                  </p>
                  <p className="text-sm">June 2025 – August 2025</p>
                  <ul className="list-disc ml-5 mt-3 space-y-1">
                    <li>
                      Developed <b>Flask</b> application with <b>Python ORM</b>{" "}
                      for efficient data modeling and database interactions
                    </li>
                    <li>
                      Containerized application and <b>MySQL</b> services using{" "}
                      <b>Docker</b> for consistent deployment environments
                    </li>
                    <li>
                      Implemented comprehensive monitoring stack with{" "}
                      <b>Prometheus</b> metrics, <b>Grafana</b> dashboards, and
                      automated CI/CD pipelines via GitHub Actions
                    </li>
                  </ul>
                </div>
              </div>

              {/* UTDesign Studio */}
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm flex items-start space-x-4">
                <img
                  src="/utdesign.jpg"
                  alt="UTDesign Studio Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-bold">
                    Software Developer Intern – UTDesign Studio
                  </p>
                  <p className="text-sm">June 2025 – August 2025</p>
                  <ul className="list-disc ml-5 mt-3 space-y-1">
                    <li>
                      Built internal real-time event calendar and merchandise
                      application for client using <b>Vue.js</b>, <b>Nuxt.js</b>
                      , and <b>Prisma</b>, enabling seamless event scheduling
                      and inventory tracking
                    </li>
                    <li>
                      Developed RESTful API endpoints with <b>Express.js</b> for
                      event operations, user session management, and push
                      notifications
                    </li>
                    <li>
                      Implemented secure email verification system with
                      token-based authentication to enhance account security and
                      user onboarding
                    </li>
                  </ul>
                </div>
              </div>

              {/* Texas A&M */}
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm flex items-start space-x-4">
                <img
                  src="/tamu.jpg"
                  alt="Texas A&M Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-bold">
                    Software Engineering Intern – Texas A&M Health Science
                    Center
                  </p>
                  <p className="text-sm">May 2024 – August 2024</p>
                  <ul className="list-disc ml-5 mt-3 space-y-1">
                    <li>
                      Built internal digital intake portal with dynamic frontend
                      forms and integrated backend data layer, reducing manual
                      data entry by streamlining workflow processes
                    </li>
                    <li>
                      Designed <b>20+</b> responsive UI components in{" "}
                      <b>Next.js</b> with reusable <b>React</b> architecture,
                      improving form layouts and user experience consistency
                    </li>
                    <li>
                      Optimized <b>PostgreSQL</b> database operations using{" "}
                      <b>Prisma ORM</b> models, implementing efficient CRUD
                      functionality for scalable record management
                    </li>
                  </ul>
                </div>
              </div>

              {/* ACM */}
              <div className="border border-black bg-white p-4 shadow-[inset_1px_1px_#ccc] rounded-sm flex items-start space-x-4">
                <img
                  src="/acm.png"
                  alt="ACM Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-bold">
                    Member – Association for Computing Machinery
                  </p>
                  <p className="text-sm text-gray-700">
                    Workshops, hackathons, and mentorships since Fall 2022.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </WindowFrame>
    </main>
  );
}
