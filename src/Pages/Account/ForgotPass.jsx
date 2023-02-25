/* eslint-disable no-undef */
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loader/Loading";

const ForgotPass = ({ authPreview, handleAuthPreview }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data?.email);
    handleAuthPreview("signin");
  };
  return (
    <div
      className={`w-full ${authPreview !== "forgot" && "lg:block hidden"} ${
        authPreview === "signin" && "lg:hidden"
      } ${authPreview === "signup" && "lg:hidden"}`}
    >
      <Loading show={sending} />
      <h1 className="text-3xl uppercase">Find Account</h1>
      <h4 className="font-bold text-lg mt-12 text-[#232323]">
        Reset your password
      </h4>
      <p className="py-6">We will send you an email to reset your password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <h3 className="font-semibold text-lg">Email Address</h3>
          <input
            type="email"
            required
            className="w-full lg:max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
            {...register("email", {
              required: {
                value: true,
                message: "Email is require",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <p>
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-700">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-700">
                {errors.email.message}
              </span>
            )}
          </p>
        </div>
        {resetError && <p className="text-red-600">{resetError?.message}</p>}
        <div className="my-8 flex items-center gap-6">
          <button
            type="submit"
            className="border border-gray-800 rounded-sm px-8 py-2.5 font-semibold hover:bg-[#2A6876] hover:text-white hover:border-[#2A6876] duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => handleAuthPreview("signin")}
            className="text-gray-700 text-lg underline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
