import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
     <>
     <Header/>
     <div>
        <Routers/>
     </div>
     <Footer/>
     </>
  )
}

export default Layout