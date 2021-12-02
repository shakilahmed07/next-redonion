import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import logo from "../public/logo-black.png";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [session, loading] = useSession();
  return (
    <header className="sticky top-0 bg-white">
      <div className="h-16 flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 shadow-md">
        <Link href="/">
          <Image
            src={logo}
            height={80}
            width={100}
            objectFit="contain"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex space-x-4 items-center">
          <Link href="/checkout">
            <ShoppingCartIcon className="h-5 cursor-pointer" />
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
