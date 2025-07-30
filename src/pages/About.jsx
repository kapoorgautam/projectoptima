// import React from 'react';
// import { Users, Award, Clock, Heart, CheckCircle, Star } from 'lucide-react';

// const AboutSection = () => {
//   const stats = [
//     { number: '4500+', label: 'Happy Patients', icon: Users },
//     { number: '200', label: 'Expert Therapists', icon: Award },
//     { number: '500+', label: 'Successful Cases', icon: CheckCircle },
//     { number: '20+', label: 'Years Experience', icon: Clock }
//   ];

//   const services = [
//     {
//       title: 'Orthopedic Physiotherapy',
//       description: 'Specialized treatment for musculoskeletal injuries, joint pain, and post-surgical rehabilitation.',
//       icon: '🦴'
//     },
//     {
//       title: 'Sports Injury Recovery',
//       description: 'Comprehensive rehabilitation programs for athletes and sports-related injuries.',
//       icon: '⚽'
//     },
//     {
//       title: 'Neurological Rehabilitation',
//       description: 'Expert care for stroke recovery, spinal cord injuries, and neurological conditions.',
//       icon: '🧠'
//     },
//     {
//       title: 'Pediatric Physiotherapy',
//       description: 'Specialized treatment for children with developmental delays and physical challenges.',
//       icon: '👶'
//     },
//     {
//       title: 'Geriatric Care',
//       description: 'Tailored therapy programs for elderly patients focusing on mobility and independence.',
//       icon: '👴'
//     },
//     {
//       title: 'Pain Management',
//       description: 'Advanced techniques for chronic pain relief and improved quality of life.',
//       icon: '💆'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
//       {/* SEO Meta Tags */}
//       <div style={{display: 'none'}}>
//         <title>About OptimalPhysioCare - Leading Physiotherapy Clinic | Expert Physical Therapy Services</title>
//         <meta name="description" content="Learn about OptimalPhysioCare, a premier physiotherapy clinic with 20+ years of experience. Our expert therapists provide comprehensive rehabilitation services for orthopedic, sports, and neurological conditions." />
//         <meta name="keywords" content="physiotherapy clinic, physical therapy, rehabilitation, orthopedic therapy, sports injury, neurological rehab, pain management, physiotherapist" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="About OptimalPhysioCare - Leading Physiotherapy Clinic" />
//         <meta property="og:description" content="Discover OptimalPhysioCare's commitment to excellence in physiotherapy. 4500+ happy patients, 200+ expert therapists, and comprehensive rehabilitation services." />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About OptimalPhysioCare - Expert Physiotherapy Services" />
//         <meta name="twitter:description" content="Leading physiotherapy clinic with 20+ years of experience in rehabilitation and pain management." />
//       </div>

//       {/* Header Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Premium <span className="text-teal-600">Physiotherapy</span> for
//                   <br />
//                   <span className="text-blue-600">a Healthy Lifestyle</span>
//                 </h1>
//                 <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
//                   OptimalPhysioCare provides evidence-based physiotherapy treatments with cutting-edge techniques. 
//                   Our experienced team is dedicated to helping you achieve optimal health and return to an active lifestyle 
//                   through personalized rehabilitation programs.
//                 </p>
//               </div>
              
//               <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 Learn Our Methods →
//               </button>

//               {/* Stats Section */}
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
//                 {stats.map((stat, index) => {
//                   const IconComponent = stat.icon;
//                   return (
//                     <div key={index} className="text-center group">
//                       <div className="bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
//                         <IconComponent className="w-8 h-8 text-teal-600 mx-auto mb-2" />
//                         <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
//                         <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
            
//             {/* Right Image */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
//                 <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
//                   <div className="flex items-center space-x-2">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                     <span className="text-sm font-semibold">4.9/5 Patient Rating</span>
//                   </div>
//                 </div>
                
