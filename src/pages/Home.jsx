import React, { useState } from 'react'
import Header from '../components/Header'
import Other from '../components/Other'
import MainSection from '../components/MainSection'
import styled from 'styled-components'
const Home = () => {
  const [hide, setHide] = useState(true)
  return (
    <Application>
      <Header />
      {hide && <Other />}
      <MainSection />
    </Application>
  )
}

export default Home
const Application = styled.div`
  @media only  screen  and (max-width:420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`