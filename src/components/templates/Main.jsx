import BottomNav from "components/BottomNav";

export function Main({ title, children }) {
  return (
    <>
      <div className="flex flex-col px-4 pb-16">
        <header>
          <h1 className="py-8 text-4xl font-medium font-comfortaa">{title}</h1>
        </header>

        <main>{children}</main>
      </div>

      <BottomNav />
    </>
  );
}
