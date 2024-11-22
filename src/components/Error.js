import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-8 p-8 bg-white rounded-xl shadow-2xl max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
          <h2 className="text-2xl text-gray-700 font-semibold">Something went wrong</h2>
          {error && (
            <p className="text-gray-500">
              {error.status} - {error.statusText}
            </p>
          )}
        </div>
        
        <div className="error-logo animate-bounce">
          <img 
            src="https://www.nicepng.com/png/detail/166-1669594_chibi-batman-by-rosielis-on-deviantart-svg-royalty.png"
            alt="Error Batman"
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>
        
        <button 
          onClick={() => window.history.back()} 
          className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 font-semibold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
