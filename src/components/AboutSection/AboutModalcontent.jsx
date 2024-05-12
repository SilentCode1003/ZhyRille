import 'react'
import massage from "/assets/oilbased.jpg";

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
            Established in the year 2024, first branch is located in Pacita Complex
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
