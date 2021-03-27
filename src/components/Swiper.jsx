import clsx from "clsx";
import { Children, cloneElement, useState } from "react";

function debounce(ms, callback) {
  let timeout = undefined;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => callback(...args), ms);
  };
}

function clamp(min, max, value) {
  return Math.min(Math.max(min, value), max);
}

function useSwiper(count) {
  const [isPointerDown, setPointerDown] = useState(false);
  const [current, setCurrent] = useState(0);

  const clampByCount = (value) => clamp(0, count - 1, value);
  const onPointerDown = () => setPointerDown(true);
  const onPointerMove = debounce(100, (event) => {
    if (!isPointerDown) return;

    const direction = Math.sign(event.movementX);
    setCurrent((current) => clampByCount(current - direction));
  });

  return {
    current,
    onPointerDown,
    onPointerMove,
  };
}

export default function Swiper({ children = [], duration = 300 }) {
  const { current, ...swiper } = useSwiper(children.length);

  return (
    <div className="flex flex-nowrap overflow-hidden pointer-auto" {...swiper}>
      {Children.map(children, (el) =>
        cloneElement(el, {
          className: clsx(el.props.className, "flex-none"),
          style: {
            transform: `translateX(${current * -100}%)`,
            transitionProperty: "transform",
            transitionDuration: `${duration}ms`,
          },
        })
      )}
    </div>
  );
}
