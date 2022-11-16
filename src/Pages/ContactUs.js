import React, { useRef, useState } from "react";
import NavHeader from "./NavHeader";

const ContactUs = () => {
  const firstnameref = useRef("");
  const lastnameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const [inputdata, setInputData] = useState([]);

  const submitValueHandler = (e) => {
    e.preventDefault();

    const values = {
      first_name: firstnameref.current.value,
      last_name: lastnameref.current.value,
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    setInputData((prevState) => [...prevState, values]);

    firstnameref.current.value = "";
    lastnameref.current.value = "";
    emailref.current.value = "";
    passwordref.current.value = "";
  };
  console.log("update", inputdata);
  return (
    <>
      <div className="container mx-auto bg-hero-pattern bg-no-repeat bg-cover pb-96 pt-4">
        <NavHeader />
        <div className="flex items-center h-screen w-full bg-teal-lighter ">
          <div className="w-full bg-white shadow-lg p-8 md:max-w-sm md:mx-auto rounded-2xl">
            <form
              className="mb-4 mt-4 md:flex md:flex-wrap md:justify-between"
              onSubmit={submitValueHandler}
            >
              <div className="flex flex-col mb-4 md:w-1/2">
                <label
                  className="mb-1 text-sm text-grey-darkest"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="border py-1 px-3 text-grey-darkest bg-purple-200  border-purple-500 rounded-2xl md:mr-2"
                  type="text"
                  name="first_name"
                  id="first_name"
                  // defaultValue={firstnameref.current.value}
                  ref={firstnameref}
                  // onChange={firstNameHandler}
                />
              </div>
              <div className="flex flex-col mb-4 md:w-1/2">
                <label
                  className=" mb-1 text-sm text-grey-darkest md:ml-2"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="border py-1 px-3 text-grey-darkest bg-purple-200 border-purple-500 rounded-2xl md:ml-2"
                  type="text"
                  name="last_name"
                  id="last_name"
                  // defaultValue={lastnameref.current.value}
                  ref={lastnameref}
                />
              </div>
              <div className="flex flex-col mb-4 md:w-full">
                <label
                  className="mb-1 text-sm text-grey-darkest"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border py-1 px-3 text-grey-darkest bg-purple-200 border-purple-500 rounded-2xl"
                  type="email"
                  name="email"
                  id="email"
                  // defaultValue={emailref.current.value}
                  ref={emailref}
                />
              </div>
              <div className="flex flex-col mb-6 md:w-full">
                <label
                  className="mb-1 text-sm text-grey-darkest"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border py-1 px-3 text-grey-darkest bg-purple-200 border-purple-500 rounded-2xl"
                  type="password"
                  name="password"
                  id="password"
                  // defaultValue={passwordref.current.value}
                  ref={passwordref}
                />
              </div>
              <button
                className="block hover:bg-teal-dark text-white bg-purple-500 border border-purple-200 
                hover:bg-purple-200 hover:border-purple-500 hover:text-black text-sm uppercase mx-auto rounded-2xl px-4 py-1"
                type="submit"
                // onClick={submitformHandler}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
