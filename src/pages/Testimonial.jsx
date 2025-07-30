import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Clock, CheckCircle, Quote } from 'lucide-react';

const TestimonialsAndTrust = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Marathon Runner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "OptimaphysioCare transformed my recovery journey. After a severe knee injury, I thought my running days were over. Their personalized treatment plan and cutting-edge techniques got me back to marathons in just 4 months!",
      condition: "Knee Injury Recovery"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Years of desk work left me with chronic back pain. The team at OptimaphysioCare didn't just treat the symptoms – they addressed the root cause. Their ergonomic guidance and exercise program changed my life.",
      condition: "Chronic Back Pain"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Professional Dancer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a dancer, my body is my instrument. OptimaphysioCare's preventive care program keeps me performing at my peak. Their attention to detail and movement analysis is absolutely incredible.",
      condition: "Performance Enhancement"
    },
    {
      id: 4,
      name: "Robert Thompson",
      role: "Construction Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "After 20 years in construction, shoulder pain was my constant companion. OptimaphysioCare's innovative approach and genuine care helped me return to work pain-free. Truly life-changing experience.",
      condition: "Shoulder Rehabilitation"
    }
  ];

  const trustMetrics = [
    { icon: Users, number: "10,000+", label: "Patients Treated", description: "Successfully helped patients recover and thrive" },
    { icon: Award, number: "15+", label: "Years Experience", description: "Dedicated to excellence in physiotherapy" },
    { icon: Star, number: "4.9/5", label: "Patient Rating", description: "Based on 2,500+ verified reviews" },
    { icon: Clock, number: "98%", label: "Success Rate", description: "Patients report significant improvement" }
  ];

  const certifications = [
    "Licensed Physiotherapists",
    "Sports Medicine Certified",
    "Manual Therapy Specialists",
    "Ergonomic Assessment Certified",
    "Dry Needling Qualified",
    "Movement Analysis Experts"
  ];

  const partnerLogos = [
    "Healthcare Excellence",
    "Sports Medicine Alliance",
    "Rehabilitation Institute",
    "Wellness Partners",
    "Medical Associates"
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 sm:w-5 h-4 sm:h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
            <Award className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
            <span>Trusted by Thousands</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Patients Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"> OptimaphysioCare</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-12">
            Experience the difference with evidence-based treatment, personalized care, and a track record of exceptional results.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {trustMetrics.map((metric, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 shadow-md hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg sm:rounded-2xl mb-2 sm:mb-3 md:mb-4">
                  <metric.icon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-1 md:mb-2">{metric.number}</div>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-1 md:mb-2">{metric.label}</div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Real Stories, Real Results
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              Hear from patients whose lives have been transformed through our comprehensive physiotherapy care.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-white/20">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Quote className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-blue-500 opacity-50" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4 md:mb-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full object-cover border-2 sm:border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
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

            <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8">
              <button
                onClick={prevTestimonial}
                className="group flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600 group-hover:text-blue-600" />
              </button>

              <div className="flex space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-blue-600 w-6 sm:w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600 group-hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Certified Excellence in Care
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
              Our team holds the highest certifications and continuously pursues advanced training to provide you with the most effective, evidence-based treatments available.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/30 hover:bg-white/80 transition-all duration-300"
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Trusted Partners
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
              We collaborate with leading healthcare organizations and sports medicine institutes to ensure our patients receive comprehensive, world-class care.
            </p>
            
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/30 hover:bg-white/80 transition-all duration-300 group"
                >
                  <div className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-md sm:rounded-lg mr-2 sm:mr-3 md:mr-4 flex items-center justify-center">
                    <Award className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
              Join thousands of satisfied patients who have experienced the OptimaphysioCare difference. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndTrust;