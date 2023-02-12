import React from "react";

import './Title.css'

const Title = () => {

  return (
    <div className="p-6 max-w-sm mt-10 mx-auto bg-dark morphism rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12"
          src="/react.svg"
          alt="ChitChat Logo"
        />
      </div>
      <div className="pl-4">
        <div className="text-xl text-center font-semibold uppercase text-purple-700 text-opacity-75">
          To - Do List App
        </div>
        <p className="text-gray-500">Using React and Tailwind</p>
      </div>
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12 ml-3"
          src="/tailwindcss.svg"
          alt="ChitChat Logo"
        />
      </div>
    </div>
  );
}

export default Title