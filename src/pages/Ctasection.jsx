import React, { useState, useEffect, useRef } from 'react';
import { Phone, Star, ArrowRightCircle } from 'lucide-react';

export default function CallToActionSection() {
  const [visibleElements, setVisibleElements] = useState({});
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
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

  useEffect(() => {
    document.title = "Book Your Physiotherapy Session | OptimPhysio Care India";
    
    const metaTags = [
      { name: "description", content: "Book your home physiotherapy session with OptimPhysio Care, India’s top provider of expert care for sports rehabilitation, pain management, and recovery." },
      { name: "keywords", content: "book physiotherapy session, home physiotherapy India, expert physiotherapy, sports rehabilitation, pain management, neurological physiotherapy, post-surgery recovery, optimphysio care" },
      { name: "author", content: "OptimPhysio Care" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:title", content: "Book Now with OptimPhysio Care | Expert Physiotherapy" },
      { property: "og:description", content: "Schedule your home physiotherapy session with OptimPhysio Care for expert care in sports rehab, pain management, and more. Book today!" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://optimaphysiocare.com/book-now" },
      { property: "og:site_name", content: "OptimPhysio Care" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book Your Physiotherapy Session | OptimPhysio Care" },
      { name: "twitter:description", content: "Take the first step to recovery with OptimPhysio Care’s expert home physiotherapy services. Book your session now!" },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "target", content: "patients needing physiotherapy, sports injury recovery, pain management, rehabilitation services" }
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

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "OptimPhysio Care",
      "description": "Book your home physiotherapy session with OptimPhysio Care, India’s leading provider of expert care for sports rehabilitation, pain management, and neurological recovery.",
      "serviceType": "Physiotherapy Services",
      "areaServed": "India",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+91-555-123-4567",
        "areaServed": "IN"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Physiotherapy Booking",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Sports Rehabilitation", "description": "Expert recovery for athletes" } },
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Pain Management", "description": "Comprehensive pain relief solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Neurological Rehabilitation", "description": "Specialized neurological recovery" } }
        ]
      },
      "medicalSpecialty": "Physical Medicine and Rehabilitation",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200" }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (script) script.remove();
    
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      metaTags.forEach(tag => {
        let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existingTag) existingTag.remove();
      });
      script = document.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, []);

  return (
    <section ref={sectionRef} data-id="section" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-8 sm:top-12 left-8 sm:left-16 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60 animate-orbit"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-8 sm:right-12 w-5 sm:w-8 h-5 sm:h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-50 animate-orbit delay-600"></div>
        <div className="absolute top-1/4 left-1/4 sm:left-1/3 w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-55 animate-orbit delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 sm:right-1/4 w-4 sm:w-7 h-4 sm:h-7 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-65 animate-orbit delay-1400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ctaRef} data-id="cta" className={`text-center transform transition-all duration-1000 ${visibleElements['cta'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
            <Phone className="w-4 sm:w-5 h-4 sm:h-5 animate-pulse" />
            <span>Take the First Step</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            Start Your Recovery with
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Expert Physiotherapy
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Book your home physiotherapy session with OptimPhysio Care today and experience personalized care from India’s top experts. Act now for a healthier tomorrow!
          </p>
          <button
            className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 mx-auto"
            aria-label="Book physiotherapy session"
          >
            <span>Book Your Session Now</span>
            <ArrowRightCircle className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="hidden">
            <span>book physiotherapy session, expert home physiotherapy, optimphysio care, sports rehabilitation, pain management, neurological physiotherapy</span>
          </div>
        </div>

        <div
          ref={statsRef}
          data-id="stats"
          className={`flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mt-6 sm:mt-8 md:mt-10 opacity-90 transform transition-all duration-1000 delay-200 ${
            visibleElements['stats'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="flex items-center space-x-1 sm:space-x-2 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 fill-current" />
            ))}
            <span className="ml-1 sm:ml-2 font-semibold text-gray-900 text-base sm:text-lg md:text-xl">4.9/5 Rating</span>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">5000+</div>
            <div className="text-sm sm:text-base md:text-lg text-gray-600">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">50+</div>
            <div className="text-sm sm:text-base md:text-lg text-gray-600">Expert Therapists</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: translate(0, 0); opacity: 0.5; }
          25% { transform: translate(15px, -25px); opacity: 0.8; }
          50% { transform: translate(20px, 0); opacity: 0.6; }
          75% { transform: translate(5px, 25px); opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0.5; }
        }
        .animate-orbit {
          animation: orbit 10s ease-in-out infinite;
        }
        .delay-600 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1400 { animation-delay: 1.4s; }
      `}</style>
    </section>
  );
}