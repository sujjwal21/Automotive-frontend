import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1510227320292-0811fae44991?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-80  "></div>

        <div className="relative z-10 text-white w-full max-w-6xl px-4 text-center">
          {/* Small Top Text */}
          <p className="text-sm md:text-base mb-2">
            Find cars for sale and for rent near you
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Car
          </h1>

          {/* Tabs: All / New / Used */}
          <div className="flex justify-center space-x-4 mb-6">
            {["All", "New", "Used"].map((item, idx) => (
              <button
                key={idx}
                className={`text-white text-sm px-4 py-2 rounded-full ${
                  item === "All"
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                } transition`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-full shadow-lg p-3 flex flex-wrap justify-center gap-3 md:gap-5 items-center mb-8 max-w-4xl mx-auto">
            <select className="text-sm text-gray-600 px-4 py-2 rounded-md bg-white border outline-none">
              <option>Any Makes</option>
            </select>
            <select className="text-sm text-gray-600 px-4 py-2 rounded-md bg-white border outline-none">
              <option>Any Models</option>
            </select>
            <select className="text-sm text-gray-600 px-4 py-2 rounded-md bg-white border outline-none">
              <option>All Prices</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-semibold rounded-full flex items-center gap-2">
              🔍 Search Cars
            </button>
          </div>

          {/* Or Browse Featured */}
          <p className="text-sm text-white mb-3">Or Browse Featured Model</p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "suv", icon: "🚙" },
              { name: "Sedan", icon: "🚗" },
              { name: "Hatchback", icon: "🚘" },
              { name: "Coupe", icon: "🏎️" },
              { name: "Hybrid", icon: "🔋" },
            ].map(({ name, icon }) => (
              <button
                key={name}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 capitalize"
              >
                <span>{icon}</span> {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section id="brands" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Explore Our Premium Brands
            </h2>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
            >
              Show All Brands <span>↗</span>
            </a>
          </div>

          {/* Brand Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              {
                name: "Audi",
                logo: "https://www.carlogos.org/car-logos/audi-logo-2016-download.png",
              },
              {
                name: "BMW",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
              },
              {
                name: "Ford",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
              },
              {
                name: "Mercedes Benz",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
              },
              {
                name: "Peugeot",
                logo: "https://fabrikbrands.com/wp-content/uploads/Peugeot-Logo-1-1155x770.png",
              },
              {
                name: "Volkswagen",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HMIl_zwVN6bR3BVE4Y0iN1BYYAIpA6HfQQ&s",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="bg-white border rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-800">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Listings Section */}
      <section id="vehicles" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Explore All Vehicles
            </h2>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
            >
              View All <span>↗</span>
            </a>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-8 text-sm font-medium text-gray-600">
            <button className="border-b-2 border-blue-600 text-blue-600 pb-2">
              In Stock
            </button>
            <button className="hover:text-blue-600 pb-2">New Cars</button>
            <button className="hover:text-blue-600 pb-2">Used Cars</button>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {[
              {
                label: "Great Price",
                img: "https://media.licdn.com/dms/image/v2/C4E12AQFnE8TylVUm6w/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1520540177100?e=1752710400&v=beta&t=B2eYTVMdCdLpIJZASpEtD3GZNCsEu5TyAb6xslpnVAs",
                name: "Ford Transit – 2021",
                subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
                mileage: "2500 Miles",
                fuel: "Diesel",
                transmission: "Manual",
                price: "$22,000",
              },
              {
                label: "Low Mileage",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYwWJIYa0FSNjfIqPGnDI4PFPocTNYA23FA&s",
                name: "New GLC – 2023",
                subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
                mileage: "50 Miles",
                fuel: "Petrol",
                transmission: "Automatic",
                price: "$95,000",
              },
              {
                label: "",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JXy-4k_avCfHEf8MaY6bfRMaYRJ9KqWjfQ&s",
                name: "Audi A6 3.5 – New",
                subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD",
                mileage: "100 Miles",
                fuel: "Petrol",
                transmission: "Automatic",
                price: "$58,000",
              },
              {
                label: "",
                img: "https://cdn.prod.website-files.com/631e51cca2e02bac2d3d90fe/65cf5fb1647376908f0200c1_single-logo.jpg",
                name: "Corolla Altis – 2023",
                subtitle: "3.5 D5 PowerPulse Momentum 5dr AWD",
                mileage: "15000 Miles",
                fuel: "Petrol",
                transmission: "CVT",
                price: "$45,000",
              },
              {
                label: "Great Price",
                img: "https://image.made-in-china.com/202f0j00WFtoBhRnCaqc/Single-Motor-Nate-S-New-Energy-Vehicle-Electric-Vehicle.webp",
                name: "Ford Explorer – 2022",
                subtitle: "4.0 D5 PowerPulse Momentum 5dr AWD",
                mileage: "10 Miles",
                fuel: "Diesel",
                transmission: "Automatic",
                price: "$35,000",
              },
            ].map((car, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[280px] bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-44 object-cover"
                  />
                  {car.label && (
                    <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      {car.label}
                    </span>
                  )}
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-gray-800">
                    {car.name}
                  </h3>
                  <p className="text-xs text-gray-500 truncate mb-3">
                    {car.subtitle}
                  </p>
                  <div className="flex justify-between text-[11px] text-gray-500 mb-3">
                    <span>{car.mileage}</span>
                    <span>{car.fuel}</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-800">
                      {car.price}
                    </span>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Details ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image with Play Button */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/01/88/36/22/360_F_188362220_djDekeMlQm4NN24glMFVswheuT8u09BT.jpg"
              alt="Car"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white shadow-lg rounded-full p-4 hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get A Fair Price For Your Car
              <br />
              Sell To Us Today
            </h2>
            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of:
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                "We are the UK’s largest provider, with more patrols in more places",
                "You get 24/7 roadside assistance",
                "We fix 4 out of 5 cars at the roadside",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 text-center gap-8 text-gray-700">
          {[
            { value: "836M", label: "Cars For Sale" },
            { value: "738M", label: "Dealer Reviews" },
            { value: "100M", label: "Visitors Per Day" },
            { value: "238M", label: "Verified Dealers" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-gray-900">
                {item.value}
              </div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              {
                title: "Special Financing Offers",
                icon: "💰",
              },
              {
                title: "Trusted Car Dealership",
                icon: "🏢",
              },
              {
                title: "Transparent Pricing",
                icon: "📈",
              },
              {
                title: "Expert Car Service",
                icon: "🚗",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  Our stress-free finance department that can find financial
                  solutions to save you money.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
}