//                 {/* Placeholder for therapist image */}
//                 <div className="w-80 h-96 bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl mx-auto flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
//                       <Users className="w-16 h-16 text-teal-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">Dr. Sarah Mitchell</h3>
//                     <p className="text-gray-600">Lead Physiotherapist</p>
//                     <p className="text-sm text-gray-500 mt-2">15+ Years Experience</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Categories */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Treatment Areas</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Browse our comprehensive physiotherapy services designed to address various conditions and help you achieve optimal health.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-teal-100">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                 <div className="mt-4 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Learn more →
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* World-Class Healthcare Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              
//               <div className="relative z-10 space-y-6">
//                 <h2 className="text-3xl font-bold leading-tight">
//                   World-Class Healthcare
//                   <br />
//                   Services for you and your
//                   <br />
//                   loved ones
//                 </h2>
                
//                 <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//                   More Services →
//                 </button>
//               </div>
//             </div>
            
//             {/* Right Services */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 rounded-lg p-3">
//                     <Heart className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Manual Therapy & Rehabilitation</h3>
//                     <p className="text-gray-600">
//                       Hands-on treatment techniques including joint mobilization, soft tissue massage, 
//                       and therapeutic exercises tailored to your specific condition.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-teal-100 rounded-lg p-3">
//                     <Award className="w-6 h-6 text-teal-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Treatment Modalities</h3>
//                     <p className="text-gray-600">
//                       State-of-the-art equipment including ultrasound therapy, electrical stimulation, 
//                       and laser therapy for optimal healing and pain relief.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-green-100 rounded-lg p-3">
//                     <Users className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Care Plans</h3>
//                     <p className="text-gray-600">
//                       Comprehensive assessment and customized treatment programs designed specifically 
//                       for your condition, goals, and lifestyle needs.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Placeholder for doctor image */}
//               <div className="absolute bottom-0 right-0 w-64 h-80 bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl hidden lg:block opacity-20"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Recovery Journey?</h2>
//           <p className="text-xl text-teal-100 mb-8">
//             Book your initial consultation today and take the first step towards optimal health.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               Book Appointment
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;
















