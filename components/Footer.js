import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="px-20 bg-[rgb(25,25,25)]  text-white py-8">
      <div className="md:flex md:justify-between">
        <Image src={logo} height={100} width={100} objectFit="contain" />
        <div className="text-sm space-y-1 text-gray-400 mb-5 md:mb-0">
          <p>About Online food</p>
          <p>Read our blog</p>
          <p>Sign up to deliver</p>
          <p>Add your restaurant</p>
        </div>

        <div className="text-sm md:space-y-1 text-gray-400">
          <p>Get help</p>
          <p>Read FAQs</p>
          <p>View all cities</p>
          <p>Restaurant near me</p>
        </div>
      </div>
      <div className="md:flex md:justify-between space-y-2 md:pt-24 pt-10">
        <p className="text-sm text-gray-600">
          copyright &copy; 2022 online food
        </p>
        <div className="md:flex md:space-x-10 text-sm space-y-1 text-gray-400">
          <p>Privacy Policy.</p>
          <p>Terms of Use</p>
          <p>Pricing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
