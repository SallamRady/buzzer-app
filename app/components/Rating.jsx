import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Ratting() {
  return (
    <div className="w-full text-center">
      <div className="inline-flex items-center">
        <FaStar className="text-amber-500 text-2xl" />
        <FaStar className="text-amber-500 text-2xl" />
        <FaStar className="text-amber-500 text-2xl" />
        <FaRegStar className="text-2xl" />
      </div>
    </div>
  );
}
