import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/api';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data); // Sends { email, password }
      toast.success('Login successful!');
      navigate('/bedspaces');
    } catch (error) {
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 xs:p-6 sm:p-8">
      <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 xs:p-6 sm:p-8 w-full max-w-sm xs:max-w-md sm:max-w-lg shadow-lg">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-800 text-sm sm:text-base mb-1">
              Email
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-800 text-sm sm:text-base mb-1">
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 xs:p-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
