import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Forever Brand Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ea
            harum voluptas?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-789-5674</li>
            <li>contact@shopkart.com</li>
          </ul>
        </div>
      </div>
      
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; 2024 Forever Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;