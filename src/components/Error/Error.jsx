import React from 'react';
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden" style={{ background: '#edf2f7' }}>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="font-extrabold tracking-widest text-white text-9xl">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link
            to="/" 
            className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block p-7 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Error;
