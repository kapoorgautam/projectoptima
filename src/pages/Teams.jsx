// import React, { useState, useEffect } from 'react';
// import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Star, Award, Languages, BookOpen } from 'lucide-react';

// const TeamsPage = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Initialize animations
//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   // Scroll tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Sample doctors data
//   const doctors = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       specialty: "Sports Physiotherapy",
//       experience: "8 years",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "MS in Sports Medicine", "Certified Manual Therapist"],
//       bio: "Dr. Sarah specializes in sports injuries and rehabilitation. She has worked with professional athletes and helped them return to peak performance. Her expertise includes manual therapy, movement analysis, and injury prevention strategies.",
//       specializations: ["Sports Injury Recovery", "Manual Therapy", "Movement Analysis", "Injury Prevention"],
//       awards: ["Best Physiotherapist 2023", "Sports Medicine Excellence Award"],
//       languages: ["English", "Spanish", "French"],
//       rating: 4.9,
//       reviews: 145,
//       availability: "24/7 Available"
//     },
//     {
//       id: 2,
//       name: "Dr. Michael Chen",
//       specialty: "Neurological Rehabilitation",
//       experience: "12 years",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "PhD in Neuroscience", "NDT Certified"],
//       bio: "Dr. Michael is a leading expert in neurological rehabilitation with over a decade of experience helping patients recover from stroke, spinal cord injuries, and other neurological conditions. His patient-centered approach combines cutting-edge techniques with compassionate care.",
//       specializations: ["Stroke Recovery", "Spinal Cord Injury", "Balance Training", "Gait Analysis"],
//       awards: ["Neurological Excellence Award", "Research Innovation Prize 2022"],
//       languages: ["English", "Mandarin", "Cantonese"],
//       rating: 4.8,
//       reviews: 203,
//       availability: "Mon-Sat Available"
//     },
//     {
//       id: 3,
//       name: "Dr. Emily Rodriguez",
//       specialty: "Pediatric Physiotherapy",
//       experience: "6 years",
//       image: "https://images.unsplash.com/photo-1594824848637-114859583950?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Pediatric Specialist Certification", "Sensory Integration Certified"],
//       bio: "Dr. Emily is passionate about helping children reach their full potential through specialized pediatric physiotherapy. She works with children with developmental delays, cerebral palsy, and other conditions affecting movement and function.",
//       specializations: ["Developmental Delays", "Cerebral Palsy", "Sensory Integration", "Early Intervention"],
//       awards: ["Pediatric Care Excellence", "Community Service Award 2023"],
//       languages: ["English", "Spanish", "Portuguese"],
//       rating: 4.9,
//       reviews: 178,
//       availability: "Home Service"
//     },
//     {
//       id: 4,
//       name: "Dr. James Wilson",
//       specialty: "Orthopedic Rehabilitation",
//       experience: "15 years",
//       image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "OCS (Orthopedic Certified Specialist)", "Dry Needling Certified"],
//       bio: "With 15 years of experience, Dr. James specializes in post-surgical rehabilitation and orthopedic conditions. He has helped thousands of patients recover from joint replacements, fractures, and chronic pain conditions.",
//       specializations: ["Post-Surgical Rehab", "Joint Replacement Recovery", "Chronic Pain Management", "Dry Needling"],
//       awards: ["Orthopedic Excellence Award", "Patient Choice Award 2022", "Lifetime Achievement"],
//       languages: ["English", "German", "Italian"],
//       rating: 4.9,
//       reviews: 289,
//       availability: "24/7 Emergency"
//     },
//     {
//       id: 5,
//       name: "Dr. Lisa Thompson",
//       specialty: "Women's Health Physiotherapy",
//       experience: "10 years",
//       image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Women's Health Specialist", "Pelvic Floor Certified"],
//       bio: "Dr. Lisa focuses on women's health issues throughout all life stages. She provides comprehensive care for pelvic floor dysfunction, pregnancy-related conditions, and postpartum recovery with sensitivity and expertise.",
//       specializations: ["Pelvic Floor Therapy", "Prenatal Care", "Postpartum Recovery", "Incontinence Treatment"],
//       awards: ["Women's Health Pioneer Award", "Compassionate Care Award"],
//       languages: ["English", "French", "Arabic"],
//       rating: 4.8,
//       reviews: 156,
//       availability: "Home & Clinic"
//     },
//     {
//       id: 6,
//       name: "Dr. Robert Kim",
//       specialty: "Geriatric Physiotherapy",
//       experience: "9 years",
//       image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Geriatric Certified Specialist", "Fall Prevention Certified"],
//       bio: "Dr. Robert specializes in helping older adults maintain independence and improve quality of life. His expertise in fall prevention, balance training, and age-related conditions has helped hundreds of seniors stay active and healthy.",
//       specializations: ["Fall Prevention", "Balance Training", "Mobility Enhancement", "Age-related Conditions"],
//       awards: ["Senior Care Excellence", "Community Impact Award 2023"],
//       languages: ["English", "Korean", "Japanese"],
//       rating: 4.7,
//       reviews: 134,
//       availability: "Daily Visits"
//     }
//   ];

//   const FloatingElements = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute animate-float opacity-5"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.7}s`,
//             animationDuration: `${4 + Math.random() * 3}s`,
//             transform: `translateY(${scrollY * 0.05 * (i + 1)}px)`,
//           }}
//         >
//           <div className={`w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-br from-blue-200 to-green-200 rounded-full`} />
//         </div>
//       ))}
//     </div>
//   );

//   const DoctorCard = ({ doctor, index }) => (
//     <div
//       className={`group bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 transform ${
//         isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}
//       style={{
//         animationDelay: `${index * 150}ms`,
//       }}
//     >
//       <div className="relative overflow-hidden rounded-2xl mb-6">
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {/* Floating availability badge */}
//         <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
//           Available
//         </div>
//       </div>
      
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//             {doctor.name}
//           </h3>
//           <p className="text-blue-600 font-medium">{doctor.specialty}</p>
//           <p className="text-gray-600 text-sm">{doctor.experience} experience</p>
//         </div>

//         {/* Rating */}
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
//         </div>
        
//         {/* Quick info */}
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <Clock className="w-4 h-4 text-green-500" />
//             <span>{doctor.availability}</span>
//           </div>
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <MapPin className="w-4 h-4 text-red-500" />
//             <span>Home Service Available</span>
//           </div>
//         </div>
        
//         {/* Qualifications preview */}
//         <div className="flex flex-wrap gap-2">
//           {doctor.qualifications.slice(0, 2).map((qual, idx) => (
//             <span
//               key={idx}
//               className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
//             >
//               {qual}
//             </span>
//           ))}
//           {doctor.qualifications.length > 2 && (
//             <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
//               +{doctor.qualifications.length - 2} more
//             </span>
//           )}
//         </div>
        
//         <button
//           onClick={() => setSelectedDoctor(doctor)}
//           className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
//         >
//           <span>View Details</span>
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );

//   const DoctorModal = () => {
//     if (!selectedDoctor) return null;

//     return (
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
//           <button
//             onClick={() => setSelectedDoctor(null)}
//             className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
          
//           <div className="p-8">
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Left Column - Image and basic info */}
//               <div>
//                 <div className="relative overflow-hidden rounded-2xl mb-6">
//                   <img
//                     src={selectedDoctor.image}
//                     alt={selectedDoctor.name}
//                     className="w-full h-80 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     {selectedDoctor.availability}
//                   </div>
//                 </div>
                
