

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Calendar,
  Heart,
  Star,
  Award,
} from 'lucide-react';
import throttle from 'lodash.throttle';
import { Link } from 'react-router-dom'; 

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'normal',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [visibleElements, setVisibleElements] = useState({});
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const elementRefs = useRef(Array(7).fill(null));

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mleyrpky'; // Verify this endpoint

  useEffect(() => {
    const throttledObserver = throttle((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.id) {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.dataset.id]: true,
          }));
        }
      });
    }, 100);

    const observer = new IntersectionObserver(throttledObserver, {
      threshold: 0.1,
      rootMargin: '100px',
    });

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

    const timeout = setTimeout(() => {
      setVisibleElements((prev) => {
        const newState = { ...prev, 'contact-section': true };
        elementRefs.current.forEach((_, index) => {
          newState[`element-${index}`] = true;
        });
        return newState;
      });
    }, 2000);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      elementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      clearTimeout(timeout);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formStatus.error) {
      setFormStatus((prev) => ({ ...prev, error: null }));
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
        error: validationErrors.join(', '),
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    });

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

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
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
        });

        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            preferredTime: '',
            urgency: 'normal',
          });
          setFormStatus({
            isSubmitting: false,
            isSubmitted: false,
            error: null,
          });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error.name === 'AbortError' ? 'Request timed out. Please try again.' : 'Failed to send message. Please try again or contact us directly.',
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8447646815'],
      description: 'Call us for immediate physiotherapy assistance in Haryana and Delhi NCR',
      link: 'tel:+918447646815',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['nikhilkapoor9540@gmail.com'],
      description: 'Send us your queries anytime',
      link: 'mailto:nikhilkapoor9540@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: ['Delhi NCR', 'Haryana'],
      description: 'Home visits available in Gurugram, Noida, Faridabad, and more',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Sun: 9:00 AM - 6:00 PM'],
      description: 'Emergency consultations available',
    },
  ];

  const services = [
    'Chronic Pain Management',
    'Post-Surgery Rehabilitation',
    'Sports Performance Optimization',
    'Stroke Rehabilitation',
    'Neurological Rehabilitation',
    'Pediatric Physiotherapy',
    'Geriatric Care',
    'Home Visit Consultation',
    'Other (Please specify in message)',
  ];

  const timeSlots = [
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Flexible (Any time)',
    'Emergency (ASAP)',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <Helmet>
        <title>Contact Optima Physio Care | Physiotherapy in Haryana & Delhi NCR</title>
        <meta
          name="description"
          content="Contact Optima Physio Care for expert physiotherapy services in Haryana and Delhi NCR. Book your consultation in Gurugram, Noida, Faridabad, and more."
        />
        <meta
          name="keywords"
          content="physiotherapy in Haryana, Delhi NCR physiotherapy, Gurugram physiotherapist, Noida physiotherapy, contact Optima Physio Care"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-HR;IN-DL" />
        <meta name="geo.placename" content="Haryana, Delhi NCR" />
        <meta property="og:title" content="Contact Optima Physio Care | Expert Physiotherapy Services" />
        <meta
          property="og:description"
          content="Get in touch with Optima Physio Care for personalized physiotherapy in Haryana and Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.optimaphysiocare.in/contact" />
        <meta property="og:image" content="https://www.optimaphysiocare.in/images/contact-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Optima Physio Care | Expert Physiotherapy Services" />
        <meta
          name="twitter:description"
          content="Get in touch with Optima Physio Care for personalized physiotherapy in Haryana and Delhi NCR."
        />
        <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/contact-og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Optima Physio Care Contact',
            description: 'Contact Optima Physio Care for expert physiotherapy services in Haryana and Delhi NCR.',
            url: 'https://www.optimaphysiocare.in/contact',
            publisher: {
              '@type': 'Organization',
              name: 'Optima Physio Care',
              url: 'https://www.optimaphysiocare.in',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-8447646815',
                  contactType: 'Customer Service',
                  email: 'nikhilkapoor9540@gmail.com',
                  areaServed: ['IN-HR', 'IN-DL'],
                  availableLanguage: ['English', 'Hindi'],
                },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi NCR',
                addressRegion: 'Delhi',
                addressCountry: 'IN',
              },
            },
          })}
        </script>
      </Helmet>

      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <header
          ref={sectionRef}
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            visibleElements['contact-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-6 mt-14">
            <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Optima Physio Care
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to better health? Contact our expert physiotherapy team in Haryana and Delhi NCR for personalized care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8/5 Client Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>2000+ Patients Treated</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div
              ref={(el) => (elementRefs.current[0] = el)}
              className={`transform transition-all duration-1000 ${
                visibleElements['element-0'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's Connect & Start Your Healing Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Led by Dr. Nikhil Kapoor, Optima Physio Care provides personalized physiotherapy services across Haryana and Delhi NCR, including Gurugram, Noida, and Faridabad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Link
                    key={index}
                    to={info.link}
                    ref={(el) => (elementRefs.current[index + 1] = el)}
                    className={`group bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 transform cursor-pointer ${
                      visibleElements[`element-${index + 1}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    aria-label={`${info.title} contact information`}
                    onClick={(e) => !info.link && e.preventDefault()}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
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
                        <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div
              ref={(el) => (elementRefs.current[5] = el)}
              className={`bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-6 sm:p-8 text-white transform transition-all duration-1000 ${
                visibleElements['element-5'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-4 sm:mb-6 opacity-90">
                For urgent physiotherapy needs in Haryana or Delhi NCR, call us directly or request an emergency home visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="tel:+918447646815"
                  className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  aria-label="Call for immediate assistance"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Call Now
                </Link>
                <Link
                  to="tel:+918447646815'"
                  className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  aria-label="Request emergency visit"
                >
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Emergency Call
                </Link>
              </div>
            </div>

            <div
              ref={(el) => (elementRefs.current[6] = el)}
              className={`transform transition-all duration-1000 ${
                visibleElements['element-6'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9644027346683!2d77.0704324!3d28.6762094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c2684eded9%3A0xfa451563c5954bee!2sN.K.%20physiotherapy%20clinic!5e0!3m2!1sen!2sin!4v1698765432100"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Optima Physio Care Location"
              ></iframe>
            </div>

           
          </div>

          <div
            ref={(el) => (elementRefs.current[6] = el)}
            className={`transform transition-all duration-1000 ${
              visibleElements['element-6'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Your Consultation</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below to schedule your physiotherapy session in Haryana or Delhi NCR.
                </p>
              </div>

              <div role="status" aria-live="polite">
                {formStatus.isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-slide-in">
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll contact you within 2 hours.</p>
                    </div>
                  </div>
                )}

                {formStatus.error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-in">
                    <div>
                      <p className="text-red-800 font-medium">Error</p>
                      <p className="text-red-600 text-sm">{formStatus.error}</p>
                    </div>
                  </div>
                )}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text border-gray-300"
                      placeholder="Enter your full name"
                      required
                      aria-describedby="name-error"
                      aria-invalid={formStatus.error?.includes('Name') ? 'true' : 'false'}
                    />
                  </div>
                </div>

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
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text border-gray-300"
                      placeholder="your.email@example.com"
                      required
                      aria-describedby="email-error"
                      aria-invalid={formStatus.error?.includes('Email') ? 'true' : 'false'}
                    />
                  </div>
                </div>

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
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-text border-gray-300"
                      placeholder="+91 8447646815"
                      required
                      aria-describedby="phone-error"
                      aria-invalid={formStatus.error?.includes('Phone') ? 'true' : 'false'}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-pointer border-gray-300"
                    aria-describedby="service-description"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <p id="service-description" className="text-xs text-gray-500 mt-1">
                    Choose the physiotherapy service you need or specify in the message.
                  </p>
                </div>

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
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 cursor-pointer border-gray-300"
                      aria-describedby="preferredTime-description"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p id="preferredTime-description" className="text-xs text-gray-500 mt-1">
                    Select a convenient time slot for your consultation.
                  </p>
                </div>

                <div className="relative" role="radiogroup" aria-labelledby="urgency-label">
                  <label id="urgency-label" className="block text-sm font-medium text-gray-700 mb-3">
                    Urgency Level
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {[
                      { value: 'normal', label: 'Normal', color: 'blue' },
                      { value: 'urgent', label: 'Urgent', color: 'yellow' },
                      { value: 'emergency', label: 'Emergency', color: 'red' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="hidden"
                          aria-checked={formData.urgency === option.value}
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
                            formData.urgency === option.value
                              ? `border-${option.color}-500 bg-${option.color}-500`
                              : 'border-gray-300'
                          }`}
                        >
                          {formData.urgency === option.value && (
                            <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                          )}
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            formData.urgency === option.value ? `text-${option.color}-600` : 'text-gray-600'
                          }`}
                        >
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

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
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none cursor-text border-gray-300"
                      placeholder="Please describe your condition, symptoms, or any specific requirements..."
                      required
                      aria-describedby="message-description"
                      maxLength={500}
                      aria-invalid={formStatus.error?.includes('Message') ? 'true' : 'false'}
                    ></textarea>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                  <p id="message-description" className="text-xs text-gray-500 mt-1">
                    Provide details about your condition or requirements.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300 ${
                    formStatus.isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-lg hover:shadow-xl'
                  }`}
                  aria-label="Submit contact form"
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

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties. Your data is secure and used only for providing you with the best physiotherapy care.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
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

        .delay-1000 {
          animation-delay: 1s;
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #2563eb, #10b981);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1d4ed8, #059669);
        }

        input:focus,
        textarea:focus,
        select:focus,
        button:focus {
          outline: none;
        }

        button:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible,
        a:focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 2px;
        }

        input:invalid:focus {
          border-color: #ef4444;
        }

        input:valid:focus {
          border-color: #10b981;
        }

        ::placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .grid.lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .grid.md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .text-3xl {
            font-size: 1.875rem;
          }

          .gap-8 {
            gap: 1.5rem;
          }

          .p-6 {
            padding: 1rem;
          }

          button,
          input,
          textarea,
          select {
            min-height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse-slow,
          .animate-slide-in,
          .transition-all,
          .transition-transform {
            animation: none !important;
            transition: none !important;
          }
        }

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
          .shadow-xl {
            box-shadow: none !important;
          }

          button,
          a {
            border: 1px solid #000 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUsForm;
