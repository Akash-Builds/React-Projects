import React from "react";

const NewsLetterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem labore
        sequi, nam doloremque fuga laudantium voluptate doloribus, reiciendis
        cum accusantium quasi unde officia?
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your e-mail"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs
             px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;