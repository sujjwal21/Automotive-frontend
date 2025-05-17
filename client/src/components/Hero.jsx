import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home"
      className="relative bg-cover bg-center h-[90vh] text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607532941433-304659f4d0f2?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">AutoDrive</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Car
        </h2>

        {/* Search Filters */}
        <div className="bg-white text-black rounded-xl p-4 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto shadow-lg">
          <select className="p-2 rounded-md border w-40">
            <option value="">Make</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
          </select>
          <select className="p-2 rounded-md border w-40">
            <option value="">Model</option>
            <option value="X5">X5</option>
            <option value="A4">A4</option>
            <option value="C-Class">C-Class</option>
          </select>
          <select className="p-2 rounded-md border w-40">
            <option value="">Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
