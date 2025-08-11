


// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Facebook, Instagram, Linkedin ,  MessageCircleIcon
//  } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       const timeout = setTimeout(() => {
//         document.querySelector('.mobile-menu')?.classList.add('translate-y-0', 'opacity-100');
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [isMobileMenuOpen]);

//   // Close mobile menu on escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape' && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     if (isMobileMenuOpen) {
//       document.addEventListener('keydown', handleEscape);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, [isMobileMenuOpen]);

//   const socialLinks = [
//     { 
//       icon: Facebook, 
//       href: 'https://www.facebook.com/people/optima-physio-care/100094770625926/', 
//       name: 'Facebook',
//       rel: 'noopener noreferrer nofollow'
//     },
//     { 
//       icon: Instagram, 
//       href: 'https://www.instagram.com/optimaphysiocare/', 
//       name: 'Instagram',
//       rel: 'noopener noreferrer nofollow'
//     },
//     { 
//       icon: Linkedin, 
//       href: 'https://www.linkedin.com/in/nikhil-kapoor-68072b24a', 
//       name: 'LinkedIn',
//       rel: 'noopener noreferrer nofollow'
//     },
//     { 
//       icon: MessageCircleIcon, 
//       href: 'https://wa.me/+918447646815', 
//       name: 'WhatsApp',
//       rel: 'noopener noreferrer nofollow'
//     },
//   ];

//   const navLinks = [
//     { href: '/', label: 'Home', title: 'Home - Optima Physio Care' },
//     { href: '/about', label: 'About', title: 'About Dr. Nikhil Kapoor and Optima Physio Care' },
//     { href: '/treatment', label: 'Treatments', title: 'Physiotherapy Treatments & Services in Delhi NCR' },
//     { href: '/contact', label: 'Contact', title: 'Contact Optima Physio Care' },
//     { href: '/team', label: 'Team', title: 'Meet Dr. Nikhil Kapoor, Expert Physiotherapist' },
//   ];

//   const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

//   return (
//     <>
//       <Helmet>
//         <title>Optima Physio Care | Expert Physiotherapy in Delhi NCR</title>
//         <meta
//           name="description"
//           content="Optima Physio Care, led by Dr. Nikhil Kapoor, offers expert physiotherapy in Delhi NCR, specializing in home-based treatments, sports injuries, cupping therapy, and neuro rehabilitation."
//         />
//         <meta
//           name="keywords"
//           content="Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, home physiotherapy, sports injury treatment, cupping therapy, dry needling, neuro rehabilitation, back pain relief"
//         />
//         <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
//         <meta name="author" content="Optima Physio Care" />
//         <meta name="geo.region" content="IN-DL" />
//         <meta name="geo.placename" content="Delhi NCR" />
//         <meta name="geo.position" content="28.7041;77.1025" />
//         <meta name="ICBM" content="28.7041, 77.1025" />
        
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.optimaphysiocare.in" />
//         <meta property="og:title" content="Optima Physio Care | Expert Physiotherapy in Delhi NCR" />
//         <meta
//           property="og:description"
//           content="Professional physiotherapy services in Delhi NCR by Dr. Nikhil Kapoor. Specialized treatments for pain relief, sports injury recovery, and home-based care."
//         />
//         <meta property="og:image" content="https://www.optimaphysiocare.in/images/og-image.jpg" />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:site_name" content="Optima Physio Care" />
//         <meta property="og:locale" content="en_IN" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Optima Physio Care | Expert Physiotherapy in Delhi NCR" />
//         <meta
//           name="twitter:description"
//           content="Expert physiotherapy in Delhi NCR by Dr. Nikhil Kapoor, offering home-based care, sports rehabilitation, and pain management."
//         />
//         <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/twitter-image.jpg" />

