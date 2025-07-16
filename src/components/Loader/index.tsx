import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-t-2 border-b-2 rounded-full border-textMoss animate-spin"></div>
    </div>
  );
};

export default Loader;
