import WindowFrame from "@/components/WindowFrame";

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 font-[Tahoma] text-[15px]">
      <WindowFrame title="Skills" titleFont="Trebuchet MS">
        <div className="space-y-2 text-sm">
          <p>
            JavaScript: <span className="text-green-600">███████░░░</span>
          </p>
          <p>
            Python: <span className="text-green-600">██████████</span>
          </p>
          <p>
            React: <span className="text-green-600">████████░░</span>
          </p>
        </div>
      </WindowFrame>
    </main>
  );
}