import React, { useEffect, useState } from 'react';
import { Users, Award, Clock, Heart, CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { number: '4500+', label: 'Happy Patients', icon: Users },
    { number: '200', label: 'Expert Therapists', icon: Award },
    { number: '500+', label: 'Successful Cases', icon: CheckCircle },
    { number: '20+', label: 'Years Experience', icon: Clock },
  ];

  const services = [
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for musculoskeletal injuries, joint pain, and post-surgical rehabilitation.',
      icon: '🦴',
    },
    {
      title: 'Sports Injury Recovery',
      description: 'Comprehensive rehabilitation programs for athletes and sports-related injuries.',
      icon: '⚽',
    },
    {
      title: 'Neurological Rehabilitation',
      description: 'Expert care for stroke recovery, spinal cord injuries, and neurological conditions.',
      icon: '🧠',
    },
    {
      title: 'Pediatric Physiotherapy',
      description: 'Specialized treatment for children with developmental delays and physical challenges.',
      icon: '👶',
    },
    {
      title: 'Geriatric Care',
      description: 'Tailored therapy programs for elderly patients focusing on mobility and independence.',
      icon: '👴',
    },
    {
      title: 'Pain Management',
      description: 'Advanced techniques for chronic pain relief and improved quality of life.',
      icon: '💆',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.1}px)`,
            top: '10%',
            left: '10%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/20 to-teal-300/20 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01 + scrollY * -0.05}px)`,
            top: '60%',
            right: '15%',
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-teal-100/30 to-blue-100/30 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015 + scrollY * 0.08}px)`,
            bottom: '20%',
            left: '30%',
            animation: 'float 25s ease-in-out infinite',
          }}
        />

        {/* Animated Medical Icons */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 text-teal-200/40 animate-bounce"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
              }}
            >
              {i % 4 === 0 && <Heart className="w-full h-full" />}
              {i % 4 === 1 && <Users className="w-full h-full" />}
              {i % 4 === 2 && <Award className="w-full h-full" />}
              {i % 4 === 3 && <CheckCircle className="w-full h-full" />}
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-teal-400/20 to-transparent rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-radial from-blue-400/20 to-transparent rounded-full animate-ping" style={{ animationDuration: '6s' }} />
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      {/* SEO Meta Tags */}
      <meta name="title" content="About OptimalPhysioCare - Leading Physiotherapy Clinic | Expert Physical Therapy Services" />
      <meta name="description" content="Learn about OptimalPhysioCare, a premier physiotherapy clinic with 20+ years of experience. Our expert therapists provide comprehensive rehabilitation services for orthopedic, sports, and neurological conditions." />
      <meta name="keywords" content="physiotherapy clinic, physical therapy, rehabilitation, orthopedic therapy, sports injury, neurological rehab, pain management, physiotherapist" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="About OptimalPhysioCare - Leading Physiotherapy Clinic" />
      <meta property="og:description" content="Discover OptimalPhysioCare's commitment to excellence in physiotherapy. 4500+ happy patients, 200+ expert therapists, and comprehensive rehabilitation services." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About OptimalPhysioCare - Expert Physiotherapy Services" />
      <meta name="twitter:description" content="Leading physiotherapy clinic with 20+ years of experience in rehabilitation and pain management." />

      {/* Header Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-slideInUp order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Premium <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Physiotherapy</span> for
                  <br className="hidden sm:block" />
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">a Healthy Lifestyle</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                  OptimalPhysioCare provides evidence-based physiotherapy treatments with cutting-edge techniques.
                  Our experienced team is dedicated to helping you achieve optimal health and return to an active lifestyle
                  through personalized rehabilitation programs.
                </p>
              </div>

              <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInScale">
                Learn Our Methods →
              </button>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-6 md:pt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center group animate-fadeInScale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mx-auto mb-2" />
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 animate-fadeInScale">
              <div className="bg-gradient-to-br from-teal-100/50 to-blue-100/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-md">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <span className="text-xs sm:text-sm font-semibold">4.9/5 Rating</span>
                  </div>
                </div>

                {/* Placeholder for therapist image */}
                <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-br from-blue-200/50 to-teal-200/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/80 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-teal-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">Dr. Sarah Mitchell</h3>
                    <p className="text-sm sm:text-base text-gray-600">Lead Physiotherapist</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">15+ Years Experience</p>
                  </div>
                </div>

                {/* Animated decoration elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-300/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-300/40 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-slideInUp">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Specialized Treatment Areas</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Browse our comprehensive physiotherapy services designed to address various conditions and help you achieve optimal health.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/70 hover:bg-white backdrop-blur-sm rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-teal-100 transform hover:scale-105 animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-3 sm:mt-4 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Healthcare Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden animate-slideInUp order-2 lg:order-1">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white bg-opacity-10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white bg-opacity-10 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12 animate-bounce" style={{ animationDuration: '3s' }} />

              <div className="relative z-10 space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  World-Class Healthcare
                  <br className="hidden sm:block" />
                  Services for you and your
                  <br className="hidden sm:block" />
                  loved ones
                </h2>

                <button className="bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  More Services →
                </button>
              </div>
            </div>

            {/* Right Services */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Manual Therapy & Rehabilitation</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Hands-on treatment techniques including joint mobilization, soft tissue massage,
                      and therapeutic exercises tailored to your specific condition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-teal-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Advanced Treatment Modalities</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      State-of-the-art equipment including ultrasound therapy, electrical stimulation,
                      and laser therapy for optimal healing and pain relief.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalized Care Plans</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Comprehensive assessment and customized treatment programs designed specifically
                      for your condition, goals, and lifestyle needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '5s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-slideInUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 px-4">
            Book your initial consultation today and take the first step towards optimal health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Appointment
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;