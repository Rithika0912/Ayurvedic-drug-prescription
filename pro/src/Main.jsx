import React from 'react'
import Navbar from './components/Navbar'
import './Main.scss'
import Table from './components/Table'



const Main = () => {
  return (
    <section className='main-1'>
      <div>
       <Navbar/>

        
      </div>
      <div className='Table'>
      <Table/>
      </div>
      <div className='bt'>
      <p>உணவே மருந்து!<br/> 
        மருந்தே உணவு!.</p>
      </div>
    </section>
  )
}

export default Main
