import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 text-green-800">
      <h1 className="mb-4 text-5xl font-bold">404</h1>
      <p className="mb-6 text-xl">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block px-6 py-2 mt-4 text-white bg-green-800 rounded-full hover:bg-green-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
