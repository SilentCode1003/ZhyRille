import React, { useEffect } from "react";
import TreatmentModal from "./TreatmentModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { TECarousel, TECarouselItem } from "tw-elements-react";

import massage from "../../assets/oilbased.jpg";
import img from "../../assets/mema.jpg";

const Treatments = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="tour block" style={styles}>
      <div
        className="center-text text-center"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <h2 className="text-4xl uppercase text-amber-50 font-bold">
          Treatments
        </h2>
      </div>

      {/* Treatments services box */}
      <TECarousel showIndicators>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="tour-content my-16 sm:ml-12 grid grid-cols-3 items-center gap-12 ">
              <TreatmentModal
                image={massage}
                title="Skin Rejuvenation"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Skin Rejuvenation"
              />
              <TreatmentModal
                image={massage}
                title="Whitening Treatment"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Whitening Treatment"
              />
              <TreatmentModal
                image={massage}
                title="Facial Care"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Facial Care"
              />
              <TreatmentModal
                image={massage}
                title="Zhyrille Ultimate Package"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="ZhyRille Ultimate Package"
              />
              <TreatmentModal
                image={massage}
                title="Hair Removal"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Hair Removal"
              />
              <TreatmentModal
                image={massage}
                title="Underarm Package"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Underarm Package"
              />
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className=" relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="tour-content my-16 sm:ml-12 grid grid-cols-3 items-center gap-12">
              <TreatmentModal
                image={massage}
                title="Massage Services"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Massage Services"
              />
              <TreatmentModal
                image={massage}
                title="Slimming Services"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Slimming Services"
              />
              <TreatmentModal
                image={massage}
                title="Body Care"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Body Care"
              />
              <TreatmentModal
                image={massage}
                title="Lash Care"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Lash Care"
              />
              <TreatmentModal
                image={massage}
                title="Hand & Foot Care"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Hand & Foot Care"
              />
              <TreatmentModal
                image={massage}
                title="Semi Permanent Make Up"
                modalTitle="Hair Removal Services"
                modalContent="This is the content of the modal."
                modalHeader="Semi Permanent Make Up"
              />
            </div>
          </TECarouselItem>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-1">
          <div className="text-black text-sm bg-amber-50 cursor-pointer px-3 py-0 rounded-md">
            &larr;
          </div>
          <div className="text-black text-sm bg-amber-50  cursor-pointer px-3 py-0 rounded-md">
            &rarr;
          </div>
        </div>
      </TECarousel>
    </section>
  );
};

export default Treatments;
