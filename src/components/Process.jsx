import React from "react";

function Process() {
  return (
    <div className="container mx-auto mt-16 pb-16 bg-secondary flex-col items-center hidden lg:flex">
      <h2 className="text-[27px] font-semibold mt-4">
        How Do I <span className="text-primary">Refer?</span>
      </h2>
      <div className="container w-[1100px] h-[380px] mt-10 mx-auto bg-[url(/process.png)] bg-cover relative">
        <div className="h-[150px] w-[150px] flex flex-col justify-center items-center absolute top-[120px] left-[170px]">
          <img src="/process-1.png" className="w-[50px] h-[50px]" alt="" />{" "}
          <p className="text-sm text-center">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className="h-[150px] w-[150px] flex flex-col justify-center items-center absolute top-[120px] left-[480px]">
          <img src="/process-2.png" className="w-[50px] h-[50px]" alt="" />{" "}
          <p className="text-sm text-center">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>
        <div className="h-[150px] w-[150px] flex flex-col justify-center items-center absolute top-[120px] left-[780px]">
          <img src="/process-3.png" className="w-[50px] h-[50px]" alt="" />{" "}
          <p className="text-sm text-center">
            Both parties receive a bonus 30 days after program enrollment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
