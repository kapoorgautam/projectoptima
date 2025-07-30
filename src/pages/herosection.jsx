import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function PhysioHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    "Home Physiotherapy",
    "Sports Rehabilitation", 
    "Pain Management",
    "Post-Surgery Recovery"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* SEO-friendly header structure */}
      <header className="relative">
        

        {/* Hero Content */}
        <div className="relative px-6 py-20 mt-3 ">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <CheckCircle className="w-4 h-4" />
                  <span>Trusted by 5000+ Patients</span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Expert 
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Physiotherapy</span>
                  <br />
                  <span className="text-3xl lg:text-4xl">
                    {services[currentService]}
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Modern infrastructure, latest technology & top physiotherapy experts delivering personalized care at your home with continuous guidance and strong quality checks.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  <span>Explore our treatments</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className={`flex flex-wrap gap-6 pt-8 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Home Service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Visual */}
            <div className={`relative transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold">+</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Care</h3>
                    <p className="text-gray-600 mb-6">Expert physiotherapists with modern technology</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="text-2xl font-bold text-blue-600">5000+</div>
                        <div className="text-sm text-gray-600">Happy Patients</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="text-2xl font-bold text-green-600">15+</div>
                        <div className="text-sm text-gray-600">Expert Therapists</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-bounce">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg animate-bounce delay-500">
                  <Phone className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C150,100 350,0 600,20 C850,40 1050,100 1200,80 L1200,120 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
        </div>
      </header>
    </div>
  );
}





// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Calendar, Phone, MapPin, Clock, Star, CheckCircle } from 'lucide-react';

// export default function PhysioHeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [currentStat, setCurrentStat] = useState(0);

//   const stats = [
//     { number: '4500+', label: 'Happy Patients' },
//     { number: '200', label: 'Hospital Rooms' },
//     { number: '500+', label: 'Award Winning' },
//     { number: '20+', label: 'Experience' }
//   ];

//   useEffect(() => {
//     setIsLoaded(true);
//     const interval = setInterval(() => {
//       setCurrentStat((prev) => (prev + 1) % stats.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className={`flex items-center space-x-3 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
//                 <div className="text-white font-bold text-lg">O</div>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-800">OptimPhysio Care</h1>
//                 <p className="text-xs text-blue-600 font-medium">Physical Therapy Specialist</p>
//               </div>
//             </div>

//             {/* Navigation Menu */}
//             <div className={`hidden lg:flex items-center space-x-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
//               <a href="#home" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Home</a>
//               <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
//               <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
//               <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
//               <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
//             </div>

//             {/* CTA Button */}
//             <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
//                 <Calendar className="w-4 h-4" />
//                 <span>Book Appointment</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className={`transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//                   Premium Treatments for
//                   <span className="text-blue-600 block">a Healthy Lifestyle</span>
//                 </h2>
                
//                 <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
//                   Optimize your health with our expert physiotherapy services. Modern infrastructure, advanced technology, and personalized treatment plans delivered by certified professionals at your home.
//                 </p>

//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                   <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
//                     <span>Schedule Programs</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
                  
//                   <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
//                     <span>Search Top Medical</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className={`grid grid-cols-4 gap-6 pt-8 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className={`text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-500 ${currentStat === index ? 'text-blue-600' : 'text-gray-800'}`}>
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Doctor Image */}
//             <div className={`relative transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//               <div className="relative">
//                 {/* Background Circle */}
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform translate-x-12 -translate-y-12"></div>
                
//                 {/* Doctor Placeholder */}
//                 <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
//                   <div className="text-center">
//                     {/* Doctor Avatar */}
//                     <div className="w-48 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl mx-auto mb-6 flex items-end justify-center relative overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-blue-200 to-transparent"></div>
//                       <div className="relative z-10 w-32 h-32 bg-blue-600 rounded-full mb-8 flex items-center justify-center">
//                         <div className="text-white text-2xl font-bold">Dr</div>
//                       </div>
//                       {/* Stethoscope representation */}
//                       <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-gray-400 rounded-full bg-white"></div>
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Physiotherapist</h3>
//                     <p className="text-gray-600 mb-4">Expert in rehabilitation & pain management</p>
                    
//                     {/* Rating */}
//                     <div className="flex items-center justify-center space-x-1 mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                       ))}
//                       <span className="text-sm text-gray-600 ml-2">4.9 (1.2k reviews)</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                       <CheckCircle className="w-5 h-5 text-green-600" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-semibold text-gray-800">24/7 Available</div>
//                       <div className="text-xs text-gray-600">Emergency Services</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float delay-1000">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                       <Phone className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-semibold text-gray-800">Free Consultation</div>
//                       <div className="text-xs text-gray-600">Call Now</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar Section */}
//         <div className={`max-w-4xl mx-auto px-6 pb-16 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-white rounded-2xl shadow-xl p-6">
//             <div className="grid md:grid-cols-4 gap-4">
//               <div className="relative">
//                 <select className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option>Select Departments</option>
//                   <option>Physiotherapy</option>
//                   <option>Sports Medicine</option>
//                   <option>Pain Management</option>
//                 </select>
//               </div>
//               <div className="relative">
//                 <select className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option>Select Location</option>
//                   <option>Home Visit</option>
//                   <option>Clinic</option>
//                 </select>
//               </div>
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Search"
//                   className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <button className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition-colors">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }