import CoursesSection from "../../components/LandingComponent/CoursesSection"
import LandingFAQ from "../../components/LandingComponent/LandingFAQ"
import LandingHomeSection from "../../components/LandingComponent/LandingHomeSection"
import LandingTestimonials from "../../components/LandingComponent/LandingTestimonials"
import LandingWhyCompethisun from "../../components/LandingComponent/LandingWhyCompethisun"
import ResultSection from "../../components/LandingComponent/ResultSection"

const LandingPage = () => {
  return (
    <div className="Landing-Page-Main-Container">
      <LandingHomeSection />
      <LandingWhyCompethisun />
      <ResultSection />
      <LandingTestimonials/>  
      <CoursesSection />
      <LandingFAQ />
    </div>
  )
}
export default LandingPage