import React, { useEffect } from "react";
import ZhyRille from "../../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import BookModal from "../../Booking/BookModal";

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
          <BookModal />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
