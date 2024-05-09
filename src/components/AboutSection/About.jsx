import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import massage from "/assets/oilbased.jpg";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className="holiday grid grid-cols-2 items-center gap-36 mb-9 -mt-12 bg-stone-950"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <img
          src={massage}
          alt="oil massage"
          className="left-img max-w-full h-auto rounded-xl mt-14 border-2 border-solid border-amber-50"
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <h5 className="text-[12px] font-bold text-gray-300 uppercase tracking-[6px] mb-10 mt-16">
          learn more about us
        </h5>
        <h2 className="text-amber-50 text-5xl font-extrabold leading-5 mb-10">
          {/* ZhyRille */}
          <img
            src={zhyrille}
            alt="zhyrille name"
            className="img w-64 -mt-5 -mb-6"
          />
        </h2>
        <p className="text-sm font-medium leading-7 text-gray-300 mb-[35px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
          eum vitae dolorum aliquam veniam tempora, asperiores dolorem
          voluptates reprehenderit rem totam blanditiis, sequi labore!
        </p>
        {/* About Content */}
        <AboutModal />
      </div>
    </section>
  );
};

export default About;