//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'MedicalOrganization',
//             '@id': 'https://www.optimaphysiocare.in/#organization',
//             name: 'Optima Physio Care',
//             alternateName: 'Optima Physiotherapy',
//             url: 'https://www.optimaphysiocare.in',
//             logo: {
//               '@type': 'ImageObject',
//               url: 'https://www.optimaphysiocare.in/images/logo.png',
//               width: 300,
//               height: 100
//             },
//             image: 'https://www.optimaphysiocare.in/images/clinic-photo.jpg',
//             description: 'Optima Physio Care, led by Dr. Nikhil Kapoor, provides expert physiotherapy services in Delhi NCR, specializing in home-based care, sports injury rehabilitation, and neuro rehabilitation.',
//             medicalSpecialty: 'Physical Therapy',
//             priceRange: '₹₹',
//             address: {
//               '@type': 'PostalAddress',
//               streetAddress: 'A-26, Shiv Bux Park, Nangloi',
//               addressLocality: 'Delhi',
//               addressRegion: 'Delhi',
//               postalCode: '110041',
//               addressCountry: 'IN'
//             },
//             geo: {
//               '@type': 'GeoCoordinates',
//               latitude: 28.6817,
//               longitude: 77.0636
//             },
//             contactPoint: [
//               {
//                 '@type': 'ContactPoint',
//                 telephone: '+91-8447646815',
//                 contactType: 'customer service',
//                 email: 'nikhilkapoor9540@gmail.com',
//                 areaServed: 'IN',
//                 availableLanguage: ['Hindi', 'English']
//               },
//               {
//                 '@type': 'ContactPoint',
//                 telephone: '+91-8447646815',
//                 contactType: 'WhatsApp',
//                 url: 'https://wa.me/+918447646815'
//               }
//             ],
//             openingHoursSpecification: {
//               '@type': 'OpeningHoursSpecification',
//               dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//               opens: '09:00',
//               closes: '18:00'
//             },
//             sameAs: socialLinks.map(link => link.href)
//           })}
//         </script>

//         {/* Breadcrumb Schema */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'BreadcrumbList',
//             itemListElement: navLinks.map((link, index) => ({
//               '@type': 'ListItem',
//               position: index + 1,
//               name: link.label,
//               item: link.href
//             }))
//           })}
//         </script>

//         {/* Preload critical resources */}
//         <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
//         <link rel="dns-prefetch" href="//www.google-analytics.com" />
//         <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href="https://www.optimaphysiocare.in" />
        
//         {/* Alternative languages */}
//         <link rel="alternate" hrefLang="en-IN" href="https://www.optimaphysiocare.in" />
//         <link rel="alternate" hrefLang="hi-IN" href="https://www.optimaphysiocare.in/hi" />
        
//         {/* Favicon */}
//         <link rel="icon" href="/favicon.ico" />
//       </Helmet>

//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white/80 shadow-lg' : 'bg-transparent'
//         } text-gray-800 py-2 sm:py-3 md:py-4`}
//         role="banner"
//         aria-label="Main navigation"
//         itemScope
//         itemType="https://schema.org/WPHeader"
//         lang="en"
//       >
//         <div className="mx-auto px-4 sm:px-6 lg:px-8 justify-items-center-safe">
//           <nav 
//             className="bg-gray-900 rounded-full px-5 sm:px-6 py-2 sm:py-3 flex justify-between items-center text-white relative"
//             role="navigation"
//             aria-label="Main navigation"
//             itemScope
//             itemType="https://schema.org/SiteNavigationElement"
//           >
//             <div className="flex items-center" itemProp="name">
//               <a 
//                 href="https://www.optimaphysiocare.in" 
//                 className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
//                 aria-label="Optima Physio Care - Homepage"
//                 itemProp="url"
//               >
//                 <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//                   Optima Physio Care
//                 </h1>
//               </a>
//             </div>

