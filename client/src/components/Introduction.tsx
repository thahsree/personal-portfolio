function Introduction() {
  const social = [
    { index: 1, img: "/github.svg" },
    { index: 2, img: "/linkedin.svg" },
    { index: 3, img: "/instagram.svg" },
    { index: 4, img: "/facebook.svg" },
  ];
  return (
    <div className="flex w-full flex-col mt-44 gap-20 max-sm:mt-20">
      <div className="flex w-full justify-evenly px-28 max-sm:flex-col max-sm:px-0 max-sm:items-center max-sm:hidden">
        <h3 className="text-headingColor text-8xl italic font-nunito font-light max-sm:text-4xl">
          MUHAMMED
        </h3>
        <h3 className="text-headingColor text-8xl italic font-nunito font-light max-sm:text-4xl">
          THASHREEF
        </h3>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-10">
        <div className="flex-1 flex flex-col items-center px-10 max-sm:px-0">
          <p className="font-poppins text-textColor text-4xl text-wrap font-extralight text-center max-sm:text-2xl">
            A website that leaves
            <br />
            <span className="italic"> a lasting impression! </span>
          </p>
        </div>
        <div className="flex-1 px-10 ">
          <p className="px-14 text-textColor font-montserrat font-light mr-16 max-sm:px-0 max-sm:mr-0 max-sm:w-full max-sm:text-justify">
            Hi, I am Thashreef - a Full Stack Developer specializing in creative
            builiding websites using MERN Stack. I'm passionate about creating
            unique and effective web-applications , and I bring a personal touch
            to every project. Lets work together to bring your vision to life!
          </p>
          <div className="flex px-14 pt-5 gap-5 max-sm:px-5">
            {social.map((item) => (
              <div
                className="w-[40px] h-[40px] border border-coppergold p-1 rounded-full bg-coppergold2 cursor-pointer overflow-hidden"
                key={item.index}
              >
                <img src={item.img} alt="social-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
