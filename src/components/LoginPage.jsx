import { useState } from "react";
import OtpPage from "./OtpPage";
import "@dotlottie/player-component";

/* eslint-disable react/no-unescaped-entities */
function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtp(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };
  return (
    <>
      {!showOtp ? (
        <div className="w-[80%] h-3/4 md:w-1/2 flex flex-col  justify-center gap-4 shadow shadow-2xl rounded-2xl text-[#b08d74ff] px-4 py-2">
          <div className="h-1/2">
            <dotlottie-player
              src="https://lottie.host/88c95fb8-4c75-441d-a238-7c27c266d2a9/EOQ0PoDN8a.json"
              autoplay
              direction="1"
              speed={0.5}
              background="transparent"
              mode="normal"
              loop
            />
          </div>
          <div className=" text-xl font-semibold  ">Log in to continue</div>
          <div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2  ">
                <div className="flex  gap-2  ">
                  <span className="border border-md border-[#b08d74ff] p-1">
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your Mobile number"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="px-5 text-md bg-[#b08d74ff] text-[#253f40ff] w-full placeholder:text-[#253f40ff]"
                  />
                </div>
                <p className="text-xs">
                  we'll send you an OTP by SMS to confirm your mobile number.
                </p>
              </div>

              <button
                type="submit"
                className=" border border-[#b08d74ff]  px-2 py-1 hover:bg-[#b08d74ff] hover:text-[#253f40ff]"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-sm ">
            Having trouble logging in?{" "}
            <span className="cursor-pointer underline underline-offset-2">
              Get Help
            </span>
          </div>
        </div>
      ) : (
        <OtpPage num={phoneNumber} length={4} onOtpSubmit={onOtpSubmit} />
      )}
    </>
  );
}

export default LoginPage;
