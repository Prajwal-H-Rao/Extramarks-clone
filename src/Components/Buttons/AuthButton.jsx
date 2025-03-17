import React from "react";

const AuthButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-50 px-5 py-2.5 text-white bg-orange-600 hover:bg-orange-700 
                 border-2 border-white rounded-lg text-sm font-medium transition-colors duration-200 
                 focus:ring-4 focus:ring-orange-300 focus:outline-none"
      type="button"
    >
      {text}
    </button>
  );
};

export default AuthButton;
