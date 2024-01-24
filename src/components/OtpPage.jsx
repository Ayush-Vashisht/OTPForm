/* eslint-disable react/prop-types */
import { Suspense, useEffect, useRef, useState } from "react";
import "@dotlottie/player-component";

const OtpPage = ({ length = 4, onOtpSubmit = () => {}, num }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [otpSubmit, setOtpSubmit] = useState(false);
  const otpRef = useRef([]);

  useEffect(() => {
    if (otpRef.current[0]) {
      otpRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      setOtpSubmit(true);
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1 && otpRef.current[index]) {
      otpRef.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    otpRef.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      otpRef.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      otpRef.current[index - 1]
    ) {
      otpRef.current[index - 1].focus();
    }
  };
  return (
    <Suspense>
      {otpSubmit ? (
        <div className="h-2/3">
          <dotlottie-player
            src="https://lottie.host/798a77b2-9849-402e-8e0a-69a8b49913e4/IOMoh2cpL5.json"
            autoplay
            direction="1"
            speed={0.5}
            background="transparent"
            mode="normal"
            loop
          />
        </div>
      ) : (
        <div className="w-[80%] h-2/3 md:w-1/2 flex flex-col items-center justify-around rounded-2xl shadow shadow-2xl text-[#b08d74ff] px-4 py-2">
          <div className="h-1/2 ">
            <dotlottie-player
              src="https://lottie.host/7b2678a6-7428-45d7-90d4-5d0e2bf8f448/p8xeWQIEuB.json"
              autoplay
              direction="1"
              speed={0.5}
              background="transparent"
              mode="normal"
              loop
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <span className="text-sm">Enter OTP sent to +91{num}</span>
            <div>
              {otp.map((value, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    ref={(input) => (otpRef.current[index] = input)}
                    onChange={(e) => handleChange(index, e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => {
                      handleKeyDown(index, e);
                    }}
                    className="border w-10 h-10 text-xl mr-2 bg-[#b08d74ff] text-[#253f40ff] "
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default OtpPage;
