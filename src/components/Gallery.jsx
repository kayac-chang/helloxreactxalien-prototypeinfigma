import clsx from "clsx";

export default function Gallery({ resources }) {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen overflow-hidden">
      {resources.map((src, index) => (
        <div key={src} className={clsx({ "-mt-20": !(index % 2) })}>
          <img src={src} alt="img" className="object-cover h-80" />
        </div>
      ))}
    </div>
  );
}
