import React, { useState } from 'react'
import Header from '../components/Header'
import Other from '../components/Other'
import MainSection from '../components/MainSection'
const Home = () => {
  const [hide,setHide] = useState(true)
  return (
    <div>
    <Header/>
     {hide && <Other/>}  
    <MainSection/>
    </div>
  )
}

export default Home