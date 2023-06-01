import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full z-50 flex justify-center items-center overflow-hidden">
      <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-gray-200"></div>
    </div>
  );
};

export default Loading;
