







import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, CheckCircle, Phone, MapPin, Clock, Sparkles, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; 
export default function PhysioHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const services = useMemo(() => [
    'Home Physiotherapy',
    'Sports Injury Rehabilitation',
    'Pain Management',
    'Post-Surgery Recovery',
    'Cupping Therapy',
    'Dry Needling',
    'Neuro Rehabilitation',
    'Postural Correction',
  ], []);

  const handleServiceRotation = useCallback(() => {
    if (!isPaused) {
      setCurrentService((prev) => (prev + 1) % services.length);
    }
  }, [isPaused, services.length]);

  useEffect(() => {
    setIsLoaded(true);
    
    intervalRef.current = setInterval(handleServiceRotation, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleServiceRotation]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    // Use requestAnimationFrame to ensure DOM is ready
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handlePauseService = useCallback(() => setIsPaused(true), []);
  const handleResumeService = useCallback(() => setIsPaused(false), []);

  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Optima Physio Care',
    url: 'https://www.optimaphysiocare.in',
    logo: 'https://www.optimaphysiocare.in/logo.png',
    image: 'https://www.optimaphysiocare.in/images/hero-image.jpg',
    description: 'Optima Physio Care, led by Dr. Nikhil Kapoor, provides expert physiotherapy services in Delhi NCR, specializing in home-based care, sports injury rehabilitation, pain management, and neuro rehabilitation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'A-26, Shiv Bux Park, Nangloi',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      postalCode: '110041',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6667',
      longitude: '77.0833'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8447646815',
        contactType: 'Customer Service',
        email: 'nikhilkapoor9540@gmail.com',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'Delhi NCR'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-8447646815',
        contactType: 'WhatsApp',
        url: 'https://wa.me/+918447646815',
      },
    ],
    employee: {
      '@type': 'Person',
      name: 'Dr. Nikhil Kapoor',
      jobTitle: 'Physiotherapist',
      description: 'Expert in sports physiotherapy, manual therapy, IASTM, cupping therapy, and onco-care rehabilitation.',
      alumniOf: 'Physiotherapy College',
      hasCredential: 'Licensed Physiotherapist'
    },
    sameAs: [
      'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
      'https://www.facebook.com/people/optima-physio-care/100094770625926/',
      'https://www.instagram.com/optimaphysiocare/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Physiotherapy Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: service,
          description: `Expert ${service.toLowerCase()} provided by Dr. Nikhil Kapoor at Optima Physio Care.`,
          provider: {
            '@type': 'MedicalOrganization',
            name: 'Optima Physio Care'
          }
        }
      }))
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2000',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: '₹₹',
    paymentAccepted: 'Cash, UPI, Card',
    currenciesAccepted: 'INR',
    openingHours: 'Mo-Su 08:00-20:00',
    telephone: '+91-8447646815',
    email: 'nikhilkapoor9540@gmail.com'
  }), [services]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden relative scroll-smooth" lang="en">
      <Helmet>
        <title>Optima Physio Care | Expert Physiotherapy in Delhi NCR | Dr. Nikhil Kapoor</title>
        <meta
          name="description"
          content="Optima Physio Care offers expert physiotherapy in Delhi NCR with Dr. Nikhil Kapoor. Home physiotherapy, sports injury treatment, pain management, cupping therapy, dry needling & neuro rehabilitation. 2000+ patients treated. Book free consultation."
        />
        <meta
          name="keywords"
          content="Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, home physiotherapy, sports injury treatment, cupping therapy, dry needling, neuro rehabilitation, back pain relief, IASTM therapy, manual therapy, physio clinic Delhi, physiotherapist near me"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.6667;77.0833" />
        <meta name="ICBM" content="28.6667, 77.0833" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Optima Physio Care | Expert Physiotherapy in Delhi NCR | Dr. Nikhil Kapoor" />
        <meta
          property="og:description"
          content="Expert physiotherapy services in Delhi NCR by Dr. Nikhil Kapoor. Home physiotherapy, sports injury treatment, pain management. 2000+ patients treated. Book free consultation today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.optimaphysiocare.in" />
        <meta property="og:image" content="https://www.optimaphysiocare.in/images/hero-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dr. Nikhil Kapoor providing expert physiotherapy at Optima Physio Care" />
        <meta property="og:site_name" content="Optima Physio Care" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@optimaphysiocare" />
        <meta name="twitter:creator" content="@drnikhilkapoor" />
        <meta name="twitter:title" content="Optima Physio Care | Expert Physiotherapy in Delhi NCR" />
        <meta
          name="twitter:description"
          content="Expert physiotherapy services in Delhi NCR by Dr. Nikhil Kapoor. Home physiotherapy, sports injury treatment, pain management. Book free consultation."
        />
        <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/hero-image.jpg" />
        <meta name="twitter:image:alt" content="Dr. Nikhil Kapoor providing expert physiotherapy at Optima Physio Care" />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://www.optimaphysiocare.in" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center" as="image" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Optimized CSS Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0px, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate3d(0, -30px, 0) rotate(90deg); opacity: 0.4; }
          50% { transform: translate3d(0, -60px, 0) rotate(180deg); opacity: 0.2; }
          75% { transform: translate3d(0, -30px, 0) rotate(270deg); opacity: 0.4; }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translate3d(0, 60px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translate3d(-60px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translate3d(60px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale3d(0.9, 0.9, 1); }
          to { opacity: 1; transform: scale3d(1, 1, 1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.4), 0 0 35px rgba(59, 130, 246, 0.2); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        
        .animate-slideInUp { animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .hover-lift:hover {
          transform: translate3d(0, -5px, 0) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .btn-modern {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }
        
        .btn-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-modern:hover::before {
          left: 100%;
        }
        
        .pulse-ring {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale3d(1, 1, 1); }
          50% { opacity: 0.8; transform: scale3d(1.03, 1.03, 1); }
        }
        
        /* Smooth scrolling optimization */
        * {
          scroll-behavior: smooth;
        }
        
        /* Performance optimizations */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* High contrast support */
        @media (prefers-contrast: high) {
          .bg-gradient-to-br {
            background: #fff;
            border: 2px solid #000;
          }
          .text-gray-600 {
            color: #000;
          }
          .glass-morphism {
            background: #fff;
            border: 2px solid #000;
          }
        }

        /* Print styles */
        @media print {
          .bg-gradient-to-br,
          .glass-morphism {
            background: #fff !important;
            border: 1px solid #ccc !important;
          }
          .animate-pulse,
          .animate-float,
          .bounce-gentle {
            animation: none !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hover-lift:hover {
            transform: none;
          }
          
          .btn-modern:active {
            transform: scale(0.98);
          }
        }
      `}</style>

      {/* Optimized animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-green-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-100/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          >
            <div 
              className={`rounded-full ${
                i % 3 === 0 ? 'w-2 h-2 bg-blue-400' : 
                i % 3 === 1 ? 'w-1.5 h-1.5 bg-green-400' : 
                'w-1 h-1 bg-blue-300'
              }`}
            ></div>
          </div>
        ))}
      </div>

      <header className="relative z-10" ref={sectionRef}>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div 
                id="badge" 
                data-animate 
                className={`transition-all duration-700 ${
                  isVisible.badge ? 'animate-slideInUp' : 'opacity-0'
                }`}
              >
                <div className="inline-flex items-center space-x-3 glass-morphism text-blue-700 px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium mb-6 hover-lift group">
                  <div className="relative">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 pulse-ring" />
                    <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="font-semibold">Trusted by 2000+ Patients</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                  <span className="block">Expert</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent pb-2">
                    Physiotherapy
                  </span>
                  <span
                    className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mt-2"
                    role="region"
                    aria-live="polite"
                    onMouseEnter={handlePauseService}
                    onMouseLeave={handleResumeService}
                    onFocus={handlePauseService}
                    onBlur={handleResumeService}
                  >
                    for {services[currentService]}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                  Optima Physio Care, led by <strong className="text-blue-600">Dr. Nikhil Kapoor</strong>, offers 
                  personalized physiotherapy in Delhi NCR, specializing in <strong className="text-green-600">home-based care</strong>, 
                  sports injuries, and neuro rehabilitation with advanced techniques.
                </p>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Licensed & Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span>Khelo India Certified</span>
                  </div>
                </div>
              </div>

              <div 
                id="buttons" 
                data-animate 
                className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 delay-200 ${
                  isVisible.buttons ? 'animate-slideInLeft' : 'opacity-0'
                }`}
              >
                <Link
                  to="http://localhost:5173/contact"
                  className="group btn-modern bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover-lift shadow-2xl flex items-center justify-center space-x-3"
                  aria-label="Book a free physiotherapy consultation with Dr. Nikhil Kapoor"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="./treatment"
                  className="group btn-modern glass-morphism text-gray-700 px-8 py-4 rounded-2xl text-lg font-bold hover-lift shadow-xl flex items-center justify-center space-x-3 border border-white/50"
                  aria-label="Explore physiotherapy treatments at Optima Physio Care"
                >
                  <Play className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span>Explore Treatments</span>
                </Link>
              </div>

              <div 
                id="contact-info" 
                data-animate 
                className={`flex flex-wrap gap-4 pt-6 transition-all duration-700 delay-300 ${
                  isVisible['contact-info'] ? 'animate-fadeIn' : 'opacity-0'
                }`}
              >
                <Link
                  to="tel:+918447646815"
                  className="flex items-center space-x-3 glass-morphism px-4 py-3 rounded-2xl text-gray-600 hover:text-blue-600 hover-lift transition-all duration-300 group shadow-lg"
                  aria-label="Call Optima Physio Care at +91 8447646815"
                >
                  <Phone className="w-5 h-5 text-blue-600 pulse-ring group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-sm">Call Now</div>
                    <div className="text-xs">+91 8447646815</div>
                  </div>
                </Link>
                
                <Link
                  to="https://wa.me/+918447646815"
                  className="flex items-center space-x-3 glass-morphism px-4 py-3 rounded-2xl text-gray-600 hover:text-green-600 hover-lift transition-all duration-300 group shadow-lg"
                  aria-label="Contact Optima Physio Care via WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 text-green-600 pulse-ring group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-sm">WhatsApp</div>
                    <div className="text-xs">Chat Now</div>
                  </div>
                </Link>
                
                <div className="flex items-center space-x-3 glass-morphism px-4 py-3 rounded-2xl text-gray-600 shadow-lg">
                  <MapPin className="w-5 h-5 text-red-500 pulse-ring" />
                  <div>
                    <div className="font-bold text-sm">Location</div>
                    <div className="text-xs">Delhi NCR & Haryana</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div 
              id="hero-card" 
              data-animate 
              className={`relative transition-all duration-700 delay-400 ${
                isVisible['hero-card'] ? 'animate-slideInRight' : 'opacity-0'
              }`}
            >
              <div className="relative">
                {/* Background effects */}
                <div className="absolute -top-8 -left-8 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Main Card */}
                <div className="relative rounded-3xl shadow-2xl p-6 sm:p-8 hover-lift border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">

                    {/* Hero Image */}
                    <div className="relative mb-6 group">
                      <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden hover-lift shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                          alt="Dr. Nikhil Kapoor providing expert physiotherapy at Optima Physio Care in Delhi NCR"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          width="600"
                          height="400"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-600/30 to-transparent"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex items-end justify-start p-4">
                          <div className="text-left text-white">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Sparkles className="w-4 h-4 animate-pulse" />
                              </div>
                              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                Dr. Nikhil Kapoor
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Expert Physiotherapy</h3>
                            <p className="text-sm opacity-90">Specialized care in sports injuries and neuro rehabilitation</p>
                          </div>
                        </div>
                        
                        {/* Quality badge */}
                        <div className="absolute top-3 right-3">
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                            <Star className="w-4 h-4 fill-current" />
                            <span>4.8/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Optima Physio Care</h3>
                        <p className="text-lg text-gray-600 mb-6">Led by Dr. Nikhil Kapoor, delivering results-driven physiotherapy in Delhi NCR</p>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-morphism rounded-2xl p-4 shadow-lg hover-lift border border-white/30">
                          <div className="text-3xl font-black text-blue-600 mb-1">2000+</div>
                          <div className="text-sm text-gray-600 font-semibold">Patients Treated</div>
                        </div>
                        
                        <div className="glass-morphism rounded-2xl p-4 shadow-lg hover-lift border border-white/30">
                          <div className="text-3xl font-black text-green-600 mb-1">5+</div>
                          <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                        </div>
                        
                        <div className="glass-morphism rounded-2xl p-4 shadow-lg hover-lift border border-white/30">
                          <div className="text-3xl font-black text-purple-600 mb-1">98%</div>
                          <div className="text-sm text-gray-600 font-semibold">Success Rate</div>
                        </div>
                        
                        <div className="glass-morphism rounded-2xl p-4 shadow-lg hover-lift border border-white/30">
                          <div className="text-3xl font-black text-orange-600 mb-1">24/7</div>
                          <div className="text-sm text-gray-600 font-semibold">Support</div>
                        </div>
                      </div>

                      {/* Trust badges */}
                      <div className="flex flex-wrap justify-center gap-2 pt-4">
                        <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Licensed</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span>Certified</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          <CheckCircle className="w-3 h-3 text-purple-500" />
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 glass-morphism rounded-2xl p-3 shadow-xl bounce-gentle">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">Online</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-morphism rounded-2xl p-3 shadow-xl bounce-gentle" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-sm font-bold text-gray-700">Call Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg className="w-full h-12 text-white opacity-5" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C150,100 350,0 600,20 C850,40 1050,100 1200,80 L1200,120 Z" fill="currentColor" />
          </svg>
        </div>
      </header>

      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h2>Services Offered by Optima Physio Care</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service} - Expert treatment by Dr. Nikhil Kapoor</li>
          ))}
        </ul>
        <p>
          Dr. Nikhil Kapoor is a certified physiotherapist specializing in manual therapy, 
          IASTM (Instrument Assisted Soft Tissue Mobilization), cupping therapy, dry needling, 
          and sports physiotherapy. Located in Delhi NCR, Optima Physio Care provides 
          comprehensive rehabilitation services including neurological physiotherapy, 
          orthopedic care, and home-based treatments.
        </p>
        <address>
          Optima Physio Care<br />
          A-26, Shiv Bux Park, Nangloi<br />
          Delhi 110041, India<br />
          Phone: +91-8447646815<br />
          Email: nikhilkapoor9540@gmail.com
        </address>
      </div>
    </div>
  );
}







