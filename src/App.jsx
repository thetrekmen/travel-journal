import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Location from './Components/Location/Location';
import data from './locationdata';

export default function App() {
  const locations = data.map(item => {
    return (
      <Location
        className="location-container"
        key={item.id}
        {...item}
        pinSrc={"/pin.png"}
      />
    )
  })

  return (
    <div className="App">
      <Navbar
        className="navbar"
        backgroundImg="/globe.png"
        navbarTitle="My Travel Journal." />
      <section className="locations-list">
        {locations}
      </section>
    </div>
  )
}

