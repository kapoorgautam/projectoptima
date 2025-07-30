import React, { useState, useEffect } from 'react';
import { Award, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // SEO Meta Tags
  useEffect(() => {
    // Primary SEO Meta Tags
    document.title = "Why Choose OptimPhysio Care | Best Physiotherapy Services in India";
    
    const metaTags = [
      { name: "description", content: "Discover why OptimPhysio Care is the best choice for physiotherapy services in India. Proven results, expert therapists, and advanced techniques for sports rehabilitation, pain management, and more." },
      { name: "keywords", content: "best physiotherapy services, top physiotherapists, expert physiotherapy, home physiotherapy India, sports rehabilitation, pain management, neurological physiotherapy, post-surgery recovery, orthopedic physiotherapy, cardiopulmonary rehabilitation, geriatric physiotherapy, pediatric physiotherapy" },
      { name: "author", content: "OptimPhysio Care" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      // Open Graph Meta Tags
      { property: "og:title", content: "Best Physiotherapy Services | OptimPhysio Care" },
      { property: "og:description", content: "Choose OptimPhysio Care for expert physiotherapy services at home. Proven success in sports rehab, pain management, and post-surgery recovery. Book now!" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://optimaphysiocare.com/portfolio" },
      { property: "og:site_name", content: "OptimPhysio Care" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card Meta Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Top Physiotherapy Services in India | OptimPhysio Care" },
      { name: "twitter:description", content: "Experience the best physiotherapy services with OptimPhysio Care. Expert therapists, modern equipment, and proven results for all your rehabilitation needs." },
      // Additional SEO Tags
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "target", content: "patients needing physiotherapy, sports injury recovery, pain management, rehabilitation services" }
    ];

    // Remove existing meta tags and add new ones
    metaTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (existingTag) {
        existingTag.remove();
      }
      
      const newTag = document.createElement('meta');
      if (tag.name) newTag.name = tag.name;
      if (tag.property) newTag.setAttribute('property', tag.property);
      newTag.content = tag.content;
      document.head.appendChild(newTag);
    });

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "OptimPhysio Care",
      "description": "Leading physiotherapy services in India with proven results in sports rehabilitation, pain management, neurological recovery, and post-surgery rehabilitation.",
      "serviceType": "Physiotherapy Services",
      "areaServed": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Expert Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Sports Rehabilitation",
              "description": "Proven recovery programs for sports injuries and performance enhancement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Pain Management",
              "description": "Effective solutions for chronic and acute pain relief"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Neurological Rehabilitation",
              "description": "Specialized therapy for neurological conditions and recovery"
            }
          }
        ]
      },
      "medicalSpecialty": "Physical Medicine and Rehabilitation",
      "award": [
        "Best Physiotherapy Clinic 2024",
        "Top Rated Home Physiotherapy Service",
        "Excellence in Patient Care Award"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200"
      }
    };

    // Add JSON-LD script
    let script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.remove();
    }
    
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Animation setup
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      clearTimeout(timer);
      metaTags.forEach(tag => {
        let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existingTag) {
          existingTag.remove();
        }
      });
      script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Award-Winning Care",
      description: "Recognized as the Best Physiotherapy Clinic in 2024 for our exceptional patient outcomes and innovative home care approach.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      stats: "3 National Awards",
      keywords: "award-winning physiotherapy, best physiotherapy clinic, top physiotherapists"
    },
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Our team of 50+ certified physiotherapists brings years of experience and advanced training to deliver personalized care.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      stats: "50+ Specialists",
      keywords: "expert physiotherapists, certified physical therapists, professional physiotherapy"
    },
    {
      icon: Heart,
      title: "Proven Results",
      description: "Over 5000 patients have achieved faster recovery and improved mobility with our evidence-based treatment protocols.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      stats: "5000+ Success Stories",
      keywords: "proven physiotherapy results, successful rehabilitation, patient recovery"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* SEO-Optimized Header */}
        <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Award className="w-5 h-5" />
            <span>Why We’re the Best</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Proven Excellence in
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent block">
              Physiotherapy Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With award-winning services, expert therapists, and thousands of success stories, OptimPhysio Care leads the way in home physiotherapy across India.
          </p>
          {/* Hidden SEO Keywords */}
          <div className="hidden">
            <span>best physiotherapy services, top physiotherapists India, expert physiotherapy, award-winning physiotherapy, home physiotherapy, sports rehabilitation, pain management physiotherapy</span>
          </div>
        </header>

        {/* Achievements Grid */}
        <main className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isHovered = hoveredItem === index;

            return (
              <article
                key={index}
                className={`relative group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isHovered ? 'scale-105 z-10' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                itemScope
                itemType="https://schema.org/MedicalBusiness"
              >
                <div className={`relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden ${
                  isHovered ? 'border-blue-200 shadow-2xl' : 'border-transparent'
                }`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500 transform ${isHovered ? 'scale-110' : 'scale-100'}`}></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${achievement.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-ping`}></div>
                    <div className={`absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 animate-ping`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${achievement.color} mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${isHovered ? 'animate-pulse' : ''}`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors leading-tight" itemProp="name">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors" itemProp="description">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-600 mb-4">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{achievement.stats}</span>
                    </div>
                    <button
                      className={`w-full bg-gradient-to-r ${achievement.color} text-white py-2 px-4 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:animate-pulse`}
                      aria-label={`Learn more about ${achievement.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="hidden" itemProp="keywords">{achievement.keywords}</div>
                  </div>

                  {/* Glow effect */}
                  {isHovered && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl opacity-10 animate-pulse blur-sm"></div>
                  )}
                </div>
              </article>
            );
          })}
        </main>

        {/* SEO-Optimized CTA */}
        <aside className={`text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white relative overflow-hidden" itemScope itemType="https://schema.org/MedicalBusiness">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full opacity-5 transform translate-x-36 -translate-y-36 animate-spin-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-10 transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6" itemProp="name">
                Trust the Best in Physiotherapy
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto" itemProp="description">
                Join thousands of satisfied patients who have experienced exceptional care with OptimPhysio Care. Book your session today for proven results!
              </p>
              <button
                className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                aria-label="Book physiotherapy appointment"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-wrap justify-center items-center space-x-8 opacity-90 mt-8">
                <div className="flex items-center space-x-1 animate-pulse">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                  <span className="ml-2 font-semibold">4.9/5 Rating</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">5000+</div>
                  <div className="text-sm opacity-80">Successful Treatments</div>
                </div>
              </div>
              <div className="hidden">
                <span itemProp="serviceType">Best Physiotherapy Services</span>
                <span itemProp="areaServed">India</span>
                <span itemProp="medicalSpecialty">Physical Medicine and Rehabilitation</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating animated elements */}
      <div className="absolute top-32 right-20">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-32 left-20">
        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60"></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}