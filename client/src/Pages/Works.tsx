import { useEffect, useState } from "react";

function Works() {
  const [showArrow, setShowArrow] = useState<number>(-1);

  const works = [
    {
      id: 1,
      img: "/MERN-e-comm.jpg",
      title: "E-COMM PROJECT",
      work: "FULL STACK",
    },
    {
      id: 2,
      img: "/booking.jpg",
      title: "BOOKING.COM CLONE",
      work: "FULL STACK",
    },
    {
      id: 3,
      img: "/next-js.jpg",
      title: "E-COMM PROJECT",
      work: "FRONT END",
    },
    {
      id: 4,
      img: "/tourism.jpg",
      title: "TOURISM WEBSITE",
      work: "FRONT END",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      <div className="flex items-center flex-col mt-48">
        <h3 className="text-headingColor mt-10 text-8xl font-poppins font-extralight">
          Work
        </h3>
        <p className="text-textColor text-xl font-montserrat w-[30%] text-center font-extralight">
          My latest developed projects and see how we can help bring your ideas
          to life.
        </p>
      </div>
      <div className="flex flex-wrap mt-16 justify-center gap-12 w-full">
        {works.map((item, index) => (
          <div
            key={index}
            className="w-[45%] h-[500px] relative border border-coppergold cursor-pointer"
            onMouseEnter={() => setShowArrow(index)}
            onMouseLeave={() => setShowArrow(-1)}
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
            <div
              className="absolute inset-0 opacity-30 z-10"
              style={{
                background: "radial-gradient(circle, #c8c1b6, #443622c0)",
              }}
            ></div>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-fill z-0"
            />
            <div className="absolute flex w-[100%] h-[20%] bottom-[0%] left-0 z-30  px-10 py-5">
              <div className="bg-[#382a1e86] px-4 flex justify-between items-center border border-coppergold bg-opacity-5 backdrop-blur-[10px] w-full h-full">
                <h3 className="text-xl font-poppins text-textColor font-base">
                  {item.title}
                </h3>
                <h3 className="text-sm font-poppins font-light text-textColor">
                  {item.work}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
