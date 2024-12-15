import ClientsComponent from "./components/ClientsComponent"
import DigitalServices from "./components/DigitalServices"
import Footer from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SuccessStories from "./components/SuccessStories"
import TopHeader from "./components/TopHeader"

const App = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />

{/* done  */}

      {/* Sample content to scroll */}
      <div className="h-[580px]">
        <HeroSection />
        <DigitalServices/>
        <ClientsComponent/>
        <SuccessStories/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
