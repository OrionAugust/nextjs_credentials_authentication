"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router=useRouter();

  const handleFormSubmit = async(event) => {
    event.preventDefault();

    try {

      console.log("-----------------------------Logging in--------------------------------")

      console.log(email+" "+password);
      const res =await signIn("credentials",{email:email,password:password ,redirect:false});

      if(res.error)
      {
        setError(res.error.message);
        return;
      }

        router.replace("/home");
    } catch (error) {}
  };

  return (
    <div className=" grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-4 border-gray-200">
        <h1 className="text-4xl font-bold text-center py-5">Login</h1>

        <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 w-fit m-auto rounded-md" type="submit ">
            Login
          </button>
          {error && (
            <div className="text-red-500 border-2 border-red-300 w-fit  text-sm py-1 px-3 rounded-md m-auto">
              {error}
            </div>
          )}

          <Link className="text-sm text-right" href="/register">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
