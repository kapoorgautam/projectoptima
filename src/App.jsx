// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// import Header from './components/Header.jsx'

// import Footer from './components/Footer.jsx'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <Contact/>
//     <Footer/>
//     <Treatment/>
//     <About/>
//    <Herosection/>
//    <Homeproblem/>
//    <Homesolution/>
//    <TestimonialsSection/>
//    <Homeproof/>
//    <AboutUsSection/>
//    <Cta/>
//    {/* <Homepage/> */}
//     </>
//   )
// }

// export default App























// export default App;
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import About from './pages/About.jsx'
import Homepage from './pages/Homepage.jsx'

import Teams from './pages/Teams.jsx'
import Treatment from './pages/Treatment.jsx'
import Contact from './pages/contact.jsx'
import Media from './pages/Media.jsx'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <ScrollToTop />
          <Layout />
       
        </>
      ),
      children: [
        { path: '/', index: true, element: <Homepage /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact/> },
        { path: '/treatment', element: <Treatment /> },
        { path: '/team', element: <Teams /> },
        { path: '/media', element: <Media /> },

        // { path: '/advocates', element: <Advocate /> },
        // { path: '/resources', element: <Resources /> },
        // { path: '/users', element: <Users /> },
        // { path: '/contactdata', element: <ContactData /> },
        // { path: '/blogedit', element: <BlogNewEdit /> },
        // { path: '/advocates/Attornydetails', element: <AttorneyProfilePage /> },

        // { path: '/auth', element: <Auth /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enable v7 behavior for splat routes
    },
  }
);

const App = () => {
  return (
  
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <RouterProvider router={router} />
      </div>
  
  );
};

export default App;