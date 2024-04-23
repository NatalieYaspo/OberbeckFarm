//Do I need to remove these?
import { useState } from 'react'  
import './App.css'
// import reactLogo from './assets/react.svg' //REMOVE
// import viteLogo from '/vite.svg' //REMOVE

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

// Bringing in the required import from the Header and Footer Componants
// import Header from './components/Header'; //UNCOMMENT ONCE COMPONANTS ARE BUILT
// import Footer from './components/Footer'; //UNCOMMENT ONCE COMPONANTS ARE BUILT




function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      
      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App;
