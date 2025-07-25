import React, { useEffect } from 'react'
import Header from '../components/Header'
import FieldsOfWork from '../components/FieldsOfWork'
import GoodAt from '../components/GoodAt'

function Home() {
      useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <FieldsOfWork></FieldsOfWork>
      <GoodAt></GoodAt>

    </div>
  )
}

export default Home