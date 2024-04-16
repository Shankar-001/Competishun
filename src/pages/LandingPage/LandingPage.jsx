import LandingFAQ from "../../components/LandingComponent/LandingFAQ"
import LandingHomeSection from "../../components/LandingComponent/LandingHomeSection"

import LandingTestimonials from "../../components/LandingComponent/LandingTestimonials"

const LandingPage = () => {
  return (
    <div className="Landing-Page-Main-Container">
      <LandingHomeSection />
      <LandingTestimonials/>  
      <LandingFAQ />
    </div>
  )
}
export default LandingPage