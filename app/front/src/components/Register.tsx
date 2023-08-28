import React, { useState } from "react";
import { Input } from "./input/Input";
import { useRegisterMutation } from "@/hooks/Users/useRegisterMutation";

export const Register = () => {
  const registerUserMutation = useRegisterMutation();

  const [register, setRegister] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(register);
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredUser = await registerUserMutation.mutateAsync(register);
    if (registeredUser) {
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleRegister}>
          <Input
            label="Name"
            id="fullName"
            placeholder="Enter your name"
            onChange={handleOnChange}
          />
          <Input
            label="First Email"
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleOnChange}
          />
          <Input
            label="Password"
            id="password"
            placeholder="Enter your password"
            type="password"
            onChange={handleOnChange}
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
