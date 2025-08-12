// import React, { useEffect } from 'react';
// import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider
// import Layout from './components/Layout/Layout';
// import About from './pages/About.jsx';
// import Homepage from './pages/Homepage.jsx';
// import Teams from './pages/Teams.jsx';
// import Treatment from './pages/Treatment.jsx';
// import Contact from './pages/contact.jsx';


// // Scroll to top on route change
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// const router = createBrowserRouter(
//   [
//     {
//       element: (
//         <>
//           <ScrollToTop />
//           <Layout />
//         </>
//       ),
//       children: [
//         { path: '/', index: true, element: <Homepage /> },
//         { path: '/about', element: <About /> },
//         { path: '/contact', element: <Contact /> },
//         { path: '/appointment', element: <Contact /> },
//         { path: '/treatment', element: <Treatment /> },
//         { path: '/team', element: <Teams /> },
//         // { path: '/media', element: <Media /> },
//         // { path: '/analytic', element: <Analytic/> },
//       ],
//     },
//   ],
//   {
//     future: {
//       v7_relativeSplatPath: true,
//     },
//   }
// );

// const App = () => {
//   return (
//     <HelmetProvider>
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//         <RouterProvider router={router} />
//       </div>
//     </HelmetProvider>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Treatment from './pages/Treatment';
import Contact from './pages/contact';
import Teams from './pages/Teams';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Contact />} />
              <Route path="/team" element={<Teams />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
