"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
 

export default function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      !userName ||
      userName.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim() === ""
    ) {
      setError("All Fields  ");
      return;
    }

    try {
      const res = await fetch("api/signup/", {
        method: "POST",
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("User Registered");
        const form = event.target;
        form.reset();
      } else {
        toast.error(data.message || "Error Ocuured While Registering");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-4 border-gray-200">
        <h1 className="text-4xl font-bold text-center py-5">Create Account</h1>
        <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="User Name"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email Id"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 w-fit m-auto rounded-md">
            Signup
          </button>
          {error && (
            <div className="text-red-500 border-2 border-red-300 w-fit   text-sm py-1 px-3 rounded-md m-auto">
              {error}
            </div>
          )}
          <Link className="text-sm text-right" href="/">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
