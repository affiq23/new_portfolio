// components/SkillItem.tsx
export default function SkillItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 border border-black px-3 py-2 bg-white shadow-[inset_1px_1px_#ccc] rounded-sm">
      <img src={icon} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
}
