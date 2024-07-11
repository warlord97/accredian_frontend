import React from "react";

function Footer() {
  return (
    <div className="bg-footer pb-24">
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <img className="w-32 h-9 mb-6 lg:mb-0" src="/footer.png" alt="Footer Logo" />
          <button className="bg-primary text-white w-full lg:w-72 h-14 rounded-lg">
            Schedule 1-on-1 Call Now
          </button>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 mb-16">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-white text-2xl">Programs</h3>
            {["Data Science & AI", "Product Management", "Business Analytics", "Digital Transformation", "Business Management", "Project Management", "Strategy & Leadership", "Senior Management", "Fintech"].map((program) => (
              <div key={program} className="flex justify-between gap-4">
                <p className="text-white">{program}</p>
                <img src="/Container.svg" alt="Icon" />
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-white text-2xl">Contact Us</h3>
            <p className="text-white">
              Email us (For Data Science Queries): admissions@accredian.com
            </p>
            <p className="text-white">
              Email us (For Product Management Queries): pm@accredian.com
            </p>
            <p className="text-white">
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
            </p>
            <p className="text-white">
              Product Management Admission Helpline: +91 9625811095
            </p>
            <p className="text-white">
              Enrolled Student Helpline: +91 7969322507
            </p>

            <div className="mt-5">
              <h3 className="text-white text-2xl">Follow Us</h3>
              <div className="flex gap-5 mt-3">
                <img src="/facebook.png" alt="Facebook" />
                <img src="/linkedin.png" alt="LinkedIn" />
                <img src="/twitter.png" alt="Twitter" />
                <img src="/instagram.png" alt="Instagram" />
                <img src="/youtube.png" alt="YouTube" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-center text-lg text-white">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
