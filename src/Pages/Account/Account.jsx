import React from "react";

const Account = () => {
  return (
    <div className="mt-6 flex items-start justify-start container mx-4">
      <div className="w-full">
        <h1 className="text-3xl uppercase">Sign In</h1>
        <h4 className="font-bold text-lg mt-12 text-[#232323]">Login</h4>
        <p className="py-6">
          Please enter your email and password below to access your account
        </p>
        <form action="">
          <div>
            <h3 className="font-semibold text-lg">
              Email Address <span className="text-red-600">*</span>
            </h3>
            <input
              type="email"
              required
              className="my-2 w-full max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Password <span className="text-red-600">*</span>
            </h3>
            <input
              type="password"
              required
              className="my-2 w-full max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
            />
          </div>
          <div className="mt-4 flex items-center gap-6">
            <button
              type="submit"
              className="border border-gray-800 rounded-sm px-8 py-2.5 font-semibold hover:bg-[#2A6876] hover:text-white hover:border-[#2A6876] duration-300"
            >
              Sign In
            </button>
            <button type="button" className="text-gray-700 text-lg underline">Lost your password?</button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <h1>Sign Up</h1>
      </div>
    </div>
  );
};

export default Account;
