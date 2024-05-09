import React from "react";

import massage from "../../assets/oilbased.jpg";

const AboutModalcontent = () => {
  return (
    <div className="about w-full h-screen flex justify-center items-center relative  bg-stone-950 ">
      <div className="content my-0 mx-auto flex flex-wrap items-center justify-around relative">
        <div className="text max-w-full w-[550px] my-0 mx-auto px-5 ">
          <h5 className="about-title text-3xl uppercase tracking-wider mb-5 font-bold text-amber-50">
            our story <br />
            ZhyRille wellness spa
          </h5>
          <p className="about-content leading-7 text-justify text-sm tracking-wide text-amber-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure
            et distinctio suscipit, eveniet, commodi laboriosam ipsam quibusdam
            at, eius quo temporibus culpa aliquid dicta necessitatibus earum
            nulla ea magni eos harum praesentium illum. Dolorum mollitia facilis
            ad quos iste eveniet laborum libero laudantium ut! Id asperiores
            laboriosam esse iure tempore, dignissimos officia a consequuntur
            saepe iusto quod beatae ut adipisci quisquam ipsum facilis quaerat
            ad sed unde, odio, iste non veniam. At exercitationem, similique
            necessitatibus reiciendis quis neque assumenda optio expedita iusto
            inventore fugit mollitia consequuntur! Odio, ab ipsum distinctio rem
            ratione voluptates tenetur velit id optio modi aliquid.
          </p>
        </div>
        <img
          src={massage}
          alt="some image"
          className="about-img max-w-full h-[490px] w-[500px] border-solid border-2 border-amber-50"
        />
      </div>
    </div>
  );
};

export default AboutModalcontent;
