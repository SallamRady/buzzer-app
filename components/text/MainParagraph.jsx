export default function MainParagraph({ statment, className }) {
  return (
    <p className={`mb-3 text-gray-500 dark:text-gray-400 my-2 ${className ?? ""}`}>
      {statment}
    </p>
  );
}
