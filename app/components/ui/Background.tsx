type Props = { mx: number; my: number };

export function Background({ mx, my }: Props) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(600px circle at ${mx}px ${my}px, rgba(167,139,250,.12), transparent 45%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(56,189,248,.10),transparent_60%),radial-gradient(80%_120%_at_100%_0%,rgba(167,139,250,.10),transparent_60%),radial-gradient(100%_120%_at_50%_120%,rgba(52,211,153,.10),transparent_60%)]" />
    </div>
  );
}
