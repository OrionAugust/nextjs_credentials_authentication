"use client";

import { signOut } from "next-auth/react";

export default function Header() {

  return (
    <header>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold">NextJs Auth</div>
          <div className="flex space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={()=>signOut()} >Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
