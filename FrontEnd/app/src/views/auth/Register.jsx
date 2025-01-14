import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-slate-500">
      <div className="w-[400px] p-2">
        <div className="rounded-md bg-white p-4">
          <h2 className="text-xl font-bold text-slate-500">Welcome</h2>
          <p className="mb-5 text-sm text-slate-500">
            Please Register your account
          </p>
          <form action="" onSubmit={submit}>
            <div className="mb-3 flex w-full flex-col gap-4">
              <label
                htmlFor="Name"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
              >
                <input
                  type="text"
                  id="Name"
                  className="peer w-[100%] border-none bg-transparent p-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Name"
                  name="name"
                  value={state.name}
                  onChange={inputHandle}
                />
                <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Name
                </span>
              </label>

              <label
                htmlFor="Email"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
              >
                <input
                  type="text"
                  id="Email"
                  name="email"
                  className="peer w-[100%] border-none bg-transparent p-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Email"
                  value={state.email}
                  onChange={inputHandle}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>

              <label
                htmlFor="Password"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
              >
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="peer w-[100%] border-none bg-transparent p-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Password"
                  value={state.password}
                  onChange={inputHandle}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Password
                </span>
              </label>

              <button
                type="submit"
                className="group relative inline-block overflow-hidden rounded-md border border-primary px-8 py-3 focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-active:bg-primary"></span>

                <span className="relative text-sm font-medium text-primary transition-colors group-hover:text-white">
                  Sign Up
                </span>
              </button>
            </div>
            <div className="mb-3 flex items-center justify-center gap-3 text-sm">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-primary">
                  Sign In
                </Link>
              </p>
            </div>
            <div className="mb-3 flex w-full items-center justify-center">
              <div className="h-[1px] w-[45%] bg-primary"></div>
              <div className="flex w-[10%] items-center justify-center">Or</div>
              <div className="h-[1px] w-[45%] bg-primary"></div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-[35px] w-[135px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#DB4437] text-white shadow-lg hover:shadow-[#DB4437]">
                <FaGoogle />
              </div>
              <div className="flex h-[35px] w-[135px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#316FF6] text-white shadow-lg hover:shadow-[#316FF6]">
                <FaFacebook />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
