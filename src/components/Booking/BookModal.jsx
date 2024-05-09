import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
} from "tw-elements-react";
import BookForm from "./BookForm";

const BookModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple
        rippleColor="white"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <button
          type="button"
          className="btn inline-block py-3 px-10 text-sm font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          onClick={() => setShowModal(true)}
        >
          book now
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} className="book-modal">
        <TEModalDialog size="lg" centered>
          <TEModalContent>
            <TEModalHeader className="bg-stone-950 py-0 border-t-2 border-l-2 border-r-2 border-amber-50 border-solid">
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-amber-50">
                ...
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="text-amber-50 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* Booking Form */}
            <BookForm />
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default BookModal;
