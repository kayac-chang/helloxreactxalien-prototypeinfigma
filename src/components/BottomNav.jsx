import * as Icon from "components/Icon";
import Link from "components/Link";

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 bg-white w-full h-16 border-t">
      <nav className="flex items-center justify-around text-gray-500 h-full">
        <Link className="p-4" to="/discover">
          <Icon.Home className="w-4" />
        </Link>

        <Link className="p-4" to="/search">
          <Icon.Search className="w-4" />
        </Link>

        <button
          className="px-6 py-3 rounded-2xl text-white"
          style={{
            background: `linear-gradient(#FF00D6, #FF4D00)`,
          }}
        >
          <Icon.Plus className="w-3" />
        </button>

        <Link className="p-4" to="/chat">
          <Icon.Chat className="w-4" />
        </Link>

        <Link className="p-4" to="/profile">
          <Icon.Person className="w-3" />
        </Link>
      </nav>
    </footer>
  );
}
