export default function ContainerDiv({ children }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-11/12">{children}</div>
    </div>
  );
}
