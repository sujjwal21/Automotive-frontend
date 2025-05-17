import React from 'react';

const RegisterForm = () => {
  return (
    <form className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 p-3 border rounded"
      />
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
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
