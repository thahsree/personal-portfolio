function AboutMe() {
  return (
    <div className="flex flex-col w-full h-full mt-24 max-sm:mt-10">
      <div className="flex items-center gap-2">
        <div className="w-[35px] h-[35px] rounded-full p-1 bg-coppergold border border-coppergold">
          <img src="/arrowdown.svg" alt="" className="w-full h-full" />
        </div>
        <h3 className="poppins text-lg font-light">ABOUT ME</h3>
      </div>
      <div className="border border-coppergold bg-coppergold p-12 mt-8 w-full max-sm:p-5">
        <h3 className="text-4xl leading-10 font-nunito font-light max-sm:text-2xl">
          From Construction to Code: My Journey as a Software Developer
        </h3>
        <p className="font-montserrat text-base font-light mt-3">
          Hi, I'm Thashreef, a dedicated software developer with a unique
          journey into the tech world. Coming from a non-IT background, I’ve
          embraced the world of web development and now specialize in building
          full-stack projects using the MERN stack and Next.js. <br />
          <br /> I hold a Diploma in Civil Engineering and worked as a Site
          Supervisor in Bangalore. Interestingly, my career in software
          development also began in Bangalore, where I discovered the immense
          scope of web development. What drew me to this field was its focus on
          skills rather than formal degrees, which inspired me to pivot my
          career and start learning coding. <br /> <br />
          My journey began with the basics—learning C Programming and
          Object-Oriented Programming (OOP) concepts in Java. From there, I
          transitioned into web development, starting with HTML, CSS, and
          JavaScript. To solidify my foundation and advance my skills, I joined
          the Entri Elevate Bootcamp, where I mastered MERN stack and other web
          development fundamentals. <br />
          <br /> Looking back, I’m proud of how far I’ve come. Despite coming
          from a non-IT background, I’ve successfully developed complete
          full-stack web applications. My journey stands as a testament to the
          power of determination and a passion for continuous learning. <br />
          <br />
          If you'd like to know more about my work or connect, feel free to
          reach out!
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-between mt-5 max-sm:flex-col max-sm:items-center">
        <a
          href="https://github.com/thahsree"
          target="_blank"
          className="border border-coppergold bg-coppergold w-[30%] flex justify-between items-center px-2 max-sm:min-w-[200px]"
        >
          <div className="flex items-center gap-1">
            <div className="w-[30px] h-[30px] p-1">
              <img src="/github.svg" alt="" className="w-full h-full" />
            </div>
            <h3 className="text-base font-light font-poppins max-sm:text-xs">
              GITHUB
            </h3>
          </div>
          <div className="w-[40px] h-[40px] p-2">
            <img
              src="/arrowdown.svg"
              alt=""
              className="w-full h-full -rotate-90 hover:animate-rotateArrow cursor-pointer"
            />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/thashreefch"
          target="_blank"
          className="border border-coppergold bg-coppergold w-[30%] flex justify-between items-center px-2 max-sm:min-w-[200px]"
        >
          <div className="flex items-center gap-1">
            <div className="w-[30px] h-[30px] p-2">
              <img src="/linkedin.svg" alt="" className="w-full h-full" />
            </div>
            <h3 className="text-base font-light font-poppins max-sm:text-sm">
              LINKEDIN
            </h3>
          </div>
          <div className="w-[40px] h-[40px] p-2">
            <img
              src="/arrowdown.svg"
              alt=""
              className="w-full h-full -rotate-90 hover:animate-rotateArrow cursor-pointer"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/tha.shree_/"
          target="_blank"
          className="border border-coppergold bg-coppergold w-[30%] flex justify-between items-center px-2 max-sm:min-w-[200px]"
        >
          <div className="flex items-center gap-1">
            <div className="w-[30px] h-[30px] p-1">
              <img src="/instagram.svg" alt="" className="w-full h-full" />
            </div>
            <h3 className="text-base font-light font-poppins max-sm:text-sm">
              INSTAGRAM
            </h3>
          </div>
          <div className="w-[40px] h-[40px] p-2">
            <img
              src="/arrowdown.svg"
              alt=""
              className="w-full h-full -rotate-90 hover:animate-rotateArrow cursor-pointer"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
