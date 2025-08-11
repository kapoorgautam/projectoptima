

import Herosection from './herosection.jsx'

import Homesolution from './HomeSoulution.jsx'
import TestimonialsSection from './Testimonial.jsx'
import AboutUsSection from './Aboutsection.jsx'
import Cta from './Ctasection.jsx'







const Homepage = () => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

    <Herosection/>
    <Homesolution/>
    <TestimonialsSection/>
      <AboutUsSection/>
    <Cta/>
  </div>
};

export default Homepage











