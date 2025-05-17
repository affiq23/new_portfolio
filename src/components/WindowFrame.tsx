// components/WindowFrame.tsx
"use client";

type WindowFrameProps = {
  title: string;
  children: React.ReactNode;
  titleFont?: string;
};

export default function WindowFrame({
  title,
  children,
  titleFont,
}: WindowFrameProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-6 border border-black shadow-[4px_4px_0_rgba(0,0,0,1)] bg-white rounded-sm">
      <div
        className={`bg-blue-700 text-white px-3 py-1 flex justify-between items-center text-sm font-bold ${
          titleFont ? `font-['${titleFont}']` : ""
        }`}
      >
        <span className="text-lg">{title}</span>
        <div className="flex gap-1">
          <button className="bg-red-600 text-white w-5 h-5 text-xs border border-black">
            _
          </button>
          <button className="bg-red-600 text-white w-5 h-5 text-xs border border-black">
            ☐
          </button>
          <button className="bg-red-600 text-white w-5 h-5 text-xs border border-black">
            X
          </button>
        </div>
      </div>
      <div className="p-4 text-black text-[15px] font-[Tahoma]">{children}</div>
    </div>
  );
}
