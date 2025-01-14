import { useEffect } from "react";
import { AboutMe } from "../components";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full h-[200vh] flex max-sm:flex-col max-sm:h-max">
      <div className="sticky top-32 h-[500px] mt-56 w-[40%] px-12 max-sm:block max-sm:relative max-sm:w-full max-sm:mt-2 max-sm:px-5">
        <div className="h-[500px] w-[500px] max-sm:w-full">
          <img
            src="/Me2.jpeg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-[60%] h-full text-textColor mt-52 px-12 max-sm:w-full max-sm:px-7">
        <div className="w-[70%] max-sm:w-full">
          <h3 className="text-headingColor text-start text-8xl font-poppins font-extralight max-sm:text-5xl">
            Muhammed <br />
            Thashreef
          </h3>
          <p className="text-xl font-montserrat text-wrap font-extralight mt-5 max-sm:mt-2 max-sm:text-base ">
            Delivering Premium Web Design and Development Services to Boost Your
            Online Presence.
          </p>
        </div>
        <AboutMe />
      </div>
    </div>
  );
}

export default About;
