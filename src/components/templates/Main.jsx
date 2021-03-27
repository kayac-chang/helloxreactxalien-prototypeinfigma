import clsx from "clsx";
import BottomNav from "components/BottomNav";

export function Main({ title, children, className }) {
  return (
    <>
      <div className={clsx("flex flex-col pb-16", className)}>
        {title && (
          <header>
            <h1 className="py-8 text-4xl font-medium font-comfortaa">
              {title}
            </h1>
          </header>
        )}

        <main>{children}</main>
      </div>

      <BottomNav />
    </>
  );
}
