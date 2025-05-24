import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBedSpace } from '../services/api';

const CreateBedSpace = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Structure the data to match the required POST format
      const postData = {
        bedOwnerId: 9,
        name: data.name,
        location: data.location,
        price: Number(data.price), // Ensure price is a number
        description: data.description,
        whatsappNumber: data.whatsapp,
        stillAvailable: true,
      };
      console.log('post data', postData);
      await createBedSpace(postData);
      toast.success('Bed space posted successfully!');

      reset();
      navigate('/bedspaces');
    } catch (error) {
      toast.error(error.message || 'Error posting bed space');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-5 p-4 xs:p-6 sm:p-8">
      <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 xs:p-6 sm:p-8 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl shadow-lg">
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Post Your Bed Space
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 text-sm sm:text-base mb-1"
            >
              Name of Bed Space
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter bed space name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-gray-800 text-sm sm:text-base mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter location"
            />
            {errors.location && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-800 text-sm sm:text-base mb-1"
            >
              Price (per month)
            </label>
            <input
              type="number"
              id="price"
              {...register('price', {
                required: 'Price is required',
                min: { value: 1, message: 'Price must be positive' },
              })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-gray-800 text-sm sm:text-base mb-1"
            >
              WhatsApp Number
            </label>
            <input
              type="text"
              id="whatsapp"
              {...register('whatsapp', {
                required: 'WhatsApp number is required',
              })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter WhatsApp number"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.whatsapp.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-800 text-sm sm:text-base mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register('description', {
                required: 'Description is required',
              })}
              className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Enter a description"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 xs:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 disabled:bg-green-400 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Posting...
                </div>
              ) : (
                'Post Bed Space'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBedSpace;
