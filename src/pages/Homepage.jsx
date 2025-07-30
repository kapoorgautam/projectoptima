

import Herosection from './herosection.jsx'
import Homeproblem from './Homeproblem.jsx'
import Homesolution from './HomeSoulution.jsx'
import TestimonialsSection from './Testimonial.jsx'
import Homeproof from './Homeproof.jsx'
import AboutUsSection from './Aboutsection.jsx'
import Cta from './Ctasection.jsx'







const Homepage = () => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

    <Herosection/>
    <Homeproblem/>
    <Homesolution/>
      <AboutUsSection/>
    <TestimonialsSection/>
    <Cta/>
  </div>
};

export default Homepage