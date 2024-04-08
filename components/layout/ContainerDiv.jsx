export default function ContainerDiv({ className, children }) {
  return (
    <div
      className={`flex justify-center items-center w-full ${className ?? ""}`}
    >
      <div className="w-10/12">{children}</div>
    </div>
  );
}
