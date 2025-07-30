import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  Heart,
  Star,
  Award
} from 'lucide-react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'normal'
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const [visibleElements, setVisibleElements] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const elementRefs = useRef([]);

  // Replace with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mleyrpky";

  // Scroll Animation with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.id) {
            setVisibleElements((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.dataset.id = 'contact-section';
      observer.observe(sectionRef.current);
    }
    
    elementRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `element-${index}`;
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      elementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Contact OptimPhysio Care | Book Your Physiotherapy Consultation";
    
    const metaTags = [
      { name: "description", content: "Contact OptimPhysio Care for expert physiotherapy services. Book your consultation today. Home visits available across the region. Professional, caring, and effective treatment." },
      { name: "keywords", content: "contact physiotherapy, book physiotherapy consultation, home physiotherapy services, physiotherapy appointment, OptimPhysio Care contact, physiotherapy booking" },
      { name: "author", content: "OptimPhysio Care" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact OptimPhysio Care | Professional Physiotherapy Services" },
      { property: "og:description", content: "Get in touch with our expert physiotherapy team. Professional home-based treatments for pain relief and rehabilitation." },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: "Dadri, Uttar Pradesh" }
    ];

    metaTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (existingTag) existingTag.remove();
      
      const newTag = document.createElement('meta');
      if (tag.name) newTag.name = tag.name;
      if (tag.property) newTag.setAttribute('property', tag.property);
      newTag.content = tag.content;
      document.head.appendChild(newTag);
    });

    return () => {
      metaTags.forEach(tag => {
        let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existingTag) existingTag.remove();
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push('Valid email is required');
    if (!formData.phone.trim()) errors.push('Phone number is required');
    if (!/^[+]?[\d\s-()]{8,}$/.test(formData.phone)) errors.push('Valid phone number is required');
    if (!formData.message.trim()) errors.push('Message is required');
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: validationErrors.join(', ')
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            preferredTime: '',
            urgency: 'normal'
          });
          setFormStatus({
            isSubmitting: false,
            isSubmitted: false,
            error: null
          });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 99999 99999', '+91 88888 88888'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@optimphysiocare.com', 'support@optimphysiocare.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: ['Dadri, Uttar Pradesh', 'Greater Noida & Surrounding Areas'],
      description: 'Home visits available'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Sun: 9:00 AM - 6:00 PM'],
      description: 'Emergency consultations available'
    }
  ];

  const services = [
    'Back Pain Treatment',
    'Neck Pain Treatment',
    'Stroke Rehabilitation',
    'Sports Injury Recovery',
    'Post-Surgery Rehabilitation',
    'Neurological Rehabilitation',
    'Pediatric Physiotherapy',
    'Geriatric Care',
    'Home Visit Consultation',
    'Other (Please specify in message)'
  ];

  const timeSlots = [
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Flexible (Any time)',
    'Emergency (ASAP)'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header 
          ref={sectionRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            visibleElements['contact-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Heart className="w-5 h-5 animate-pulse" />
            <span>Get In Touch</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {' '}OptimPhysio Care
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to start your journey to better health? Contact our expert physiotherapy team today for personalized care and professional treatment.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>10,000+ Patients Treated</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div 
              ref={(el) => (elementRefs.current[0] = el)}
              className={`transform transition-all duration-1000 ${
                visibleElements['element-0'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Connect & Start Your Healing Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated team is here to provide you with the highest quality physiotherapy care. 
                Whether you need treatment for pain relief, post-injury rehabilitation, or wellness maintenance, 
                we're committed to helping you achieve optimal health and mobility.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (elementRefs.current[index + 1] = el)}
                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 transform cursor-pointer ${
                      visibleElements[`element-${index + 1}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div 
              ref={(el) => (elementRefs.current[5] = el)}
              className={`bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white transform transition-all duration-1000 ${
                visibleElements['element-5'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6 opacity-90">
                For urgent consultations or emergency physiotherapy needs, call us directly or request an emergency home visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
                <button className="flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Emergency Visit
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={(el) => (elementRefs.current[6] = el)}
            className={`transform transition-all duration-1000 ${
              visibleElements['element-6'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Book Your Consultation
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours
                </p>
              </div>

              {/* Form Status Messages */}
              {formStatus.isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-slide-in">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll contact you within 2 hours.</p>
                  </div>
                </div>
              )}

              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-in">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-600 text-sm">{formStatus.error}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text ${
                        focusedField === 'name' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text ${
                        focusedField === 'email' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text ${
                        focusedField === 'phone' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                      }`}
                      placeholder="+91 99999 99999"
                      required
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-pointer ${
                      focusedField === 'service' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time */}
                <div className="relative">
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('preferredTime')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-pointer ${
                        focusedField === 'preferredTime' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Urgency Level */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Urgency Level
                  </label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'normal', label: 'Normal', color: 'blue' },
                      { value: 'urgent', label: 'Urgent', color: 'yellow' },
                      { value: 'emergency', label: 'Emergency', color: 'red' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="hidden"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
                          formData.urgency === option.value 
                            ? `border-${option.color}-500 bg-${option.color}-500` 
                            : 'border-gray-300'
                        }`}>
                          {formData.urgency === option.value && (
                            <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                          )}
                        </div>
                        <span className={`text-sm font-medium ${
                          formData.urgency === option.value ? `text-${option.color}-600` : 'text-gray-600'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none cursor-text ${
                        focusedField === 'message' ? 'border-blue-500 shadow-lg' : 'border-gray-300'
                      }`}
                      placeholder="Please describe your condition, symptoms, or any specific requirements..."
                      required
                    ></textarea>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer ${
                    formStatus.isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {formStatus.isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties. Your data is secure and used only for providing you with the best physiotherapy care.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.5; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease forwards;
        }
        
        .delay-1000 { animation-delay: 1s; }
        
        /* Custom cursor styles */
        .cursor-pointer {
          cursor: pointer !important;
        }
        
        .cursor-text {
          cursor: text !important;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #10b981);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #059669);
          transform: scale(1.1);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom focus styles */
        input:focus,
        textarea:focus,
        select:focus,
        button:focus {
          outline: none;
        }
        
        /* Form field animations */
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        textarea:focus,
        select:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
        }
        
        /* Button hover effects */
        button:hover {
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }
        
        /* Radio button custom styles */
        .border-blue-500 {
          border-color: #3b82f6 !important;
        }
        
        .bg-blue-500 {
          background-color: #3b82f6 !important;
        }
        
        .border-yellow-500 {
          border-color: #eab308 !important;
        }
        
        .bg-yellow-500 {
          background-color: #eab308 !important;
        }
        
        .border-red-500 {
          border-color: #ef4444 !important;
        }
        
        .bg-red-500 {
          background-color: #ef4444 !important;
        }
        
        .text-blue-600 {
          color: #2563eb !important;
        }
        
        .text-yellow-600 {
          color: #ca8a04 !important;
        }
        
        .text-red-600 {
          color: #dc2626 !important;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .grid.lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .grid.md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .text-5xl.lg\\:text-6xl {
            font-size: 2.5rem;
          }
          
          .p-8 {
            padding: 1.5rem;
          }
          
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-20 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .mb-20 {
            margin-bottom: 3rem;
          }
          
          .gap-16 {
            gap: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .text-5xl.lg\\:text-6xl {
            font-size: 2rem;
          }
          
          .text-3xl {
            font-size: 1.875rem;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .p-8 {
            padding: 1rem;
          }
          
          .px-6 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .space-y-8 > * + * {
            margin-top: 1.5rem;
          }
          
          .space-y-6 > * + * {
            margin-top: 1rem;
          }
          
          .flex-col.sm\\:flex-row {
            flex-direction: column;
          }
          
          .gap-4 {
            gap: 0.75rem;
          }
        }
        
        /* Print styles */
        @media print {
          .animate-float,
          .animate-pulse-slow,
          .animate-slide-in {
            animation: none;
          }
          
          .bg-gradient-to-br,
          .bg-gradient-to-r {
            background: #fff !important;
            color: #000 !important;
          }
          
          .shadow-lg,
          .shadow-xl,
          .shadow-2xl {
            box-shadow: none !important;
          }
          
          button {
            border: 1px solid #000 !important;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse-slow,
          .animate-slide-in,
          .transition-all,
          .transition-colors,
          .transition-transform {
            animation: none !important;
            transition: none !important;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .bg-gradient-to-r,
          .bg-gradient-to-br {
            background: #000 !important;
            color: #fff !important;
          }
          
          .text-gray-600,
          .text-gray-500 {
            color: #000 !important;
          }
          
          .border-gray-300 {
            border-color: #000 !important;
          }
          
          input,
          textarea,
          select {
            border: 2px solid #000 !important;
            background: #fff !important;
            color: #000 !important;
          }
        }
        
        /* Focus visible for better accessibility */
        button:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Loading state animations */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        /* Custom selection colors */
        ::selection {
          background-color: #3b82f6;
          color: white;
        }
        
        ::-moz-selection {
          background-color: #3b82f6;
          color: white;
        }
        
        /* Custom placeholder colors */
        ::placeholder {
          color: #9ca3af;
          opacity: 1;
        }
        
        ::-webkit-input-placeholder {
          color: #9ca3af;
        }
        
        ::-moz-placeholder {
          color: #9ca3af;
          opacity: 1;
        }
        
        :-ms-input-placeholder {
          color: #9ca3af;
        }
        
        /* Form validation styles */
        input:invalid {
          border-color: #ef4444;
        }
        
        input:valid {
          border-color: #10b981;
        }
        
        /* Improved touch targets for mobile */
        @media (max-width: 768px) {
          button,
          input,
          textarea,
          select {
            min-height: 44px;
          }
          
          .cursor-pointer {
            cursor: default;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .bg-white {
            background-color: #1f2937 !important;
            color: #f9fafb !important;
          }
          
          .text-gray-900 {
            color: #f9fafb !important;
          }
          
          .text-gray-600 {
            color: #d1d5db !important;
          }
          
          .text-gray-500 {
            color: #9ca3af !important;
          }
          
          .border-gray-300 {
            border-color: #4b5563 !important;
          }
          
          input,
          textarea,
          select {
            background-color: #374151 !important;
            color: #f9fafb !important;
            border-color: #4b5563 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUsForm;