import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Body } from '../components/Body'

const Home = () => {
  return (
      <>
          <div className="App">
              <Navbar />
              <div className="contenedor-sidebar-body">
                  <Sidebar />
                  <Body />
              </div>
          </div>
      </>
  )
}

export default Home