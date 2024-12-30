import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isHamClicked, setIsHamClicked] = useState(false);

  return (
    <div className="fixed w-[100vw] top-7 left-0 flex justify-center z-50 max-sm:flex-col max-sm:px-5 max-sm:gap-2">
      <div className="border border-coppergold bg-coppergold/30 text-textColor px-6 py-3 backdrop-blur-lg max-sm:px-2">
        <div className="flex gap-7 items-center max-md:justify-between">
          <h3
            onClick={() => {
              navigate("/");
              isHamClicked && setIsHamClicked(false);
            }}
            className="font-thin text-2xl font-baloo cursor-pointer max-sm:text-xl"
          >
            thashree.
          </h3>
          <ul className="flex gap-7 max-sm:hidden">
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
            className="px-4 py-2 bg-[#dac5a7] text-gray-900 font-mono text-sm max-sm:text-xs font-extralight rounded-[2px] text-center outline-none max-md:px-3 max-md:py-1 max-sm:hidden"
          >
            LET'S TALK
          </button>
          <button
            onClick={() => setIsHamClicked((prev) => !prev)}
            className="hidden max-sm:flex flex-col gap-1 h-[25px] justify-center items-center"
          >
            <span
              className={`w-[20px] h-[1px] bg-[#dac5a7] transition-transform duration-300 ${
                isHamClicked ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            ></span>
            <span
              className={`w-[20px] h-[1px] bg-[#dac5a7] transition-transform duration-300 ${
                isHamClicked ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
              style={{ transformOrigin: "center" }}
            ></span>
            <span
              className={`w-[20px] h-[1px] bg-[#dac5a7] transition-transform duration-300 ${
                isHamClicked ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      {isHamClicked && (
        <div className="border border-coppergold bg-coppergold/30 text-textColor px-6 py-3 backdrop-blur-lg max-sm:px-2">
          <ul className="text-center text-sm">
            <li className="border-b border-b-coppergold py-2">SERVICES</li>
            <li
              onClick={() => {
                navigate("/works");
                setIsHamClicked(false);
              }}
              className="border-b border-b-coppergold py-2"
            >
              WORK
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setIsHamClicked(false);
              }}
              className="border-b border-b-coppergold py-2"
            >
              ABOUT
            </li>
            <li className="border-b border-b-coppergold py-2">BLOG</li>
            <li
              onClick={() => {
                navigate("/contact");
                setIsHamClicked(false);
              }}
              className="py-2"
            >
              CONTACT
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
