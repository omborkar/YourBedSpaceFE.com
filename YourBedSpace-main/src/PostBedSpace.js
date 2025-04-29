import React, { useState } from "react";

const PostBedSpace = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate all fields
    if (!name || !location || !price || !description || !whatsapp) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
      console.log("Bed Space Posted:", { name, location, price, description, whatsapp });
      setSuccess("Your bed space has been posted successfully!");
      setName("");
      setLocation("");
      setPrice("");
      setDescription("");
      setWhatsapp("");
    } catch (err) {
      setError("An error occurred while posting your bed space.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="post-bedspace-container min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Post Your Bed Space</h1>
        {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Name of Bed Space:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter bed space name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 text-lg font-medium mb-2">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block text-gray-700 text-lg font-medium mb-2">Price (per month):</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-lg font-medium mb-2">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter a description of your bed space"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="whatsapp" className="block text-gray-700 text-lg font-medium mb-2">WhatsApp Number:</label>
            <input
              type="text"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 focus:outline-none disabled:bg-green-300 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <img
                  src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" // Sleeping animation GIF
                  alt="Loading"
                  className="w-8 h-8 mr-2"
                />
                Posting...
              </div>
            ) : (
              "Post Bed Space"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostBedSpace;