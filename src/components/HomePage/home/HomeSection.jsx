import React, { useEffect } from "react";
import ZhyRille from "../../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = ({ img }) => {
  const red = {
    background: "#FF0000",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="hero_section"
      className="home mb-16 relative h-screen w-full flex items-center justify-center"
    >
      <div className="home-text">
        <img
          src={ZhyRille}
          alt="image"
          className="img mt-20 flex items-center justify-center h-96 w-[600px]"
        />
        <div className="center-btn text-center mt-16">
          <a
            href="#"
            className="btn inline-block py-3 px-10 text-sm font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          >
            book now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
