export function Default({ type, placeholder }) {
  return (
    <input
      type={type}
      className="px-4 py-3 border-2 border-black w-full"
      placeholder={placeholder}
    />
  );
}

export function Text(props) {
  return <Default type="text" {...props} />;
}

export function Password(props) {
  return <Default type="password" {...props} />;
}
