import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex w-full h-16 my-3">
      <input
        type="search"
        className="w-10/12 m-0 rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
        placeholder={'Search'}
        aria-label="Search"
        id="exampleFormControlInput2"
        aria-describedby="button-addon2"
      />
      <button className="w-2/12 bg-amber-500 text-white h-full">Search</button>
    </div>
  );
}
