import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import zhy from "../../assets/back massage.jpg";

const BookForm = () => {
  const styles = {
    backgroundImage: `url(${zhy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const underline = {
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    borderBottomColor: "#fffbeb",
  };

  const [startDate, setStartDate] = useState(null);
  return (
    <div className="card-container grid grid-cols-2 border-solid border-y-2 bg-stone-950 border-amber-50">
      {/* Booking img */}
      <div
        className="card-img justify-center items-center"
        style={styles}
      ></div>
      <div className="card-content bg-stone-950 h-[330px]">
        <h3 className="text-center text-amber-50 pt-6 pl-2.5 text-2xl font-semibold">
          Book Now
        </h3>
        <form>
          <div className="form-row flex w-11/12 my-auto mx-auto pt-5">
            <DatePicker
              className="block w-full my-4 mx-3 p-1 text-sm outline-none font-light text-gray-400 bg-stone-950"
              selected={startDate} // Pass the selected date as a state
              onChange={(date) => setStartDate(date)} // Handle date changes
              dateFormat="MMMM d, yyyy" // Date format
              placeholderText="Select Date"
              required
            />

            <select
              className="block w-full my-4 mx-3 p-1 text-sm outline-none  font-light text-gray-400 bg-stone-950"
              name="hours"
              style={underline}
              required
            >
              <option value="">Select Time</option>
              <option value="10" className="text-amber-50">
                09:00
              </option>
              <option value="10" className="text-amber-50">
                13:00
              </option>
              <option value="10" className="text-amber-50">
                14:00
              </option>
              <option value="10" className="text-amber-50">
                15:00
              </option>
              <option value="10" className="text-amber-50">
                16:00
              </option>
              <option value="10" className="text-amber-50">
                17:00
              </option>
              <option value="10" className="text-amber-50">
                18:00
              </option>
            </select>
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto pt-5">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
              style={underline}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
              style={underline}
              required
            />
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto pt-5">
            <input
              type="number"
              placeholder="How many persons?"
              min="1"
              className="block w-full my-1 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
              style={underline}
              required
            />
            <input
              type="submit"
              value="submit"
              className="btn inline-block py-3 px-8 mr-6 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
