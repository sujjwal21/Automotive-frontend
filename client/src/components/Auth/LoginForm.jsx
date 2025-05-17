import React from 'react';

const LoginForm = () => {
  return (
    <form className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
