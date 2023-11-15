import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="md:w-1/4 w-[80%] mx-auto h-screen mt-32">
      <h1 className="mb-8 text-2xl">Login</h1>
      <div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-[1px] rounded-md px-4 py-2 w-full outline-none my-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="*************"
            className="border-[1px] rounded-md px-4 py-2 w-full outline-none my-2"
          />
        </div>
        <div className="flex justify-between items-center my-3 text-sm">
          <span className="flex items-center gap-2">
            <input type="checkbox" />
            Remember
          </span>
          <span className="underline text-[#7B57DF] cursor-pointer">
            Forget Password?
          </span>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#7B57DF] hover:bg-[#6848c2] px-4 py-2 rounded-md my-3">
            Sign Up
          </button>
        </div>
        <div>
          <span className="text-sm">
            Not registered yet?{" "}
            <Link href={"/signup"} className="underline text-[#7B57DF] ml-4">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
