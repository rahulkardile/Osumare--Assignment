import Details from "../components/Details"
import img from "../assets/newIm.jpg"
import Services from "../components/Services"
import Details2 from "../components/Details2"
import Strategies from "../components/Strategies"
import PeaceOfMind from "../components/PeaceOfMind"
import { Review } from "../components/Review"
import FAQ from "../components/FAQ"
import Connect from "../components/Connect"
import Footer from "../components/Footer"


export const Home = () => {
  return (
    <>

      <main id="home" className="w-screen">
        <div className="flex flex-col gap-2 portrait:mt-20 mt-28 portrait:w-[80vw] w-[60%] m-auto text-center items-center justify-center">
          <h3 className="text-4xl portrait:text-2xl font-bold text-neutral-600">Elevate <span className="text-blue-600">Real Estate Success</span> with Osumare's Digital Expertise</h3>
          <p className="text-sm portrait:my-3 text-gray-700">Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
          <button className="text-lg font-semibold p-2 portrait:p-1 bg-blue-600 px-28 portrait:px-9 rounded-full text-white my-2">Get Started</button>
        </div>
        <img src={img} className="w-[55vw] portrait:hidden portrait:w-[90vw] object-contain m-auto mt-4" alt="img" />
      </main>

      <Details />
      <Services />
      <Details2 />
      <Strategies />
      <PeaceOfMind />
      <Review />
      <FAQ />
      <Connect />
      <Footer />
    </>
  )
}
