"use client";
import { readAllData } from "@/model/category.model";
import { useEffect, useState } from "react";

export default function Tab3() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getMainCatsData();
  }, []);

  const getMainCatsData = async () => {
    let arr = await readAllData();
    setCategories(arr);
  };
  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">
        Show Categories
      </h6>
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        {categories.map((item) => {
          return (
            <li key={item.id}>
              {item.caterory}
              {item.children.length > 0 && (
                <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  {item.children.map((val, idx) => (
                    <li key={idx}>{val}</li>
                  ))}
                </ol>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
