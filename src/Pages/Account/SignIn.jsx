import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loader/Loading";

const SignIn = ({ authPreview, handleAuthPreview }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let singInError;

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (error) {
    singInError = <p className="text-red-600">{error?.message}</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div
      className={`w-full ${authPreview !== "signin" && "lg:block hidden"} ${
        authPreview === "forgot" && "lg:hidden"
      }`}
    >
      <Loading show={loading} />
      <h1 className="text-3xl uppercase">Sign In</h1>
      <h4 className="font-bold text-lg mt-12 text-[#232323]">Login</h4>
      <p className="py-6">
        Please enter your email and password below to access your account
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <h3 className="font-semibold text-lg">
            Email Address <span className="text-red-600">*</span>
          </h3>
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
        <div className="my-2">
          <h3 className="font-semibold text-lg">
            Password <span className="text-red-600">*</span>
          </h3>
          <div className="relative w-full lg:max-w-md">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is require",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-black">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>
          </div>
          <p>
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-700">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-700">
                {errors.password.message}
              </span>
            )}
          </p>
        </div>
        {singInError}
        <div className="my-8 flex items-center gap-6">
          <button
            type="submit"
            className="border border-gray-800 rounded-sm px-8 py-2.5 font-semibold hover:bg-[#2A6876] hover:text-white hover:border-[#2A6876] duration-300"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => handleAuthPreview("forgot")}
            className="text-gray-700 text-lg underline"
          >
            Lost your password?
          </button>
        </div>
      </form>
      <div className="w-full flex justify-center mt-4 items-center lg:hidden gap-2">
        Don't have an account?
        <button
          onClick={() => handleAuthPreview("signup")}
          className="font-medium text-[#2A6876]"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default SignIn;
