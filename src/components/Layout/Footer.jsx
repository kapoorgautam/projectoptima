import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  ChevronRight,
  Heart,
  Award,
  Shield,
  Calendar,
  ArrowUp
} from 'lucide-react';

const ModernFooter = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleNewsletterSubmit = () => {
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Treatment Plans', href: '#treatments' },
    { name: 'Our Team', href: '#team' },
    { name: 'Patient Portal', href: '#portal' },
    { name: 'Blog & Resources', href: '#blog' }
  ];

  const services = [
    { name: 'Sports Physiotherapy', href: '#sports' },
    { name: 'Manual Therapy', href: '#manual' },
    { name: 'Rehabilitation', href: '#rehab' },
    { name: 'Pain Management', href: '#pain' },
    { name: 'Ergonomic Assessment', href: '#ergonomic' },
    { name: 'Preventive Care', href: '#preventive' }
  ];

  const patientResources = [
    { name: 'Book Appointment', href: '#book' },
    { name: 'Insurance Info', href: '#insurance' },
    { name: 'Patient Forms', href: '#forms' },
    { name: 'Exercise Library', href: '#exercises' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', name: 'Facebook' },
    { icon: Instagram, href: '#instagram', name: 'Instagram' },
    { icon: Twitter, href: '#twitter', name: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', name: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', name: 'YouTube' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 4:00 PM' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
                OptimaphysioCare
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading the way in comprehensive physiotherapy care with evidence-based treatments, personalized attention, and innovative rehabilitation techniques.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Licensed</span>
                </div>
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-300">Insured</span>
                </div>
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <Heart className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-sm text-gray-300">Trusted</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-green-400 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact & Hours</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Wellness Avenue</p>
                  <p className="text-gray-300">Health District, Mumbai 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@optimaphysiocare.com" className="text-gray-300 hover:text-white transition-colors">
                  info@optimaphysiocare.com
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <h5 className="font-semibold text-white">Office Hours</h5>
              </div>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-gray-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 text-white">
              Stay Updated with Health Tips & News
            </h4>
            <p className="text-gray-300 mb-8">
              Get expert physiotherapy advice, exercise tips, and health insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Patient Resources */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6 text-center text-white">Patient Resources</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {patientResources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
              >
                {resource.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 OptimaphysioCare. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Empowering movement, restoring function, enhancing lives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default ModernFooter;