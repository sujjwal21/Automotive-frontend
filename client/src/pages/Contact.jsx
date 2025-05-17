import { useState } from 'react';
import API from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/inquiries', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>

        {status === 'success' && (
          <p className="text-green-600 mb-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mb-4">Something went wrong. Try again.</p>
        )}

        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:ring-2 focus:ring-blue-500"
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
