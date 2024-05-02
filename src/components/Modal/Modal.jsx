import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";

const Modal = (props) => {
  const [showModalXL, setShowModalXL] = useState(false);

  return (
    <div className="box relative overflow-hidden max-w-xs bg-black bg-fixed rounded-lg">
      <TERipple rippleColor="white">
        <img
          src={props.image}
          alt=""
          className="w-full h-full object-cover rounded-lg block"
        />

        <h4 className="absolute left-6 bottom-16 text-lg font-bold text-white">
          {props.title}
        </h4>

        <button
          type="button"
          className="btn absolute left-6 bottom-4 py-2 px-6 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
          onClick={() => setShowModalXL(true)}
        >
          View More
        </button>

        {/* <!--Large modal-->*/}
        <TEModal show={showModalXL} setShow={setShowModalXL} scrollable>
          <TEModalDialog size="xl">
            <TEModalContent>
              <TEModalHeader>
                {/* <!--Modal title--> */}
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  Large modal
                </h5>
                {/* <!--Close button--> */}
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowModalXL(false)}
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
              {/* <!--Modal body--> */}
              <TEModalBody>this is modal body</TEModalBody>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      </TERipple>
    </div>
  );
};

export default Modal;
