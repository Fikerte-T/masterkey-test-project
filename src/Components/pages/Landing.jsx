import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Hero from '../Hero'

const Landing = () => {
  return (
     <main className='min-h-screen font-manrope bg-linear-to-b from-top to-bottom'>
      <div className='' >
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  )
}

export default Landing