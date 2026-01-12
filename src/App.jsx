import React from 'react'
import './App.css'
import Header from './component/Header'
import HeroHome from './component/HeroHome'
import Footer from './component/Footer'
import Service from './component/Service'
import Process from './component/Process'
import AboutUs from './component/Aboute'
import Certificate from './component/Certificate'
import ROISection from './component/ROISection'
import ROIProjection from './component/ROIProjection'
import StartupFranchiseKit from './component/StartupFranchiseKit'
import OwnerTraining from './component/OwnerTraining'
import Help from './component/Help'
import ApplyNow from './component/ApplyNow'
import OurProducts from './component/OurProducts'
import FranchiseStory from './component/FranchiseStory'
import OurLocations from './component/OurLocations'
import ReviewsSection from './component/ReviewsSection'
import CreateReelSection from './component/CreateReelSection'
import PaymentAndBooking from './component/PaymentAndBooking'

// function App() {
//   return (
//     <>
//       <Header />
//       <HeroHome />
//       <Service />
//       <Process />
//       <AboutUs />
//       <Certificate />
//       <ROISection />
//       <ROIProjection />
//       <StartupFranchiseKit />
//       <OwnerTraining />
//       <Help />
//       <ApplyNow />
//       <OurProducts />
//       <FranchiseStory />
//       <OurLocations />
//       <ReviewsSection />
//       <CreateReelSection />
//       <PaymentAndBooking />
//       <Footer />
//     </>
//   )
// }

// export default App

function App() {
  return (
    <>
      <Header />

      <section id="home"><HeroHome /></section>
      <section id="services"><Service /></section>
      <section id="process"><Process /></section>
      <section id="about"><AboutUs /></section>
      <section id="certificate"><Certificate /></section>
      <section id="roi"><ROISection /></section>
      <section id="roi-projection"><ROIProjection /></section>
      <section id="startup-kit"><StartupFranchiseKit /></section>
      <section id="training"><OwnerTraining /></section>
      <section id="help"><Help /></section>
      <section id="terms"><ApplyNow /></section>
      <section id="products"><OurProducts /></section>
      <section id="story"><FranchiseStory /></section>
      <section id="locations"><OurLocations /></section>
      <section id="reviews"><ReviewsSection /></section>
      <section id="reels"><CreateReelSection /></section>
      <section id="payment"><PaymentAndBooking /></section>

      <Footer />
    </>
  );
}

export default App
