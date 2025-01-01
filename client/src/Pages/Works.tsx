import { useEffect, useState } from "react";

function Works() {
  const [showArrow, setShowArrow] = useState<number>(-1);

  const works = [
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
    {
      id: 5,
      img: "/promptopia.jpg",
      title: "PROMPT GENERATING APP",
      work: "FULL STACK",
      link: "https://github.com/thahsree/nextjs-project1",
    },
    {
      id: 6,
      img: "/next-js.jpg",
      title: "E-COMM PROJECT",
      work: "FRONT END",
      link: "https://github.com/thahsree/next-js-ecommerce",
    },
    {
      id: 7,
      img: "/Nike.jpg",
      title: "NIKE",
      work: "FRONTEND",
      link: "https://github.com/thahsree/nike.com",
    },
    {
      id: 8,
      img: "/netflix.jpg",
      title: "NETFLIX CLONE",
      work: "FRONTEND",
      link: "https://github.com/thahsree/netflix_clone",
    },
    {
      id: 9,
      img: "/bookstore.jpg",
      title: "BOOK STORE",
      work: "FULL STACK",
      link: "https://github.com/thahsree/Book-Store-frontend",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      <div className="flex items-center flex-col mt-48 max-sm:mt-20">
        <h3 className="text-headingColor mt-10 text-8xl font-poppins font-extralight">
          Work
        </h3>
        <p className="text-textColor text-xl font-montserrat w-[30%] text-center font-extralight max-sm:w-full max-sm:px-5">
          My latest developed projects and see how we can help bring your ideas
          to life.
        </p>
      </div>
      <div className="flex flex-wrap mt-16 justify-center gap-12 w-full max-sm:px-5">
        {works.map((item, index) => (
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
              <div className="bg-[#382a1e86] px-4 flex justify-between items-center border border-coppergold bg-opacity-1 backdrop-blur-[10px] w-full h-full">
                <h3 className="text-lg font-montserrat text-headingColor font-semibold">
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

export default Works;