//             <div className="hidden md:flex items-center space-x-4 lg:space-x-6 ">
//               <div className="flex items-center space-x-3 lg:space-x-4 px-8">
//                 {navLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     title={link.title}
//                     className={`text-sm lg:text-base transition-colors focus:outline-none  rounded ${
//                       currentPath === link.href.replace('https://www.optimaphysiocare.in', '') 
//                         ? 'text-grey font-semibold underline underline-offset-4' 
//                         : 'hover:text-gray-300'
//                     }`}
//                     aria-current={currentPath === link.href.replace('https://www.optimaphysiocare.in', '') ? 'page' : undefined}
//                     itemProp="url"
//                   >
//                     <span itemProp="name">{link.label}</span>
//                   </a>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-2 ml-4" role="list" aria-label="Social media links">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     aria-label={`Visit our ${social.name} page`}
//                     rel={social.rel}
//                     title={`Follow us on ${social.name}`}
//                     className="w-9 h-9 bg-gray-800 rounded-full flex   items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 hover:scale-105 focus:outline-none "
//                     role="listitem"
//                   >
//                     <social.icon />
//                   </a>
//                 ))}
//               </div>
//               <a
//                 href=" ./contact "
//                 title="Book your physiotherapy appointment with Dr. Nikhil Kapoor"
//                 className="ml-4 bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                 aria-label="Book a physiotherapy consultation"
//               >
//                 Get Started
//               </a>
//             </div>

//             <button
//               type="button"
//               className="md:hidden text-white focus:outline-none z-50 f rounded px-6"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') {
//                   e.preventDefault();
//                   setIsMobileMenuOpen(!isMobileMenuOpen);
//                 }
//               }}
//               aria-label="Toggle mobile menu"
//               aria-expanded={isMobileMenuOpen}
//               aria-controls="mobile-menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </nav>

//           {isMobileMenuOpen && (
//             <div
//               id="mobile-menu"
//               className="md:hidden mobile-menu absolute top-14 right-6 sm:right-8 bg-gray-900 rounded-lg shadow-lg w-64 sm:w-72 py-4 px-6 z-50 transform transition-all duration-300 translate-y-2 opacity-0"
//               role="menu"
//               aria-label="Mobile navigation menu"
//             >
//               {navLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   title={link.title}
//                   className={`block text-white py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded ${
//                     currentPath === link.href.replace('https://www.optimaphysiocare.in', '') 
//                       ? 'text-blue-600 font-semibold underline underline-offset-4' 
//                       : 'hover:text-gray-300'
//                   }`}
//                   role="menuitem"
//                   aria-current={currentPath === link.href.replace('https://www.optimaphysiocare.in', '') ? 'page' : undefined}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     aria-label={`Visit our ${social.name} page`}
//                     rel={social.rel}
//                     title={`Follow us on ${social.name}`}
//                     className="w-9 h-9 bg-gray-800 rounded-full flex items-center  text-white justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 focus:outline-none "
//                     role="menuitem"
//                   >
//                     <social.icon />
//                   </a>
//                 ))}
//               </div>
//               <a
//                 href="https://www.optimaphysiocare.in/appointment"
//                 title="Book your physiotherapy appointment with Dr. Nikhil Kapoor"
//                 className="mt-4 block w-full bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                 role="menuitem"
//                 aria-label="Book a physiotherapy consultation"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Get Started
//               </a>
//             </div>
//           )}
//         </div>

//         <style >{`
//           .mobile-menu {
//             will-change: transform, opacity;
//           }

//           @media (prefers-reduced-motion: reduce) {
//             .transition-all,
//             .transition-colors,
//             .hover\\:scale-105,
//             .hover\\:scale-110 {
//               transition: none !important;
//               transform: none !important;
//             }
//           }

//           @media (prefers-contrast: high) {
//             .bg-gray-900 {
//               background: #000 !important;
//             }

//             .text-white {
//               color: #fff !important;
//             }

//             .text-gray-400 {
//               color: #ccc !important;
//             }

//             .bg-teal-500 {
//               background: #000 !important;
//               border: 2px solid #fff !important;
//             }

//             .text-blue-600 {
//               color: #000 !important;
//               text-decoration: underline !important;
//             }
//           }

//           @media (max-width: 640px) {
//             .px-4 {
//               padding-left: 1rem;
//               padding-right: 1rem;
//             }

//             .py-2 {
//               padding-top: 0.5rem;
//               padding-bottom: 0.5rem;
//             }

//             .text-lg {
//               font-size: 1.125rem;
//             }
//           }

//           @media print {
//             .fixed {
//               position: static;
//             }

//             .bg-gray-900 {
//               background: #fff !important;
//               color: #000 !important;
//             }

//             .bg-teal-500 {
//               background: #fff !important;
//               border: 1px solid #000 !important;
//               color: #000 !important;
//             }

