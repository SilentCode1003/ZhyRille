import React from "react";

const Map = () => {
  return (
    <div className="contact map p-0 bg-stone-50 shadow-xl border-solid border-stone-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.3789288358123!2d121.05877716961098!3d14.339539898455179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7004840e22b%3A0xa48e0599f3a882ca!2sZhyRille%20Wellness%20Spa!5e0!3m2!1sen!2sph!4v1714632471190!5m2!1sen!2sph"
        className="a border-none w-[99%] h-[260px] my-2 mx-auto"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
