"use client";
import MainBtn from "@/components/btns/MainBtn";
import TextInputField from "@/components/form/TextInputField";
import { createSubCategory, readAllData } from "@/model/category.model";
import { useEffect, useState } from "react";

export default function Tab2() {
  //TODO:: define and declare component variable and state
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getMainCatsData();
  }, []);
  //TODO::define and declare Methods
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await createSubCategory({
        id: mainCategory,
        subCategory,
      });
      if (response) {
        alert("Subcategory created suucessfuly :)");
      } else {
        alert("Save SubCat. Faild :(");
      }
    } catch (error) {
      console.log("Error create sub cat client::", error);
      alert("Save SubCat. Faild :(");
    }
  };

  const getMainCatsData = async () => {
    let arr = await readAllData();
    setOptions(arr);
  };

  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">
        Add Sub Category
      </h6>
      <form className="max-w-sm mt-10" onSubmit={handleSubmit}>
        <select
          onChange={(e) => setMainCategory(e.target.value)}
          class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a Main Category</option>
          {options.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.caterory}
              </option>
            );
          })}
        </select>
        <TextInputField
          placeholder={"Sub Category Name"}
          handleOnChange={(e) => setSubCategory(e.target.value)}
        />
        <MainBtn text={"Submit"} type={"submit"} className={"w-full mt-5"} />
      </form>
    </>
  );
}
