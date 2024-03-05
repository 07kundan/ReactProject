import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faWind, faCloud, faMagnifyingGlass, faShower } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fetchWeatherData } from './fetchApi';
import ImageCollection from './ImageCollection';

function Layout(props) {

  const data = props.data;
  const [date, setdate] = useState(new Date())


  useEffect(() => {
    setdate(new Date());
  }, [props.location]);

  const handlChange = (event) => {
    props.setLocation(event.target.value);
  };

  const handleSearch = async () => {
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
  };

  const Buttonclicked = (event) => {
    if (event.key === "Enter") {
      // console.log("clicked")
      handleSearch();
    }
  }


  return (
    // main div
    <div
      className='h-screen w-full bg-cover bg-center relative'
    // style={{ backgroundImage: `${props.backgroundImage}` }}
    // style={{ backgroundImage: ImageCollection.LargeScreen.city }}
    >
      <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-0'>
        <source src={props.videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/*  logo  */}

      <span className='absolute top-10 left-20 text-8xl p-4'>
            <span className="absolute bottom-3 inset-x-2 w-full h-1 bg-black rounded-full "></span>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faShower} />
          <div className='text-6xl relative'>
            <div>shower</div>
            <p className='text-sm'>get real time weather details</p>
          </div>
        </div>
      </span>

      {/* header for smaller screen and whether details for big screen  */}
      <div className='w-full h-20 absolute lg:w-[35%] lg:h-full lg:backdrop-blur-md lg:right-0'>

        {/* search line for smaller screen larger screen-:hidden */}
        <div className='w-[80%] h-14 m-auto rounded-2xl px-4 text-xl flex justify-between items-center backdrop-blur-xl mt-4 relative lg:hidden'>
          <span className='block absolute bottom-1.5 left-5 w-[88%] h-0.5 rounded-full bg-white bg-opacity-25'></span>

          <input
            id='text-location'
            className={`w-full px-3 bg-transparent p-2 focus:outline-none placeholder:text-white `}
            type="search"
            placeholder='Search'
            value={props.location}
            onChange={handlChange}
            onKeyDown={Buttonclicked}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass}
            className={`${props.textColor} text-2xl active:text-xl `}
            onClick={() => { handleSearch() }}
          />
        </div>


        {/* whether details for larger screen hidden for smaller screen*/}
        <div className='hidden lg:block w-full h-full'>
          <div className={`w-full h-full px-10 py-12 text-lg ${props.textColor} flex flex-col gap-6`}>

            <div className='w-[95%] h-12 rounded-3xl px-4 text-xl flex mx-auto items-center relative bg-white bg-opacity-25 '>

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
              />
              <button
                id="button"
                className={`${props.textColor} px-4 text-2xl active:text-xl `}
                onClick={handleSearch}
              >

                <FontAwesomeIcon icon={faMagnifyingGlass}
                />
              </button>

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

      {/* social-media link hidden for smaller device*/}

      <div className='hidden lg:block w-[65%] h-full relative'>
        <div className="absolute bottom-3 flex w-full justify-center items-center gap-4 text-blue-500">
          <span className='text-lg text-black'>&copy; 2024 KUNDAN</span>
          <div className='flex gap-4 justify-center text-4xl '>
            <a className='hover:text-blue-800' href="https://github.com/07kundan"><FontAwesomeIcon icon={faGithub} /></a>
            <a className='hover:text-blue-800' href="https://linkedin.com/in/kundan-kumar-ratu"><FontAwesomeIcon icon={faLinkedin} className='' /></a>
            <a className='hover:text-blue-800' href="https://instagram.com/kun_dan.kr"><FontAwesomeIcon icon={faInstagram} className='' /></a>
          </div>
        </div>

      </div>


      {/* whether description heading */}
      <div className='absolute bottom-[67%] left-7 text-center lg:bottom-1/3 lg:left-[10%] '>

        <div className="flex gap-2 items-center">
          <span className='text-6xl'>{(data?.main?.temp) ? Math.round(data.main.temp) : 0}&deg;</span>
          <div className="">
            <div className="text-3xl pt-0 ">{(!data) ? "Not found" : data.name}</div>
            <div className='text-lg'>{date.toDateString()}</div>
          </div>
          <span>
            image
          </span>
        </div>

      </div>

      {/* whether details for smaller screen hidden for larger screen */}

      <div className='w-full h-[65%] absolute bottom-0 backdrop-blur-md lg:hidden '>
        <div className={`w-full h-full px-10 pt-8 text-2xl ${props.textColor} flex flex-col gap-4`}>
          <div className='text-center'>whether details</div>

          {data && data.weather && Array.isArray(data.weather) ? (
            <div className="text-center">{data.weather[0].description}</div>
          ) : <div className="text-center">loading...</div>

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

            <div className=" w-full text-center absolute bottom-5">
              <div className='flex gap-4 justify-center text-4xl text-blue-600 '>
                <a className='hover:text-blue-800-900' href="https://github.com/07kundan"><FontAwesomeIcon icon={faGithub} /></a>
                <a className='hover:text-blue-800' href="https://linkedin.com/in/kundan-kumar-ratu"><FontAwesomeIcon icon={faLinkedin} className='' /></a>
                <a className='hover:text-blue-800' href="https://instagram.com/kun_dan.kr"><FontAwesomeIcon icon={faInstagram} className='' /></a>
              </div>
              <div className='mt-4 text-lg text-black'>&copy; 2024 KUNDAN</div>

            </div>
          </div>

        </div>


      </div>



    </div>
  );
}

export default Layout;
