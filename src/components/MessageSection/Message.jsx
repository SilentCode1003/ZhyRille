import React from "react";
import zhyMessage from "../../assets/zhy.png";

const Message = () => {
  return (
    <div className="contact-body max-w-[1320px] my-0 mx-auto py-0 px-4 ">
      <hr className="my-0 h-0.5 border-t-0 bg-yellow-500 opacity-100 dark:opacity-50" />
      <div className="contact-form py-8 px-0 border-t-2 border-black grid grid-cols-2 gap-8">
        <form>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              type="text"
              className="form-control w-full border-2 border-solid border-black rounded-md p-3 my-2 text-sm outline-0"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control w-full border-2 border-solid border-black rounded-md p-3 my-2 text-sm outline-0"
              placeholder="Last Name"
            />
          </div>

          <div className="grid grid-cols-1">
            <input
              type="number"
              className="form-control w-full border-2 border-solid border-black rounded-md p-3 my-2 text-sm outline-0 text-black"
              placeholder="Phone"
            />
          </div>

          <textarea
            rows="5"
            className="form-control w-full border-2 border-solid border-black rounded-md p-3 my-2 text-sm outline-0"
            placeholder="Message"
          ></textarea>

          <input
            type="submit"
            value="Send Message"
            className="send-btn mt-2 inline-block py-2.5 px-5 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          />
        </form>

        <div className="flex justify-end items-center pr-4">
          <img
            src={zhyMessage}
            alt="zhycontactimage"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-4/5 xl:w-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
