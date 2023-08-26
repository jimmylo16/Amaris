import React from "react";
import { Input } from "./input/Input";

export const Register = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <Input label="Name" id="name" placeholder="Enter your name" />
          <Input
            label="First Name"
            id="name"
            placeholder="Enter your name"
            type="email"
          />
          <Input
            label="Password"
            id="password"
            placeholder="Enter your password"
            type="password"
          />
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
