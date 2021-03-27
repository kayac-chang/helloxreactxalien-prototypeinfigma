import clsx from "clsx";
import { Children, cloneElement } from "react";

export default function Gallery({ children }) {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen overflow-hidden">
      {Children.map(children, (el, index) =>
        cloneElement(el, {
          className: clsx(el.props.className, index % 2 || "-mt-20"),
        })
      )}
    </div>
  );
}
