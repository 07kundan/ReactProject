import React from 'react'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import ImageCollection from './components/ImageCollection';
import { fetchWeatherDataByCords } from './components/fetchApi';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [image, setImage] = useState()
  const [location, setLocation] = useState("");
  const [data, setdata] = useState({});

  // get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        // console.log('Latitude:', latitude);
        // console.log('Longitude:', longitude);
        const responseData = await fetchWeatherDataByCords(latitude, longitude)
        setdata(responseData)
      },
        (error) => {
          console.error("error getting location", error.message)
        }
      )
    }
    else {
      console.error("browser doesn't support geolocation")
    }
  }, [])

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
        textColor='text-white'
        videoSource={ImageCollection.LargeScreen.rainVideo}
      />
    </div>
  )
}

export default App