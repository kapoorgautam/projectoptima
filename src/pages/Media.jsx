import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, X, ZoomIn, Download, Share2, CheckCircle } from 'lucide-react';

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Cursor tracking
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // Sample media data
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      title: 'Modern Physiotherapy Equipment',
      category: 'equipment',
      description: 'State-of-the-art rehabilitation equipment for optimal patient care'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      title: 'Patient Treatment Session',
      category: 'treatment',
      description: 'Professional physiotherapy session with personalized care'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Advanced Therapy Room',
      category: 'facility',
      description: 'Clean, modern treatment rooms designed for patient comfort'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      title: 'Exercise Rehabilitation',
      category: 'treatment',
      description: 'Guided exercise therapy for optimal recovery'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      title: 'Professional Consultation',
      category: 'consultation',
      description: 'Expert consultation and assessment services'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
      title: 'Specialized Therapy',
      category: 'treatment',
      description: 'Specialized treatment techniques for specific conditions'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop',
      title: 'Home Care Equipment',
      category: 'equipment',
      description: 'Portable equipment for home physiotherapy sessions'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1594824848637-114859583950?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1594824848637-114859583950?w=400&h=300&fit=crop',
      title: 'Pediatric Care',
      category: 'treatment',
      description: 'Specialized pediatric physiotherapy services'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
      title: 'Recovery Progress',
      category: 'consultation',
      description: 'Monitoring and tracking patient recovery progress'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      title: 'Women\'s Health Focus',
      category: 'treatment',
      description: 'Specialized women\'s health physiotherapy services'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=300&fit=crop',
      title: 'Senior Care Programs',
      category: 'treatment',
      description: 'Dedicated programs for elderly patient care'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      title: 'Advanced Diagnostics',
      category: 'equipment',
      description: 'Latest diagnostic equipment for accurate assessment'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media', count: mediaItems.length },
    { id: 'treatment', name: 'Treatment', count: mediaItems.filter(item => item.category === 'treatment').length },
    { id: 'equipment', name: 'Equipment', count: mediaItems.filter(item => item.category === 'equipment').length },
    { id: 'facility', name: 'Facilities', count: mediaItems.filter(item => item.category === 'facility').length },
    { id: 'consultation', name: 'Consultation', count: mediaItems.filter(item => item.category === 'consultation').length }
  ];

  const filteredMedia = currentCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === currentCategory);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollRef.current) {
      autoScrollRef.current = setInterval(() => {
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 4000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, filteredMedia]);

 

  const MediaCard = ({ item, index }) => (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer flex-shrink-0 w-80 transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => setSelectedMedia(item)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay icons */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {item.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );

  const FullScreenModal = () => {
    if (!selectedMedia) return null;

    const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id);
    
    const goToPrevious = () => {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredMedia.length - 1;
      setSelectedMedia(filteredMedia[prevIndex]);
    };
    
    const goToNext = () => {
      const nextIndex = currentIndex < filteredMedia.length - 1 ? currentIndex + 1 : 0;
      setSelectedMedia(filteredMedia[nextIndex]);
    };

    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center ">
        {/* Close button */}
        <button
          onClick={() => setSelectedMedia(null)}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main image */}
        <div className="max-w-6xl max-h-[90vh] mx-4">
          <img
            src={selectedMedia.src}
            alt={selectedMedia.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Image info */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{selectedMedia.title}</h3>
              <p className="text-white/80">{selectedMedia.description}</p>
              <div className="flex items-center mt-2 text-sm text-white/60">
                <span className="mr-4">{currentIndex + 1} of {filteredMedia.length}</span>
                <span className="px-2 py-1 bg-white/20 rounded-full">{selectedMedia.category}</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                <Download className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-25">
     
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Professional Healthcare Documentation</span>
          </div>
          
          <h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Media{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Explore our state-of-the-art facilities, advanced equipment, and professional treatment sessions. See how we deliver exceptional physiotherapy care.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Auto-scroll Controls */}
        <div className={`flex justify-center items-center gap-4 mb-8 transform transition-all duration-1000 delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              isAutoScrolling 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAutoScrolling ? 'Pause Auto-Scroll' : 'Start Auto-Scroll'}</span>
          </button>
        </div>

        {/* Media Gallery */}
        <div 
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-6 transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {filteredMedia.map((item, index) => (
            <MediaCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 transform transition-all duration-1000 delay-900 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { number: '50+', label: 'Treatment Photos' },
            { number: '25+', label: 'Equipment Showcase' },
            { number: '15+', label: 'Facility Views' },
            { number: '1000+', label: 'Patient Moments' }
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

        {/* CTA Section */}
        <div className={`text-center mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-100 transform transition-all duration-1000 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Experience Our World-Class Facilities
          </h2>
          <p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Visit our modern clinic or book a home consultation to experience our professional physiotherapy services firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span>Schedule Visit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <FullScreenModal />

      <style jsx>{`
        .flex.gap-6.overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
      
      `}</style>
    </div>
  );
};

export default MediaGallery;