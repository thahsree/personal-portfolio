import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const path = location.pathname;
  const navigate = useNavigate();

  const renderElements = () => {
    let arr = [];

    for (let i = 0; i < 40; i++) {
      arr.push(
        <div key={i} className="relative mr-[20px] inline-block p-1">
          <div className="flex gap-[20px]">
            <p className="text-sm font-nunito font-light max-sm:text-xs">+++</p>
            <p className="text-sm font-nunito font-light max-sm:text-xs">
              LETS TALK
            </p>
          </div>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="text-textColor flex flex-col w-full justify-between bg-coppergold mt-28 pb-32 overflow-hidden">
      <div className="whitespace-nowrap animate-slideFooter w-max border border-coppergold bg-coppergold2 py-2 max-sm:py-1 overflow-hidden">
        {renderElements()}
      </div>
      <div className="px-12 flex flex-col max-sm:px-5">
        <div className="mt-32 flex items-center justify-center flex-col max-sm:gap-6">
          <p className="text-center text-textColor text-base max-sm:text-xs font-poppins leading-none mt-12 max-sm:mt-2">
            PROJECT IN MIND?
          </p>
          <h3 className="text-headingColor text-[120px] max-sm:text-6xl font-extralight text-center leading-snug max-sm:w-full">
            Lets make your <br />
            <span className="italic"> Website Shine</span>
          </h3>
          <p className="text-center font-extralight text-xl w-[40%] font-montserrat max-sm:w-full max-sm:px-12">
            Premium web design, development, and SEO services to help your
            business stand out.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 mt-12 border-none outline-none bg-[#dac5a7] text-gray-900 px-6 py-2 rounded "
          >
            GET IN TOUCH
            <div className="w-[20px] h-[20x] flex items-center rounded-full">
              <img
                src="/arrowuprightblack.svg"
                alt="toprightarrow"
                className="w-full h-full"
              />
            </div>
          </button>
        </div>
        <div className="flex  mt-48 w-full justify-between max-sm:flex-col gap-12 max-sm:mt-16">
          <div className="flex flex-col">
            <h3 className="text-2xl font-baloo">thashree.</h3>
            <ul className="px-5 mt-12 flex flex-col gap-5 max-sm:px-0 max-sm:mt-7">
              {/* github */}

              <li className="flex gap-5 items-center">
                <a
                  href="https://github.com/thahsree"
                  target="_blank"
                  className="w-[40px] h-[40px] bg-coppergold border border-coppergold rounded-full overflow-hidden p-1"
                >
                  <img src="/github.svg" alt="" className="w-full h-full" />
                </a>
                <h3 className="text-sm font-montserrat">GITHUB</h3>
              </li>

              {/* linkedin */}

              <li className="flex gap-5 items-center">
                <a
                  href="https://linkedin.com/in/thashreefch"
                  target="_blank"
                  className="w-[40px] h-[40px] bg-coppergold border border-coppergold rounded-full overflow-hidden p-2"
                >
                  <img src="/linkedin.svg" alt="" className="w-full h-full" />
                </a>
                <h3 className="text-sm font-montserrat">LINKEDIN</h3>
              </li>

              {/* instagram */}
              <li className="flex gap-5 items-center">
                <a
                  href="https://www.instagram.com/tha.shree_/"
                  target="_blank"
                  className="w-[40px] h-[40px] bg-coppergold border border-coppergold rounded-full overflow-hidden p-1"
                >
                  <img src="/instagram.svg" alt="" className="w-full h-full" />
                </a>
                <h3 className="text-sm font-montserrat">INSTAGRAM</h3>
              </li>

              {/* facebook */}

              <li className="flex gap-5 items-center">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="w-[40px] h-[40px] bg-coppergold border border-coppergold rounded-full overflow-hidden "
                >
                  <img src="/facebook.svg" alt="" className="w-full h-full" />
                </a>
                <h3 className="text-sm font-montserrat">FACEBOOK</h3>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-light font-roboto">Pages</h3>
            <ul className="font-roboto text-sm flex flex-col gap-5">
              <li
                className={`${
                  path === "/" ? "text-textColor" : "text-coppergold2"
                }`}
              >
                HOME
              </li>
              <li
                className={`${
                  path === "/services" ? "text-textColor" : "text-coppergold2"
                }`}
              >
                SERVICES
              </li>
              <li
                className={`${
                  path === "/about" ? "text-textColor" : "text-coppergold2"
                }`}
              >
                ABOUT
              </li>
              <li
                className={`${
                  path === "/contact" ? "text-textColor" : "text-coppergold2"
                }`}
              >
                CONTACT
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-light font-roboto">CMS</h3>
            <ul className="font-roboto text-sm flex flex-col gap-5">
              <li
                className={`${
                  path === "/works" ? "text-textColor" : "text-coppergold2"
                }`}
              >
                WORK
              </li>
              <li className="text-coppergold2">WORK SINGLE</li>
              <li className="text-coppergold2">BLOG</li>
              <li className="text-coppergold2">BLOG SINGLE</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-light font-roboto">UTILITY PAGES</h3>
            <ul className="font-roboto text-sm flex flex-col gap-5">
              <li className="text-coppergold2">ERROR 404</li>
              <li className="text-coppergold2">STYLE GUIDE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
