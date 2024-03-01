import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';

function Layout(props) {
  return (
    // main div
    <div
      className='h-screen w-full bg-cover bg-center relative'
      style={{ backgroundImage: `${props.backgroundImage}` }}
    >

      {/* header for smaller screen and whether details for big screen  */}
      <div className='w-full h-20 absolute lg:w-[35%] lg:h-full lg:backdrop-blur-sm lg:right-0'>
        <input
          type="search"
          placeholder='Search'
          className='w-[80%] h-14 px-5 absolute bottom-0 left-12 bg-transparent rounded-xl text-3xl backdrop-blur-xl lg:hidden'
        />


        {/* whether details for larger screen */}
        <div className='hidden lg:block w-full h-full'>
          <div className={`w-full h-full px-10 py-14 text-lg ${props.textColor} flex flex-col gap-6`}>

            <input
              type="search"
              placeholder='Search'
              className='w-full h-10 px-5 bg-transparent rounded-xl text-xl backdrop-blur-xl lg:text-black'
            />

            <div className='text-center'>whether details</div>
            <div className="text-center">about whether</div>

            <div className="flex justify-between">
              <span>Temp max</span>
              <div className='w-24 space-x-3'>
                <span>12 c</span>
                <FontAwesomeIcon icon={faTemperatureHalf} className='text-amber-600' />
              </div>
            </div>

            <div className="flex justify-between">
              <span>Temp min</span>
              <div className='w-24 space-x-3'>
                <span>12 c</span>
                <FontAwesomeIcon icon={faTemperatureHalf} className='text-blue-400' />
              </div>
            </div>

            <div className="flex justify-between">
              <span>Humidity</span>
              <div className='w-24 space-x-3'>
                <span>12 c</span>
                <FontAwesomeIcon icon={faDroplet} className='text-cyan-500' />
              </div>
            </div>

            <div className="flex justify-between">
              <span>Cloudy</span>
              <div className='w-24 space-x-3'>
                <span>12 c</span>
                <FontAwesomeIcon icon={faCloud} className='text-sky-400' />
              </div>
            </div>

            <div className="flex justify-between">
              <span>Wind</span>
              <div className='w-28 space-x-3'>
                <span>5km/h</span>
                <FontAwesomeIcon icon={faWind} className='text-blue-400' />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* whether description heading */}
      <div className='absolute bottom-[70%] left-7  text-center bg-blue-600 lg:bottom-10 lg:left-[20%] '>

        <div className="flex gap-0 w-fit p-2">
          <span>degree</span>
          <div className="">
            <div className="">City</div>
            <div className=''>time zone</div>
          </div>
          <span>image</span>
        </div>

      </div>

      {/* whether details for smaller screen  */}
      <div className='w-full h-[65%] absolute bottom-0 backdrop-blur-md lg:hidden '>
        <div className="w-full h-full px-10 py-14 text-2xl text-white flex flex-col gap-8">
          <div className='text-center'>whether details</div>
          <div className="text-center">about whether</div>

          <div className="flex justify-between">
            <span>Temp max</span>
            <div className='w-24 space-x-3'>
              <span>12 c</span>
              <FontAwesomeIcon icon={faTemperatureHalf} className='text-amber-600' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Temp min</span>
            <div className='w-24 space-x-3'>
              <span>12 c</span>
              <FontAwesomeIcon icon={faTemperatureHalf} className='text-blue-400' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Humidity</span>
            <div className='w-24 space-x-3'>
              <span>12 c</span>
              <FontAwesomeIcon icon={faDroplet} className='text-cyan-500' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Cloudy</span>
            <div className='w-24 space-x-3'>
              <span>12 c</span>
              <FontAwesomeIcon icon={faCloud} className='text-sky-400' />
            </div>
          </div>

          <div className="flex justify-between">
            <span>Wind</span>
            <div className='w-28 space-x-3'>
              <span>5km/h</span>
              <FontAwesomeIcon icon={faWind} className='text-blue-400' />
            </div>
          </div>

        </div>


      </div>



    </div>
  );
}

export default Layout;
