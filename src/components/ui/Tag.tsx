export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
