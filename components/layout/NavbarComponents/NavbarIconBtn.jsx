export default function NavbarIconBtn({ icon, handleOnClick }) {
  //* return ui
  return (
    <button
      type="button"
      className=" text-slate-300 hover:text-slate-500 font-medium rounded-full p-2.5 text-center inline-flex items-center"
      onClick={handleOnClick}
    >
      {icon}
    </button>
  );
}
