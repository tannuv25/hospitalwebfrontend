import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero'
import HospitalCarousel from '../components/HospitalCarousel'
import AboutSection from '../components/About'
import ServicesSection from '../components/Services'
import TestimonialsSection from '../components/Testimonials'
import DoctorSection from '../components/Doctors'
import AppointmentModal from '../components/Appointment'

export default function HomePage() {
  return (
   <>
   <div>
    <Navbar/>
    <HeroSection/>
    <HospitalCarousel/>
    <AboutSection/>
    <ServicesSection/>
    <DoctorSection/>
    <AppointmentModal/>
    <TestimonialsSection/>
    <Footer/>
   </div>
   </>
  )
}
