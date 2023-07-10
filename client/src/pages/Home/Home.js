import React from 'react'
import SelectCountry from '../CountriesPage/SelectCountry'
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
    <SelectCountry />
    <Footer />
  </div>
  )
}

export default Home
