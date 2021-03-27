import { useEffect, useState } from "react";

((global) => {
  const history = global.history;
  const pushState = history.pushState;

  history.pushState = (...args) => {
    pushState.apply(history, args);

    if (typeof global.onpushstate === "function") {
      const [state] = args;

      global.onpushstate({ state });
    }
  };
})(window);

const Location = ({
  hash,
  host,
  hostname,
  href,
  origin,
  pathname,
  port,
  protocol,
}) => ({
  hash,
  host,
  hostname,
  href,
  origin,
  pathname,
  port,
  protocol,
});

export default function useLocation() {
  const [location, setLocation] = useState(() => Location(window.location));

  useEffect(() => {
    window.onpushstate = () => setLocation(Location(window.location));
    window.onpopstate = () => setLocation(Location(window.location));
  }, []);

  return location;
}
