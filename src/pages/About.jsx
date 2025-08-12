




// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Users, Award, Star, Clock , Phone} from 'lucide-react';
// import throttle from 'lodash.throttle';
// import { Link } from 'react-router-dom'; 

// const AboutSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const throttledMouseMove = throttle((e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     }, 100);

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', throttledMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', throttledMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const stats = [
//     { number: '5000+', label: 'Patients Treated', icon: Users },
//     { number: 'Expert', label: 'Physiotherapy Team', icon: Award },
//     { number: '4.8/5', label: 'Patient Rating', icon: Star },
//     { number: '5+', label: 'Years Experience', icon: Clock },
//   ];

  


//   const services = [
//     {
//       title: 'Sports Injury Rehabilitation',
//       description: 'Expert care for MCL, PCL, ACL injuries, and other sports-related conditions using IASTM, cupping, and manual therapy.',
//       icon: '⚽',
//       link: 'https://www.optimaphysiocare.in/services/sports-injury-rehabilitation',
//     },
//     {
//       title: 'Orthopedic Physiotherapy',
//       description: 'Specialized treatment for musculoskeletal injuries, post-operative fractures, and frozen shoulder with evidence-based techniques.',
//       icon: '🦴',
//       link: 'https://www.optimaphysiocare.in/services/orthopedic-physiotherapy',
//     },
//     {
//       title: 'Neurological Rehabilitation',
//       description: 'Tailored programs for peripheral nerve injuries and neurological conditions, focusing on mobility and recovery.',
//       icon: '🧠',
//       link: 'https://www.optimaphysiocare.in/services/neurological-rehabilitation',
//     },
//     {
//       title: 'Onco-Care Rehabilitation',
//       description: 'Comprehensive support for cancer patients, enhancing strength and quality of life through specialized physiotherapy.',
//       icon: '💙',
//       link: 'https://www.optimaphysiocare.in/services/onco-care-rehabilitation',
//     },
//     {
//       title: 'Postural Assessment & Correction',
//       description: 'Detailed assessments and therapies to improve posture and alleviate related pain using manual techniques.',
//       icon: '🚶',
//       link: 'https://www.optimaphysiocare.in/services/postural-assessment',
//     },
//     {
//       title: 'Pain Management',
//       description: 'Advanced modalities like dry needling and electrical stimulation for chronic pain relief and improved mobility.',
//       icon: '💆',
//       link: 'https://www.optimaphysiocare.in/services/pain-management',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden pt-8">
//       <Helmet>
//         <title>About Optima Physio Care - Expert Physiotherapy in Delhi NCR</title>
//         <meta
//           name="description"
//           content="Learn about Optima Physio Care, led by Dr. Nikhil Kapoor, offering expert physiotherapy services in Delhi NCR for sports injuries, orthopedic care, and rehabilitation."
//         />
//         <meta
//           name="keywords"
//           content="Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, sports physiotherapy, orthopedic therapy, manual therapy, IASTM, cupping therapy"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="Optima Physio Care" />
//         <meta name="geo.region" content="IN-DL" />
//         <meta name="geo.placename" content="Delhi NCR" />
//         <meta property="og:title" content="About Optima Physio Care - Expert Physiotherapy in Delhi NCR" />
//         <meta
//           property="og:description"
//           content="Discover Optima Physio Care's commitment to excellence in physiotherapy, led by Dr. Nikhil Kapoor, serving Delhi NCR with specialized rehabilitation services."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.optimaphysiocare.in/about" />
//         <meta property="og:image" content="https://www.optimaphysiocare.in/images/og-image.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Optima Physio Care - Expert Physiotherapy" />
//         <meta
//           name="twitter:description"
//           content="Led by Dr. Nikhil Kapoor, Optima Physio Care provides expert physiotherapy in Delhi NCR for sports injuries and rehabilitation."
//         />
//         <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/og-image.jpg" />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'MedicalOrganization',
//             name: 'Optima Physio Care',
//             url: 'https://www.optimaphysiocare.in',
//             description:
//               'Optima Physio Care, led by Dr. Nikhil Kapoor, provides expert physiotherapy services in Delhi NCR, specializing in sports injury rehabilitation, orthopedic care, and manual therapy.',
//             address: {
//               '@type': 'PostalAddress',
//               addressLocality: 'Delhi',
//               addressRegion: 'Delhi',
//               postalCode: '110041',
//               addressCountry: 'IN',
//             },
//             contactPoint: {
//               '@type': 'ContactPoint',
//               telephone: '+91-8447646815',
//               contactType: 'Customer Service',
//               email: 'nikhilkapoor9540@gmail.com',
//             },
//             employee: {
//               '@type': 'Person',
//               name: 'Dr. Nikhil Kapoor',
//               jobTitle: 'Physiotherapist',
//               description: 'Expert in sports physiotherapy, manual therapy, and onco-care rehabilitation.',
//             },
//             sameAs: [
//               'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
//               'https://www.facebook.com/people/optima-physio-care/100094770625926/',
//               'https://www.instagram.com/optimaphysiocare/',
//             ],
//             areaServed: ['IN-DL'],
//           })}
//         </script>
//       </Helmet>

//       <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.1}px)`,
//             top: '10%',
//             left: '10%',
//             animation: 'float 20s ease-in-out infinite',
//           }}
//         />
//         <div
//           className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/20 to-teal-300/20 rounded-full blur-2xl"
//           style={{
//             transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01 + scrollY * -0.05}px)`,
//             top: '60%',
//             right: '15%',
//             animation: 'float 15s ease-in-out infinite reverse',
//           }}
//         />
//         <div
//           className="absolute w-80 h-80 bg-gradient-to-r from-teal-100/30 to-blue-100/30 rounded-full blur-2xl"
//           style={{
//             transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015 + scrollY * 0.08}px)`,
//             bottom: '20%',
//             left: '30%',
//             animation: 'float 25s ease-in-out infinite',
//           }}
//         />
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-8 h-8 text-teal-200/40 animate-bounce"
//               style={{
//                 left: `${10 + i * 20}%`,
//                 top: `${20 + (i % 2) * 30}%`,
//                 animationDelay: `${i * 0.5}s`,
//                 animationDuration: `${3 + i * 0.2}s`,
//                 transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
//               }}
//             >
//               {i % 4 === 0 && <Users className="w-full h-full" />}
//               {i % 4 === 1 && <Award className="w-full h-full" />}
//               {i % 4 === 2 && <Star className="w-full h-full" />}
//               {i % 4 === 3 && <Clock className="w-full h-full" />}
//             </div>
//           ))}
//         </div>
//         <div
//           className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-teal-400/20 to-transparent rounded-full animate-ping"
//           style={{ animationDuration: '4s' }}
//         />
//         <div
//           className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-radial from-blue-400/20 to-transparent rounded-full animate-ping"
//           style={{ animationDuration: '6s' }}
//         />
//       </div>

//       <style>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           33% {
//             transform: translateY(-20px) rotate(2deg);
//           }
//           66% {
//             transform: translateY(-10px) rotate(-1deg);
//           }
//         }
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         @keyframes ping {
//           75%,
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }
//         @media (max-width: 640px) {
//           .animate-pulse,
//           .animate-bounce,
//           .animate-ping {
//             animation: none;
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .animate-pulse,
//           .animate-bounce,
//           .animate-ping,
//           .animate-fadeInScale,
//           .animate-slideInUp {
//             animation: none;
//             transform: none;
//           }
//         }
//         @media (prefers-contrast: high) {
//           .bg-gradient-to-r,
//           .bg-gradient-to-br {
//             background: #000 !important;
//             color: #fff !important;
//           }
//           .bg-white\/80,
//           .bg-white\/70 {
//             background: #fff !important;
//             border: 2px solid #000 !important;
//           }
//         }
//         // @media (prefers-color-scheme: dark) {
//         //   .bg-gradient-to-br {
//         //     background: linear-gradient(to bottom right, #1f2937, #374151, #4b5563) !important;
//         //   }
//         //   .bg-white\/80,
//         //   .bg-white\/70 {
//         //     background: rgba(31, 41, 55, 0.9) !important;
//         //     border-color: rgba(75, 85, 99, 0.5) !important;
//         //   }
//         //   .text-gray-900 {
//         //     color: #f9fafb !important;
//         //   }
//         //   .text-gray-800 {
//         //     color: #e5e7eb !important;
//         //   }
//         //   .text-gray-600 {
//         //     color: #d1d5db !important;
//         //   }
//         //   .text-gray-500 {
//         //     color: #9ca3af !important;
//         //   }
//         // }
//       `}</style>

//       <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
//             <div className="space-y-6 animate-slideInUp order-2 lg:order-1">
//               <div className="space-y-4">
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
//                   Expert <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Physiotherapy</span> for
//                   <br className="hidden sm:block" />
//                   <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Optimal Recovery</span>
//                 </h1>
//                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
//                   Optima Physio Care, led by Dr. Nikhil Kapoor, offers evidence-based physiotherapy in Delhi NCR. Specializing in sports injuries, orthopedic care, and manual therapy, our team helps you achieve optimal health and mobility.
//                 </p>
//               </div>
//               <a
//                 href="./team"
//                 className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInScale"
//                 aria-label="Learn about Optima Physio Care's physiotherapy methods"
//               >
//                 See more about Dr Nikhil →
//               </a>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6">
//                 {stats.map((stat, index) => {
//                   const IconComponent = stat.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="text-center group animate-fadeInScale"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
//                         <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mx-auto mb-2" />
//                         <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.number}</div>
//                         <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="relative order-1 lg:order-2 animate-fadeInScale">
//               <div className="bg-gradient-to-br from-teal-100/50 to-blue-100/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 relative overflow-hidden">
//                 <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-md">
//                   <div className="flex z-100  items-center space-x-1 sm:space-x-2 ">
//                     <Star className=" w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
//                     <span className="text-xs sm:text-sm font-semibold">4.8/5 Rating</span>
//                   </div>
//                 </div>
//                 <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-br from-blue-200/50 to-teal-200/50 rounded-2xl flex items-center justify-center ">
//                   <div className="text-center p-4">
//                     <img
//                       src="./nikhil.png"
//                       alt="Dr. Nikhil Kapoor - Lead Physiotherapist at Optima Physio Care"
//                       className="w-79 h-79 sm:w-55 sm:h-75 md:w-75 md:h-75 rounded-full mx-auto mb-4 object-fill shadow-lg"
//                     />
//                     <h3 className="text-base sm:text-lg font-bold text-gray-800">Dr. Nikhil Kapoor</h3>
//                     <p className="text-sm text-gray-600">Lead Physiotherapist</p>
//                     <p className="text-xs text-gray-500 mt-1">5+ Years Experience</p>
//                   </div>
//                 </div>
//                 <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-300/30 rounded-full animate-bounce hidden md:block" style={{ animationDuration: '3s' }} />
//                 <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-300/40 rounded-full animate-pulse hidden md:block" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-8 animate-slideInUp">
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
//             <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
//               Explore our tailored physiotherapy services at Optima Physio Care, designed to address sports injuries, orthopedic conditions, and more.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group bg-white/70 hover:bg-white backdrop-blur-sm rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-teal-100 transform hover:scale-105 animate-fadeInScale"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="text-2xl sm:text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
//                 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
//                 <a
//                   href={service.link}
//                   className="mt-3 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 inline-block"
//                   aria-label={`Learn more about ${service.title}`}
//                 >
                
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
//             <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-6 text-white relative overflow-hidden animate-slideInUp order-2 lg:order-1">
//               <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white bg-opacity-10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16 animate-pulse hidden md:block" />
//               <div
//                 className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white bg-opacity-10 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12 animate-bounce hidden md:block"
//                 style={{ animationDuration: '3s' }}
//               />
//               <div className="relative z-10 space-y-4">
//                 <h2 className="text-xl sm:text-2xl font-bold leading-tight">
//                   Expert Physiotherapy
//                   <br className="hidden sm:block" />
//                   Treatments in Delhi NCR
//                 </h2>
//                 <a
//                   href="./treatment"
//                   className="inline-block bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
//                   aria-label="Explore Optima Physio Care's physiotherapy services"
//                 >
//                   More Treatments →
//                 </a>
//               </div>
//             </div>
//             <div className="space-y-4 order-1 lg:order-2">
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale">
//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="bg-blue-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
//                     <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Sports Injury Expertise</h3>
//                     <p className="text-sm text-gray-600">
//                       Specialized care for athletes, including on-field support, as demonstrated at Khelo India Youth Games 2023.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale"
//                 style={{ animationDelay: '0.2s' }}
//               >
//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="bg-teal-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
//                     <Award className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Advanced Manual Therapy</h3>
//                     <p className="text-sm text-gray-600">
//                       Hands-on techniques like IASTM, cupping, and myofascial release for optimal recovery and pain relief.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale"
//                 style={{ animationDelay: '0.4s' }}
//               >
//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="bg-green-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
//                     <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Personalized Rehabilitation</h3>
//                     <p className="text-sm text-gray-600">
//                       Customized treatment plans at Jivisha Advanced Medical Centre, focusing on patient-specific needs.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//          <section className="mt-12 sm:mt-16 text-center py-8 sm:py-12 bg-teal-50 rounded-2xl shadow-lg">
//                 <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 sm:mb-6">Ready to Start Your Recovery?</h2>
//                 <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
//                   Contact Optima Physio Care today to schedule your consultation with Dr. Nikhil Kapoor and begin your journey to pain-free living.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                   <a
//                     href="tel:+91-8447646815"
//                     className="flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
//                     aria-label="Book a physiotherapy consultation with Dr. Nikhil Kapoor"
//                   >
//                     <Phone className="mr-2 h-5 w-5" />
//                     Book Now
//                   </a>
//                   <a
//                     href="/contact"
//                     className="flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105"
//                     aria-label="Contact Optima Physio Care"
//                   >
//                     Contact Us
//                   </a>
//                 </div>
              
//               </section>
//       </section>

//       {/* <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600 relative overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full animate-bounce hidden md:block" style={{ animationDuration: '4s' }} />
//           <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden md:block" />
//           <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce hidden md:block" style={{ animationDuration: '5s' }} />
//         </div>
//         <div className="max-w-4xl mx-auto text-center relative z-10 animate-slideInUp">
//           <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Begin Your Recovery?</h2>
//           <p className="text-base sm:text-lg text-teal-100 mb-6 px-4">
//             Contact Optima Physio Care today to schedule your consultation with Dr. Nikhil Kapoor.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="tel:+918447646815"
//               className="w-full sm:w-auto bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               aria-label="Book a physiotherapy appointment with Dr. Nikhil Kapoor"
//             >
//               Call Now
//             </a>
//             <a
//               href="./contact"
//               className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
//               aria-label="Contact Optima Physio Care"
//             >
//               Contact Us
//             </a>
//           </div>
         
//         </div>
//       </section> */}

     
//     </div>
//   );
// };

// export default AboutSection;










import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Added for internal navigation
import { Users, Award, Star, Clock, Phone } from 'lucide-react';
import throttle from 'lodash.throttle';
// import nikhilImage from '../images/nikhil.png'; // Import image for Vite

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const throttledMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { number: '5000+', label: 'Patients Treated', icon: Users },
    { number: 'Expert', label: 'Physiotherapy Team', icon: Award },
    { number: '4.8/5', label: 'Patient Rating', icon: Star },
    { number: '5+', label: 'Years Experience', icon: Clock },
  ];

  const services = [
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Expert care for MCL, PCL, ACL injuries, and other sports-related conditions using IASTM, cupping, and manual therapy.',
      icon: '⚽',
      link: '/services/sports-injury-rehabilitation', // Changed to relative path; update if external
    },
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for musculoskeletal injuries, post-operative fractures, and frozen shoulder with evidence-based techniques.',
      icon: '🦴',
      link: '/services/orthopedic-physiotherapy',
    },
    {
      title: 'Neurological Rehabilitation',
      description: 'Tailored programs for peripheral nerve injuries and neurological conditions, focusing on mobility and recovery.',
      icon: '🧠',
      link: '/services/neurological-rehabilitation',
    },
    {
      title: 'Onco-Care Rehabilitation',
      description: 'Comprehensive support for cancer patients, enhancing strength and quality of life through specialized physiotherapy.',
      icon: '💙',
      link: '/services/onco-care-rehabilitation',
    },
    {
      title: 'Postural Assessment & Correction',
      description: 'Detailed assessments and therapies to improve posture and alleviate related pain using manual techniques.',
      icon: '🚶',
      link: '/services/postural-assessment',
    },
    {
      title: 'Pain Management',
      description: 'Advanced modalities like dry needling and electrical stimulation for chronic pain relief and improved mobility.',
      icon: '💆',
      link: '/services/pain-management',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden pt-8">
      <Helmet>
        <title>About Optima Physio Care - Expert Physiotherapy in Delhi NCR</title>
        <meta
          name="description"
          content="Learn about Optima Physio Care, led by Dr. Nikhil Kapoor, offering expert physiotherapy services in Delhi NCR for sports injuries, orthopedic care, and rehabilitation."
        />
        <meta
          name="keywords"
          content="Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, sports physiotherapy, orthopedic therapy, manual therapy, IASTM, cupping therapy"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta property="og:title" content="About Optima Physio Care - Expert Physiotherapy in Delhi NCR" />
        <meta
          property="og:description"
          content="Discover Optima Physio Care's commitment to excellence in physiotherapy, led by Dr. Nikhil Kapoor, serving Delhi NCR with specialized rehabilitation services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.optimaphysiocare.in/about" />
        <meta property="og:image" content="/images/og-image.jpg" /> {/* Updated to public path */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Optima Physio Care - Expert Physiotherapy" />
        <meta
          name="twitter:description"
          content="Led by Dr. Nikhil Kapoor, Optima Physio Care provides expert physiotherapy in Delhi NCR for sports injuries and rehabilitation."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" /> {/* Updated to public path */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'Optima Physio Care',
            url: 'https://www.optimaphysiocare.in',
            description:
              'Optima Physio Care, led by Dr. Nikhil Kapoor, provides expert physiotherapy services in Delhi NCR, specializing in sports injury rehabilitation, orthopedic care, and manual therapy.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              postalCode: '110041',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-8447646815',
              contactType: 'Customer Service',
              email: 'nikhilkapoor9540@gmail.com',
            },
            employee: {
              '@type': 'Person',
              name: 'Dr. Nikhil Kapoor',
              jobTitle: 'Physiotherapist',
              description: 'Expert in sports physiotherapy, manual therapy, and onco-care rehabilitation.',
            },
            sameAs: [
              'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
              'https://www.facebook.com/people/optima-physio-care/100094770625926/',
              'https://www.instagram.com/optimaphysiocare/',
            ],
            areaServed: ['IN-DL'],
          })}
        </script>
      </Helmet>

      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
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
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 text-teal-200/40 animate-bounce"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 30}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
              }}
            >
              {i % 4 === 0 && <Users className="w-full h-full" />}
              {i % 4 === 1 && <Award className="w-full h-full" />}
              {i % 4 === 2 && <Star className="w-full h-full" />}
              {i % 4 === 3 && <Clock className="w-full h-full" />}
            </div>
          ))}
        </div>
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-teal-400/20 to-transparent rounded-full animate-ping"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-radial from-blue-400/20 to-transparent rounded-full animate-ping"
          style={{ animationDuration: '6s' }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
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
        @media (max-width: 640px) {
          .animate-pulse, .animate-bounce, .animate-ping { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse, .animate-bounce, .animate-ping, .animate-fadeInScale, .animate-slideInUp {
            animation: none;
            transform: none;
          }
        }
        @media (prefers-contrast: high) {
          .bg-gradient-to-r, .bg-gradient-to-br {
            background: #000 !important;
            color: #fff !important;
          }
          .bg-white\\/80, .bg-white\\/70 {
            background: #fff !important;
            border: 2px solid #000 !important;
          }
        }
      `}</style>

      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-6 animate-slideInUp order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Expert <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Physiotherapy</span> for
                  <br className="hidden sm:block" />
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Optimal Recovery</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  Optima Physio Care, led by Dr. Nikhil Kapoor, offers evidence-based physiotherapy in Delhi NCR. Specializing in sports injuries, orthopedic care, and manual therapy, our team helps you achieve optimal health and mobility.
                </p>
              </div>
              <Link
                to="/team"
                className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInScale"
                aria-label="Learn about Optima Physio Care's physiotherapy methods"
              >
                See more about Dr Nikhil →
              </Link>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6">
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
                        <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 animate-fadeInScale">
              <div className="bg-gradient-to-br from-teal-100/50 to-blue-100/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-md">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <span className="text-xs sm:text-sm font-semibold">4.8/5 Rating</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-br from-blue-200/50 to-teal-200/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <img
                      src="./nikhil.png"
                      alt="Dr. Nikhil Kapoor - Lead Physiotherapist at Optima Physio Care"
                      className="w-79 h-79 sm:w-55 sm:h-75 md:w-75 md:h-75 rounded-full mx-auto mb-4 object-fill shadow-lg"
                    />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Dr. Nikhil Kapoor</h3>
                    <p className="text-sm text-gray-600">Lead Physiotherapist</p>
                    <p className="text-xs text-gray-500 mt-1">5+ Years Experience</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-300/30 rounded-full animate-bounce hidden md:block" style={{ animationDuration: '3s' }} />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-300/40 rounded-full animate-pulse hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-slideInUp">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
              Explore our tailored physiotherapy services at Optima Physio Care, designed to address sports injuries, orthopedic conditions, and more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/70 hover:bg-white backdrop-blur-sm rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-teal-100 transform hover:scale-105 animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-3 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 inline-block"
                  aria-label={`Learn more about ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-6 text-white relative overflow-hidden animate-slideInUp order-2 lg:order-1">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white bg-opacity-10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16 animate-pulse hidden md:block" />
              <div
                className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white bg-opacity-10 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12 animate-bounce hidden md:block"
                style={{ animationDuration: '3s' }}
              />
              <div className="relative z-10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                  Expert Physiotherapy
                  <br className="hidden sm:block" />
                  Treatments in Delhi NCR
                </h2>
                <Link
                  to="/treatment"
                  className="inline-block bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  aria-label="Explore Optima Physio Care's physiotherapy services"
                >
                  More Treatments →
                </Link>
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Sports Injury Expertise</h3>
                    <p className="text-sm text-gray-600">
                      Specialized care for athletes, including on-field support, as demonstrated at Khelo India Youth Games 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-teal-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Advanced Manual Therapy</h3>
                    <p className="text-sm text-gray-600">
                      Hands-on techniques like IASTM, cupping, and myofascial release for optimal recovery and pain relief.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInScale"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Personalized Rehabilitation</h3>
                    <p className="text-sm text-gray-600">
                      Customized treatment plans at Jivisha Advanced Medical Centre, focusing on patient-specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="mt-12 sm:mt-16 text-center py-8 sm:py-12 bg-teal-50 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 sm:mb-6">Ready to Start Your Recovery?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact Optima Physio Care today to schedule your consultation with Dr. Nikhil Kapoor and begin your journey to pain-free living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+918447646815"
                className="flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                aria-label="Book a physiotherapy consultation with Dr. Nikhil Kapoor"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="Contact Optima Physio Care"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
