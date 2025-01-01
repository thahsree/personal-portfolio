import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectedWorks() {
  const [showArrow, setShowArrow] = useState<number>(-1);

  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      img: "/MERN-e-comm.jpg",
      title: "E-COMM PROJECT",
      work: "FULL STACK",
      link: "https://github.com/thahsree/clothes-shopping",
    },
    {
      id: 2,
      img: "/booking.jpg",
      title: "BOOKING.COM CLONE",
      work: "FULL STACK",
      link: "https://github.com/thahsree/Hotel_Booking",
    },
    {
      id: 3,
      img: "/weather.jpg",
      title: "LIVE WEATHER APP",
      work: "FULL STACK",
      link: "https://github.com/thahsree/weatherApp",
    },
    {
      id: 4,
      img: "/tourism.jpg",
      title: "TOURISM WEBSITE",
      work: "FRONT END",
      link: "https://github.com/thahsree/-kerala_tourism",
    },
  ];
  return (
    <div className="flex flex-col gap-3 w-full min-h-[100vh] px-16 mt-28 text-textColor max-sm:px-5">
      <div className="flex w-full px-1 justify-between items-center h-max">
        <p className="text-3xl font-poppins font-light max-sm:text-base">
          SELECTED WORKS
        </p>
        <div className="flex items-center gap-3">
          <div
            onClick={() => navigate("/works")}
            className="h[30px] w-[30px] rounded-full border border-coppergold p-1 bg-coppergold cursor-pointer"
          >
            <img src="/arrowupright.svg" alt="" className="w-full h-full" />
          </div>
          <p className="text-base font-poppins font-light max-sm:text-sm">
            SEE ALL
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-16 justify-center gap-12 w-full max-sm:mt-3">
        {projects.map((item, index) => (
          <a
            key={index}
            className="w-[45%] h-[500px] relative border border-coppergold cursor-pointer max-sm:w-full"
            onMouseEnter={() => setShowArrow(index)}
            onMouseLeave={() => setShowArrow(-1)}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`absolute w-[40px] h-[40px] flex items-center justify-center top-[50%] left-[50%] z-10 border border-coppergold2 rounded-full bg-[#463a29d6] transition-all duration-500 ease-in-out ${
                showArrow === index
                  ? "opacity-100 scale-100 animate-rotate"
                  : "opacity-0 scale-65"
              }`}
            >
              <img
                src="/arrowupright.svg"
                alt=""
                className="w-full h-full p-2 "
              />
            </div>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-fill z-0"
            />
            <div className="absolute flex w-[100%] h-[20%] bottom-[0%] left-0 z-30  px-10 py-5 max-sm:px-0 max-sm:-bottom-5">
              <div className="bg-[#382a1e86] px-4 flex justify-between items-center border border-coppergold bg-opacity-2 backdrop-blur-[10px] w-full h-full">
                <h3 className="text-lg font-montserrat text-headingColor font-semibold max-sm:text-base">
                  {item.title}
                </h3>
                <h3 className="text-sm font-montserrat font-base text-headingColor">
                  {item.work}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SelectedWorks;
