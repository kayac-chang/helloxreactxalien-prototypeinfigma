import clsx from "clsx";

export function push(to) {
  return window.history.pushState({}, "", to);
}

export default function Link({ to, children, className }) {
  return (
    <a
      className={clsx(className)}
      href={to}
      onClick={(event) => {
        event.preventDefault();

        push(to);
      }}
    >
      {children}
    </a>
  );
}