//             .shadow-lg {
//               box-shadow: none !important;
//             }

//             .text-blue-600 {
//               color: #000 !important;
//               text-decoration: underline !important;
//             }
//           }

//           button:focus-visible,
//           a:focus-visible {
//             outline: 3px solid #2563eb;
//             outline-offset: 2px;
//           }
//         `}</style>
//       </header>
//     </>
//   );
// };

// export default Header;






import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom'; // Added for client-side navigation
import { Facebook, Instagram, Linkedin, MessageCircleIcon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current path for active link styling

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const timeout = setTimeout(() => {
        document.querySelector('.mobile-menu')?.classList.add('translate-y-0', 'opacity-100');
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      document.querySelector('.mobile-menu')?.classList.remove('translate-y-0', 'opacity-100');
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const socialLinks = [
    {
      icon: Facebook,
      to: 'https://www.facebook.com/people/optima-physio-care/100094770625926/',
      name: 'Facebook',
      rel: 'noopener noreferrer nofollow',
    },
    {
      icon: Instagram,
      to: 'https://www.instagram.com/optimaphysiocare/',
      name: 'Instagram',
      rel: 'noopener noreferrer nofollow',
    },
    {
      icon: Linkedin,
      to: 'https://www.linkedin.com/in/nikhil-kapoor-68072b24a',
      name: 'LinkedIn',
      rel: 'noopener noreferrer nofollow',
    },
    {
      icon: MessageCircleIcon,
      to: 'https://wa.me/+918447646815',
      name: 'WhatsApp',
      rel: 'noopener noreferrer nofollow',
    },
  ];

  const navLinks = [
    { to: '/', label: 'Home', title: 'Home - Optima Physio Care' },
    { to: '/about', label: 'About', title: 'About Dr. Nikhil Kapoor and Optima Physio Care' },
    { to: '/treatment', label: 'Treatments', title: 'Physiotherapy Treatments & Services in Delhi NCR' },
    { to: '/contact', label: 'Contact', title: 'Contact Optima Physio Care' },
    { to: '/team', label: 'Team', title: 'Meet Dr. Nikhil Kapoor, Expert Physiotherapist' },
  ];

  // Page-specific meta tags for SEO
  const pageMeta = navLinks.find((link) => link.to === location.pathname) || navLinks[0];

  return (
    <>
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta
          name="description"
          content={
            pageMeta.to === '/'
              ? 'Optima Physio Care, led by Dr. Nikhil Kapoor, offers expert physiotherapy in Delhi NCR, specializing in home-based treatments, sports injuries, cupping therapy, and neuro rehabilitation.'
              : pageMeta.to === '/contact'
              ? 'Contact Optima Physio Care for expert physiotherapy services in Haryana and Delhi NCR. Book your consultation in Gurugram, Noida, Faridabad, and more.'
              : pageMeta.to === '/about'
              ? 'Learn about Optima Physio Care and Dr. Nikhil Kapoor, your trusted physiotherapy experts in Delhi NCR.'
              : pageMeta.to === '/treatment'
              ? 'Explore our physiotherapy treatments, including sports injury recovery, cupping therapy, and neuro rehabilitation in Delhi NCR.'
              : pageMeta.to === '/team'
              ? 'Meet Dr. Nikhil Kapoor and the expert physiotherapy team at Optima Physio Care.'
              : 'Optima Physio Care provides expert physiotherapy services in Delhi NCR.'
          }
        />
        <meta
          name="keywords"
          content={
            pageMeta.to === '/'
              ? 'Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, home physiotherapy, sports injury treatment, cupping therapy, dry needling, neuro rehabilitation, back pain relief'
              : pageMeta.to === '/contact'
              ? 'contact Optima Physio Care, physiotherapy Delhi NCR, book physiotherapy appointment, Haryana physiotherapy'
              : pageMeta.to === '/about'
              ? 'about Optima Physio Care, Dr. Nikhil Kapoor, physiotherapy Delhi NCR, expert physiotherapist'
              : pageMeta.to === '/treatment'
              ? 'physiotherapy treatments, sports injury recovery, cupping therapy, neuro rehabilitation, Delhi NCR physiotherapy'
              : pageMeta.to === '/team'
              ? 'Dr. Nikhil Kapoor, physiotherapy team, expert physiotherapist Delhi NCR'
              : 'physiotherapy, Delhi NCR, Optima Physio Care'
          }
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Optima Physio Care" />
        <meta name="geo.region" content="IN-DL;IN-HR" />
        <meta name="geo.placename" content="Delhi NCR, Haryana" />
        <meta name="geo.position" content="28.6817;77.0636" />
        <meta name="ICBM" content="28.6817, 77.0636" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.optimaphysiocare.in${pageMeta.to}`} />
        <meta property="og:title" content={pageMeta.title} />
        <meta
          property="og:description"
          content={
            pageMeta.to === '/'
              ? 'Professional physiotherapy services in Delhi NCR by Dr. Nikhil Kapoor. Specialized treatments for pain relief, sports injury recovery, and home-based care.'
              : pageMeta.to === '/contact'
              ? 'Get in touch with Optima Physio Care for personalized physiotherapy in Haryana and Delhi NCR.'
              : pageMeta.to === '/about'
              ? 'Discover the mission and expertise of Optima Physio Care, led by Dr. Nikhil Kapoor.'
              : pageMeta.to === '/treatment'
              ? 'Comprehensive physiotherapy treatments for pain relief, sports injuries, and neuro rehabilitation in Delhi NCR.'
              : pageMeta.to === '/team'
              ? 'Meet our expert physiotherapy team, led by Dr. Nikhil Kapoor, in Delhi NCR.'
              : 'Expert physiotherapy services in Delhi NCR.'
          }
        />
        <meta property="og:image" content="https://www.optimaphysiocare.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Optima Physio Care" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMeta.title} />
        <meta
          name="twitter:description"
          content={
            pageMeta.to === '/'
              ? 'Expert physiotherapy in Delhi NCR by Dr. Nikhil Kapoor, offering home-based care, sports rehabilitation, and pain management.'
              : pageMeta.to === '/contact'
              ? 'Contact Optima Physio Care for expert physiotherapy in Haryana and Delhi NCR.'
              : pageMeta.to === '/about'
              ? 'Learn about Dr. Nikhil Kapoor and Optima Physio Care’s commitment to physiotherapy excellence.'
              : pageMeta.to === '/treatment'
              ? 'Discover our range of physiotherapy treatments for recovery and wellness in Delhi NCR.'
              : pageMeta.to === '/team'
              ? 'Meet Dr. Nikhil Kapoor and our dedicated physiotherapy team.'
              : 'Physiotherapy services in Delhi NCR.'
          }
        />
        <meta name="twitter:image" content="https://www.optimaphysiocare.in/images/twitter-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            '@id': 'https://www.optimaphysiocare.in/#organization',
            name: 'Optima Physio Care',
            alternateName: 'Optima Physiotherapy',
            url: 'https://www.optimaphysiocare.in',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.optimaphysiocare.in/images/logo.png',
              width: 300,
              height: 100,
            },
            image: 'https://www.optimaphysiocare.in/images/clinic-photo.jpg',
            description:
              'Optima Physio Care, led by Dr. Nikhil Kapoor, provides expert physiotherapy services in Delhi NCR, specializing in home-based care, sports injury rehabilitation, and neuro rehabilitation.',
            medicalSpecialty: 'Physical Therapy',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'A-26, Shiv Bux Park, Nangloi',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              postalCode: '110041',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 28.6817,
              longitude: 77.0636,
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+91-8447646815',
                contactType: 'customer service',
                email: 'nikhilkapoor9540@gmail.com',
                areaServed: ['IN-DL', 'IN-HR'],
                availableLanguage: ['Hindi', 'English'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+91-8447646815',
                contactType: 'WhatsApp',
                url: 'https://wa.me/+918447646815',
              },
            ],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '09:00',
                closes: '18:00',
              },
            ],
            sameAs: socialLinks.map((link) => link.to),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: navLinks.map((link, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: link.label,
              item: `https://www.optimaphysiocare.in${link.to}`,
            })),
          })}
        </script>

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.optimaphysiocare.in${pageMeta.to}`} />
        <link rel="alternate" hrefLang="en-IN" href={`https://www.optimaphysiocare.in${pageMeta.to}`} />
        <link rel="alternate" hrefLang="hi-IN" href={`https://www.optimaphysiocare.in/hi${pageMeta.to}`} />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/images/optimaphysiocare-favicon.svg" />
      </Helmet>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        } text-gray-800 py-2 sm:py-3 md:py-4`}
        role="banner"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="bg-gray-900 rounded-full px-5 sm:px-6 py-2 sm:py-3 flex justify-between items-center text-white"
            role="navigation"
            aria-label="Main navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <div className="flex items-center" itemProp="name">
              <Link
                to="/"
                className="focus:outline-none  focus:ring-offset-2 rounded-lg"
                aria-label="Optima Physio Care - Homepage"
                itemProp="url"
              >
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  Optima Physio Care
                </h1>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-3 lg:space-x-4 px-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    title={link.title}
                    className={`text-sm lg:text-base transition-colors focus:outline-none focus:ring-offset-2 rounded ${
                      location.pathname === link.to ? 'text-grey-400 font-semibold underline underline-offset-4' : 'hover:text-gray-300'
                    }`}
                    aria-current={location.pathname === link.to ? 'page' : undefined}
                    itemProp="url"
                  >
                    <span itemProp="name">{link.label}</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-2 ml-4" role="list" aria-label="Social media links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.to}
                    aria-label={`Visit our ${social.name} page`}
                    rel={social.rel}
                    title={`Follow us on ${social.name}`}
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    role="listitem"
                    target="_blank"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <Link
                to="/appointment"
                title="Book your physiotherapy appointment with Dr. Nikhil Kapoor"
                className="ml-4 bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Book a physiotherapy consultation"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden mobile-menu absolute top-14 right-6 sm:right-8 bg-gray-900 rounded-lg shadow-lg w-64 sm:w-72 py-4 px-6 z-50 transform transition-all duration-300 ease-in-out"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  title={link.title}
                  className={`block text-white py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded ${
                    location.pathname === link.to ? 'text-blue-400 font-semibold underline underline-offset-4' : 'hover:text-gray-300'
                  }`}
                  role="menuitem"
                  aria-current={location.pathname === link.to ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Social media links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.to}
                    aria-label={`Visit our ${social.name} page`}
                    rel={social.rel}
                    title={`Follow us on ${social.name}`}
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    role="menuitem"
                    target="_blank"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <Link
                to="/appointment"
                title="Book your physiotherapy appointment with Dr. Nikhil Kapoor"
                className="mt-4 block w-full bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                role="menuitem"
                aria-label="Book a physiotherapy consultation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        <style jsx>{`
          .mobile-menu {
            will-change: transform, opacity;
          }

          @media (prefers-reduced-motion: reduce) {
            .transition-all,
            .transition-colors,
            .hover\\:scale-105 {
              transition: none !important;
              transform: none !important;
            }
          }

          @media (prefers-contrast: high) {
            .bg-gray-900 {
              background: #000 !important;
            }
            .text-white {
              color: #fff !important;
            }
            .text-gray-300 {
              color: #ccc !important;
            }
            .bg-teal-500 {
              background: #000 !important;
              border: 2px solid #fff !important;
            }
            .text-blue-400 {
              color: #000 !important;
              text-decoration: underline !important;
            }
          }

          @media (max-width: 640px) {
            .px-4 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .py-2 {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .text-lg {
              font-size: 1.125rem;
            }
          }

          @media print {
            .fixed {
              position: static;
            }
            .bg-gray-900 {
              background: #fff !important;
              color: #000 !important;
            }
            .bg-teal-500 {
              background: #fff !important;
              border: 1px solid #000 !important;
              color: #000 !important;
            }
            .shadow-lg {
              box-shadow: none !important;
            }
            .text-blue-400 {
              color: #000 !important;
              text-decoration: underline !important;
            }
          }

          button:focus-visible,
          a:focus-visible,
          [role='menuitem']:focus-visible {
            outline: 3px solid #2563eb;
            outline-offset: 2px;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
