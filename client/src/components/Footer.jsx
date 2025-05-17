import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D0C22] text-white pt-16">
        {/* Subscribe Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-1">Join BoxCar</h2>
              <p className="text-sm text-white/70">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1C1C2E] text-white px-4 py-2 rounded-l-full w-full md:w-80 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-sm text-white/80">
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Terms</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>Get in Touch</li>
              <li>Help center</li>
              <li>Live chat</li>
              <li>How it works</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Our Brands</h3>
            <ul className="space-y-2">
              <li>Toyota</li>
              <li>Porsche</li>
              <li>Audi</li>
              <li>BMW</li>
              <li>Ford</li>
              <li>Nissan</li>
              <li>Peugeot</li>
              <li>Volkswagen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Vehicles Type</h3>
            <ul className="space-y-2">
              <li>Sedan</li>
              <li>Hatchback</li>
              <li>SUV</li>
              <li>Hybrid</li>
              <li>Electric</li>
              <li>Coupe</li>
              <li>Truck</li>
              <li>Convertible</li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col sm:flex-row lg:flex-col sm:justify-between gap-8">
            {/* Mobile App */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Our Mobile App</h3>
              <div className="space-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="w-36"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-36"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Connect With Us</h3>
              <div className="flex space-x-4 text-white/80 text-xl">
                <i className="fab fa-facebook-f hover:text-white cursor-pointer"></i>
                <i className="fab fa-twitter hover:text-white cursor-pointer"></i>
                <i className="fab fa-instagram hover:text-white cursor-pointer"></i>
                <i className="fab fa-linkedin-in hover:text-white cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-sm text-white/60 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
          <p>© 2024 exemple.com. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Notice</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
