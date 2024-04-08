export default function IconBtn({ icon, className }) {
  return (
    <button
      type="button"
      className={`border border-slate-400 bg-slate-400 hover:bg-slate-700 text-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-slate-500 dark:text-slate-500 dark:hover:text-white dark:focus:ring-slate-800 dark:hover:bg-slate-500 ${className}`}
    >
      {icon}
    </button>
  );
}
