export default function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-bold">{title}</h2>

      {children}
    </section>
  );
}
