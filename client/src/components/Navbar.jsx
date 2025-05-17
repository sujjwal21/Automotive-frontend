import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <a href="#home">AutoDrive</a>
      </div>

      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 text-black">
        <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">CARZONE</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            {/* <Link to="/#brands" className="hover:text-blue-600">Brands</Link>
            <Link to="/#vehicles" className="hover:text-blue-600">Vehicles</Link> */}
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/register" className="hover:text-blue-600">Register</Link>
            <Link to="/contact" className="hover:text-blue-600">Inquiry</Link>
          </div>
        </div>
      </nav>

      {/* <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
