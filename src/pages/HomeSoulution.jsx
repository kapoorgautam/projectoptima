// ServicesSection.jsx
import React, { useState, useEffect } from 'react';
import { Activity, Heart, Zap, Users, Target, Brain, Dumbbell, Shield, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from 'react-router-dom'
import Homeproblem from './Homeproblem.jsx'; // Ensure this component is available in your project

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const serviceTimer = setInterval(() => setActiveService((prev) => (prev + 1) % 8), 4000);

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

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
    };
  }, []);

  const services = [
    {
      icon: Dumbbell,
      title: 'Sports Rehabilitation Physiotherapy',
      description: 'Specialized physiotherapy for athletes and sports enthusiasts. Expert treatment for sports injuries, performance enhancement, and injury prevention programs.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: ['Sports Injury Treatment', 'Performance Enhancement', 'Injury Prevention', 'Return-to-Sport Programs'],
      duration: '6-12 weeks',
      successRate: '96%',
    },
    {
      icon: Heart,
      title: 'Pain Management Physiotherapy',
      description: 'Comprehensive pain relief solutions for chronic and acute conditions. Advanced techniques for back pain, neck pain, joint pain, and muscle disorders.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      features: ['Chronic Pain Relief', 'Acute Pain Treatment', 'Manual Therapy', 'Exercise Prescription'],
      duration: '4-8 weeks',
      successRate: '94%',
    },
    {
      icon: Brain,
      title: 'Neurological Physiotherapy',
      description: 'Specialized rehabilitation for neurological conditions including stroke recovery, Parkinson\'s disease, and spinal cord injuries with evidence-based protocols.',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      features: ['Stroke Rehabilitation', 'Parkinson\'s Treatment', 'Spinal Cord Injury', 'Balance Training'],
      duration: '12-24 weeks',
      successRate: '89%',
    },
    {
      icon: Shield,
      title: 'Post-Surgery Physiotherapy',
      description: 'Expert post-operative rehabilitation to restore function, reduce complications, and accelerate recovery after surgical procedures.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Post-Op Recovery', 'Scar Management', 'Mobility Restoration', 'Strength Building'],
      duration: '8-16 weeks',
      successRate: '97%',
    },
    {
      icon: Users,
      title: 'Orthopedic Physiotherapy',
      description: 'Treatment for musculoskeletal conditions, fractures, joint replacements, and orthopedic surgeries with personalized rehabilitation programs.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['Joint Replacement Rehab', 'Fracture Recovery', 'Arthritis Management', 'Mobility Enhancement'],
      duration: '6-12 weeks',
      successRate: '95%',
    },
    {
      icon: Activity,
      title: 'Cardiopulmonary Physiotherapy',
      description: 'Rehabilitation for heart and lung conditions, improving cardiovascular fitness, breathing techniques, and overall endurance capacity.',
      color: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50',
      features: ['Cardiac Rehabilitation', 'Pulmonary Recovery', 'Breathing Exercises', 'Endurance Training'],
      duration: '8-12 weeks',
      successRate: '92%',
    },
    {
      icon: Target,
      title: 'Geriatric Physiotherapy',
      description: 'Specialized care for elderly patients focusing on mobility, balance, fall prevention, and age-related condition management.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      features: ['Fall Prevention', 'Balance Training', 'Mobility Enhancement', 'Age-related Care'],
      duration: 'Ongoing',
      successRate: '91%',
    },
    {
     icon: Zap,title: 'Onco-Rehabilitation',description: 'Specialized physiotherapy for cancer patients and survivors to improve strength, mobility, and quality of life through tailored rehabilitation programs.',color: 'from-yellow-500 to-orange-500',bgColor: 'from-yellow-50 to-orange-50',features: ['Strength Building', 'Mobility Enhancement', 'Pain Management', 'Quality of Life Improvement'],duration: 'Variable',successRate: '85%',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">




      <div className="animate-on-scroll">
          <Homeproblem />
        </div>
      <style>{`
        .btn {
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-96 h-32 sm:h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-80 h-32 sm:h-80 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`text-center mb-8 sm:mb-12 md:mb-20 animate-on-scroll ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Activity className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Professional Healthcare Services</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent block sm:inline">
              Physiotherapy Services
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Expert physiotherapy services delivered at your home by certified professionals. From sports rehabilitation 
            to neurological recovery, we provide personalized treatment plans using advanced techniques and modern equipment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xl sm:max-w-3xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Experience</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Average Success Rate</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Service Available</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">2000+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Patients Treated</div>
            </div>
          </div>
        </header>

        <main id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-20 animate-on-scroll">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            const isHovered = hoveredCard === index;
            return (
              <article
                key={index}
                className={`relative group transform transition-all duration-700 ${isActive || isHovered ? 'scale-105 z-10' : 'hover:scale-105'}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-500 border-2 overflow-hidden ${
                  isActive || isHovered ? 'border-blue-200 shadow-lg' : 'border-transparent'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500 transform ${isHovered ? 'scale-110' : 'scale-100'}`}></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-1 sm:w-2 h-1 sm:h-2 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-ping`}></div>
                    <div className={`absolute bottom-3 sm:bottom-6 left-2 sm:left-6 w-1 sm:w-1 h-1 sm:h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 animate-ping`}></div>
                  </div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-r ${service.color} mb-2 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}>
                      <Icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-4 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                    <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-2 sm:w-3 h-2 sm:h-3 mr-1 sm:mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-2 sm:mb-4">
                      <div className="text-center">
                        <div className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.duration}
                        </div>
                        <div className="text-xs sm:text-xs text-gray-500">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.successRate}
                        </div>
                        <div className="text-xs sm:text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className={`w-full bg-gradient-to-r ${service.color} text-white py-1 sm:py-2 px-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 group-hover:animate-pulse btn`}
                    >
                      <span>Book now</span>
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </main>

        <div className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md mb-8 sm:mb-12 md:mb-16 animate-on-scroll`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 sm:mb-6 md:mb-12">
            Our Service Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Clock, title: 'Book Appointment', desc: 'Schedule instantly online or call us', step: '01' },
              { icon: Users, title: 'Expert Assessment', desc: 'Detailed evaluation by certified physiotherapist', step: '02' },
              { icon: Target, title: 'Personalized Plan', desc: 'Customized treatment protocol for your needs', step: '03' },
              { icon: Star, title: 'Guaranteed Results', desc: 'Track progress with measurable outcomes', step: '04' },
            ].map((process, index) => {
              const ProcessIcon = process.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-8 h-5 sm:h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    {process.step}
                  </div>
                  <div className="w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <ProcessIcon className="w-5 sm:w-8 h-5 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{process.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-5 sm:top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-72 h-32 sm:h-72 bg-white rounded-full opacity-5 transform translate-x-12 sm:translate-x-36 -translate-y-12 sm:-translate-y-36 animate-spin-slow"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-white rounded-full opacity-10 transform -translate-x-8 sm:-translate-x-24 translate-y-8 sm:translate-y-24"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4 md:mb-6">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-4 md:mb-8 opacity-90 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
                Choose from our comprehensive range of physiotherapy services delivered by expert professionals. 
                Experience personalized care, faster recovery, and exceptional results - all in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 justify-center mb-4 sm:mb-6 md:mb-8">
                <Link
                  to="treatment"
                  className="group bg-white text-blue-600 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 btn"
                  aria-label="Explore physiotherapy services"
                >
                  <span>Explore Treatment</span>
                  <ArrowRight className="w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 btn"
                  aria-label="Book a consultation"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 opacity-90">
                <div className="flex items-center space-x-1 animate-pulse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300 fill-current" />
                  ))}
                  <span className="ml-1 sm:ml-2 font-semibold text-xs sm:text-sm md:text-base">4.8/5 Rating</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl">2000+</div>
                  <div className="text-xs sm:text-sm md:text-base opacity-80">Successful Treatments</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl">5+</div>
                  <div className="text-xs sm:text-sm md:text-base opacity-80">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        
      </div>

      <div className="absolute top-8 sm:top-32 right-2 sm:right-20 animate-bounce">
        <div className="w-4 sm:w-8 h-4 sm:h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-8 sm:bottom-32 left-2 sm:left-20 animate-bounce delay-1000">
        <div className="w-3 sm:w-6 h-3 sm:h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-2 sm:right-10 animate-pulse">
        <div className="w-2 sm:w-4 h-2 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"></div>
      </div>
    </section>
  );
}