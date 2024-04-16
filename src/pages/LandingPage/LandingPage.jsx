import LandingFAQ from "../../components/LandingComponent/LandingFAQ"
import LandingHomeSection from "../../components/LandingComponent/LandingHomeSection"

import LandingTestimonials from "../../components/LandingComponent/LandingTestimonials"

import LandingWhyCompethisun from "../../components/LandingComponent/LandingWhyCompethisun"

const LandingPage = () => {
  return (
    <div className="Landing-Page-Main-Container">
      <LandingHomeSection />
      <LandingTestimonials/>  
      <LandingFAQ />
      <LandingWhyCompethisun />
    </div>
  )
}
export default LandingPage