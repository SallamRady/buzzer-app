"use client";
import MainBtn from "@/components/btns/MainBtn";
import TextInputField from "@/components/form/TextInputField";
import { useState } from "react";

export default function Tab2() {
  //TODO:: define and declare component variable and state
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  //TODO::define and declare Methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">
        Add Sub Category
      </h6>
      <form className="max-w-sm mt-10" onSubmit={handleSubmit}>
        <select class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a Main Category</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
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
