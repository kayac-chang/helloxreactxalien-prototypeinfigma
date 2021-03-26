import * as Icon from "components/Icon";

export function Form({ title, children }) {
  return (
    <div className="flex flex-col px-4">
      <header className="h-16 flex items-center">
        <button className="py-2 pr-2">
          <Icon.Back className="w-4" />
        </button>
      </header>

      <main>
        <h1 className="pb-8 text-4xl font-medium font-comfortaa">{title}</h1>

        <form
          className="text-sm space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          {children}
        </form>
      </main>
    </div>
  );
}
