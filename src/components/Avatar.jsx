export function Small({ src, name, id }) {
  return (
    <div className="flex space-x-2">
      <span className="rounded-full overflow-hidden w-8">
        <img src={src} alt={`${name}'s avatar`} />
      </span>

      <div className="text-xs flex flex-col justify-center">
        <span className="font-bold">{name}</span>
        <span className="text-gray-400">{id}</span>
      </div>
    </div>
  );
}

export function Big({ user }) {
  return (
    <div className="flex flex-col items-center py-8 space-y-8">
      <img className="rounded-full w-32" src={user.avatar} alt="user avatar" />

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-comfortaa">{user.name}</h1>
        <p className="text-sm font-bold">{user.location}</p>
      </div>
    </div>
  );
}
