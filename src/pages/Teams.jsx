import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Star, Award, Languages, BookOpen } from 'lucide-react';

const TeamsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Sports Physiotherapy",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "MS in Sports Medicine", "Certified Manual Therapist"],
      bio: "Dr. Sarah specializes in sports injuries and rehabilitation. She has worked with professional athletes and helped them return to peak performance. Her expertise includes manual therapy, movement analysis, and injury prevention strategies.",
      specializations: ["Sports Injury Recovery", "Manual Therapy", "Movement Analysis", "Injury Prevention"],
      awards: ["Best Physiotherapist 2023", "Sports Medicine Excellence Award"],
      languages: ["English", "Spanish", "French"],
      rating: 4.9,
      reviews: 145,
      availability: "24/7 Available"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurological Rehabilitation",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "PhD in Neuroscience", "NDT Certified"],
      bio: "Dr. Michael is a leading expert in neurological rehabilitation with over a decade of experience helping patients recover from stroke, spinal cord injuries, and other neurological conditions. His patient-centered approach combines cutting-edge techniques with compassionate care.",
      specializations: ["Stroke Recovery", "Spinal Cord Injury", "Balance Training", "Gait Analysis"],
      awards: ["Neurological Excellence Award", "Research Innovation Prize 2022"],
      languages: ["English", "Mandarin", "Cantonese"],
      rating: 4.8,
      reviews: 203,
      availability: "Mon-Sat Available"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Physiotherapy",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1594824848637-114859583950?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "Pediatric Specialist Certification", "Sensory Integration Certified"],
      bio: "Dr. Emily is passionate about helping children reach their full potential through specialized pediatric physiotherapy. She works with children with developmental delays, cerebral palsy, and other conditions affecting movement and function.",
      specializations: ["Developmental Delays", "Cerebral Palsy", "Sensory Integration", "Early Intervention"],
      awards: ["Pediatric Care Excellence", "Community Service Award 2023"],
      languages: ["English", "Spanish", "Portuguese"],
      rating: 4.9,
      reviews: 178,
      availability: "Home Service"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Rehabilitation",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "OCS (Orthopedic Certified Specialist)", "Dry Needling Certified"],
      bio: "With 15 years of experience, Dr. James specializes in post-surgical rehabilitation and orthopedic conditions. He has helped thousands of patients recover from joint replacements, fractures, and chronic pain conditions.",
      specializations: ["Post-Surgical Rehab", "Joint Replacement Recovery", "Chronic Pain Management", "Dry Needling"],
      awards: ["Orthopedic Excellence Award", "Patient Choice Award 2022", "Lifetime Achievement"],
      languages: ["English", "German", "Italian"],
      rating: 4.9,
      reviews: 289,
      availability: "24/7 Emergency"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Women's Health Physiotherapy",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "Women's Health Specialist", "Pelvic Floor Certified"],
      bio: "Dr. Lisa focuses on women's health issues throughout all life stages. She provides comprehensive care for pelvic floor dysfunction, pregnancy-related conditions, and postpartum recovery with sensitivity and expertise.",
      specializations: ["Pelvic Floor Therapy", "Prenatal Care", "Postpartum Recovery", "Incontinence Treatment"],
      awards: ["Women's Health Pioneer Award", "Compassionate Care Award"],
      languages: ["English", "French", "Arabic"],
      rating: 4.8,
      reviews: 156,
      availability: "Home & Clinic"
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Geriatric Physiotherapy",
      experience: "9 years",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
      qualifications: ["DPT", "Geriatric Certified Specialist", "Fall Prevention Certified"],
      bio: "Dr. Robert specializes in helping older adults maintain independence and improve quality of life. His expertise in fall prevention, balance training, and age-related conditions has helped hundreds of seniors stay active and healthy.",
      specializations: ["Fall Prevention", "Balance Training", "Mobility Enhancement", "Age-related Conditions"],
      awards: ["Senior Care Excellence", "Community Impact Award 2023"],
      languages: ["English", "Korean", "Japanese"],
      rating: 4.7,
      reviews: 134,
      availability: "Daily Visits"
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            transform: `translateY(${scrollY * 0.05 * (i + 1)}px)`,
          }}
        >
          <div className={`w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-br from-blue-200 to-green-200 rounded-full`} />
        </div>
      ))}
    </div>
  );

  const DoctorCard = ({ doctor, index }) => (
    <div
      className={`group bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating availability badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
          Available
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {doctor.name}
          </h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          <p className="text-gray-600 text-sm">{doctor.experience} experience</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
        </div>
        
        {/* Quick info */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-green-500" />
            <span>{doctor.availability}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Home Service Available</span>
          </div>
        </div>
        
        {/* Qualifications preview */}
        <div className="flex flex-wrap gap-2">
          {doctor.qualifications.slice(0, 2).map((qual, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
            >
              {qual}
            </span>
          ))}
          {doctor.qualifications.length > 2 && (
            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
              +{doctor.qualifications.length - 2} more
            </span>
          )}
        </div>
        
        <button
          onClick={() => setSelectedDoctor(doctor)}
          className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const DoctorModal = () => {
    if (!selectedDoctor) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
          <button
            onClick={() => setSelectedDoctor(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Image and basic info */}
              <div>
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedDoctor.availability}
                  </div>
                </div>
                
                {/* Rating and contact info */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedDoctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-800">{selectedDoctor.rating}</span>
                      <span className="text-gray-600">({selectedDoctor.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Call Available</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Home Visits</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{selectedDoctor.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Languages className="w-5 h-5 text-blue-600 mr-2" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.languages.map((lang, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Detailed info */}
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedDoctor.name}</h2>
                  <p className="text-xl text-blue-600 mb-1 font-medium">{selectedDoctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{selectedDoctor.experience} of experience</p>
                </div>
                
                <div className="space-y-6">
                  {/* About */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">About Doctor</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedDoctor.bio}</p>
                  </div>
                  
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                      Qualifications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedDoctor.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Specializations */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Specializations</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedDoctor.specializations.map((spec, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Awards */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Award className="w-5 h-5 text-yellow-500 mr-2" />
                      Awards & Recognition
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedDoctor.awards.map((award, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                      Book Appointment
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-gray-300">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <FloatingElements />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 5000+ Patients</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Modern infrastructure, latest technology & top physiotherapy experts delivering personalized care at your home with continuous guidance and strong quality checks.
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '5000+', label: 'Happy Patients' },
              { number: '15+', label: 'Expert Therapists' },
              { number: '50+', label: 'Years Combined Experience' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100 transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a consultation with one of our expert physiotherapists today and take the first step towards better health.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
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

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <DoctorModal />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamsPage;