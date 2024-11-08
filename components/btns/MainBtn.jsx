export default function MainBtn({ text, type, className }) {
  return (
    <button
      type={type ?? "button"}
      className={`
      text-gray-900 
      bg-white
      border-amber-400
      border-2
      focus:outline-none 
      hover:bg-gray-100 
      focus:ring-4 
      focus:ring-gray-100 
      font-medium rounded-lg 
      text-sm px-5 py-2.5 
      me-2 mb-2 
     dark:bg-gray-800
     dark:text-white 
     dark:border-gray-600
     dark:hover:bg-gray-700
     dark:hover:border-gray-600 
     dark:focus:ring-gray-700 
     ${className ?? ""}`}
    >
      {text}
    </button>
  );
}
