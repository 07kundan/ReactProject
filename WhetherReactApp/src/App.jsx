import React from 'react'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import ImageCollection from './components/ImageCollection';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [image, setImage] = useState()

  // It'll return the screenSize
  useEffect(() => {

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  // function for dynamic change background 

  const ChangeBG = () => {

  }

  useEffect(() => {
    // const image=city;
    if (screenSize >= 768) {
      setImage(ImageCollection.LargeScreen.city);
    } else {
      setImage(ImageCollection.MobileScreen.city);
    }
  }, [screenSize]);


  return (
    <div>
      <Layout

      backgroundImage={image}
      textColor='text-black'

      />
    </div>
  )
}

export default App