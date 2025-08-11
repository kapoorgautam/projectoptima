// AboutUsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Heart, Users, ArrowRight, Sparkles, TrendingUp, Award, CheckCircle, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const services = [
    'Home Physiotherapy',
    'Sports Rehabilitation',
    'Pain Management',
    'Post-Surgery Recovery',
  ];

  useEffect(() => {
    // Service rotation
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    // Intersection Observer for initial visibility
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
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Scroll progress for timeline
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
    };
  }, []);

  const milestones = [
    {
      year: '2018',
      title: 'Founded with a Vision',
      description: 'OptimPhysio Care was established with a mission to bring world-class physiotherapy to homes across India, making recovery accessible and convenient for everyone.',
      icon: Clock,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      stats: 'Founded',
    },
    {
      year: '2020',
      title: 'Innovative Care Model',
      description: 'Introduced a tech-driven approach with personalized treatment plans and modern equipment, setting new standards in home physiotherapy across India.',
      icon: Sparkles,
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      stats: 'Tech Innovation',
    },
    {
      year: '2024',
      title: 'Nationwide Impact',
      description: 'Expanded to serve thousands of patients across India, earning a 4.8/5 rating for exceptional care and building lasting community trust.',
      icon: TrendingUp,
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      stats: '2000+ Lives',
    },
  ];

  const achievements = [
    { icon: Users, number: '2000+', label: 'Happy Patients', color: 'text-blue-600' },
    { icon: Award, number: '4.8/5', label: 'Rating', color: 'text-green-600' },
    { icon: CheckCircle, number: '10+', label: 'Cities Served', color: 'text-blue-600' },
    { icon: Heart, number: '98%', label: 'Recovery Rate', color: 'text-green-600' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <style>{`
        .btn {
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by 2000+ Patients</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Expert
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> About</span>
            <br />
            <span className="text-3xl lg:text-4xl text-blue-600">{services[currentService]}</span>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-8 h-8 ${achievement.color} mx-auto mb-3`} />
                  <div className="font-bold text-2xl text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </header>

        {/* Timeline Section */}
        <main ref={timelineRef} className="relative mb-20 animate-on-scroll">
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
                className={`relative flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-center mb-16 group animate-on-scroll`}
                onMouseEnter={() => setActiveMilestone(index)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div
                    className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Floating Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.gradient} shadow-lg mb-6 transform ${
                        isHovered ? 'scale-110 rotate-6' : ''
                      } transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center bg-gradient-to-r ${milestone.gradient} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{milestone.description}</p>
                    {/* Stats Badge */}
                    <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {milestone.stats}
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>
                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${milestone.gradient} shadow-lg transform ${
                      isHovered ? 'scale-125' : ''
                    } transition-all duration-300 border-4 border-white`}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/50 to-transparent animate-pulse"></div>
                  </div>
                  {/* Ripple Effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.gradient} opacity-30 animate-ping ${
                      isHovered ? 'opacity-50' : ''
                    }`}
                  ></div>
                </div>
                {/* Spacer for non-active side */}
                <div className="hidden lg:block w-5/12"></div>
              </article>
            );
          })}
        </main>

     
        
      </div>
    </section>
  );
}