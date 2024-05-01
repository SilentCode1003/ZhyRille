import React, { useState } from "react";

import massage from "../../assets/oilbased.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="holiday grid grid-cols-2 items-center gap-36 mb-9 -mt-12 bg-stone-950"
    >
      <div>
        <img
          src={massage}
          alt="oil massage"
          className="max-w-full h-auto rounded-xl mt-14 border-2 border-solid border-yellow-500"
        />
      </div>

      <div>
        <h5 className="text-[10px] font-bold text-gray-300 uppercase tracking-[6px] mb-10 mt-8">
          learn more about us
        </h5>
        <h2 className="text-amber-50 text-5xl font-extrabold leading-5 mb-10">
          ZhyRille
        </h2>
        <p className="text-sm font-medium leading-7 text-gray-300 mb-[35px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
          eum vitae dolorum aliquam veniam tempora, asperiores dolorem
          voluptates reprehenderit rem totam blanditiis, sequi labore!
        </p>

        <a
          href="#"
          className="btn inline-block py-2.5 px-8 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
