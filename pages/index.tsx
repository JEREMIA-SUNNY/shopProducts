import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

interface LogInFormValues {
  login: string;
  password: string;
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LogInFormValues>({
    mode: "onChange",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const tenant = "1";
    try {
      const { login, password } = data;
      const { data: responseData } = await axios.post("/api/login", {
        login,
        password,
        tenant,
      });
      toast("Login Successfully!");
      setTimeout(() => {
        router.push("/products");
      }, 1500);
    } catch (error) {
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  });

  const handleNavigation = () => {
    toast("Login Successfully!");
    setIsLoading(true);
    setTimeout(() => {
      router.push("/products");
    }, 2000);
  };

  const notify = () => toast("Login Successfully!");
  return (
    <section>
      <div className="flex py-12 md:min-w-[400px]  justify-center">
        <div className="w-[95%] md:w-[590px] text-black   bg-white rounded-2xl p-5 md:p-12 border border-black">
          <div>
            <p className="font-fuzzyBubbles font-extrabold text-[2rem]  text-center mt-2 mb-2">
              Sign Up
            </p>
          </div>
          {/* PHONE NUMBERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}

          {/* orrrrrrrrrrrrrrrrrrrrrrrrr */}
          <div className="flex md:w-500 items-center gap-10 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>

          {/* GOOGLE OR FACE BORR OR ETC.......................... */}
          <div className="flex gap-5 flex-col md:flex-row justify-between  mt-5 ">
            <div className="flex border rounded-xl  border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/google.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Google</p>
            </div>
            <div className="flex border rounded-xl border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/facebook.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Facebook</p>
            </div>
            <div className="flex border rounded-xl border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/twitter.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Twitter</p>
            </div>
          </div>

          <div className="flex w-500 items-center gap-10 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>

            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>

          {/* email and add paasssword */}
          <div>
            <p className=" mt-2 mb-2 font-semibold">User id</p>
            <input
              type="text"
              className="w-full font-bah pl-8 bg-white  border border-black rounded-3xl py-2 shadow-md"
              {...register("login", {
                required: true,
              })}
            />{" "}
            <label
              className={`text-red-600   text-xs py-1 pl-4 ${
                errors.login ? "visible" : "invisible"
              }`}
            >
              User name required
            </label>
          </div>
          <div>
            <p className=" mt-2 font-semibold mb-2">Password</p>
            <input
              className="w-full bg-white pl-8  border border-black rounded-3xl py-2 shadow-md"
              type="Password"
              {...register("password", {
                required: true,
              })}
            />
            <label
              className={`text-red-600   text-xs py-1 pl-4 ${
                errors.password ? "visible" : "invisible"
              }`}
            >
              Password is required
            </label>
            <p className=" mt-2 mb-2">Forget Password? </p>

            <div className="flex  mt-2 mb-2 justify-center">
              <button
                onClick={submit}
                className="bg-buttonRed text-white w-full py-2 px-8 rounded-3xl"
              >
                Sign Up
              </button>
            </div>
          </div>
          {/* orrrrrrrrrrrrrrrrrrr */}

          {/* guest already have account */}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Home;
