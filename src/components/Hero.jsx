import React, { useState } from "react";
import Modal from "./Modal";
import MaskImage from "../../public/Anniversary.png";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="bg-secondary shadow-lg  max-w-5xl rounded-xl mx-auto my-10 relative overflow-hidden">
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-1 items-center">
        <div className="max-w-4xl mx-auto md:order-1 order-2 relative p-6">
          <div className="flex flex-col gap-4 mx-auto w-full text-center md:text-left">
            <h2 className="font-montserrat md:font-plusjakarta font-semibold  lg:font-extrabold text-2xl md:text-4xl md:leading-10">
              Let's Learn & Earn
            </h2>
            <p className="font-plusjakarta font-bold text-base md:text-lg">
              Get a chance to win up to{" "}
              <br />
              <span className="text-2xl text-primary">Rs. 15,000</span>
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 mx-auto md:mx-0 text-white text-base font-semibold p-3 bg-primary w-40 h-12 rounded-3xl font-plusjakarta"
            >
              Refer Now
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
          </div>
        </div>

        <div className="lg:w-4/5 w-full -mb-8 md:w-2/5 lg:order-2 order-1">
          <img src={MaskImage} alt="Career_Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
