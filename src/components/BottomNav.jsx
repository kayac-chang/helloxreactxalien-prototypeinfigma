import * as Icon from "components/Icon";

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 bg-white w-full h-16 border-t">
      <nav className="flex items-center justify-around text-gray-500 h-full">
        <button className="p-4">
          <Icon.Home className="w-4" />
        </button>

        <button className="p-4">
          <Icon.Search className="w-4" />
        </button>

        <button
          className="px-6 py-3 rounded-2xl text-white"
          style={{
            background: `linear-gradient(#FF00D6, #FF4D00)`,
          }}
        >
          <Icon.Plus className="w-3" />
        </button>

        <button className="p-4">
          <Icon.Chat className="w-4" />
        </button>

        <button className="p-4">
          <Icon.Person className="w-3" />
        </button>
      </nav>
    </footer>
  );
}
