import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      id="contacts"
      className="footer bottom-0 w-full bg-stone-950"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      data-aos-delay="400"
    >
      <div className="footer-container flex p-12 my-0 mx-">
        <div className="left section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">About Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <p className="text-sm text-amber-50 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ducimus a animi temporibus, omnis voluptas sint. Delectus
              quibusdam at voluptatem error vel aliquam provident alias enim
              beatae, sunt dolores modi, doloremque amet quae earum rem
              cupiditate ad neque asperiores atque?
            </p>
            <div className="social mt-5 flex">
              <a href="#" className="py-0 ">
                <FaFacebookSquare
                  size={25}
                  className=" bg-amber-50 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-yellow-500"
                />
              </a>
              <a href="#" className="py-0 px-4">
                <FaTwitterSquare
                  size={25}
                  className=" bg-amber-50 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-yellow-500"
                />
              </a>
              <a href="#" className="py-0 ">
                <FaInstagramSquare
                  size={25}
                  className=" bg-amber-50 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-yellow-500"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="center section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">Contact Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <div className="place flex items-center pt-3">
              <FaMapMarkerAlt
                size={23}
                className="text-amber-50 leading-10 text-center rounded-md transition duration-300 cursor-pointer"
              />
              <span className="text text-sm text-amber-50 pl-3 font-medium">
                Put your Address, here
              </span>
            </div>

            <div className="phone my-9 mx-0 flex items-center">
              <FaPhoneAlt
                size={23}
                className="text-amber-50 leading-10 text-center rounded-md transition duration-300 cursor-pointer"
              />
              <span className="text text-sm text-amber-50 pl-3 font-medium">
                123-123-1234
              </span>
            </div>

            <div className="email flex items-center">
              <FaEnvelope
                size={23}
                className="text-amber-50 leading-10 text-center rounded-md transition duration-300 cursor-pointer"
              />
              <span className="text text-sm text-amber-50 pl-3 font-medium">
                sampleEmail@email.com
              </span>
            </div>
          </div>
        </div>

        <div className="right section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">Subscribe</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <form action="#" className="pt-2">
              <div className="email">
                <div className="text text-sm text-amber-50 mb-[2px]">Email</div>
              </div>
              <input
                type="email"
                required
                className="w-full h-9 bg-transparent border border-solid border-amber-50 text-amber-50 text-xs px-2"
              />
              <div className="btn mt-2.5">
                <button
                  type="submit"
                  className="w-full h-10 border-none outline-none inline-block bg-amber-50 text-xs text-black font-semibold cursor-pointer transition-all duration-200 ease-in hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <center className="p-1 text-[8px] bg-black">
          <div>
            <span>
              <a
                href="#"
                className="no-underline hover:underline text-gray-500"
              >
                By RaymondJAT
              </a>
            </span>
          </div>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
