import React from "react";

function AnalyticsCard11() {
  return (
    <div className="col-span-full bg-white shadow-lg rounded-sm">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">
          Alarm Notification Table
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Event Day</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Event Hour</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Description</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {/* Row */}
              {/* Row */}

              {/* Row */}

              {/* Row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard11;
