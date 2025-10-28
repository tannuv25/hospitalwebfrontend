import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TestimonialsSection from '../components/Testimonials'
import DoctorSection from '../components/Doctors'

export default function DoctorsPage() {
  return (
    <>
    <Navbar/>
    <DoctorSection/>
    <TestimonialsSection/>
    <Footer/>
    </>
  )
}
