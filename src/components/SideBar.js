import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { linkNavigation } from "../routers/index";



function SideBar() {
  const location = useLocation();
  const { pathname } = location;

  return (
        <nav className="flex justify-center w-full h-screen mt-36 bg-gray-700 inset-0">
          <ul className="mt-3 w-11/12 ">
            {Object.values(linkNavigation).map((link) => {
              const { name, target, icone } = link;
              return (
                <li
                  className={`side-bar-link-list ${
                    pathname === target ? "bg-gray-900" : "hover:bg-gray-900"
                  }`}
                >
                  <NavLink className="side-bar-link" exact to={`${target}`}>
                    <div className="flex items-center">
                      <span
                        className={`text-xl ${
                          pathname === target
                            ? "text-indigo-400"
                            : "text-gray-200"
                        }`}
                      >
                        {icone}
                      </span>
                      <span className="ml-2">{name}</span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
  );
}

export default SideBar;