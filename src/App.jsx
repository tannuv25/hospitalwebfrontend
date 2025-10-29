
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import AppointmentPage from './pages/AppointmentPage'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import ProfilePage from './pages/ProfilePage'
import MyappointmentPage from './pages/MyappointmentPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/services' element = {<ServicesPage/>}/>
        <Route path='/doctors' element = {<DoctorsPage/>}/>
        <Route path='/contact' element = {<ContactPage/>}/>
        <Route path='/appointment' element = {<AppointmentPage/>}/>
        <Route path='/my-appointments' element = {<MyappointmentPage/>}/>
        <Route path='/profile' element= {<ProfilePage/>}/> 


        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
