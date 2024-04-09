"use client";
import MainBtn from "@/components/btns/MainBtn";
import TextInputField from "@/components/form/TextInputField";
import { useState } from "react";

export default function Tab1() {
  //TODO:: define and declare component variable and state
  const [Category, setCategory] = useState("");

  //TODO::define and declare Methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">
        Add Main Category
      </h6>
      <form className="max-w-sm mt-10" onSubmit={handleSubmit}>
        <TextInputField
          placeholder={"Category Name"}
          handleOnChange={(e) => setCategory(e.target.value)}
        />
        <MainBtn text={"Submit"} type={"submit"} className={"w-full mt-5"} />
      </form>
    </>
  );
}
