import React from "react";
import Image from "next/image";
import logo from "../../public/logo-black.png";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 sticky top-0 shadow-md">
      <Image src={logo} height={80} width={100} objectFit="contain" />
      <div className="flex space-x-4 items-center">
        <ShoppingCartIcon className="h-5" />
        <p>Login</p>
        <p className="bg-red-500 px-6 py-1 rounded-full text-white">Sign up</p>
      </div>
    </header>
  );
};

export default Navbar;
