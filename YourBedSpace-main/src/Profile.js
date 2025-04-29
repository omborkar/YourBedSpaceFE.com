import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "react-feather"; // For icons
import { ToastContainer, toast } from "react-toastify"; // For toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toast styles

const Profile = () => {
  // State for form fields
  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [login, setLogin] = useState("john_doe");

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for loading
  const [loading, setLoading] = useState(false);

  // State for error messages
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Handle input changes
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleLoginChange = (e) => setLogin(e.target.value);

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setPasswordError("");
    setEmailError("");

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    // Simulate an API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
      console.log(`Profile Updated!\nName: ${userName}\nEmail: ${email}\nLogin: ${login}`);
    }, 2000);
  };

  return (
    <div className="profile-container min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="container mx-auto p-6 max-w-xl bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-purple-700 mb-6 text-center">User Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium">Full Name:</label>
            <div className="flex items-center border-b border-purple-300 focus-within:border-purple-500 transition-colors duration-300">
              <User className="text-purple-500 mr-2" size={20} />
              <input
                type="text"
                id="name"
                value={userName}
                onChange={handleNameChange}
                className="w-full p-3 bg-transparent focus:outline-none placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium">Email:</label>
            <div className="flex items-center border-b border-purple-300 focus-within:border-purple-500 transition-colors duration-300">
              <Mail className="text-purple-500 mr-2" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-3 bg-transparent focus:outline-none placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Login Field */}
          <div className="mb-4">
            <label htmlFor="login" className="block text-gray-700 text-lg font-medium">Username (Login):</label>
            <div className="flex items-center border-b border-purple-300 focus-within:border-purple-500 transition-colors duration-300">
              <User className="text-purple-500 mr-2" size={20} />
              <input
                type="text"
                id="login"
                value={login}
                onChange={handleLoginChange}
                className="w-full p-3 bg-transparent focus:outline-none placeholder-gray-400"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium">Password:</label>
            <div className="flex items-center border-b border-purple-300 focus-within:border-purple-500 transition-colors duration-300 relative">
              <Lock className="text-purple-500 mr-2" size={20} />
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }} id="input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    id="show-button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"} 
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 text-lg font-medium">Confirm Password:</label>
            <div className="flex items-center border-b border-purple-300 focus-within:border-purple-500 transition-colors duration-300 relative">
              <Lock className="text-purple-500 mr-2" size={20} />
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }} id="input-container-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full p-3 bg-transparent focus:outline-none placeholder-gray-400 pr-12"  // Added padding for button space
                placeholder="Confirm your password"
                aria-describedby="password-error"
              />
              {passwordError && (
                 <p id="password-error" className="text-red-500 text-sm mt-1">
                   {passwordError}
                 </p>
              )}
              <button
                type="button"
                id="show-button-1"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 transition-colors duration-300 p-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"} 
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
              </div>
            </div>
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none flex items-center justify-center transition-all duration-300"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              "Save Profile"
            )}
          </button>
        </form>

        {/* Toast Container for Success/Error Feedback */}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Profile;
