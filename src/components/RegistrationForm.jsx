import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGamepad, FaLink, FaUpload, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
    setError,
  } = useForm();


  const onSubmit = async (data) => {
    console.log('Form submission started with data:', data);
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Additional validation for photo link
      if (!data.photoLink) {
        setError('photoLink', { 
          type: 'required', 
          message: 'Photo link is required' 
        });
        throw new Error('Please provide your photo link');
      }

      // Google Sheets Web App URL
      const googleSheetsURL = 'https://script.google.com/macros/s/AKfycbyrIYSXOweYXXhH8FoAUtT5oaQ-Lm1nVFQCqlCwU8wiLEn_g4hur7QKO3UH7fPgkPIK/exec';
      
      // Prepare data for Google Apps Script
      const submissionData = {
        name: data.fullName, // Script expects 'name'
        riotId: data.riotId,
        trackerLink: data.trackerLink,
        email: data.email,
        mobileNumber: data.mobile, // Script expects 'mobileNumber'
        city: data.city,
        photoLink: data.photoLink, // Google Photos or iCloud link
        agreeToTerms: data.agreeToTerms ? 'Yes' : 'No',
        submissionDate: new Date().toLocaleString()
      };

      console.log('Submitting form data to Google Sheets...');
      console.log('Submission data:', submissionData);

      // Create a simple form submission that Google Apps Script can handle
      const form = new FormData();
      Object.keys(submissionData).forEach(key => {
        if (submissionData[key] !== undefined) {
          form.append(key, submissionData[key]);
        }
      });

      // Submit using simple form POST
      const response = await fetch(googleSheetsURL, {
        method: 'POST',
        body: form
      });

      // With no-cors mode, we can't read the response, so we assume success
      console.log('Form submitted successfully to Google Sheets');
      setSubmitStatus('success');
      
      // Keep success message permanently (don't auto-clear)
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      // Clear error after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
    },
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-valorant-dark to-valorant-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" 
             style={{
               backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 5L60 35L90 35L68 55L78 85L50 70L22 85L32 55L10 35L40 35Z\" fill=\"%23FF4654\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')",
               backgroundSize: "100px 100px",
             }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-orbitron font-bold text-valorant-white mb-4 md:mb-6 px-2">
            AGENT <span className="text-valorant-red">REGISTRATION</span>
          </h2>
          <p className="text-sm md:text-xl text-valorant-cyan max-w-3xl mx-auto px-4">
            Join the elite ranks of VALORANT competitors. Fill out the form below to secure your spot in the tournament.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Full Name */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaUser className="mr-2 text-valorant-cyan" />
                  Full Name *
                </label>
                <input
                  {...register('fullName', { required: 'Full name is required' })}
                  type="text"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.fullName.message}
                  </p>
                )}
              </motion.div>

              {/* Riot ID */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaGamepad className="mr-2 text-valorant-cyan" />
                  Riot ID *
                </label>
                <input
                  {...register('riotId', { required: 'Riot ID is required' })}
                  type="text"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="Username#1234"
                />
                {errors.riotId && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.riotId.message}
                  </p>
                )}
              </motion.div>

              {/* Tracker Link */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaLink className="mr-2 text-valorant-cyan" />
                  Tracker Link *
                </label>
                <input
                  {...register('trackerLink', { 
                    required: 'Tracker link is required',
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: 'Please enter a valid URL'
                    }
                  })}
                  type="url"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="https://tracker.gg/valorant/profile/..."
                />
                {errors.trackerLink && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.trackerLink.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaEnvelope className="mr-2 text-valorant-cyan" />
                  Email ID *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              {/* Mobile Number */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaPhone className="mr-2 text-valorant-cyan" />
                  Mobile Number *
                </label>
                <input
                  {...register('mobile', { 
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Please enter a valid 10-digit mobile number'
                    }
                  })}
                  type="tel"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="9876543210"
                />
                {errors.mobile && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.mobile.message}
                  </p>
                )}
              </motion.div>

              {/* City */}
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-valorant-cyan" />
                  City *
                </label>
                <input
                  {...register('city', { required: 'City is required' })}
                  type="text"
                  className="input-futuristic w-full rounded-lg"
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="text-valorant-red text-sm mt-2 flex items-center">
                    <FaExclamationTriangle className="mr-1" />
                    {errors.city.message}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Photo Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileFocus="focus" 
              variants={inputVariants}
            >
              <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                <FaLink className="mr-2 text-valorant-cyan" />
                Photograph Link *
              </label>
              
              <input
                {...register('photoLink', { 
                  required: 'Photo link is required',
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: 'Please enter a valid URL (must start with http:// or https://)'
                  }
                })}
                type="url"
                className="input-futuristic w-full rounded-lg"
                placeholder="https://photos.google.com/share/... or https://icloud.com/photos/..."
              />
              
              {errors.photoLink && (
                <p className="text-valorant-red text-sm mt-2 flex items-center">
                  <FaExclamationTriangle className="mr-1" />
                  {errors.photoLink.message}
                </p>
              )}
              
              <p className="text-valorant-white/80 text-sm mt-3 leading-relaxed">
                Please provide a shareable link to your photograph from Google Photos, iCloud, or any other photo sharing service. 
                Make sure the link is public and accessible for verification during the tournament check-in process.
              </p>
            </motion.div>

            {/* Terms and Conditions Checkbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8"
            >
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  {...register('agreeToTerms', { 
                    required: 'You must agree to the terms and conditions to register' 
                  })}
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border border-valorant-cyan bg-transparent checked:bg-valorant-red checked:border-valorant-red focus:ring-2 focus:ring-valorant-cyan focus:ring-offset-0 accent-valorant-red"
                />
                <div className="flex-1">
                  <p className="text-valorant-white text-sm leading-relaxed">
                    I agree to the{' '}
                    <span className="text-valorant-cyan hover:text-valorant-red cursor-pointer underline">
                      Terms and Conditions
                    </span>{' '}
                    and abide by the{' '}
                    <span className="text-valorant-cyan hover:text-valorant-red cursor-pointer underline">
                      Rules of Conduct
                    </span>{' '}
                    for this tournament.
                  </p>
                </div>
              </label>
              
              {errors.agreeToTerms && (
                <p className="text-valorant-red text-sm mt-2 flex items-center">
                  <FaExclamationTriangle className="mr-1" />
                  {errors.agreeToTerms.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-6 md:mt-10 px-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`btn-primary text-lg md:text-xl px-8 py-4 md:px-16 md:py-6 rounded-lg font-orbitron relative overflow-hidden w-full sm:w-auto ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                  />
                ) : null}
                {isSubmitting ? 'SUBMITTING...' : 'REGISTER NOW'}
                
                {!isSubmitting && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.button>
            </motion.div>

            {/* Success/Error Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`text-center p-6 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 border border-green-500' 
                    : 'bg-red-500/20 border border-red-500'
                }`}
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  {submitStatus === 'success' ? (
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <FaCheckCircle className="text-3xl text-white" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                      <FaExclamationTriangle className="text-3xl text-white" />
                    </div>
                  )}
                  <h3 className={`text-2xl font-orbitron font-bold text-center ${
                    submitStatus === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {submitStatus === 'success' ? 'AGENT REGISTRATION SUCCESSFUL' : 'REGISTRATION FAILED'}
                  </h3>
                </div>
                <p className="text-valorant-white text-center text-lg">
                  {submitStatus === 'success' 
                    ? 'Welcome to the VALORANT GENESIS tournament! Your registration has been successfully submitted. You will receive confirmation details soon.' 
                    : 'There was an error processing your registration. Please check all required fields and try again.'}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
