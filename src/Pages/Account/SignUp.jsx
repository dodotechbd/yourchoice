import React from "react";
import CreateAccount from "./CreateAccount";

const SignUp = ({ authPreview, handleAuthPreview }) => {
  return (
    <div className={`w-full ${authPreview !== "signup" && "lg:block hidden"}`}>
      <h1 className="text-3xl uppercase">Sign Up</h1>
      <h4 className="font-bold text-lg mt-12 text-[#232323]">Register</h4>
      <p className="py-6">Please register below to create an account</p>
      <CreateAccount account />
      <div className="w-full flex justify-center mt-4 items-center lg:hidden gap-2">
        Already have an account?
        <button
          onClick={() => handleAuthPreview("signin")}
          className="font-medium text-[#2A6876]"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default SignUp;
