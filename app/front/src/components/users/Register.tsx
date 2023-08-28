import React, { useState } from "react";
import { Input } from "../input/Input";
import { useRegisterMutation } from "@/hooks/Users/useRegisterMutation";
import { useGlobalState } from "@/hooks/useGlobalContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const Register = () => {
  const registerUserMutation = useRegisterMutation();
  const router = useRouter();
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
  const { setIsLogged } = useGlobalState();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredUser = await registerUserMutation.mutateAsync(register);
    if (registeredUser.token) {
      setIsLogged(true);
      Cookies.set("token", registeredUser.token);
      localStorage.setItem("token", registeredUser.token);
      router.push("/");
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
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
