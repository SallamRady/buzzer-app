"use client";
import SectionHeader from "@/app/components/SectionHeader";
import { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";

export default function CategoriesPanel() {
  // TODO ::declare and define component state and variables
  const [activeTab, setActiveTab] = useState("Tab1");

  // TODO::declare and define active tab
  const ViewActiveTab = () => {
    switch (activeTab) {
      case "Tab1":
        return <Tab1 />;
      case "Tab2":
        return <Tab2 />;
      case "Tab3":
        return <Tab3 />;
    }
  };

  //*   return ui
  return (
    <>
      <SectionHeader text={"Extra Point Categories Panel"} />
      <div className="flex justify-around items-center my-2">
        <button
          type={"button"}
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
     dark:focus:ring-gray-700 `}
          onClick={() => setActiveTab("Tab1")}
        >
          Add Main Category
        </button>
        <button
          type={"button"}
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
     dark:focus:ring-gray-700 `}
          onClick={() => setActiveTab("Tab2")}
        >
          Add Sub Category
        </button>
        <button
          type={"button"}
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
     dark:focus:ring-gray-700 `}
          onClick={() => setActiveTab("Tab3")}
        >
          Show Categories
        </button>
      </div>
      <hr />
      <ViewActiveTab />
    </>
  );
}
