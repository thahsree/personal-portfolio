import aws from "/aws.svg";
import bootstrap from "/bootstrap.svg";
import css from "/css.svg";
import express from "/express.svg";
import framer from "/framer.svg";
import html from "/html.svg";
import java from "/java.svg";
import javascript from "/javascript.svg";
import mongodb from "/mongodb.svg";
import mui from "/mui.svg";
import mysql from "/mysql.svg";
import next from "/next.svg";
import node from "/node.svg";
import react from "/react.svg";
import redux from "/redux.svg";
import tailwind from "/tailwind.svg";
import ts from "/ts.svg";

function Hero() {
  const skills = [
    aws,
    bootstrap,
    css,
    express,
    framer,
    html,
    java,
    javascript,
    mongodb,
    mui,
    mysql,
    next,
    node,
    react,
    redux,
    tailwind,
    ts,
  ];
  return (
    <div className="flex justify-center w-full px-4 py-32">
      <div className="text-headingColor  text-center flex flex-col gap-5 relative overflow-hidden py-6 max-sm:py-0">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-[130px] font-thin leading-none max-sm:text-5xl">
            MERN STACK <br />
            Developer
          </h1>
          <p className="text-xl text-center text-wrap w-[900px] font-extralight font-montserrat text-textColor py-6 mt-5 max-md:text-base max-sm:text-sm max-sm:w-full">
            Delivering premium web development services to create robust,
            scalable, and user-friendly solutions that drive business growth and
            success
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 ">
          <div className="animate-bounce w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] rounded-full p-1 bg-normalBg border border-coppergold flex items-center justify-center cursor-pointer text-xl font-extrabold">
            <img src="/arrowdown.svg" alt="" />
          </div>
          <h5 className="text-lg font-poppins text-textColor font-light">
            MY SERVICES
          </h5>
        </div>
        <div className="absolute -left-1 h-full w-[10%] bg-[#0e0e0e] z-20 shadow-3xl max-md:hidden"></div>
        <div className="whitespace-nowrap mt-20 gap-28 animate-slide w-max max-sm:mt-10 max-sm:gap-0">
          {[...skills, ...skills].map((item, i) => (
            <div
              key={i}
              className="relative inline-block mr-[100px] max-sm:mr-[50px] w-[60px] h-[60px] p-1 max-sm:w-[40px] max-sm:h-[40px]"
            >
              <img src={item} alt="skills" className="w-full h-full" />
            </div>
          ))}
        </div>
        <div className="absolute right-1 h-full w-[10%] bg-[#0e0e0e] z-20 shadow-4xl max-md:hidden"></div>
      </div>
    </div>
  );
}

export default Hero;
