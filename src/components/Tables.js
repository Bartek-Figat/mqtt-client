import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { BsChatSquareText } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";

const tableHeaderText = [
  "Contact",
  "Message Type",
  "Duration",
  "Schedule",
  "Status",
];

function Table() {
  return (
    <div className="col-span-full bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Sechedule Notification</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                {tableHeaderText.map((tableHeafer) => {
                  return (
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        {tableHeafer}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      <svg
                        className="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">
                      Form Builder CP
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex">
                    <FiPhoneCall className="w-4 h-4 fill-current text-green-400 flex-shrink-0 mr-2" />
                    <BsChatSquareText className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <AiOutlineMail className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <ImLoop className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <div>3</div>
                  </div>
                </td>
                <td className="flex items-center justify-center hover:text-blue-900 cursor-pointer text-lg">
                  <VscCalendar />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center bg-green-400 text-white">
                    Active
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full mr-2 sm:mr-3 bg-green-500">
                      <svg
                        className="w-9 h-9 fill-current text-green-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M11 22.012a1 1 0 01-.707-1.707l4.5-4.5a1 1 0 011.414 0l3.293 3.293 4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0L15.5 17.926l-3.793 3.793a1 1 0 01-.707.293z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">
                      Machine Learning A-Z
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex">
                    <FiPhoneCall className="w-4 h-4 fill-current text-green-400 flex-shrink-0 mr-2" />
                    <BsChatSquareText className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <AiOutlineMail className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <ImLoop className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <div>3</div>
                  </div>
                </td>
                <td className="flex items-center justify-center m-auto p-5 hover:text-blue-900 cursor-pointer text-lg">
                  <VscCalendar />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center bg-green-400 text-white">
                    Active
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      <svg
                        className="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">
                      2021 Web Bootcamp
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex">
                    <FiPhoneCall className="w-4 h-4 fill-current text-green-400 flex-shrink-0 mr-2" />
                    <BsChatSquareText className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <AiOutlineMail className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <ImLoop className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <div>3</div>
                  </div>
                </td>
                <td className="flex items-center justify-center m-auto p-5 hover:text-blue-900 cursor-pointer text-lg">
                  <VscCalendar />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center bg-green-400 text-white">
                    Active
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full mr-2 sm:mr-3 bg-light-blue-500">
                      <svg
                        className="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M18 26a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-14a6 6 0 100 12 6 6 0 000-12z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">
                      Digital Marketing Course
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex">
                    <FiPhoneCall className="w-4 h-4 fill-current text-green-400 flex-shrink-0 mr-2" />
                    <BsChatSquareText className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <AiOutlineMail className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <ImLoop className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <div>3</div>
                  </div>
                </td>
                <td className="flex items-center justify-center m-auto p-5 hover:text-blue-900 cursor-pointer text-lg">
                  <VscCalendar />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center bg-green-400 text-white">
                    Active
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full mr-2 sm:mr-3 bg-red-500">
                      <svg
                        className="w-9 h-9 fill-current text-indigo-50"
                        viewBox="0 0 36 36"
                      >
                        <circle cx="18" cy="18" r="3" />
                        <path d="M13.05 24.363l-.707-.707a8 8 0 010-11.312l.707-.707 1.414 1.414-.707.707a6 6 0 000 8.484l.707.707-1.414 1.414zM22.95 24.363l-1.414-1.414.707-.707a6 6 0 000-8.484l-.707-.707 1.414-1.414.707.707a8 8 0 010 11.312l-.707.707z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">
                      Form Builder PRO
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex">
                    <FiPhoneCall className="w-4 h-4 fill-current text-green-400 flex-shrink-0 mr-2" />
                    <BsChatSquareText className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <AiOutlineMail className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <ImLoop className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-2" />
                    <div>3</div>
                  </div>
                </td>
                <td className="flex items-center justify-center m-auto p-5 hover:text-blue-900 cursor-pointer text-lg">
                  <VscCalendar />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center bg-green-400 text-white">
                    Active
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
