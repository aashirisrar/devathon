import React, { useState } from 'react';

export default function AuthComponent() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 max-w-md mx-auto">
      <div className={`relative w-full h-full ${signIn ? 'flex' : 'hidden'}`}>
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <form className="mt-8">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a href="#" className="text-blue-500 text-sm block text-center mt-4">
              Forgot your password?
            </a>
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700">
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className={`relative w-full h-full ${!signIn ? 'flex' : 'hidden'}`}>
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form className="mt-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-around p-4 bg-gray-100">
        <button
          className={`px-4 py-2 font-bold text-lg rounded-full ${
            signIn ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <button
          className={`px-4 py-2 font-bold text-lg rounded-full ${
            !signIn ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSignIn(false)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
