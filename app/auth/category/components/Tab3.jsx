export default function Tab3() {
  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">
        Show Categories
      </h6>
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>
          Main Category 1
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ol>
        </li>
      </ul>
    </>
  );
}
