import React from 'react'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import ImageCollection from './components/ImageCollection';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [image, setImage] = useState()
  const [location, setLocation] = useState("");
  const [data, setdata] = useState({});



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
    if (screenSize >= 768) {
      if (data?.main?.temp < 20) {
        setImage(ImageCollection.LargeScreen.rain)
      }
      else {
        setImage(ImageCollection.LargeScreen.city);
      }
    } else {
      if (data?.main?.temp < 20) {
        setImage(ImageCollection.MobileScreen.rain)
      }
      else {
        setImage(ImageCollection.MobileScreen.city);
      }
    }
  }, [screenSize, data]);


  return (
    <div>
      <Layout
        location={location}
        setLocation={setLocation}
        data={data}
        setdata={setdata}
        backgroundImage={image}
        textColor='text-black'

      />
    </div>
  )
}

export default App