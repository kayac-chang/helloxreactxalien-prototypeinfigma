export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10">{children}</div>
  );
}
