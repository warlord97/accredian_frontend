import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function Modal({ onClose }) {
  const modalRef = useRef(null);

  const [referrer_name, setReferrer_name] = useState("");
  const [referrer_email, setReferrer_email] = useState("");
  const [referee_name, setReferee_name] = useState("");
  const [referee_email, setReferee_email] = useState("");
  const [course, setCourse] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      referrer_name,
      referrer_email,
      referee_name,
      referee_email,
      course,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/referrals",
        requestBody
      );

      toast.success("Referral submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error(
        `Error: ${error.response?.data?.error || "Failed to submit referral"}`
      );
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-fontPrimary">
        <button
          onClick={onClose}
          className="place-self-end text-fontPrimary mr-4"
        >
          <X size={30} />
        </button>
        <div className="bg-secondary rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1>Enter the Details to Refer Course</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter referrer name"
              required
              value={referrer_name}
              onChange={(e) => setReferrer_name(e.target.value)}
              className="w-full px-4 py-3 text-fontPrimary rounded-md"
            />
            <input
              type="email"
              placeholder="Enter referrer email"
              required
              value={referrer_email}
              onChange={(e) => setReferrer_email(e.target.value)}
              className="w-full px-4 py-3 text-fontPrimary rounded-md"
            />
            <input
              type="text"
              placeholder="Enter referee name"
              required
              value={referee_name}
              onChange={(e) => setReferee_name(e.target.value)}
              className="w-full px-4 py-3 text-fontPrimary rounded-md"
            />
            <input
              type="email"
              placeholder="Enter referee email"
              required
              value={referee_email}
              onChange={(e) => setReferee_email(e.target.value)}
              className="w-full px-4 py-3 text-fontPrimary rounded-md"
            />
            <input
              type="text"
              placeholder="Enter course name to refer"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-4 py-3 text-fontPrimary rounded-md"
            />
            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center px-5 py-3 font-medium bg-primary text-white rounded-md"
            >
              Refer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
