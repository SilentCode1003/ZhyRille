import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="container relative w-full min-h-72 mx-auto"
    >
      <div className="contents-wrapper w-[70%] min-h-inherit my-7 mx-auto text-center">
        <section className="header">
          <h1 className="relative text-4xl text-amber-50 uppercase font-bold text-center tracking-wide before:content-[''] before:w-[150px] before:h-[2px] before:bg-yellow-500 before:rounded-lg before:absolute before:left[50%] before:translate-x-1/2 before:-bottom-2.5">
            Testimonial
          </h1>
        </section>

        {/* <TECarousel showControls ride="carousel">
          <div className="relative w-3/4 overflow-hidden after:clear-both after:block after:content-[''] mx-auto">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none text-xs text-amber-50"
            >
              <h3>Name here</h3>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none text-xs text-amber-50"
            >
              <h3>Name here</h3>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none text-xs text-amber-50"
            >
              <h3>Name here</h3>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </TECarouselItem>
          </div>
        </TECarousel> */}
      </div>
    </div>
  );
};

export default Testimonial;
