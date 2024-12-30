import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex items-center justify-center min-h-[100vh]">
      <div className="border border-coppergold bg-coppergold w-[700px] h-[500px] p-8 mt-10">
        <p className="text-sm font-nunito font-light text-coppergold2">
          CONTACT
        </p>
        <h3 className="text-3xl font-nunito mt-3 text-textColor font-light">
          Let's get in touch
        </h3>
        <form className="flex flex-col mt-5">
          <input
            type="text"
            className="bg-coppergold border-none outline-none text-coppergold2 px-3 py-3 placeholder-custom mt-3"
            placeholder="Name"
          />
          <input
            type="email"
            className="bg-coppergold border-none outline-none text-coppergold2 px-3 py-3 placeholder-custom mt-3"
            placeholder="Email"
          />
          <textarea
            rows={5}
            className="bg-coppergold border-none outline-none text-coppergold2 px-3 py-3 placeholder-custom mt-3"
            placeholder="Message"
          />
          <button className="w-full px-2 py-3 bg-[#dac5a7] font-xl font-poppins text-black font-semibold mt-6">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
