import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, MapPin, TrendingDown, Users, DollarSign, Heart, Zap } from 'lucide-react';

export default function ProblemsSection() {
  useEffect(() => {
    document.title = "Common Physiotherapy Problems | OptimPhysio Care - Home Physiotherapy Services";
    
    const metaTags = [
      { name: "description", content: "Avoid common physiotherapy problems like long wait times, high costs, and poor results. OptimPhysio Care offers personalized home physiotherapy services with expert therapists." },
      { name: "keywords", content: "physiotherapy problems, home physiotherapy, physiotherapy services, physical therapy issues, physiotherapy treatment, rehabilitation services, physiotherapy clinic problems, home physical therapy, physiotherapy near me, mobile physiotherapy" },
      { name: "author", content: "OptimPhysio Care" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:title", content: "Common Physiotherapy Problems | OptimPhysio Care Solutions" },
      { property: "og:description", content: "Discover why traditional physiotherapy fails and how OptimPhysio Care's home services solve wait times, costs, and recovery issues." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://optimaphysiocare.in/problems" },
      { property: "og:site_name", content: "OptimPhysio Care" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Physiotherapy Problems Solved | OptimPhysio Care" },
      { name: "twitter:description", content: "Skip clinic wait times, high costs & poor results. Get expert physiotherapy at home with OptimPhysio Care." },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "target", content: "patients seeking physiotherapy, physical therapy, rehabilitation services" }
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
      "description": "Professional home physiotherapy services solving common clinic problems like wait times, high costs, and impersonal care",
      "serviceType": "Physiotherapy Services",
      "areaServed": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Physiotherapy Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Home Physiotherapy", "description": "Personalized physiotherapy treatment at patient's home" } },
          { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "Sports Rehabilitation", "description": "Specialized rehabilitation for sports injuries" } }
        ]
      },
      "medicalSpecialty": "Physical Medicine and Rehabilitation"
    };

    let existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => metaTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (existingTag) existingTag.remove();
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const cardTimer = setInterval(() => setActiveCard((prev) => (prev + 1) % 6), 3000);
    return () => { clearTimeout(timer); clearInterval(cardTimer); };
  }, []);

  const problems = [
    { icon: Clock, title: "Long Physiotherapy Wait Times", description: "Traditional physiotherapy clinics make patients wait weeks for appointments, delaying recovery and prolonging pain. Home physiotherapy eliminates scheduling delays.", color: "from-[#1E3A8A] to-[#10B981]", bgColor: "from-[#F3F4F6] to-[#E6F0FA]", stat: "2-4 weeks wait", keywords: "physiotherapy appointment wait times, quick physiotherapy booking" },
    { icon: MapPin, title: "Travel Issues for Physical Therapy", description: "Commuting to physiotherapy clinics while injured is painful and expensive. Mobile physiotherapy brings expert treatment to your home.", color: "from-[#1E3A8A] to-[#0E7490]", bgColor: "from-[#F3F4F6] to-[#D1E7DD]", stat: "45 min avg travel", keywords: "home physiotherapy, mobile physical therapy, physiotherapy at home" },
    { icon: DollarSign, title: "High Physiotherapy Treatment Costs", description: "Expensive clinic fees, parking costs, and time off work make quality physiotherapy financially burdensome. Affordable home physiotherapy reduces total costs.", color: "from-[#10B981] to-[#0E7490]", bgColor: "from-[#E6F0FA] to-[#D1E7DD]", stat: "$200+ per session", keywords: "affordable physiotherapy, physiotherapy cost, cheap physical therapy" },
    { icon: Users, title: "Impersonal Physiotherapy Care", description: "Overcrowded physiotherapy clinics provide rushed treatments with limited one-on-one attention. Personalized home physiotherapy ensures dedicated care.", color: "from-[#1E3A8A] to-[#10B981]", bgColor: "from-[#F3F4F6] to-[#E6F0FA]", stat: "15 min sessions", keywords: "personalized physiotherapy, one-on-one physical therapy, dedicated physiotherapist" },
    { icon: TrendingDown, title: "Poor Physiotherapy Recovery Results", description: "Inconsistent treatment schedules and lack of personalized physiotherapy care lead to slow or incomplete recovery. Home physiotherapy ensures better outcomes.", color: "from-[#0E7490] to-[#10B981]", bgColor: "from-[#D1E7DD] to-[#E6F0FA]", stat: "60% incomplete recovery", keywords: "physiotherapy recovery, effective physical therapy, physiotherapy results" },
    { icon: Heart, title: "Lack of Physiotherapy Motivation", description: "Without proper guidance and support at home, patients often abandon physiotherapy exercises. Continuous home physiotherapy support improves compliance.", color: "from-[#1E3A8A] to-[#0E7490]", bgColor: "from-[#F3F4F6] to-[#D1E7DD]", stat: "70% quit early", keywords: "physiotherapy motivation, physiotherapy compliance, physiotherapy support" }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-[#D1E7DD] to-[#E6F0FA] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-r from-[#E6F0FA] to-[#D1E7DD] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#D1E7DD] text-[#1E3A8A] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Common Physiotherapy Challenges</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#374151] mb-4 sm:mb-6">
            Common Problems with Traditional
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] bg-clip-text text-transparent block sm:inline">
              Physiotherapy Services
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#374151] max-w-xs sm:max-w-md md:max-w-3xl mx-auto leading-relaxed">
            Discover why patients struggle with conventional physiotherapy clinics and how modern home physiotherapy services 
            provide better accessibility, personalized care, and faster recovery results.
          </p>
          
          <div className="hidden">
            <span>physiotherapy problems, physiotherapy services, home physiotherapy, physical therapy issues, physiotherapy treatment, rehabilitation services, physiotherapy clinic problems, home physical therapy, physiotherapy near me, mobile physiotherapy, physiotherapy cost, physiotherapy wait times, personalized physiotherapy</span>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isActive = activeCard === index;
            
            return (
              <article
                key={index}
                className={`relative group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isActive ? 'scale-105' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                itemScope
                itemType="https://schema.org/Problem"
              >
                <div className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-500 border-2 ${
                  isActive ? 'border-[#D1E7DD] shadow-lg' : 'border-transparent'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r ${problem.color} mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>

                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#374151] mb-2 sm:mb-4 group-hover:text-[#1E3A8A] transition-colors" itemProp="name">
                      {problem.title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-[#374151] leading-relaxed mb-4 sm:mb-6 group-hover:text-[#0E7490] transition-colors" itemProp="description">
                      {problem.description}
                    </p>

                    <div className={`inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r ${problem.color} text-white text-xs sm:text-sm md:text-base font-semibold`}>
                      <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                      {problem.stat}
                    </div>

                    <div className="hidden" itemProp="keywords">
                      {problem.keywords}
                    </div>

                    <div className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r ${problem.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}></div>
                  </div>
                </div>

                {/* {isActive && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] to-[#10B981] rounded-xl sm:rounded-2xl opacity-20 animate-pulse"></div>
                )} */}
              </article>
            );
          })}
        </main>

        <aside className={`text-center mt-8 sm:mt-12 md:mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md max-w-xs sm:max-w-md md:max-w-2xl mx-auto border border-[#D1E7DD]" itemScope itemType="https://schema.org/Service">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#374151] mb-2 sm:mb-4" itemProp="name">
              Ready for Better Physiotherapy Solutions?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#374151] mb-4 sm:mb-6" itemProp="description">
              OptimPhysio Care eliminates traditional physiotherapy problems with personalized home physiotherapy care, 
              expert physiotherapist oversight, and affordable treatment plans designed for faster recovery.
            </p>
            <button 
              className="group bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 mx-auto"
              aria-label="Discover OptimPhysio Care physiotherapy solutions"
              href= './treatment'
            >
              <span>Discover Our Physiotherapy Solution</span>
              <div className="w-3 sm:w-5 h-3 sm:h-5 bg-white rounded-full flex items-center justify-center ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#1E3A8A] rounded-full"></div>
              </div>
            </button>
            
            <div className="hidden">
              <span itemProp="serviceType">Home Physiotherapy Services</span>
              <span itemProp="areaServed">India</span>
              <span itemProp="provider" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">OptimPhysio Care</span>
              </span>
            </div>
          </div> */}
        </aside>
      </div>

      <div className="absolute top-16 sm:top-32 right-4 sm:right-20 animate-bounce">
        <div className="w-4 sm:w-8 h-4 sm:h-8 bg-gradient-to-r from-[#D1E7DD] to-[#E6F0FA] rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-16 sm:bottom-32 left-4 sm:left-20 animate-bounce delay-1000">
        <div className="w-3 sm:w-6 h-3 sm:h-6 bg-gradient-to-r from-[#E6F0FA] to-[#D1E7DD] rounded-full opacity-60"></div>
      </div>
    </section>
  );
}