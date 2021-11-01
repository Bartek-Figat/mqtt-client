import React from 'react';

function WelcomeBanner() {
  return (
    <div className="bg-gray-400 rounded-md w-11/12 p-4 m-4">
        <h1 className="text-3xl md:text-3xl text-gray-800 font-bold mb-1 font-sans">e-SCADA</h1>
        <p className="text-lg font-sans">MQTT allows applications to build IIoT and SCADA applications.</p>
    </div>
  );
}

export default WelcomeBanner;