import React, { useState, useRef, useEffect } from "react";

export const WrappMain = ({ children }) => {
  return <div className="flex h-screen overflow-hidden">{children}</div>;
};

export const WrappSideBar = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-700 h-screen z-40 no-scrollbar w-56">
      {children}
    </div>
  );
};

export const WrappContent = ({ children }) => {
    return (
      <div className="relative flex flex-col items-center flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    );
  };
