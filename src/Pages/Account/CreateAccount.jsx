import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const CreateAccount = ({ account }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let singInError;
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      console.log("logged In successfully");
    }
  }, [user, from, navigate, updating, name]);

  if (error || upError) {
    singInError = (
      <p className="text-red-600">{error?.message || upError?.message}</p>
    );
  }

  const onSubmit = async (data) => {
    const name = data?.firstname + " " + data?.lastname;
    setName(name);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className={`${!account && "mx-4 my-6"}`}>
      <div className="w-full">
        {!account && (
          <>
            <h4 className="text-2xl mt-12 text-[#232323] uppercase">
              Create Account
            </h4>
            <p className="py-6">Please register below to create an account</p>
          </>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3 className="font-semibold text-lg">First Name</h3>
            <input
              {...register("firstname", {
                required: {
                  value: true,
                  message: "First Name is require",
                },
              })}
              type="text"
              required
              className="my-2 w-full lg:max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
            />
          </div>
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-700">
                {errors.name.message}
              </span>
            )}
          </label>
          <div>
            <h3 className="font-semibold text-lg">Last Name</h3>
            <input
              type="text"
              required
              className="my-2 w-full lg:max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Last Name is require",
                },
              })}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Email Address <span className="text-red-600">*</span>
            </h3>
            <input
              type="email"
              required
              className="my-2 w-full lg:max-w-md px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
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
            <label className="label">
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
            </label>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Password <span className="text-red-600">*</span>
            </h3>
            <div className="relative w-full lg:max-w-md">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="my-2 w-full px-2 py-3 border border-gray-400 rounded-sm outline-none focus:outline-none"
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
            <label className="label">
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
            </label>
          </div>
          <div className="flex items-center gap-2 my-3">
            <input type="checkbox" className="h-4 w-4 accent-black" />
            <p className="font-medium text-lg">Subscribe To Email Marketing</p>
          </div>
          {singInError}
          <div className="my-8">
            <button
              type="submit"
              className="border hover:border-gray-800 hover:bg-white hover:text-black rounded-sm px-16 py-2.5 font-semibold bg-[#2A6876] text-white border-[#2A6876] duration-300"
            >
              Create An Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
