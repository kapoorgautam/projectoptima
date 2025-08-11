// CallToActionSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Star, ArrowRightCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function CallToActionSection() {
  const [visibleElements, setVisibleElements] = useState({});
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // GSAP Scroll Animations for sections
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Intersection Observer for initial visibility (optional, retained for compatibility)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      sectionRef.current.dataset.id = 'section';
      observer.observe(sectionRef.current);
    }
    if (ctaRef.current) {
      ctaRef.current.dataset.id = 'cta';
      observer.observe(ctaRef.current);
    }
    if (statsRef.current) {
      statsRef.current.dataset.id = 'stats';
      observer.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-id="section"
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 via-white to-green-50 overflow-hidden animate-on-scroll"
    >
      <style>{`
        .btn {
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        @keyframes orbit {
          0% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          25% {
            transform: translate(15px, -25px);
            opacity: 0.8;
          }
          50% {
            transform: translate(20px, 0);
            opacity: 0.6;
          }
          75% {
            transform: translate(5px, 25px);
            opacity: 0.7;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
        }
        .animate-orbit {
          animation: orbit 10s ease-in-out infinite;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1400 {
          animation-delay: 1.4s;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-8 sm:top-12 left-8 sm:left-16 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60 animate-orbit"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-8 sm:right-12 w-5 sm:w-8 h-5 sm:h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-50 animate-orbit delay-600"></div>
        <div className="absolute top-1/4 left-1/4 sm:left-1/3 w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-55 animate-orbit delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 sm:right-1/4 w-4 sm:w-7 h-4 sm:h-7 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-65 animate-orbit delay-1400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ctaRef} data-id="cta" className="text-center animate-on-scroll">
          <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
            <Phone className="w-4 sm:w-5 h-4 sm:h-5 animate-pulse" />
            <span>Take the First Step</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            Start Your Recovery with
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Expert Physiotherapy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Book your home physiotherapy session with OptimPhysio Care today and experience personalized care from India’s top experts. Act now for a healthier tomorrow!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+918447646815"
              className="group bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 btn"
              aria-label="Explore our services"
            >
              <span>Call Now</span>
              <ArrowRightCircle className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/book-consultation"
              className="group border-2 border-blue-600 text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 btn"
              aria-label="Book a consultation"
            >
              <span>Book Consultation</span>
              <ArrowRightCircle className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div
          ref={statsRef}
          data-id="stats"
          className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mt-6 sm:mt-8 md:mt-10 opacity-90 animate-on-scroll"
        >
          <div className="flex items-center space-x-1 sm:space-x-2 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 fill-current" />
            ))}
            <span className="ml-1 sm:ml-2 font-semibold text-gray-900 text-base sm:text-lg md:text-xl">4.8/5 Rating</span>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">2000+</div>
            <div className="text-sm sm:text-base md:text-lg text-gray-600">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">5+</div>
            <div className="text-sm sm:text-base md:text-lg text-gray-600">Year Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}