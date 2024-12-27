import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-7 left-[30%] px-6 py-3 border-[1px] border-coppergold bg-coppergold z-50 text-textColor backdrop-blur-xl bg-opacity-5">
      <div className="flex gap-7 items-center">
        <h3
          onClick={() => navigate("/")}
          className="font-thin text-2xl font-baloo cursor-pointer"
        >
          thashree.
        </h3>
        <ul className="flex gap-7">
          <li className="text-sm font-montserrat font-normal cursor-pointer py-1 relative group">
            SERVICES
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dac5a7] transition-all duration-300 group-hover:w-full "></span>
          </li>
          <li
            onClick={() => navigate("/works")}
            className="text-sm font-montserrat font-normal cursor-pointer py-1 relative group"
          >
            WORK
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dac5a7] transition-all duration-300 group-hover:w-full "></span>
          </li>
          <li
            onClick={() => navigate("/about")}
            className="text-sm font-montserrat font-normal  cursor-pointer py-1 relative group"
          >
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dac5a7] transition-all duration-300 group-hover:w-full "></span>
          </li>
          <li className="text-sm font-montserrat font-normal  cursor-pointer py-1 relative group">
            BLOG
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dac5a7] transition-all duration-300 group-hover:w-full "></span>
          </li>
        </ul>
        <button
          onClick={() => navigate("/contact")}
          className="px-4 py-2 bg-[#dac5a7] text-gray-900 font-mono text-sm font-extralight rounded-[2px] text-center outline-none"
        >
          LET'S TALK
        </button>
      </div>
    </div>
  );
}

export default Navbar;
