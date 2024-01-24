import { Suspense } from "react";
import LoginPage from "./LoginPage";

/* eslint-disable react/no-unescaped-entities */
function OtpForm() {
  return (
    <Suspense>
      <div className=" h-screen w-screen flex items-center justify-center bg-[#253f40ff] 2">
        <LoginPage />
      </div>
    </Suspense>
  );
}

export default OtpForm;
