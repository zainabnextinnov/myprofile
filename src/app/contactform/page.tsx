'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    organizationName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Demo submission - simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setShowThankYou(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        name: '',
        contactNo: '',
        organizationName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. I&apos;ll get back to you soon!
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-slide-in { animation: slideIn 0.5s ease-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        .card-3d:hover {
          transform: rotateY(2deg) rotateX(2deg) translateZ(10px);
        }
        .input-field {
          font-family: 'JetBrains Mono', monospace;
          color: #000000 !important;
          background-color: rgba(255, 255, 255, 0.95);
        }
        .input-field::placeholder {
          color: #6b7280;
          font-family: 'Inter', sans-serif;
        }
        .label-text {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in">
          <Link 
            href="/"
            className="inline-flex items-center glass-effect text-white px-6 py-3 rounded-xl hover:bg-purple-600/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 mb-8 animate-glow"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Profile
          </Link>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-glow">
            Contact Me
          </h1>
          <p className="text-xl text-gray-300 font-light">Let's connect and build something amazing together</p>
        </div>

        {/* Contact Form */}
        <div className="glass-effect rounded-3xl shadow-2xl overflow-hidden card-3d">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-float border-4 border-white/30">
                <span className="text-3xl">📬</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
              <p className="text-purple-100 text-lg font-light">Fill out the form below and I'll respond as soon as possible</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Name and Contact Number */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-slide-in">
                <label htmlFor="name" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                  <span className="text-xl mr-2">👤</span>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="animate-slide-in" style={{animationDelay: '100ms'}}>
                <label htmlFor="contactNo" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                  <span className="text-xl mr-2">📱</span>
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Organization and Email */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-slide-in" style={{animationDelay: '200ms'}}>
                <label htmlFor="organizationName" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                  <span className="text-xl mr-2">🏢</span>
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105"
                  placeholder="Your organization (optional)"
                />
              </div>
              <div className="animate-slide-in" style={{animationDelay: '300ms'}}>
                <label htmlFor="email" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                  <span className="text-xl mr-2">✉️</span>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="animate-slide-in" style={{animationDelay: '400ms'}}>
              <label htmlFor="subject" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                <span className="text-xl mr-2">📝</span>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div className="animate-slide-in" style={{animationDelay: '500ms'}}>
              <label htmlFor="message" className="block text-lg font-semibold text-white mb-3 label-text flex items-center">
                <span className="text-xl mr-2">💬</span>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-6 py-4 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 input-field shadow-lg hover:shadow-xl transform hover:scale-105 resize-vertical"
                placeholder="Tell me more about your inquiry, project ideas, or collaboration opportunities..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center animate-slide-in" style={{animationDelay: '600ms'}}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center shadow-2xl ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/50 transform hover:scale-110 animate-glow'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span className="text-2xl mr-3">🚀</span>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center animate-slide-in" style={{animationDelay: '700ms'}}>
          <p className="text-xl text-gray-300 mb-8 font-light">Or reach out directly:</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="mailto:zainab.nextinnov@gmail.com"
              className="glass-effect p-6 rounded-2xl flex items-center justify-center text-white hover:bg-purple-600/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 card-3d group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✉️</span>
                </div>
                <p className="font-semibold text-lg mb-1">Email Me</p>
                <p className="text-gray-300 text-sm">zainab.nextinnov@gmail.com</p>
              </div>
            </a>
            <a 
              href="tel:+919589796386"
              className="glass-effect p-6 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 card-3d group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-semibold text-lg mb-1">Call Me</p>
                <p className="text-gray-300 text-sm">+91 9589796386</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