//                 {/* Rating and contact info */}
//                 <div className="bg-blue-50 rounded-2xl p-6 mb-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-2">
//                       <div className="flex items-center space-x-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedDoctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//                         ))}
//                       </div>
//                       <span className="font-semibold text-gray-800">{selectedDoctor.rating}</span>
//                       <span className="text-gray-600">({selectedDoctor.reviews} reviews)</span>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Phone className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm">Call Available</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <MapPin className="w-4 h-4 text-red-500" />
//                       <span className="text-sm">Home Visits</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Clock className="w-4 h-4 text-green-500" />
//                       <span className="text-sm">{selectedDoctor.availability}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span className="text-sm">Verified</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Languages */}
//                 <div className="bg-gray-50 rounded-2xl p-6">
//                   <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                     <Languages className="w-5 h-5 text-blue-600 mr-2" />
//                     Languages
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedDoctor.languages.map((lang, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
//                         {lang}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right Column - Detailed info */}
//               <div>
//                 <div className="mb-6">
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedDoctor.name}</h2>
//                   <p className="text-xl text-blue-600 mb-1 font-medium">{selectedDoctor.specialty}</p>
//                   <p className="text-gray-600 mb-4">{selectedDoctor.experience} of experience</p>
//                 </div>
                
//                 <div className="space-y-6">
//                   {/* About */}
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3">About Doctor</h4>
//                     <p className="text-gray-600 leading-relaxed">{selectedDoctor.bio}</p>
//                   </div>
                  
//                   {/* Qualifications */}
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                       <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
//                       Qualifications
//                     </h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.qualifications.map((qual, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <CheckCircle className="w-4 h-4 text-green-500" />
//                           <span>{qual}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Specializations */}
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3">Specializations</h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.specializations.map((spec, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                           <span>{spec}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Awards */}
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                       <Award className="w-5 h-5 text-yellow-500 mr-2" />
//                       Awards & Recognition
//                     </h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.awards.map((award, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                           <span>{award}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Action buttons */}
//                   <div className="grid grid-cols-2 gap-4 pt-6">
//                     <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
//                       Book Appointment
//                     </button>
//                     <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-gray-300">
//                       Call Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
//       <FloatingElements />
      
//       <div className="relative z-10">
//         {/* Header Section */}
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div 
//             className={`text-center mb-16 transform transition-all duration-1000 ${
//               isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}
//             style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//           >
//             {/* Trust badge */}
//             <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <CheckCircle className="w-4 h-4" />
//               <span>Trusted by 5000+ Patients</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//               Meet Our{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//                 Expert Team
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Modern infrastructure, latest technology & top physiotherapy experts delivering personalized care at your home with continuous guidance and strong quality checks.
//             </p>
//           </div>

//           {/* Stats Section */}
//           <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {[
//               { number: '5000+', label: 'Happy Patients' },
//               { number: '15+', label: 'Expert Therapists' },
//               { number: '50+', label: 'Years Combined Experience' },
//               { number: '98%', label: 'Success Rate' }
//             ].map((stat, index) => (
//               <div 
//                 key={index}
//                 className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100"
//               >
//                 <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Doctors Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {doctors.map((doctor, index) => (
//               <DoctorCard key={doctor.id} doctor={doctor} index={index} />
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className={`text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100 transform transition-all duration-1000 delay-700 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Start Your Recovery Journey?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Book a consultation with one of our expert physiotherapists today and take the first step towards better health.
//             </p>

//             {/* Contact info */}
//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <Phone className="w-5 h-5 text-blue-600" />
//                 <span className="font-medium">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <Clock className="w-5 h-5 text-green-500" />
//                 <span className="font-medium">24/7 Available</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <MapPin className="w-5 h-5 text-red-500" />
//                 <span className="font-medium">Home Service</span>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button 
//                 className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
//                 <span>Book Consultation</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//               >
//                 Call Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DoctorModal />

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamsPage;

































// import React, { useState, useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Star, Award, Languages, BookOpen, X } from 'lucide-react';
// import throttle from 'lodash.throttle';

// const TeamsPage = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [visibleElements, setVisibleElements] = useState({});
//   const sectionRef = useRef(null);
//   const doctorRefs = useRef([]);

//   useEffect(() => {
//     // Initialize refs array
//     doctorRefs.current = Array(doctors.length).fill(null);

//     const throttledObserver = throttle((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.target.dataset.id) {
//           setVisibleElements((prev) => ({
//             ...prev,
//             [entry.target.dataset.id]: true,
//           }));
//         }
//       });
//     }, 100);

//     const observer = new IntersectionObserver(throttledObserver, {
//       threshold: 0.1,
//       rootMargin: '100px',
//     });

//     if (sectionRef.current) {
//       sectionRef.current.dataset.id = 'section';
//       observer.observe(sectionRef.current);
//     }

//     doctorRefs.current.forEach((ref, index) => {
//       if (ref) {
//         ref.dataset.id = `doctor-${index}`;
//         observer.observe(ref);
//       }
//     });

//     // Fallback to make all cards visible after 2 seconds
//     const timeout = setTimeout(() => {
//       setVisibleElements((prev) => {
//         const newState = { ...prev, section: true };
//         doctors.forEach((_, index) => {
//           newState[`doctor-${index}`] = true;
//         });
//         return newState;
//       });
//     }, 2000);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//       doctorRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//       clearTimeout(timeout);
//     };
//   }, []);

//   useEffect(() => {
//     const handleEscapeKey = (event) => {
//       if (event.key === 'Escape' && selectedDoctor) {
//         setSelectedDoctor(null);
//       }
//     };
//     document.addEventListener('keydown', handleEscapeKey);
//     return () => document.removeEventListener('keydown', handleEscapeKey);
//   }, [selectedDoctor]);

//   const doctors = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       specialty: "Sports Physiotherapy",
//       experience: "8 years",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "MS in Sports Medicine", "Certified Manual Therapist"],
//       bio: "Dr. Sarah specializes in sports injuries and rehabilitation. She has worked with professional athletes and helped them return to peak performance. Her expertise includes manual therapy, movement analysis, and injury prevention strategies.",
//       specializations: ["Sports Injury Recovery", "Manual Therapy", "Movement Analysis", "Injury Prevention"],
//       awards: ["Best Physiotherapist 2023", "Sports Medicine Excellence Award"],
//       languages: ["English", "Spanish", "French"],
//       rating: 4.9,
//       reviews: 145,
//       availability: "24/7 Available",
//       profileLink: "/doctors/sarah-johnson"
//     },
//     {
//       id: 2,
//       name: "Dr. Michael Chen",
//       specialty: "Neurological Rehabilitation",
//       experience: "12 years",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "PhD in Neuroscience", "NDT Certified"],
//       bio: "Dr. Michael is a leading expert in neurological rehabilitation with over a decade of experience helping patients recover from stroke, spinal cord injuries, and other neurological conditions. His patient-centered approach combines cutting-edge techniques with compassionate care.",
//       specializations: ["Stroke Recovery", "Spinal Cord Injury", "Balance Training", "Gait Analysis"],
//       awards: ["Neurological Excellence Award", "Research Innovation Prize 2022"],
//       languages: ["English", "Mandarin", "Cantonese"],
//       rating: 4.8,
//       reviews: 203,
//       availability: "Mon-Sat Available",
//       profileLink: "/doctors/michael-chen"
//     },
//     {
//       id: 3,
//       name: "Dr. Emily Rodriguez",
//       specialty: "Pediatric Physiotherapy",
//       experience: "6 years",
//       image: "https://images.unsplash.com/photo-1594824848637-114859583950?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Pediatric Specialist Certification", "Sensory Integration Certified"],
//       bio: "Dr. Emily is passionate about helping children reach their full potential through specialized pediatric physiotherapy. She works with children with developmental delays, cerebral palsy, and other conditions affecting movement and function.",
//       specializations: ["Developmental Delays", "Cerebral Palsy", "Sensory Integration", "Early Intervention"],
//       awards: ["Pediatric Care Excellence", "Community Service Award 2023"],
//       languages: ["English", "Spanish", "Portuguese"],
//       rating: 4.9,
//       reviews: 178,
//       availability: "Home Service",
//       profileLink: "/doctors/emily-rodriguez"
//     },
//     {
//       id: 4,
//       name: "Dr. James Wilson",
//       specialty: "Orthopedic Rehabilitation",
//       experience: "15 years",
//       image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "OCS (Orthopedic Certified Specialist)", "Dry Needling Certified"],
//       bio: "With 15 years of experience, Dr. James specializes in post-surgical rehabilitation and orthopedic conditions. He has helped thousands of patients recover from joint replacements, fractures, and chronic pain conditions.",
//       specializations: ["Post-Surgical Rehab", "Joint Replacement Recovery", "Chronic Pain Management", "Dry Needling"],
//       awards: ["Orthopedic Excellence Award", "Patient Choice Award 2022", "Lifetime Achievement"],
//       languages: ["English", "German", "Italian"],
//       rating: 4.9,
//       reviews: 289,
//       availability: "24/7 Emergency",
//       profileLink: "/doctors/james-wilson"
//     },
//     {
//       id: 5,
//       name: "Dr. Lisa Thompson",
//       specialty: "Women's Health Physiotherapy",
//       experience: "10 years",
//       image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Women's Health Specialist", "Pelvic Floor Certified"],
//       bio: "Dr. Lisa focuses on women's health issues throughout all life stages. She provides comprehensive care for pelvic floor dysfunction, pregnancy-related conditions, and postpartum recovery with sensitivity and expertise.",
//       specializations: ["Pelvic Floor Therapy", "Prenatal Care", "Postpartum Recovery", "Incontinence Treatment"],
//       awards: ["Women's Health Pioneer Award", "Compassionate Care Award"],
//       languages: ["English", "French", "Arabic"],
//       rating: 4.8,
//       reviews: 156,
//       availability: "Home & Clinic",
//       profileLink: "/doctors/lisa-thompson"
//     },
//     {
//       id: 6,
//       name: "Dr. Robert Kim",
//       specialty: "Geriatric Physiotherapy",
//       experience: "9 years",
//       image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
//       qualifications: ["DPT", "Geriatric Certified Specialist", "Fall Prevention Certified"],
//       bio: "Dr. Robert specializes in helping older adults maintain independence and improve quality of life. His expertise in fall prevention, balance training, and age-related conditions has helped hundreds of seniors stay active and healthy.",
//       specializations: ["Fall Prevention", "Balance Training", "Mobility Enhancement", "Age-related Conditions"],
//       awards: ["Senior Care Excellence", "Community Impact Award 2023"],
//       languages: ["English", "Korean", "Japanese"],
//       rating: 4.7,
//       reviews: 134,
//       availability: "Daily Visits",
//       profileLink: "/doctors/robert-kim"
//     }
//   ];

//   const FloatingElements = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
//       {[...Array(4)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.7}s`,
//             animationDuration: `${4 + Math.random() * 3}s`,
//           }}
//         >
//           <div className={`w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-br from-blue-200 to-green-200 rounded-full`} />
//         </div>
//       ))}
//     </div>
//   );

//   const DoctorCard = ({ doctor, index }) => (
//     <article
//       ref={(el) => (doctorRefs.current[index] = el)}
//       data-id={`doctor-${index}`}
//       className={`group bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 ${
//         visibleElements[`doctor-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}
//       role="button"
//       tabIndex={0}
//       onClick={() => setSelectedDoctor(doctor)}
//       onKeyDown={(event) => {
//         if (event.key === 'Enter' || event.key === ' ') {
//           event.preventDefault();
//           setSelectedDoctor(doctor);
//         }
//       }}
//       aria-label={`View details for ${doctor.name}`}
//     >
//       <div className="relative overflow-hidden rounded-2xl mb-6">
//         <img
//           src={doctor.image}
//           alt={`Dr. ${doctor.name}, ${doctor.specialty}`}
//           className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//           {doctor.availability}
//         </div>
//       </div>
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//             {doctor.name}
//           </h3>
//           <p className="text-blue-600 font-medium">{doctor.specialty}</p>
//           <p className="text-gray-600 text-sm">{doctor.experience} experience</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
//         </div>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <Clock className="w-4 h-4 text-green-500" />
//             <span>{doctor.availability}</span>
//           </div>
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <MapPin className="w-4 h-4 text-red-500" />
//             <span>Home Service Available</span>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {doctor.qualifications.slice(0, 2).map((qual, idx) => (
//             <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
//               {qual}
//             </span>
//           ))}
//           {doctor.qualifications.length > 2 && (
//             <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
//               +{doctor.qualifications.length - 2} more
//             </span>
//           )}
//         </div>
//         <div className="flex gap-4">
//           <a
//             href={doctor.profileLink}
//             className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
//             aria-label={`View details for ${doctor.name}`}
//             onClick={(e) => {
//               e.stopPropagation();
//               setSelectedDoctor(doctor);
//             }}
//           >
//             <span>View Details</span>
//             <ArrowRight className="w-4 h-4" />
//           </a>
//           <a
//             href="/appointment"
//             className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-gray-300 text-center"
//             aria-label={`Book appointment with ${doctor.name}`}
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//     </article>
//   );

//   const DoctorModal = () => {
//     if (!selectedDoctor) return null;

//     return (
//       <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
//         <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
//           <button
//             onClick={() => setSelectedDoctor(null)}
//             className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300"
//             aria-label="Close modal"
//           >
//             <X className="w-6 h-6" />
//           </button>
//           <div className="p-6 sm:p-8">
//             <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
//               <div>
//                 <div className="relative overflow-hidden rounded-2xl mb-6">
//                   <img
//                     src={selectedDoctor.image}
//                     alt={`Dr. ${selectedDoctor.name}, ${selectedDoctor.specialty}`}
//                     className="w-full h-48 sm:h-64 object-cover"
//                     loading="lazy"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     {selectedDoctor.availability}
//                   </div>
//                 </div>
//                 <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 mb-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-2">
//                       <div className="flex items-center space-x-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedDoctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
//                         ))}
//                       </div>
//                       <span className="font-semibold text-gray-800">{selectedDoctor.rating}</span>
//                       <span className="text-gray-600">({selectedDoctor.reviews} reviews)</span>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Phone className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm">Call Available</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <MapPin className="w-4 h-4 text-red-500" />
//                       <span className="text-sm">Home Visits</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Clock className="w-4 h-4 text-green-500" />
//                       <span className="text-sm">{selectedDoctor.availability}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span className="text-sm">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
//                   <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                     <Languages className="w-5 h-5 text-blue-600 mr-2" />
//                     Languages
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedDoctor.languages.map((lang, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
//                         {lang}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="mb-6">
//                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{selectedDoctor.name}</h2>
//                   <p className="text-lg sm:text-xl text-blue-600 mb-1 font-medium">{selectedDoctor.specialty}</p>
//                   <p className="text-gray-600 mb-4">{selectedDoctor.experience} of experience</p>
//                 </div>
//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3">About Doctor</h4>
//                     <p className="text-gray-600 leading-relaxed">{selectedDoctor.bio}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                       <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
//                       Qualifications
//                     </h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.qualifications.map((qual, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <CheckCircle className="w-4 h-4 text-green-500" />
//                           <span>{qual}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3">Specializations</h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.specializations.map((spec, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                           <span>{spec}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//                       <Award className="w-5 h-5 text-yellow-500 mr-2" />
//                       Awards & Recognition
//                     </h4>
//                     <div className="grid grid-cols-1 gap-2">
//                       {selectedDoctor.awards.map((award, idx) => (
//                         <div key={idx} className="flex items-center space-x-2 text-gray-700">
//                           <div className="w-2 h-2 bg-yellow-500 rounded-full" />
//                           <span>{award}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 pt-6">
//                     <a
//                       href="/appointment"
//                       className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
//                       aria-label={`Book appointment with ${selectedDoctor.name}`}
//                     >
//                       Book Appointment
//                     </a>
//                     <a
//                       href="tel:+919876543210"
//                       className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-gray-300 text-center"
//                       aria-label={`Call ${selectedDoctor.name}`}
//                     >
//                       Call Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
//       <Helmet>
//         <title>Meet Our Expert Physiotherapy Team - OptimalPhysioCare</title>
//         <meta
//           name="description"
//           content="Meet our expert physiotherapy team at OptimalPhysioCare, specializing in sports, neurological, pediatric, orthopedic, women's health, and geriatric care."
//         />
//         <meta
//           name="keywords"
//           content="physiotherapy team, sports physiotherapy, neurological rehabilitation, pediatric physiotherapy, orthopedic rehabilitation, women's health physiotherapy, geriatric physiotherapy"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Meet Our Expert Physiotherapy Team - OptimalPhysioCare" />
//         <meta
//           property="og:description"
//           content="Discover our team of expert physiotherapists at OptimalPhysioCare, offering personalized care for various conditions."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.optimalphysiocare.com/team" />
//         <meta property="og:image" content="https://www.optimalphysiocare.com/images/team-og-image.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Meet Our Expert Physiotherapy Team - OptimalPhysioCare" />
//         <meta
//           name="twitter:description"
//           content="Learn about our expert physiotherapy team specializing in various fields at OptimalPhysioCare."
//         />
//         <meta name="twitter:image" content="https://www.optimalphysiocare.com/images/team-og-image.jpg" />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'MedicalBusiness',
//             name: 'OptimalPhysioCare',
//             url: 'https://www.optimalphysiocare.com',
//             description: 'OptimalPhysioCare offers expert physiotherapy services with a team specializing in various fields.',
//             employee: doctors.map((doctor) => ({
//               '@type': 'Person',
//               name: doctor.name,
//               jobTitle: doctor.specialty,
//               description: doctor.bio,
//               url: `https://www.optimalphysiocare.com${doctor.profileLink}`,
//             })),
//             address: {
//               '@type': 'PostalAddress',
//               streetAddress: '123 Health St',
//               addressLocality: 'City',
//               addressRegion: 'State',
//               postalCode: '12345',
//               addressCountry: 'US',
//             },
//             contactPoint: {
//               '@type': 'ContactPoint',
//               telephone: '+1-555-123-4567',
//               contactType: 'Customer Service',
//             },
//           })}
//         </script>
//       </Helmet>

//       <FloatingElements />
//       <div className="relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//           <header
//             ref={sectionRef}
//             className={`text-center mb-12 transform transition-all duration-1000 ${
//               visibleElements['section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}
//           >
//             <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-6">
//               <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
//               <span>Trusted by 5000+ Patients</span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
//               Meet Our{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//                 Expert Team
//               </span>
//             </h1>
//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Modern infrastructure, latest technology & top physiotherapy experts delivering personalized care at your home with continuous guidance and strong quality checks.
//             </p>
//           </header>
//           <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
//             {[
//               { number: '5000+', label: 'Happy Patients' },
//               { number: '15+', label: 'Expert Therapists' },
//               { number: '50+', label: 'Years Combined Experience' },
//               { number: '98%', label: 'Success Rate' }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className={`text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 ${
//                   visibleElements['section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </section>
//           <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
//             {doctors.map((doctor, index) => (
//               <DoctorCard key={doctor.id} doctor={doctor} index={index} />
//             ))}
//           </main>
//           <section className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Ready to Start Your Recovery Journey?
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
//               Book a consultation with one of our expert physiotherapists today and take the first step towards better health.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <Phone className="w-5 h-5 text-blue-600" />
//                 <span className="font-medium">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <Clock className="w-5 h-5 text-green-500" />
//                 <span className="font-medium">24/7 Available</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <MapPin className="w-5 h-5 text-red-500" />
//                 <span className="font-medium">Home Service</span>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <a
//                 href="/appointment"
//                 className="group bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
//                 aria-label="Book a physiotherapy consultation"
//               >
//                 <span>Book Consultation</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <a
//                 href="tel:+919876543210"
//                 className="bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                 aria-label="Call to book an appointment"
//               >
//                 Call Now
//               </a>
//             </div>
//           </section>
//         </div>
//       </div>
//       <DoctorModal />
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .prose p {
//           margin-bottom: 1.25rem;
//           line-height: 1.8;
//           color: #374151;
//         }

//         @media (max-width: 640px) {
//           .px-4 {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }

//           .py-12 {
//             padding-top: 2rem;
//             padding-bottom: 2rem;
//           }

//           .text-3xl {
//             font-size: 1.875rem;
//           }

//           .gap-6 {
//             gap: 1.5rem;
//           }

//           .max-w-3xl {
//             max-width: calc(100vw - 2rem);
//           }

//           .p-6 {
//             padding: 1rem;
//           }

//           .h-48 {
//             height: 10rem;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-float,
//           .animate-pulse,
//           .group-hover\\:scale-110,
//           .hover\\:scale-105 {
//             animation: none;
//             transform: none;
//           }
//         }

//         @media (prefers-contrast: high) {
//           .bg-gradient-to-r {
//             background: #000;
//           }

//           .text-gray-600 {
//             color: #000;
//           }

//           .border-gray-100 {
//             border-color: #000;
//           }

//           .text-blue-600 {
//             color: #000;
//           }
//         }

//         @media print {
//           .fixed,
//           .animate-float,
//           button,
//           a {
//             display: none;
//           }

//           .bg-gradient-to-b,
//           .bg-gradient-to-r {
//             background: #fff;
//             color: #000;
//           }
//         }

//         ::-webkit-scrollbar {
//           width: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(135deg, #2563eb, #10b981);
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(135deg, #1d4ed8, #059669);
//         }

//         button:focus-visible,
//         [role="button"]:focus-visible,
//         a:focus-visible {
//           outline: 2px solid #2563eb;
//           outline-offset: 2px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamsPage;




























































// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Award, 
//   BookOpen, 
//   Users, 
//   Heart, 
//   Star, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Calendar, 
//   CheckCircle, 
//   Zap, 
//   Shield,
//   TrendingUp,
//   Clock,
//   Target,
//   Sparkles
// } from 'lucide-react';

// export default function OncoRehabTeamPage() {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeTab, setActiveTab] = useState('experience');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const achievements = [
//     { icon: Users, number: '5000+', label: 'Patients Treated', color: 'text-yellow-600' },
//     { icon: Award, number: '15+', label: 'Years Experience', color: 'text-orange-600' },
//     { icon: Star, number: '4.9/5', label: 'Patient Rating', color: 'text-yellow-500' },
//     { icon: BookOpen, number: '50+', label: 'Certifications', color: 'text-orange-500' }
//   ];

//   const expertise = [
//     'Onco-Rehabilitation',
//     'Strength Building',
//     'Mobility Enhancement',
//     'Pain Management',
//     'Lymphedema Therapy',
//     'Fatigue Reduction',
//     'Quality of Life Improvement',
//     'Cancer Recovery Support'
//   ];

//   const certifications = [
//     'Master of Physiotherapy (MPT)',
//     'Certified Oncology Rehabilitation Specialist',
//     'Lymphedema Management',
//     'Palliative Care Therapy',
//     'Manual Therapy for Cancer Patients',
//     'Exercise Oncology Specialist'
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 overflow-hidden relative">
//       {/* CSS Styles */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
//           25% { transform: translateY(-40px) rotate(90deg); opacity: 0.5; }
//           50% { transform: translateY(-80px) rotate(180deg); opacity: 0.2; }
//           75% { transform: translateY(-40px) rotate(270deg); opacity: 0.5; }
//         }
        
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(80px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-80px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(80px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
//           to { opacity: 1; transform: scale(1) rotate(0deg); }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; filter: blur(4px); }
//           to { opacity: 1; filter: blur(0px); }
//         }
        
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.3); }
//           50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.4), 0 0 60px rgba(234, 179, 8, 0.2); }
//         }
        
//         @keyframes morphBg {
//           0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
//           25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
//           50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
//           75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
//         }
        
//         @keyframes bounce-gentle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes typewriter {
//           from { width: 0; }
//           to { width: 100%; }
//         }
        
//         .animate-slideInUp { animation: slideInUp 1s ease-out forwards; }
//         .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
//         .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
//         .animate-scaleIn { animation: scaleIn 1s ease-out forwards; }
//         .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
//         .animate-float { animation: float linear infinite; }
//         .bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        
//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.85);
//           backdrop-filter: blur(25px);
//           border: 1px solid rgba(255, 255, 255, 0.4);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
//         }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(30px);
//           border: 1px solid rgba(255, 255, 255, 0.5);
//           box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
//         }
        
//         .hover-lift {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .hover-lift:hover {
//           transform: translateY(-12px) scale(1.03);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
//         }
        
//         .hover-glow:hover {
//           animation: glow 2s ease-in-out infinite;
//         }
        
//         .morph-bg {
//           animation: morphBg 10s ease-in-out infinite;
//         }
        
//         .btn-modern {
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }
        
//         .btn-modern::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.6s ease;
//         }
        
//         .btn-modern:hover::before {
//           left: 100%;
//         }
        
//         .pulse-ring {
//           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }
        
//         .tab-active {
//           background: linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(249, 115, 22, 0.1));
//           border-color: rgba(234, 179, 8, 0.3);
//         }
        
//         @media (prefers-reduced-motion: reduce) {
//           .animate-pulse, .animate-float, .bounce-gentle, .pulse-ring,
//           .transition-all, .transition-transform {
//             animation: none !important;
//             transition: none !important;
//           }
//         }
//       `}</style>

//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/6 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-200/15 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-2/3 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-2/3 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
//         <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-orange-100/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
//       </div>

//       {/* Enhanced floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 15}s`,
//               animationDuration: `${8 + Math.random() * 20}s`,
//               opacity: 0.2 + Math.random() * 0.3
//             }}
//           >
//             <div 
//               className={`rounded-full ${
//                 i % 3 === 0 ? 'w-2 h-2 bg-yellow-400' : 
//                 i % 3 === 1 ? 'w-1.5 h-1.5 bg-orange-400' : 
//                 'w-1 h-1 bg-yellow-300'
//               }`}
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="w-full h-full" style={{
//           backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)',
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="relative z-10" ref={sectionRef}>
//         <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
//           <div className="max-w-7xl mx-auto">
            
//             {/* Header Section */}
//             <div 
//               id="header" 
//               data-animate 
//               className={`text-center mb-16 sm:mb-20 transition-all duration-1200 ${
//                 isVisible.header ? 'animate-slideInUp' : 'opacity-0'
//               }`}
//             >
//               <div className="inline-flex items-center space-x-3 glass-morphism text-yellow-700 px-6 py-3 rounded-full text-sm font-medium mb-8 hover-lift">
//                 <Heart className="w-5 h-5 text-red-500 pulse-ring" />
//                 <span className="font-semibold">Meet Your Trusted Onco-Rehabilitation Specialist</span>
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
//                   ))}
//                 </div>
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
//                 <span className="block">Expert Care by</span>
//                 <span className="block bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
//                   Dr. Rajesh Kumar
//                 </span>
//               </h1>
              
//               <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
//                 Dedicated to providing <strong className="text-yellow-600">exceptional onco-rehabilitation care</strong> 
//                 with personalized treatment plans and compassionate service for cancer patients and survivors.
//               </p>
//             </div>

//             {/* Main Content Grid */}
//             <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              
//               {/* Left Column - Profile Card */}
//               <div 
//                 id="profile-card" 
//                 data-animate 
//                 className={`lg:col-span-1 transition-all duration-1200 delay-200 ${
//                   isVisible['profile-card'] ? 'animate-slideInLeft' : 'opacity-0'
//                 }`}
//               >
//                 <div className="glass-card rounded-3xl p-8 hover-lift border-2 border-white/40 overflow-hidden group sticky top-8">
//                   {/* Background blur effects */}
//                   <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse morph-bg"></div>
                  
//                   {/* Profile Image */}
//                   <div className="relative mb-6 group">
//                     <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden hover-lift shadow-xl">
//                       <img
//                         src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
//                         alt="Dr. Rajesh Kumar - Expert Onco-Rehabilitation Specialist"
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />
                      
//                       {/* Gradient overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent"></div>
                      
//                       {/* Online status */}
//                       <div className="absolute bottom-4 right-4">
//                         <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
//                           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                           <span>Available</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Floating badges */}
//                     <div className="absolute -top-4 -left-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle">
//                       <Award className="w-5 h-5 text-yellow-500" />
//                     </div>
//                     <div className="absolute -bottom-4 -right-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle" style={{animationDelay: '1s'}}>
//                       <Shield className="w-5 h-5 text-orange-500" />
//                     </div>
//                   </div>
                  
//                   {/* Profile Info */}
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. Rajesh Kumar</h2>
//                     <p className="text-lg text-yellow-600 font-semibold mb-1">Onco-Rehabilitation Specialist</p>
//                     <p className="text-gray-600 mb-4">MPT, Oncology Rehabilitation Expert</p>
                    
//                     <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="w-4 h-4 text-red-500" />
//                         <span>Dadri, UP</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Clock className="w-4 h-4 text-orange-500" />
//                         <span>15+ Years</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Contact Buttons */}
//                   <div className="space-y-3">
//                     <button className="w-full btn-modern bg-gradient-to-r from-yellow-600 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2">
//                       <Phone className="w-4 h-4" />
//                       <span>Book Consultation</span>
//                     </button>
//                     <button className="w-full btn-modern glass-morphism text-gray-700 py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2 border border-white/50">
//                       <Mail className="w-4 h-4 text-yellow-600" />
//                       <span>Send Message</span>
//                     </button>
//                   </div>
                  
//                   {/* Quick Stats */}
//                   <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200/50">
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-yellow-600">5K+</div>
//                       <div className="text-xs text-gray-600">Patients</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-orange-600">4.9</div>
//                       <div className="text-xs text-gray-600">Rating</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right Column - Detailed Information */}
//               <div className="lg:col-span-2 space-y-8">
                
//                 {/* Achievement Stats */}
//                 <div 
//                   id="achievements" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-300 ${
//                     isVisible.achievements ? 'animate-slideInRight' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                     {achievements.map((achievement, index) => (
//                       <div key={index} className="glass-card rounded-2xl p-6 hover-lift text-center border border-white/40 group">
//                         <div className="relative mb-4">
//                           <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                             <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
//                           </div>
//                           <div className="absolute top-0 right-0">
//                             <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
//                           </div>
//                         </div>
//                         <div className="text-2xl font-bold text-gray-800 mb-1">{achievement.number}</div>
//                         <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Navigation Tabs */}
//                 <div 
//                   id="tabs" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-400 ${
//                     isVisible.tabs ? 'animate-fadeIn' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="flex flex-wrap gap-2 mb-8 p-2 glass-morphism rounded-2xl">
//                     {['experience', 'expertise', 'certifications'].map((tab) => (
//                       <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
//                           activeTab === tab 
//                             ? 'tab-active text-yellow-700 shadow-lg' 
//                             : 'text-gray-600 hover:text-yellow-600 hover:bg-white/30'
//                         }`}
//                       >
//                         {tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Tab Content */}
//                 <div 
//                   id="tab-content" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-500 ${
//                     isVisible['tab-content'] ? 'animate-scaleIn' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="glass-card rounded-3xl p-8 border-2 border-white/40">
                    
//                     {/* Experience Tab */}
//                     {activeTab === 'experience' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
//                             <TrendingUp className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-800">Professional Journey</h3>
//                         </div>
                        
//                         <div className="space-y-6">
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
//                               <div>
//                                 <div className="font-bold text-gray-800 mb-1">Senior Onco-Rehabilitation Specialist</div>
//                                 <div className="text-yellow-600 font-semibold mb-2">Private Practice • 2015 - Present</div>
//                                 <p className="text-gray-600 leading-relaxed">
//                                   Established successful home-based onco-rehabilitation practice serving Dadri and surrounding areas. 
//                                   Specialized in comprehensive treatment plans for cancer patients and survivors, focusing on strength, mobility, and quality of life.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
                          
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 animate-pulse" style={{animationDelay: '1s'}}></div>
//                               <div>
//                                 <div className="font-bold text-gray-800 mb-1">Oncology Rehabilitation Therapist</div>
//                                 <div className="text-orange-600 font-semibold mb-2">Apollo Hospital • 2012 - 2015</div>
//                                 <p className="text-gray-600 leading-relaxed">
//                                   Worked in multi-disciplinary oncology team providing inpatient and outpatient rehabilitation services. 
//                                   Gained extensive experience in lymphedema management and fatigue reduction for cancer patients.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
                          
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 animate-pulse" style={{animationDelay: '2s'}}></div>
//                               <div>
//                                 <div className="font-bold text-gray-800 mb-1">Junior Physiotherapist</div>
//                                 <div className="text-purple-600 font-semibold mb-2">Max Healthcare • 2009 - 2012</div>
//                                 <p className="text-gray-600 leading-relaxed">
//                                   Started career in leading healthcare institution, developing foundational skills in oncology rehabilitation, 
//                                   exercise prescription, and patient care across various clinical departments.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Expertise Tab */}
//                     {activeTab === 'expertise' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
//                             <Target className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-800">Areas of Expertise</h3>
//                         </div>
                        
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {expertise.map((skill, index) => (
//                             <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
//                               <div className="flex items-center space-x-3">
//                                 <div className="w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                                   <Zap className="w-4 h-4 text-yellow-600" />
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold text-gray-800">{skill}</div>
//                                   <div className="text-xs text-gray-500">Specialized Care</div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="glass-morphism rounded-2xl p-6 mt-6">
//                           <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
//                             <Sparkles className="w-5 h-5 text-yellow-500" />
//                             <span>Treatment Philosophy</span>
//                           </h4>
//                           <p className="text-gray-600 leading-relaxed">
//                             "My approach to onco-rehabilitation is centered on empowering cancer patients and survivors with tailored programs 
//                             that enhance strength, mobility, and quality of life. By combining evidence-based techniques with compassionate care, 
//                             I aim to address both physical and emotional needs, fostering resilience and long-term wellness."
//                           </p>
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Certifications Tab */}
//                     {activeTab === 'certifications' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
//                             <Award className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-800">Qualifications & Certifications</h3>
//                         </div>
                        
//                         <div className="space-y-4">
//                           {certifications.map((cert, index) => (
//                             <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
//                               <div className="flex items-center space-x-3">
//                                 <CheckCircle className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
//                                 <div className="font-semibold text-gray-800">{cert}</div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="glass-morphism rounded-2xl p-6 mt-6">
//                           <h4 className="font-bold text-gray-800 mb-3">Continuing Education</h4>
//                           <p className="text-gray-600 leading-relaxed mb-4">
//                             Committed to staying current with the latest advances in onco-rehabilitation through regular 
//                             continuing education courses, workshops, and professional development programs.
//                           </p>
                          
//                           <div className="flex flex-wrap gap-2">
//                             {['Oncology Rehabilitation', 'Lymphedema Management', 'Palliative Care', 'Exercise Oncology', 'Pain Management'].map((topic, index) => (
//                               <span key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                                 {topic}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Award, 
//   BookOpen, 
//   Users, 
//   Heart, 
//   Star, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Calendar, 
//   CheckCircle, 
//   Zap, 
//   Shield,
//   TrendingUp,
//   Clock,
//   Target,
//   Sparkles
// } from 'lucide-react';

// export default function OncoRehabTeamPage() {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeTab, setActiveTab] = useState('experience');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const achievements = [
//     { icon: Users, number: '5000+', label: 'Patients Treated', color: 'text-coral-600' },
//     { icon: Award, number: '15+', label: 'Years Experience', color: 'text-teal-600' },
//     { icon: Star, number: '4.9/5', label: 'Patient Rating', color: 'text-gold-500' },
//     { icon: BookOpen, number: '50+', label: 'Certifications', color: 'text-teal-500' }
//   ];

//   const expertise = [
//     'Onco-Rehabilitation',
//     'Strength Building',
//     'Mobility Enhancement',
//     'Pain Management',
//     'Lymphedema Therapy',
//     'Fatigue Reduction',
//     'Quality of Life Improvement',
//     'Cancer Recovery Support'
//   ];

//   const certifications = [
//     'Master of Physiotherapy (MPT)',
//     'Certified Oncology Rehabilitation Specialist',
//     'Lymphedema Management',
//     'Palliative Care Therapy',
//     'Manual Therapy for Cancer Patients',
//     'Exercise Oncology Specialist'
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-teal-50 to-emerald-50 overflow-hidden relative">
//       {/* CSS Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
//           25% { transform: translateY(-40px) rotate(90deg); opacity: 0.5; }
//           50% { transform: translateY(-80px) rotate(180deg); opacity: 0.2; }
//           75% { transform: translateY(-40px) rotate(270deg); opacity: 0.5; }
//         }
        
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(80px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-80px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(80px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
//           to { opacity: 1; transform: scale(1) rotate(0deg); }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; filter: blur(4px); }
//           to { opacity: 1; filter: blur(0px); }
//         }
        
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.3); }
//           50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.4), 0 0 60px rgba(244, 63, 94, 0.2); }
//         }
        
//         @keyframes morphBg {
//           0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
//           25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
//           50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
//           75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
//         }
        
//         @keyframes bounce-gentle {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes typewriter {
//           from { width: 0; }
//           to { width: 100%; }
//         }
        
//         .animate-slideInUp { animation: slideInUp 1s ease-out forwards; }
//         .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
//         .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
//         .animate-scaleIn { animation: scaleIn 1s ease-out forwards; }
//         .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
//         .animate-float { animation: float linear infinite; }
//         .bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        
//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.85);
//           backdrop-filter: blur(25px);
//           border: 1px solid rgba(255, 255, 255, 0.4);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
//         }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(30px);
//           border: 1px solid rgba(255, 255, 255, 0.5);
//           box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
//         }
        
//         .hover-lift {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .hover-lift:hover {
//           transform: translateY(-12px) scale(1.03);
//           box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
//         }
        
//         .hover-glow:hover {
//           animation: glow 2s ease-in-out infinite;
//         }
        
//         .morph-bg {
//           animation: morphBg 10s ease-in-out infinite;
//         }
        
//         .btn-modern {
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }
        
//         .btn-modern::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.6s ease;
//         }
        
//         .btn-modern:hover::before {
//           left: 100%;
//         }
        
//         .pulse-ring {
//           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }
        
//         .tab-active {
//           background: linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(20, 184, 166, 0.1));
//           border-color: rgba(244, 63, 94, 0.3);
//         }
        
//         @media (prefers-reduced-motion: reduce) {
//           .animate-pulse, .animate-float, .bounce-gentle, .pulse-ring,
//           .transition-all, .transition-transform {
//             animation: none !important;
//             transition: none !important;
//           }
//         }
//       `}</style>

//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/6 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-coral-200/15 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-2/3 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-teal-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-2/3 w-48 sm:w-64 h-48 sm:h-64 bg-coral-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
//         <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-teal-100/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
//       </div>

//       {/* Enhanced floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 15}s`,
//               animationDuration: `${8 + Math.random() * 20}s`,
//               opacity: 0.2 + Math.random() * 0.3
//             }}
//           >
//             <div 
//               className={`rounded-full ${
//                 i % 3 === 0 ? 'w-2 h-2 bg-coral-400' : 
//                 i % 3 === 1 ? 'w-1.5 h-1.5 bg-teal-400' : 
//                 'w-1 h-1 bg-coral-300'
//               }`}
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="w-full h-full" style={{
//           backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(244, 63, 94, 0.3) 1px, transparent 0)',
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="relative z-10" ref={sectionRef}>
//         <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
//           <div className="max-w-7xl mx-auto">
            
//             {/* Header Section */}
//             <div 
//               id="header" 
//               data-animate 
//               className={`text-center mb-16 sm:mb-20 transition-all duration-1200 ${
//                 isVisible.header ? 'animate-slideInUp' : 'opacity-0'
//               }`}
//             >
//               <div className="inline-flex items-center space-x-3 glass-morphism text-coral-700 px-6 py-3 rounded-full text-sm font-medium mb-8 hover-lift">
//                 <Heart className="w-5 h-5 text-pink-500 pulse-ring" />
//                 <span className="font-semibold">Meet Your Trusted Onco-Rehabilitation Specialist</span>
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
//                   ))}
//                 </div>
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
//                 <span className="block">Expert Care by</span>
//                 <span className="block bg-gradient-to-r from-coral-600 to-teal-500 bg-clip-text text-transparent">
//                   Dr. Rajesh Kumar
//                 </span>
//               </h1>
              
//               <p className="text-xl sm:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-medium">
//                 Dedicated to providing <strong className="text-coral-600">exceptional onco-rehabilitation care</strong> 
//                 with personalized treatment plans and compassionate service for cancer patients and survivors.
//               </p>
//             </div>

//             {/* Main Content Grid */}
//             <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              
//               {/* Left Column - Profile Card */}
//               <div 
//                 id="profile-card" 
//                 data-animate 
//                 className={`lg:col-span-1 transition-all duration-1200 delay-200 ${
//                   isVisible['profile-card'] ? 'animate-slideInLeft' : 'opacity-0'
//                 }`}
//               >
//                 <div className="glass-card rounded-3xl p-8 hover-lift border-2 border-white/40 overflow-hidden group sticky top-8">
//                   {/* Background blur effects */}
//                   <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-coral-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse morph-bg"></div>
                  
//                   {/* Profile Image */}
//                   <div className="relative mb-6 group">
//                     <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden hover-lift shadow-xl">
//                       <img
//                         src="src/assets/nikhil.png"
//                         alt="Dr. Nikhil kapoor - Expert Onco-Rehabilitation Specialist"
//                         className="w-full h-full object-top transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />
                      
//                       {/* Gradient overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent"></div>
                      
//                       {/* Online status */}
//                       <div className="absolute bottom-4 right-4">
//                         <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
//                           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                           <span>Available</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Floating badges */}
//                     <div className="absolute -top-4 -left-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle">
//                       <Award className="w-5 h-5 text-coral-500" />
//                     </div>
//                     <div className="absolute -bottom-4 -right-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle" style={{animationDelay: '1s'}}>
//                       <Shield className="w-5 h-5 text-teal-500" />
//                     </div>
//                   </div>
                  
//                   {/* Profile Info */}
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold text-stone-800 mb-2">Dr. Nikhil kapoor</h2>
//                     <p className="text-lg text-coral-600 font-semibold mb-1">Onco-Rehabilitation Specialist</p>
//                     <p className="text-stone-600 mb-4">MPT(Sports), Oncology Rehabilitation Expert</p>
                    
//                     <div className="flex items-center justify-center space-x-4 text-sm text-stone-500 mb-6">
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="w-4 h-4 text-pink-500" />
//                         <span>Dadri, UP</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Clock className="w-4 h-4 text-teal-500" />
//                         <span>15+ Years</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Contact Buttons */}
//                   <div className="space-y-3">
//                     <button className="w-full btn-modern bg-gradient-to-r from-coral-600 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2">
//                       <Phone className="w-4 h-4" />
//                       <span>Book Consultation</span>
//                     </button>
//                     <button className="w-full btn-modern glass-morphism text-stone-700 py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2 border border-white/50">
//                       <Mail className="w-4 h-4 text-coral-600" />
//                       <span>Send Message</span>
//                     </button>
//                   </div>
                  
//                   {/* Quick Stats */}
//                   <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-200/50">
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-coral-600">5K+</div>
//                       <div className="text-xs text-stone-600">Patients</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-teal-600">4.9</div>
//                       <div className="text-xs text-stone-600">Rating</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right Column - Detailed Information */}
//               <div className="lg:col-span-2 space-y-8">
                
//                 {/* Achievement Stats */}
//                 <div 
//                   id="achievements" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-300 ${
//                     isVisible.achievements ? 'animate-slideInRight' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                     {achievements.map((achievement, index) => (
//                       <div key={index} className="glass-card rounded-2xl p-6 hover-lift text-center border border-white/40 group">
//                         <div className="relative mb-4">
//                           <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-coral-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                             <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
//                           </div>
//                           <div className="absolute top-0 right-0">
//                             <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
//                           </div>
//                         </div>
//                         <div className="text-2xl font-bold text-stone-800 mb-1">{achievement.number}</div>
//                         <div className="text-sm text-stone-600 font-medium">{achievement.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Navigation Tabs */}
//                 <div 
//                   id="tabs" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-400 ${
//                     isVisible.tabs ? 'animate-fadeIn' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="flex flex-wrap gap-2 mb-8 p-2 glass-morphism rounded-2xl">
//                     {['experience', 'expertise', 'certifications'].map((tab) => (
//                       <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
//                           activeTab === tab 
//                             ? 'tab-active text-coral-700 shadow-lg' 
//                             : 'text-stone-600 hover:text-coral-600 hover:bg-white/30'
//                         }`}
//                       >
//                         {tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Tab Content */}
//                 <div 
//                   id="tab-content" 
//                   data-animate 
//                   className={`transition-all duration-1200 delay-500 ${
//                     isVisible['tab-content'] ? 'animate-scaleIn' : 'opacity-0'
//                   }`}
//                 >
//                   <div className="glass-card rounded-3xl p-8 border-2 border-white/40">
                    
//                     {/* Experience Tab */}
//                     {activeTab === 'experience' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
//                             <TrendingUp className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-stone-800">Professional Journey</h3>
//                         </div>
                        
//                         <div className="space-y-6">
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-coral-500 rounded-full mt-2 animate-pulse"></div>
//                               <div>
//                                 <div className="font-bold text-stone-800 mb-1">Senior Onco-Rehabilitation Specialist</div>
//                                 <div className="text-coral-600 font-semibold mb-2">Private Practice • 2015 - Present</div>
//                                 <p className="text-stone-600 leading-relaxed">
//                                   Established successful home-based onco-rehabilitation practice serving Dadri and surrounding areas. 
//                                   Specialized in comprehensive treatment plans for cancer patients and survivors, focusing on strength, mobility, and quality of life.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
                          
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 animate-pulse" style={{animationDelay: '1s'}}></div>
//                               <div>
//                                 <div className="font-bold text-stone-800 mb-1">Oncology Rehabilitation Therapist</div>
//                                 <div className="text-teal-600 font-semibold mb-2">Apollo Hospital • 2012 - 2015</div>
//                                 <p className="text-stone-600 leading-relaxed">
//                                   Worked in multi-disciplinary oncology team providing inpatient and outpatient rehabilitation services. 
//                                   Gained extensive experience in lymphedema management and fatigue reduction for cancer patients.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
                          
//                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
//                             <div className="flex items-start space-x-4">
//                               <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 animate-pulse" style={{animationDelay: '2s'}}></div>
//                               <div>
//                                 <div className="font-bold text-stone-800 mb-1">Junior Physiotherapist</div>
//                                 <div className="text-pink-600 font-semibold mb-2">Max Healthcare • 2009 - 2012</div>
//                                 <p className="text-stone-600 leading-relaxed">
//                                   Started career in leading healthcare institution, developing foundational skills in oncology rehabilitation, 
//                                   exercise prescription, and patient care across various clinical departments.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Expertise Tab */}
//                     {activeTab === 'expertise' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
//                             <Target className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-stone-800">Areas of Expertise</h3>
//                         </div>
                        
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {expertise.map((skill, index) => (
//                             <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
//                               <div className="flex items-center space-x-3">
//                                 <div className="w-8 h-8 bg-gradient-to-r from-coral-500/20 to-teal-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                                   <Zap className="w-4 h-4 text-coral-600" />
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold text-stone-800">{skill}</div>
//                                   <div className="text-xs text-stone-500">Specialized Care</div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="glass-morphism rounded-2xl p-6 mt-6">
//                           <h4 className="font-bold text-stone-800 mb-3 flex items-center space-x-2">
//                             <Sparkles className="w-5 h-5 text-gold-500" />
//                             <span>Treatment Philosophy</span>
//                           </h4>
//                           <p className="text-stone-600 leading-relaxed">
//                             "My approach to onco-rehabilitation is centered on empowering cancer patients and survivors with tailored programs 
//                             that enhance strength, mobility, and quality of life. By combining evidence-based techniques with compassionate care, 
//                             I aim to address both physical and emotional needs, fostering resilience and long-term wellness."
//                           </p>
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Certifications Tab */}
//                     {activeTab === 'certifications' && (
//                       <div className="space-y-6">
//                         <div className="flex items-center space-x-3 mb-6">
//                           <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
//                             <Award className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-stone-800">Qualifications & Certifications</h3>
//                         </div>
                        
//                         <div className="space-y-4">
//                           {certifications.map((cert, index) => (
//                             <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
//                               <div className="flex items-center space-x-3">
//                                 <CheckCircle className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
//                                 <div className="font-semibold text-stone-800">{cert}</div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="glass-morphism rounded-2xl p-6 mt-6">
//                           <h4 className="font-bold text-stone-800 mb-3">Continuing Education</h4>
//                           <p className="text-stone-600 leading-relaxed mb-4">
//                             Committed to staying current with the latest advances in onco-rehabilitation through regular 
//                             continuing education courses, workshops, and professional development programs.
//                           </p>
                          
//                           <div className="flex flex-wrap gap-2">
//                             {['Oncology Rehabilitation', 'Lymphedema Management', 'Palliative Care', 'Exercise Oncology', 'Pain Management'].map((topic, index) => (
//                               <span key={index} className="bg-gradient-to-r from-coral-500/10 to-teal-500/10 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">
//                                 {topic}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




































import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Award,
  BookOpen,
  Users,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Sparkles,
} from 'lucide-react';
import {nikhilimg }from '../assets/nikhil.png'

export default function TeamsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: Users, number: '2000+', label: 'Patients Treated', color: 'text-coral-600' },
    { icon: Award, number: '5+', label: 'Years Experience', color: 'text-teal-600' },
    { icon: Star, number: '4.8/5', label: 'Patient Rating', color: 'text-gold-500' },
    { icon: BookOpen, number: '10+', label: 'Certifications', color: 'text-teal-500' },
  ];

  const expertise = [
    'Sports Injury Rehabilitation',
    'Musculoskeletal Injury Management',
    'Post-Operative Rehabilitation',
    'Manual Therapy (Mobilization, MFR)',
    'IASTM Therapy',
    'Cupping Therapy',
    'Dry Needling',
    'Onco-Care Rehabilitation',
    'Postural Assessment',
    'Neurological Rehabilitation',
  ];

  const certifications = [
    'Bachelor of Physiotherapy (BPT)',
    'IASTM Certification',
    'Cupping Therapy Certification',
    'Dry Needling Certification',
    'Sports Physiotherapy Training',
    'Oncology Rehabilitation Training',
    'Manual Therapy Certification',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-teal-50 to-emerald-50 overflow-hidden relative">
      <Helmet>
        <title>Meet Dr. Nikhil Kapoor | Optima Physio Care | Delhi NCR & Haryana</title>
        <meta
          name="description"
          content="Meet Dr. Nikhil Kapoor, expert physiotherapist at Optima Physio Care, offering sports injury treatment, manual therapy, and rehabilitation in Delhi NCR."
        />
        <meta
          name="keywords"
          content="Dr. Nikhil Kapoor, physiotherapy in Delhi NCR, sports physiotherapy Delhi, manual therapy, IASTM, cupping therapy"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta property="og:title" content="Meet Dr. Nikhil Kapoor | Optima Physio Care" />
        <meta
          property="og:description"
          content="Learn about Dr. Nikhil Kapoor's expertise in physiotherapy at Optima Physio Care, serving Delhi NCR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.optimaphysiocare.in/teams" />
        <meta property="og:image" content="https://www.optimaphysiocare.in/ images/team-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Dr. Nikhil Kapoor | Optima Physio Care" />
        <meta
          name="twitter:description"
          content="Learn about Dr. Nikhil Kapoor's expertise in physiotherapy at Optima Physio Care, serving Delhi NCR."
        />
        <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/team-og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Dr. Nikhil Kapoor',
            jobTitle: 'Physiotherapist',
            worksFor: {
              '@type': 'Organization  ',
              name: 'Optima Physio Care',
              url: 'https://www.optimaphysiocare.in',
            },
            telephone: '+91-8447646815',
            email: 'nikhilkapoor9540@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'A-26, Shiv Bux Park, Nangloi',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              postalCode: '110041',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
              'https://www.facebook.com/people/optima-physio-care/100094770625926/',
              'https://www.instagram.com/optimaphysiocare/',
            ],
            description:
              'Dr. Nikhil Kapoor is an expert physiotherapist at Optima Physio Care, providing sports injury rehabilitation, manual therapy, and onco-care in Delhi NCR.',
            areaServed: ['IN-DL'],
          })}
        </script>
      </Helmet>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-40px) rotate(90deg); opacity: 0.5; }
          50% { transform: translateY(-80px) rotate(180deg); opacity: 0.2; }
          75% { transform: translateY(-40px) rotate(270deg); opacity: 0.5; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; filter: blur(4px); }
          to { opacity: 1; filter: blur(0px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.4), 0 0 60px rgba(244, 63, 94, 0.2); }
        }
        @keyframes morphBg {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-slideInUp { animation: slideInUp 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float linear infinite; }
        .bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .glass-morphism {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }
        .hover-glow:hover {
          animation: glow 2s ease-in-out infinite;
        }
        .morph-bg {
          animation: morphBg 10s ease-in-out infinite;
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
          transition: left 0.6s ease;
        }
        .btn-modern:hover::before {
          left: 100%;
        }
        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .tab-active {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(20, 184, 166, 0.1));
          border-color: rgba(244, 63, 94, 0.3);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-float,
          .bounce-gentle,
          .pulse-ring,
          .transition-all,
          .transition-transform {
            animation: none !important;
            transition: none !important;
          }
        }
        @media (prefers-contrast: high) {
          .bg-gradient-to-r,
          .bg-gradient-to-br {
            background: #000 !important;
            color: #fff !important;
          }
          .glass-morphism,
          .glass-card {
            background: #fff !important;
            border: 2px solid #000 !important;
          }
        }
      
      `}</style>

      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-coral-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-teal-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-48 sm:w-64 h-48 sm:h-64 bg-coral-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-teal-100/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 20}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          >
            <div
              className={`rounded-full ${
                i % 3 === 0 ? 'w-2 h-2 bg-coral-400' : i % 3 === 1 ? 'w-1.5 h-1.5 bg-teal-400' : 'w-1 h-1 bg-coral-300'
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(244, 63, 94, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10" ref={sectionRef}>
        <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div
              id="header"
              data-animate
              className={`text-center mb-16 sm:mb-20 transition-all duration-1200 ${isVisible.header ? 'animate-slideInUp' : 'opacity-0'}`}
            >
              <div className="inline-flex items-center space-x-3 glass-morphism text-coral-700 px-6 py-3 rounded-full text-sm font-medium mb-8 hover-lift">
                <Star className="w-5 h-5 text-gold-500 pulse-ring" />
                <span className="font-semibold">Meet Our Expert Physiotherapist</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
                <span className="block">Expert Care by</span>
                <span className="block bg-gradient-to-r from-coral-600 to-teal-500 bg-clip-text text-transparent">
                  Dr. Nikhil Kapoor
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Leading <strong className="text-coral-600">Optima Physio Care</strong> with personalized physiotherapy services
                in Delhi NCR, specializing in sports injuries, manual therapy, and rehabilitation.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div
                id="profile-card"
                data-animate
                className={`lg:col-span-1 transition-all duration-1200 delay-200 ${
                  isVisible['profile-card'] ? 'animate-slideInLeft' : 'opacity-0'
                }`}
              >
                <div className="glass-card rounded-3xl p-8 hover-lift border-2 border-white/40 overflow-hidden group sticky top-8">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-coral-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse morph-bg"></div>
                  <div className="relative mb-6 group">
                    <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden hover-lift shadow-xl">
                      <img
                        src={nikhilimg}
                        alt="Dr. Nikhil Kapoor - Expert Physiotherapist at Optima Physio Care"
                        className="w-full h-full object-top transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>Available</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -left-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle">
                      <Award className="w-5 h-5 text-coral-500" />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 glass-morphism rounded-xl p-2 shadow-lg bounce-gentle"
                      style={{ animationDelay: '1s' }}
                    >
                      <Shield className="w-5 h-5 text-teal-500" />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-stone-800 mb-2">Dr. Nikhil Kapoor</h2>
                    <p className="text-lg text-coral-600 font-semibold mb-1">Physiotherapist</p>
                    <p className="text-stone-600 mb-4">MPT(Sports), Oncology Rehabilitation Expert</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-stone-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-pink-500" />
                        <span>Delhi NCR & Haryana</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-teal-500" />
                        <span>5+ Years</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="tel:+918447646815"
                      className="w-full btn-modern bg-gradient-to-r from-coral-600 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2"
                      aria-label="Book consultation with Dr. Nikhil Kapoor"
                    >
                      <Users className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=918447646815&text&type=phone_number&app_absent=0"
                      className="w-full btn-modern glass-morphism text-stone-700 py-3 px-6 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2 border border-white/50"
                      aria-label="Send message to Dr. Nikhil Kapoor"
                    >
                      <Star className="w-4 h-4 text-coral-600" />
                      <span>Send Message</span>
                    </a>
                  </div>
                  {/* <div className="mt-6 text-center">
                    <h3 className="text-sm font-semibold text-stone-800 mb-3">Connect With Us</h3>
                    <div className="flex justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/nikhil-kapoor-68072b24a"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile of Dr. Nikhil Kapoor"
                      >
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
                      </a>
                      <a
                        href="https://www.facebook.com/people/optima-physio-care/100094770625926/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook page of Optima Physio Care"
                      >
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
                      </a>
                      <a
                        href="https://www.instagram.com/optimaphysiocare/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram profile of Optima Physio Care"
                      >
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
                      </a>
                    </div>
                  </div> */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-200/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coral-600">2k+</div>
                      <div className="text-xs text-stone-600">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">4.8</div>
                      <div className="text-xs text-stone-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div
                  id="achievements"
                  data-animate
                  className={`transition-all duration-1200 delay-300 ${isVisible.achievements ? 'animate-slideInRight' : 'opacity-0'}`}
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="glass-card rounded-2xl p-6 hover-lift text-center border border-white/40 group">
                        <div className="relative mb-4">
                          <div
                            className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-coral-500/10 to-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                          </div>
                          <div className="absolute top-0 right-0">
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-stone-800 mb-1">{achievement.number}</div>
                        <div className="text-sm text-stone-600 font-medium">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  id="tabs"
                  data-animate
                  className={`transition-all duration-1200 delay-400 ${isVisible.tabs ? 'animate-fadeIn' : 'opacity-0'}`}
                >
                  <div className="flex flex-wrap gap-2 mb-8 p-2 glass-morphism rounded-2xl">
                    {['experience', 'expertise', 'certifications'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                          activeTab === tab ? 'tab-active text-coral-700 shadow-lg' : 'text-stone-600 hover:text-coral-600 hover:bg-white/30'
                        }`}
                        aria-current={activeTab === tab ? 'true' : 'false'}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  id="tab-content"
                  data-animate
                  className={`transition-all duration-1200 delay-500 ${isVisible['tab-content'] ? 'animate-scaleIn' : 'opacity-0'}`}
                >
                  <div className="glass-card rounded-3xl p-8 border-2 border-white/40">
                    {activeTab === 'experience' && (
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-stone-800">Professional Journey</h3>
                        </div>
                        <div className="space-y-6">
                           <div className="glass-morphism rounded-2xl p-6 hover-lift">
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-3 bg-coral-500 rounded-full mt-2 animate-pulse"></div>
                              <div>
                                <div className="font-bold text-stone-800 mb-1">Physiotherapist</div>
                                <div className="text-coral-600 font-semibold mb-2">Manipal Hospital Dwarka • present</div>
                                <p className="text-stone-600 leading-relaxed">
                                  Associate at Manipal Hospital Dwarka, providing comprehensive physiotherapy services, including sports injury rehabilitation and manual therapy.  
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="glass-morphism rounded-2xl p-6 hover-lift">
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-3 bg-coral-500 rounded-full mt-2 animate-pulse"></div>
                              <div>
                                <div className="font-bold text-stone-800 mb-1">Physiotherapist</div>
                                <div className="text-coral-600 font-semibold mb-2">Jivisha Advanced Medical Centre • 2020 - jan 2025</div>
                                <p className="text-stone-600 leading-relaxed">
                                  Associate at Jivisha Advanced Medical Centre, Paschim Vihar, under Team Dr. S.K. Dabas, providing comprehensive physiotherapy services, including sports injury rehabilitation and manual therapy.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="glass-morphism rounded-2xl p-6 hover-lift">
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                              <div>
                                <div className="font-bold text-stone-800 mb-1">On-Field Physiotherapist</div>
                                <div className="text-teal-600 font-semibold mb-2">Khelo India Youth Games • 2023</div>
                                <p className="text-stone-600 leading-relaxed">
                                  Provided on-field physiotherapy support during Khelo India Youth Games in Tamil Nadu, specializing in sports injury assessment and immediate care.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="glass-morphism rounded-2xl p-6 hover-lift">
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 animate-pulse" style={{ animationDelay: '2s' }}></div>
                              <div>
                                <div className="font-bold text-stone-800 mb-1">Physiotherapist</div>
                                <div className="text-pink-600 font-semibold mb-2">Various Clinics, Delhi NCR • 2015 - 2020</div>
                                <p className="text-stone-600 leading-relaxed">
                                  Worked across multiple clinics in Delhi NCR, developing expertise in musculoskeletal injuries, post-operative rehabilitation, and manual therapy techniques.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'expertise' && (
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-stone-800">Areas of Expertise</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {expertise.map((skill, index) => (
                            <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-coral-500/20 to-teal-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Zap className="w-4 h-4 text-coral-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-stone-800">{skill}</div>
                                  <div className="text-xs text-stone-500">Specialized Care</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="glass-morphism rounded-2xl p-6 mt-6">
                          <h4 className="font-bold text-stone-800 mb-3 flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-gold-500" />
                            <span>Treatment Philosophy</span>
                          </h4>
                          <p className="text-stone-600 leading-relaxed">
                            "At Optima Physio Care, I combine evidence-based techniques with compassionate care to empower patients. My focus is on personalized treatment plans that address sports injuries, musculoskeletal issues, and rehabilitation needs, ensuring optimal recovery and wellness."
                          </p>
                        </div>
                      </div>
                    )}
                    {activeTab === 'certifications' && (
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-stone-800">Qualifications & Certifications</h3>
                        </div>
                        <div className="space-y-4">
                          {certifications.map((cert, index) => (
                            <div key={index} className="glass-morphism rounded-xl p-4 hover-lift group">
                              <div className="flex items-center space-x-3">
                                <Award className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
                                <div className="font-semibold text-stone-800">{cert}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="glass-morphism rounded-2xl p-6 mt-6">
                          <h4 className="font-bold text-stone-800 mb-3">Continuing Education</h4>
                          <p className="text-stone-600 leading-relaxed mb-4">
                            Committed to advancing expertise through ongoing training in sports physiotherapy, manual therapy, and innovative rehabilitation techniques.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Sports Injury Rehabilitation', 'Manual Therapy', 'IASTM', 'Cupping Therapy', 'Dry Needling'].map((topic, index) => (
                              <span
                                key={index}
                                className="bg-gradient-to-r from-coral-500/10 to-teal-500/10 text-stone-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}