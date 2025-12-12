type Props = { title: string; desc: string };

export function GlassCard({ title, desc }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
      <h3 className="text-base">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  );
}
