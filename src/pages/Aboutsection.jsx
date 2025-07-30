import React, { useState, useEffect, useRef } from 'react';
import { Clock, Heart, Users, ArrowRight, Sparkles, TrendingUp, Award, CheckCircle, Play, Phone, MapPin } from 'lucide-react';

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const services = [
    "Home Physiotherapy",
    "Sports Rehabilitation", 
    "Pain Management",
    "Post-Surgery Recovery"
  ];

  useEffect(() => {
    document.title = "About OptimPhysio Care | Premier Physiotherapy in India";
    
    // Service rotation
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    
    const metaTags = [
      { name: "description", content: "Explore the story of OptimPhysio Care, India's premier physiotherapy provider. Learn about our history, innovative approach, and dedication to transforming lives through expert care." },
      { name: "keywords", content: "about optimphysio care, premier physiotherapy India, expert physiotherapists, home physiotherapy services, sports rehabilitation, pain management, neurological physiotherapy, post-surgery recovery, innovative physiotherapy" },
      { name: "author", content: "OptimPhysio Care" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:title", content: "About OptimPhysio Care | Premier Physiotherapy Services" },
      { property: "og:description", content: "Discover OptimPhysio Care's journey to becoming India's top physiotherapy provider, offering innovative home-based care for sports rehab, pain management, and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://optimaphysiocare.com/about" },
      { property: "og:site_name", content: "OptimPhysio Care" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About OptimPhysio Care | Leading Physiotherapy in India" },
      { name: "twitter:description", content: "Learn about OptimPhysio Care's history and innovative physiotherapy services, delivering exceptional care for recovery and wellness across India." },
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
      "description": "OptimPhysio Care is India's premier physiotherapy provider, delivering innovative home-based care for sports rehabilitation, pain management, and neurological recovery.",
      "serviceType": "Physiotherapy Services",
      "areaServed": "India",
      "foundingDate": "2018",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Innovative Physiotherapy Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Sports Rehabilitation", "description": "Innovative recovery programs for athletes" } },
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Pain Management", "description": "Cutting-edge solutions for pain relief" } },
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Neurological Rehabilitation", "description": "Advanced therapy for neurological recovery" } }
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const sectionHeight = timelineRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, Math.min(1, (windowHeight - rect.top) / (sectionHeight + windowHeight)));
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(serviceInterval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      metaTags.forEach(tag => {
        let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existingTag) existingTag.remove();
      });
      script = document.querySelector('script[type="application/ld+json"]');
      if (script) script.remove();
    };
  }, []);

  const milestones = [
    {
      year: "2018",
      title: "Founded with a Vision",
      description: "OptimPhysio Care was established with a mission to bring world-class physiotherapy to homes across India, making recovery accessible and convenient for everyone.",
      icon: Clock,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      keywords: "founded optimphysio care, home physiotherapy India, accessible physiotherapy",
      stats: "Founded"
    },
    {
      year: "2020",
      title: "Innovative Care Model",
      description: "Introduced a tech-driven approach with personalized treatment plans and modern equipment, setting new standards in home physiotherapy across India.",
      icon: Sparkles,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      keywords: "innovative physiotherapy, tech-driven physiotherapy, personalized care",
      stats: "Tech Innovation"
    },
    {
      year: "2024",
      title: "Nationwide Impact",
      description: "Expanded to serve thousands of patients across India, earning a 4.9/5 rating for exceptional care and building lasting community trust.",
      icon: TrendingUp,
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      keywords: "nationwide physiotherapy, trusted physiotherapy, patient success stories",
      stats: "5000+ Lives"
    }
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: "Happy Patients", color: "text-blue-600" },
    { icon: Award, number: "4.9/5", label: "Rating", color: "text-green-600" },
    { icon: CheckCircle, number: "50+", label: "Cities Served", color: "text-blue-600" },
    { icon: Heart, number: "95%", label: "Recovery Rate", color: "text-green-600" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by 5000+ Patients</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Expert 
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> About</span>
            <br />
            <span className="text-3xl lg:text-4xl text-blue-600">
              {services[currentService]}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            Modern infrastructure, latest technology & top physiotherapy experts delivering personalized care at your home with continuous guidance and strong quality checks since 2018.
          </p>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-8 h-8 ${achievement.color} mx-auto mb-3`} />
                  <div className="font-bold text-2xl text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="hidden">
            <span>about optimphysio care, premier physiotherapy India, innovative physiotherapy, home physiotherapy services, expert physiotherapists</span>
          </div>
        </header>

        {/* Timeline Section */}
        <main ref={timelineRef} className="relative mb-20">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isHovered = activeMilestone === index;
            const isLeft = index % 2 === 0;

            return (
              <article
                key={index}
                className={`relative flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-center mb-16 group`}
                onMouseEnter={() => setActiveMilestone(index)}
                onMouseLeave={() => setActiveMilestone(null)}
                itemScope
                itemType="https://schema.org/Organization"
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`} style={{ transitionDelay: `${index * 200}ms` }}>
                    
                    {/* Floating Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.gradient} shadow-lg mb-6 transform ${isHovered ? 'scale-110 rotate-6' : ''} transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Year Badge */}
                    <div className={`inline-flex items-center bg-gradient-to-r ${milestone.gradient} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {milestone.year}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" itemProp="name">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg mb-6" itemProp="description">
                      {milestone.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {milestone.stats}
                    </div>

                    <div className="hidden" itemProp="keywords">{milestone.keywords}</div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${milestone.gradient} shadow-lg transform ${isHovered ? 'scale-125' : ''} transition-all duration-300 border-4 border-white`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/50 to-transparent animate-pulse"></div>
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.gradient} opacity-30 animate-ping ${isHovered ? 'opacity-50' : ''}`}></div>
                </div>

                {/* Spacer for non-active side */}
                <div className="hidden lg:block w-5/12"></div>
              </article>
            );
          })}
        </main>

        {/* Call to Action Section */}
        <aside className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white overflow-hidden shadow-2xl" itemScope itemType="https://schema.org/MedicalBusiness">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-5xl font-bold mb-6" itemProp="name">
                Join Our Journey to Wellness
              </h3>
              
              <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                Experience the future of physiotherapy with OptimPhysio Care. Join thousands who've transformed their lives with our innovative home-based care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 opacity-90">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Home Service Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                  <span className="font-bold">4.9/5 Rating</span>
                </div>
              </div>

              <div className="hidden">
                <span itemProp="serviceType">Premier Physiotherapy Services</span>
                <span itemProp="areaServed">India</span>
                <span itemProp="medicalSpecialty">Physical Medicine and Rehabilitation</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}