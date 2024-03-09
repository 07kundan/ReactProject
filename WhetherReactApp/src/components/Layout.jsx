import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faWind, faCloud, faMagnifyingGlass, faShower } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fetchWeatherData } from './fetchApi';
import ImageCollection from './ImageCollection';

function Layout(props) {

  const data = props.data;

  const [date, setdate] = useState(new Date())
  const [isFocused, setIsFocused] = useState(false)
  const [insideList, setInsideList] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])

  useEffect(() => {
    setdate(new Date());
  }, [props.location]);

  const handlChange = (event) => {
    setIsFocused(true)
    props.setLocation(event.target.value);
  };

  const handleSearch = async () => {
    // console.log("handleSearch trigger")

    if (!props.location) {
      return;
    }
    try {
      const responseData = await fetchWeatherData(props.location);
      props.setdata(responseData);
      // console.log(data)
    } catch (error) {
      props.setdata(false)
    }

    // console.log("1"+props.location)
    if (props.location !== "") {
      setSearchHistory((prevSearchHistory) => [props.location, ...prevSearchHistory])
      // console.log(searchHistory)
    }

    props.setLocation('')

  };

  const Buttonclicked = (event) => {
    if (event.key === "Enter") {
      // console.log("clicked")
      setIsFocused(false)
      handleSearch();
    }
  }


  useEffect(()=>{
    if(props.videoSource){
      const videoElement=document.getElementById('bg-video');
      if(videoElement){
        videoElement.src=props.videoSource;
      }
    }
  },[props.videoSource])


  return (
    // main div
    <div
      className='h-screen w-full bg-cover bg-center relative'
    // style={{ backgroundImage: `${props.backgroundImage}` }}
    // style={{ backgroundImage: ImageCollection.LargeScreen.city }}
    >
      <video autoPlay loop muted id='bg-video' className='absolute top-0 left-0 w-full h-full object-cover z-0'>
        <source src={props.videoSource || (props.screenSize < 768 ) ? ImageCollection.MobileScreen.Clear : ImageCollection.LargeScreen.Clear} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/*  logo  */}

      <span className='absolute top-20 right-4 text-5xl p-4 text-green-600 lg:top-3 lg:left-14'>
        <span className="absolute bottom-2 inset-x-1 w-[93%] h-1 bg-green-800 rounded-full lg:w-[19%]"></span>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faShower} />
          <div className="relative -inset-x-16">
            <div className='text-2xl opacity-0'
              style={
                {
                  opacity: 1,
                  transform: 'translateX(37%)',
                  transition: 'all .5s ease-in-out 2s',
                }
              }>
              <div>shower</div>
              <p className='text-xs textp'>get real time weather details</p>
            </div>
          </div>
        </div>
      </span>
      {/* ------------------------ */}

      {/* header for smaller screen and right-main div for big screen  */}
      <div className='w-full h-20 absolute lg:w-[38%] lg:h-full lg:backdrop-blur-md lg:right-0'>

        {/* search line for smaller screen larger screen-:hidden */}
        <div className={`w-[80%] h-14 m-auto rounded-2xl px-4 text-xl ${props.textColor} flex justify-between items-center backdrop-blur-xl mt-4 relative z-10 lg:hidden`}>

          <span className='block absolute bottom-1.5 left-5 w-[88%] h-0.5 rounded-full bg-white bg-opacity-25'></span>

          <input
            id='text-location'
            className={`w-full px-3 bg-transparent p-2 focus:outline-none placeholder:text-white `}
            type="search"
            placeholder='Search'
            value={props.location}
            onChange={handlChange}
            onKeyDown={Buttonclicked}
            onFocus={() => { setIsFocused(true) }}
            onBlur={() => {
              if (!insideList) {
                setIsFocused(false)
              }
            }}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass}
            className={`${props.textColor} text-2xl active:text-xl `}
            onClick={() => { handleSearch() }}
          />

          {isFocused && (
            <div className='absolute top-14 left-0 w-full flex justify-center'>
              <div className='w-[90%] bg-white border border-gray-300 rounded-xl shadow-md'>
                <ul>
                  {searchHistory.map((item, index) => (
                    <li
                      className='cursor-pointer text-black text-lg px-4 py-2 hover:bg-gray-300 '
                      key={index}
                      value={item}
                      onTouchStart={() => {
                        setInsideList(true)
                      }}
                      onClick={() => {
                        props.setLocation(item)
                        setInsideList(false)
                        setIsFocused(false)
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
        {/* ---------------- */}

        {/* whether details for larger screen hidden for smaller screen*/}
        <div className='hidden lg:block w-full h-full'>
          <div className="flex w-full h-full shadow-lg shadow-black text-emerald-400">
            <span className='h-full w-5 backdrop-blur-xl'></span>

            <div className={`w-full h-full px-10 py-12 text-lg ${props.textColor} flex flex-col gap-6`}>

              <div className='w-[95%] h-12 rounded-3xl px-4 text-xl flex mx-auto items-center relative bg-white bg-opacity-25'>

                {/* underline effect */}
                <span className='absolute bottom-1 left-5 w-[88%] h-0.5 rounded-full bg-white bg-opacity-55'></span>

                <input
                  id='text-location'
                  className={`w-full p-2 px-3 bg-transparent focus:outline-none placeholder:text-white`}
                  type="search"
                  placeholder='Search'
                  value={props.location}
                  onChange={handlChange}
                  onKeyDown={Buttonclicked}
                  onFocus={() => { setIsFocused(true) }}
                  onBlur={() => {
                    if (!insideList) {
                      setIsFocused(false)
                    }
                  }}
                />
                <button
                  id="button"
                  className={`${props.textColor} px-4 text-2xl active:text-xl `}
                  onClick={handleSearch}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}
                  />
                </button>

                {isFocused && (
                  <div className='absolute top-14 left-0 w-full flex justify-center '>
                    <div className='w-[90%] bg-white border border-gray-300 rounded-xl shadow-md'>
                      <ul>
                        {searchHistory.map((item, index) => (
                          <li
                            className={`cursor-pointer text-black text-lg px-4 py-2 hover:bg-gray-300`}
                            key={index}
                            value={item}
                            onMouseOver={() => { setInsideList(true) }}
                            onMouseLeave={() => { setInsideList(false) }}
                            onClick={() => {
                              // setIsFocused(true)
                              props.setLocation(item)
                              setIsFocused(false)
                              // handleSearch()  // state of location updating late
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              <div className='font-medium underline underline-offset-5'>Weather Details...</div>

              {data && data.weather && Array.isArray(data.weather) && (
                <div className="font-bold ">{(data.weather[0].description).toUpperCase()}</div>
              )}


              <div className="flex justify-between">
                <span>Temp max</span>
                <div className='p-2 flex gap-2 items-center'>
                  <span>{(data?.main?.temp_max) ? data.main.temp_max : 0}&deg;</span>
                  <FontAwesomeIcon icon={faTemperatureHalf} className='text-amber-600' />
                </div>
              </div>

              <div className="flex justify-between">
                <span>Temp min</span>
                <div className='p-2 flex gap-2 items-center'>
                  <span>{(data?.main?.temp_min) ? data.main.temp_min : 0}&deg;</span>
                  <FontAwesomeIcon icon={faTemperatureHalf} className='text-blue-400' />
                </div>
              </div>

              <div className="flex justify-between">
                <span>Humidity</span>
                <div className='p-2 flex gap-2 items-center'>
                  <span>{(data?.main?.humidity) ? data.main.humidity : 0}%</span>
                  <FontAwesomeIcon icon={faDroplet} className='text-cyan-500' />
                </div>
              </div>

              <div className="flex justify-between">
                <span>Cloudy</span>
                <div className='p-2 flex gap-2 items-center'>
                  <span>{(data?.clouds?.all) ? data.clouds.all : 0}%</span>
                  <FontAwesomeIcon icon={faCloud} className='text-sky-400' />
                </div>
              </div>

              <div className="flex justify-between">
                <span>Wind</span>
                <div className='p-2 flex gap-2 items-center'>
                  <span>{(data?.wind?.speed) ? data.wind.speed : 0}km/h</span>
                  <FontAwesomeIcon icon={faWind} className='text-blue-400' />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ---------------- */}

      </div>
      {/* ----------------------- */}

      {/* for larger screen social-media link hidden for smaller device*/}

      <div className='hidden lg:block w-[65%] h-full relative'>
        <div className="absolute bottom-3 flex w-full justify-center items-center gap-5 text-blue-600">
          <span className='text-base font-medium'>&copy; 2024 KUNDAN</span>
          <div className='flex gap-4 justify-center text-3xl '>
            <a className='hover:text-blue-900' href="https://github.com/07kundan" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            <a className='hover:text-blue-900' href="https://linkedin.com/in/kundan-kumar-ratu" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='' /></a>
            <a className='hover:text-blue-900' href="https://instagram.com/kun_dan.kr" target='_blank'><FontAwesomeIcon icon={faInstagram} className='' /></a>
          </div>
        </div>

      </div>
      {/* ------------------------- */}

      {/* whether details for smaller screen hidden for larger screen */}

      <div className='w-full h-[65%] absolute bottom-0 backdrop-blur-md lg:hidden '>
        <div className={`w-full h-full px-10 text-2xl ${props.textColor} flex flex-col gap-4 pt-4`}>

          <div className='text-center'>whether details</div>

          {data && data.weather && Array.isArray(data.weather) && (
            <div className="text-center">{data.weather[0].description.toUpperCase()}</div>
          ) 

          }


          <div className="flex justify-between">
            <span>Temp max</span>
            <div className='p-2 flex gap-2 items-center'>
              <span>{(data?.main?.temp_max) ? data.main.temp_max : 0}&deg;</span>
              <FontAwesomeIcon icon={faTemperatureHalf} className='text-amber-600' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Temp min</span>
            <div className='p-2 flex gap-2 items-center'>
              <span>{(data?.main?.temp_min) ? data.main.temp_min : 0}&deg;</span>
              <FontAwesomeIcon icon={faTemperatureHalf} className='text-blue-400' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Humidity</span>
            <div className='p-2 flex gap-2 items-center'>
              <span>{(data?.main?.humidity) ? data.main.humidity : 0}%</span>
              <FontAwesomeIcon icon={faDroplet} className='text-cyan-500' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Cloudy</span>
            <div className='p-2 flex gap-2 items-center'>
              <span>{(data?.clouds?.all) ? data.clouds.all : 0}%</span>
              <FontAwesomeIcon icon={faCloud} className='text-sky-400' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Wind</span>
            <div className='p-2 flex gap-2 items-center'>
              <span>{(data?.wind?.speed) ? data.wind.speed : 0}km/h</span>
              <FontAwesomeIcon icon={faWind} className='text-blue-400' />
            </div>
          </div>

          <div className='w-full h-full relative flex justify-center'>

            {/* social media link */}

            <div className=" w-full absolute bottom-4">
              <div className='flex gap-4 justify-center items-center text-3xl text-blue-600 '>
                <div className='text-base '>&copy; 2024 KUNDAN</div>
                <a href="https://github.com/07kundan" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://linkedin.com/in/kundan-kumar-ratu" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='' /></a>
                <a href="https://instagram.com/kun_dan.kr" target='_blank'><FontAwesomeIcon icon={faInstagram} className='' /></a>
              </div>

            </div>
          </div>

        </div>


      </div>


      {/* whether description heading */}
      <div className={`absolute bottom-[67%] left-7 ${props.textColor} text-center lg:bottom-1/3 lg:left-[10%]`}>

        <div className="flex gap-2 items-center">
          <span className='text-6xl'>{(data?.main?.temp) ? Math.round(data.main.temp) : 0}&deg;</span>
          <div className="">
            <div className="text-3xl pt-0 ">{(!data) ? "Not found" : data.name}</div>
            <div className='text-lg'>{date.toDateString()}</div>
          </div>
          {data && data.weather && Array.isArray(data.weather) && (
            <span><img className='h-24' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" /></span>
          )}

        </div>

      </div>
      {/* --------------- */}

    </div>
  );
}

export default Layout;
