function Services() {
  return (
    <div className="flex px-16 text-textColor gap-7 justify-between max-md:flex-col max-sm:px-8">
      {/* WEB DEVELOPMENT */}

      <div className="flex flex-col w-[35%] gap-2 border border-coppergold bg-coppergold p-10 max-sm:w-full">
        <p className="text-base text-coppergold2">01</p>
        <h3 className="text-3xl font-light font-suse">WEB DEVELOPMENT</h3>
        <p className="text-base font-extralight text-justify font-nunito mt-3">
          Get custom web development solutions that are tailored to your
          specifications, designed to deliver a flawless user experience.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <div className="w-[30px] h-[30px] rounded-full p-1 bg-coppergold2 border border-coppergold flex items-center justify-center cursor-pointer text-xl font-extrabold">
            <img src="/arrowupright.svg" alt="arrow" />
          </div>
          <h5 className="text-base font-poppins font-light">
            ABOUT DEVELOPMENT
          </h5>
        </div>
      </div>

      {/* WEB DESIGN */}

      <div className="flex flex-col w-[35%] gap-2 border border-coppergold bg-coppergold p-10 max-sm:w-full">
        <p className="text-base text-coppergold2">02</p>
        <h3 className="text-3xl font-light font-suse">WEB DESIGN</h3>
        <p className="text-base font-extralight text-justify font-nunito mt-3">
          Visually stunning web designs that captivate your audience by blending
          your brand voice and customer needs.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <div className="w-[30px] h-[30px] rounded-full p-1 bg-coppergold2 border border-coppergold flex items-center justify-center cursor-pointer text-xl font-extrabold">
            <img src="/arrowupright.svg" alt="" />
          </div>
          <h5 className="text-base font-poppins font-light">ABOUT DESIGN</h5>
        </div>
      </div>

      {/* SEO */}

      <div className="flex flex-col w-[35%] gap-2 border border-coppergold bg-coppergold p-10 max-sm:w-full">
        <p className="text-base text-coppergold2">03</p>
        <h3 className="text-3xl font-light font-suse">CONTENT & SEO</h3>
        <p className="text-base font-extralight text-justify font-nunito mt-3">
          Proven SEO strategies that enhance your online performance, bringing
          you to the forefront of organic search results.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <div className="w-[30px] h-[30px] rounded-full p-1 bg-coppergold2 border border-coppergold flex items-center justify-center cursor-pointer text-xl font-extrabold">
            <img src="/arrowupright.svg" alt="" />
          </div>
          <h5 className="text-base font-poppins font-light">ABOUT SEO</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;
