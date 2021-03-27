export default function Avatar({ src, name, id }) {
  return (
    <div className="flex space-x-2 py-4">
      <span className="rounded-full overflow-hidden w-8">
        <img src={src} alt={`${name}'s avatar`} />
      </span>

      <div className="text-xs flex flex-col justify-center">
        <span className="font-bold">{name}</span>
        <span className="text-gray-500">{id}</span>
      </div>
    </div>
  );
}
