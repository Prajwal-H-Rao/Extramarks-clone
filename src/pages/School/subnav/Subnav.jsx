import React from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <nav className="flex space-x-6 text-gray-800 text-lg font-medium justify-center py-2">
      <Link to="#" className="hover:text-blue-600">
        Smart Class Plus
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="#" className="hover:text-blue-600">
        Assessment Centre
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="#" className="hover:text-blue-600">
        School Integrated Program
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="#" className="hover:text-blue-600">
        Learning App
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="#" className="hover:text-blue-600">
        Parent App
      </Link>
    </nav>
  );
};

export default Subnav;
