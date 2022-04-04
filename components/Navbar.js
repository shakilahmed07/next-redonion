import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import logo from "../public/logo-black.png";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [session, loading] = useSession();
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex h-[70px] items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 shadow-md">
        <Link href="/">
          <Image
            src={logo}
            height={90}
            width={100}
            objectFit="contain"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center space-x-10">
          <Link href="/cart" passHref>
            <div className="relative mt-2">
              <ShoppingCartIcon className="h-7 cursor-pointer" />
              <span className="absolute flex justify-center items-center rounded-full bg-red-500 p-1 text-white text-sm -right-2 -top-3">
                {quantity}
              </span>
            </div>
          </Link>

          {!session && !loading && (
            <Link href="/api/auth/signin">
              <button
                className="bg-red-500 px-6 py-1 rounded-full text-white"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign in
              </button>
            </Link>
          )}

          {session && (
            <Link href="/api/auth/signout">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="bg-red-500 px-6 py-1 rounded-full text-white"
              >
                Sign out
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
