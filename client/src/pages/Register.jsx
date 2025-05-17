import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Register</h2>

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

        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:ring-2 focus:ring-blue-500"
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
          Register
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
