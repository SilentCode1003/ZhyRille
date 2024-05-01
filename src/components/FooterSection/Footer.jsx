import React from "react";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarketAlt,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contacts" className="footer bottom-0 w-full bg-stone-950">
      <div className="footer-container flex p-12 my-0 mx-">
        <div className="left section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">About Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <p className="text-sm text-amber-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              omnis possimus ex quidem sunt perspiciatis repellat, aperiam
              veritatis totam culpa.
            </p>
          </div>
        </div>

        <div className="center section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">Contact Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <div className="place">
              <span className="Icon"></span>
              <span className="text text-sm text-amber-50 font-medium pl-2.5">
                New York, USA
              </span>
            </div>

            <div className="phone my-4 mx-0">
              <span className="Icon"></span>
              <span className="text text-sm text-amber-50 font-medium pl-2.5">
                +09123123123
              </span>
            </div>

            <div className="email">
              <span className="Icon"></span>
              <span className="text text-sm text-amber-50 font-medium pl-2.5">
                contact@example.com
              </span>
            </div>
          </div>
        </div>

        <div className="right section basis-1/2 py-0 px-5">
          <h2 className="text-lg text-amber-50 font-semibold">Subscribe</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <form action="#">
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
