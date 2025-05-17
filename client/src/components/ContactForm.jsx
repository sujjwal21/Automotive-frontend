import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-lg mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full mb-4 p-3 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 border rounded"
      />
      <textarea
        placeholder="Your message..."
        className="w-full mb-4 p-3 border rounded h-32"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
