import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGamepad, FaLink, FaUpload, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const validateFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return 'Only JPEG and PNG files are allowed';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 5MB';
    }

    return null;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        alert(error);
        return;
      }
      setUploadedFile(file);
      setValue('photograph', file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        alert(error);
        return;
      }
      setUploadedFile(file);
      setValue('photograph', file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object
      const formData = new FormData();
      
      // Append all form fields
      Object.keys(data).forEach(key => {
        if (key === 'photograph' && uploadedFile) {
          formData.append(key, uploadedFile);
        } else {
          formData.append(key, data[key]);
        }
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form Data:', Object.fromEntries(formData));
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus(null);
        setUploadedFile(null);
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-valorant-white mb-6">
            AGENT <span className="text-valorant-red">REGISTRATION</span>
          </h2>
          <p className="text-xl text-valorant-cyan max-w-3xl mx-auto">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* File Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <label className="block text-valorant-white font-orbitron font-bold mb-3 flex items-center">
                <FaUpload className="mr-2 text-valorant-cyan" />
                Upload Photograph *
              </label>
              
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                  dragOver 
                    ? 'border-valorant-red bg-valorant-red/20' 
                    : uploadedFile 
                      ? 'border-valorant-cyan bg-valorant-cyan/20' 
                      : 'border-valorant-cyan/50 hover:border-valorant-cyan bg-black/30'
                }`}
              >
                <input
                  {...register('photograph', { required: 'Photograph is required' })}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="space-y-4">
                  <FaUpload className={`mx-auto text-4xl ${uploadedFile ? 'text-valorant-cyan' : 'text-valorant-white/60'}`} />
                  
                  {uploadedFile ? (
                    <div>
                      <p className="text-valorant-cyan font-bold">File Selected:</p>
                      <p className="text-valorant-white">{uploadedFile.name}</p>
                      <p className="text-valorant-white/60 text-sm">
                        Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-valorant-white font-bold">
                        Drop your photograph here or click to browse
                      </p>
                      <p className="text-valorant-white/60 text-sm">
                        Supports: JPEG, PNG (Max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {errors.photograph && (
                <p className="text-valorant-red text-sm mt-2 flex items-center">
                  <FaExclamationTriangle className="mr-1" />
                  {errors.photograph.message}
                </p>
              )}
              
              <p className="text-valorant-white/80 text-sm mt-3 leading-relaxed">
                Please upload a clear, recent photograph. Your face must be clearly visible for identification purposes. 
                This photo will be used for verification during the tournament check-in process.
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
              className="text-center mt-10"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`btn-primary text-xl px-16 py-6 rounded-lg font-orbitron relative overflow-hidden ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
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
                <div className="flex items-center justify-center mb-3">
                  {submitStatus === 'success' ? (
                    <FaCheckCircle className="text-3xl text-green-500 mr-3" />
                  ) : (
                    <FaExclamationTriangle className="text-3xl text-red-500 mr-3" />
                  )}
                  <h3 className={`text-xl font-orbitron font-bold ${
                    submitStatus === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {submitStatus === 'success' ? 'Registration Successful!' : 'Registration Failed'}
                  </h3>
                </div>
                <p className="text-valorant-white">
                  {submitStatus === 'success' 
                    ? 'Welcome to the HSN VALORANT Hyderabad Showdown! Check your email for confirmation details.' 
                    : 'There was an error processing your registration. Please try again.'}
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
