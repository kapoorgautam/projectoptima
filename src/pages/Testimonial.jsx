








import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Clock, CheckCircle, Quote, Sparkles } from 'lucide-react';

const TestimonialsAndTrust = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      id: 1,
      name: 'Soniya',
      role: 'Marathon Runner',
      // image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'OptimaphysioCare transformed my recovery journey. After a severe knee injury, I thought my running days were over. Their personalized treatment plan and cutting-edge techniques got me back to marathons in just 4 months!',
      condition: 'Knee Injury Recovery',
    },
    {
      id: 2,
      name: 'Sachin',
      role: 'Software Engineer',
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Years of desk work left me with chronic back pain. The team at OptimaphysioCare didn't just treat the symptoms – they addressed the root cause. Their ergonomic guidance and exercise program changed my life.",
      condition: 'Chronic Back Pain',
    },
    {
      id: 3,
      name: 'Ayush',
      role: 'Professional Dancer',
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "As a dancer, my body is my instrument. OptimaphysioCare's preventive care program keeps me performing at my peak. Their attention to detail and movement analysis is absolutely incredible.",
      condition: 'Performance Enhancement',
    },
    {
      id: 4,
      name: 'Kunal',
      role: 'Construction Manager',
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "After 20 years in construction, shoulder pain was my constant companion. OptimaphysioCare's innovative approach and genuine care helped me return to work pain-free. Truly life-changing experience.",
      condition: 'Shoulder Rehabilitation',
    },
  ];

  const trustMetrics = [
    { icon: Users, number: '2000+', label: 'Patients Treated', description: 'Successfully helped patients recover and thrive' },
    { icon: Award, number: '5+', label: 'Years Experience', description: 'Dedicated to excellence in physiotherapy' },
    { icon: Star, number: '4.8/5', label: 'Patient Rating', description: 'Based on 2,500+ verified reviews' },
    { icon: Clock, number: '98%', label: 'Success Rate', description: 'Patients report significant improvement' },
  ];

  const certifications = [
    'Licensed Physiotherapists',
    'Sports Medicine Certified',
    'Manual Therapy Specialists',
    'Ergonomic Assessment Certified',
    'Dry Needling Qualified',
    'Movement Analysis Experts',
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

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

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 sm:w-5 h-4 sm:h-5 transition-all duration-300 ${
            i < rating 
              ? 'text-yellow-400 fill-current transform hover:scale-110' 
              : 'text-gray-300'
          }`}
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.3; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.6; }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeInRotate {
          from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-slideInUp { 
          animation: slideInUp 0.8s ease-out forwards; 
        }
        .animate-slideInLeft { 
          animation: slideInLeft 0.8s ease-out forwards; 
        }
        .animate-slideInRight { 
          animation: slideInRight 0.8s ease-out forwards; 
        }
        .animate-scaleIn { 
          animation: scaleIn 0.8s ease-out forwards; 
        }
        .animate-fadeInRotate { 
          animation: fadeInRotate 1s ease-out forwards; 
        }
        .animate-float { 
          animation: float linear infinite; 
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .btn-modern {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-modern:hover::before {
          left: 100%;
        }
        
        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header Section */}
        <div 
          id="header" 
          data-animate 
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible.header ? 'animate-slideInUp' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 hover-lift">
            <Award className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 pulse-ring" />
            <span>Trusted by Thousands</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            Why Patients Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 animate-pulse">
              OptimaphysioCare
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-12 leading-relaxed">
            Experience the difference with evidence-based treatment, personalized care, and a track record of exceptional results.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {trustMetrics.map((metric, index) => (
              <div
                key={index}
                id={`metric-${index}`}
                data-animate
                className={`group hover-lift glass-morphism rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-1000 ${
                  isVisible[`metric-${index}`] ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg sm:rounded-2xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1 md:mb-2">
                  {metric.number}
                </div>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-1 md:mb-2">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div 
          id="testimonials" 
          data-animate 
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible.testimonials ? 'animate-fadeInRotate' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Real Stories, Real Results
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Hear from patients whose lives have been transformed through our comprehensive physiotherapy care.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-2xl hover-lift border border-white/20">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 group-hover:scale-105 transition-transform duration-300">
                    <Quote className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-blue-600 opacity-70" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4 md:mb-6">
                    <div className="relative">
                      {/* <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 sm:w-14 md:w-16 lg:w-18 h-12 sm:h-14 md:h-16 lg:h-18 rounded-full object-cover border-2 sm:border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
                      /> */}
                      <div className="absolute -bottom-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2">
                        <StarRating rating={testimonials[currentTestimonial].rating} />
                        <span className="text-xs sm:text-sm md:text-base text-gray-500">
                          • {testimonials[currentTestimonial].condition}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8">
              <button
                onClick={prevTestimonial}
                className="group flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover-lift border border-gray-200"
              >
                <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
              </button>
              
              <div className="flex space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-500 hover:scale-110 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-blue-600 to-green-500 w-6 sm:w-8' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="group flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover-lift border border-gray-200"
              >
                <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Certifications & CTA Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Certifications */}
          <div 
            id="certifications" 
            data-animate 
            className={`transition-all duration-1000 ${
              isVisible.certifications ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Certified Excellence in Care
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Our team holds the highest certifications and continuously pursues advanced training to provide you with the most effective, evidence-based treatments available.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 glass-morphism rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/30 hover-lift group"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-800 font-medium">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
      id="cta"
      data-animate
      className={`transition-all duration-1000 ${
        isVisible.cta ? 'animate-slideInRight' : 'opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white hover-lift shadow-xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 pulse-ring">
            <Sparkles className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who have experienced the OptimaphysioCare difference. Book your consultation today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="/treatment"
            className="btn-modern bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 hover-lift shadow-md"
          >
            Explore Treatment
          </a>
          <a
            href="/contact"
            className="btn-modern border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover-lift"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndTrust;















































// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Play, Shield, Heart, Clock, MapPin, Phone, Star, CheckCircle2, Zap, Award, Users, Calendar, Target, Activity, Sparkles, TrendingUp, Globe } from 'lucide-react';

// export default function MinimalistPhysioHero() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentWord, setCurrentWord] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const heroRef = useRef(null);

//   const dynamicWords = ["Pain-Free", "Stronger", "Healthier", "Mobile", "Confident"];
  
//   const testimonials = [
//     { name: "Dr. Sarah Chen", role: "Sports Medicine", quote: "Revolutionary approach to recovery", avatar: "SC" },
//     { name: "Mark Johnson", role: "Professional Athlete", quote: "Back to peak performance in record time", avatar: "MJ" },
//     { name: "Lisa Rodriguez", role: "Patient", quote: "Life-changing treatment at home", avatar: "LR" }
//   ];

//   const metrics = [
//     { number: "25K+", label: "Lives Changed", icon: Heart, color: "rose" },
//     { number: "99.2%", label: "Success Rate", icon: TrendingUp, color: "emerald" },
//     { number: "15min", label: "Response Time", icon: Clock, color: "blue" },
//     { number: "50+", label: "Cities", icon: Globe, color: "purple" }
//   ];

//   const serviceHighlights = [
//     { title: "AI-Powered Assessment", desc: "Smart diagnostics for precise treatment", bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5" },
//     { title: "Home-Based Recovery", desc: "Professional care in comfort of your home", bgColor: "bg-gradient-to-br from-emerald-500/10 to-green-500/5" },
//     { title: "24/7 Monitoring", desc: "Continuous support throughout your journey", bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/5" }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
    
//     const wordInterval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
//     }, 2500);

//     const testimonialInterval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePos({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height
//         });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       clearInterval(wordInterval);
//       clearInterval(testimonialInterval);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
      
//       {/* Subtle Background Elements */}
//       <div className="absolute inset-0">
//         {/* Minimalist geometric shapes */}
//         <div 
//           className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/40 to-purple-100/40 blur-3xl transition-all duration-1000"
//           style={{
//             left: `${20 + mousePos.x * 10}%`,
//             top: `${10 + mousePos.y * 10}%`
//           }}
//         />
//         <div 
//           className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald-100/40 to-cyan-100/40 blur-3xl transition-all duration-1000 delay-300"
//           style={{
//             right: `${15 + mousePos.x * 8}%`,
//             bottom: `${20 + mousePos.y * 8}%`
//           }}
//         />
        
//         {/* Subtle line pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="1"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>
//       </div>

//       {/* Navigation Hint */}
//       <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//         <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 shadow-lg">
//           <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//           <span className="text-sm font-medium text-gray-700">Available Now - Free Consultation</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 px-6 py-30 bg-gradient-to-br from-blue-50 via-white to-green-50 ">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-12 gap-16 items-center min-h-screen">
            
//             {/* Left Content - 7 columns */}
//             <div className="lg:col-span-7 space-y-12">
              
//               {/* Hero Text */}
//               <div className="space-y-8">
//                 <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 mb-8">
//                     <Sparkles className="w-5 h-5 text-blue-600" />
//                     <span className="font-semibold text-gray-700">India's #1 Home Physiotherapy Platform</span>
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                   </div>
                  
//                   <h1 className="text-4xl lg:text-6xl  text-gray-900 leading-none tracking-tight">
//                     Get
//                     <br />
//                     <span className="relative inline-block">
//                       <span 
//                         key={currentWord}
//                         className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in"
//                       >
//                         {dynamicWords[currentWord]}
//                       </span>
//                       <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-emerald-200 rounded-full transform scale-x-0 animate-expand"></div>
//                     </span>
//                     <br />
//                     At Home
//                   </h1>
//                 </div>

//                 <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
//                     World-class physiotherapy delivered to your doorstep by certified experts using cutting-edge technology and personalized treatment protocols.
//                   </p>
//                 </div>
//               </div>

//               {/* Service Highlights */}
//               <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                 {serviceHighlights.map((service, index) => (
//                   <div key={index} className={`group ${service.bgColor} border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
//                     <h3 className="font-bold text-gray-900 text-lg mb-3">{service.title}</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
//                     <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Section */}
//               <div className={`space-y-8 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                 <div className="flex flex-col sm:flex-row gap-6">
//                   <button className="group relative bg-black text-white px-10 py-5 rounded-2xl text-lg font-bold overflow-hidden hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
//                     <Calendar className="w-6 h-6 relative z-10" />
//                     <span className="relative z-10">Book Free Assessment</span>
//                     <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
//                   </button>
                  
//                   <button className="group flex items-center space-x-3 text-gray-700 font-bold text-lg hover:text-blue-600 transition-colors">
//                     <div className="w-14 h-14 border-2 border-gray-300 group-hover:border-blue-500 rounded-full flex items-center justify-center transition-colors">
//                       <Play className="w-6 h-6 ml-1" />
//                     </div>
//                     <span>Watch How It Works</span>
//                   </button>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-gray-100">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center">
//                       <Phone className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <div className="font-black text-xl text-gray-900">+91 98765 43210</div>
//                       <div className="text-gray-500 font-medium">24/7 Emergency Helpline</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
//                       <Clock className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <div className="font-black text-xl text-gray-900">15 Minutes</div>
//                       <div className="text-gray-500 font-medium">Average Response Time</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - 5 columns */}
//             <div className={`lg:col-span-5 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//               <div className="space-y-8">
                
//                 {/* Metrics Dashboard */}
//                 <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
//                   <div className="flex items-center justify-between mb-8">
//                     <div>
//                       <h3 className="text-2xl font-black text-gray-900">Live Impact</h3>
//                       <p className="text-gray-500 font-medium">Real-time metrics</p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
//                       <span className="text-sm font-bold text-gray-600">LIVE</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-6">
//                     {metrics.map((metric, index) => (
//                       <div key={index} className="text-center group cursor-pointer">
//                         <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${
//                           metric.color === 'rose' ? 'from-rose-500 to-pink-500' :
//                           metric.color === 'emerald' ? 'from-emerald-500 to-green-500' :
//                           metric.color === 'blue' ? 'from-blue-500 to-cyan-500' :
//                           'from-purple-500 to-pink-500'
//                         } flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                           <metric.icon className="w-8 h-8 text-white" />
//                         </div>
//                         <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${
//                           metric.color === 'rose' ? 'from-rose-600 to-pink-600' :
//                           metric.color === 'emerald' ? 'from-emerald-600 to-green-600' :
//                           metric.color === 'blue' ? 'from-blue-600 to-cyan-600' :
//                           'from-purple-600 to-pink-600'
//                         } bg-clip-text text-transparent`}>
//                           {metric.number}
//                         </div>
//                         <div className="text-gray-600 font-semibold text-sm">{metric.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Testimonial Card */}
//                 <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 shadow-lg">
//                   <div className="flex items-center space-x-2 mb-6">
//                     <Users className="w-5 h-5 text-blue-600" />
//                     <span className="font-bold text-gray-700">What People Say</span>
//                   </div>
                  
//                   <div className="transition-all duration-500">
//                     <div className="flex items-center space-x-1 mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                     <blockquote className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
//                       "{testimonials[activeTestimonial].quote}"
//                     </blockquote>
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
//                         {testimonials[activeTestimonial].avatar}
//                       </div>
//                       <div>
//                         <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
//                         <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Testimonial indicators */}
//                   <div className="flex justify-center space-x-2 mt-6">
//                     {testimonials.map((_, index) => (
//                       <div 
//                         key={index}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           activeTestimonial === index ? 'bg-blue-500 w-8' : 'bg-gray-300'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="flex justify-center space-x-6">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-3 mx-auto">
//                       <Shield className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-700">ISO Certified</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 mx-auto">
//                       <Award className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-700">Award Winner</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-3 mx-auto">
//                       <Heart className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-700">Trusted Care</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes expand {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//         }
        
//         .animate-expand {
//           animation: expand 0.8s ease-out 0.3s forwards;
//         }
//       `}</style>
//     </div>
//   );
// }