import React from 'react'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import ImageCollection from './components/ImageCollection';
import { fetchWeatherDataByCords } from './components/fetchApi';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [background, setBackground] = useState('Clear')
  const [text, setText] = useState('')
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
  // --------------

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
  // --------------------

  // function for dynamic change background 

  const ChangeBG = () => {
    let WeatherMain;
    if (data && data.weather && Array.isArray(data.weather)) {
      WeatherMain = data.weather[0].main;
    }
    return WeatherMain;
  }

  useEffect(() => {
    const bg = ChangeBG();

    if (bg == 'Rain' || bg=='Clouds') {
      setText("text-amber-400")
    }
    else if(bg=='Clear'){
      setText('text-white')
    }
    else{
      setText('text-red-600')
    }
    if (screenSize >= 768) {
    setBackground(ImageCollection.LargeScreen[bg]);
    }
    else{
      setBackground(ImageCollection.MobileScreen[bg]);
    }
  }, [screenSize, data]);



  return (
    <div>
      <Layout
        location={location}
        setLocation={setLocation}
        data={data}
        setdata={setdata}
        textColor={text}
        // backgroundImage={image}
        // videoSource={ImageCollection.LargeScreen.Clouds}
        videoSource={background}
      />
    </div>
  )
}

export default App