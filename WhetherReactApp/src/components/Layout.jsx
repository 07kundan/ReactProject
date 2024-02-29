import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

function Layout(props) {
  return (
    <div
      className='h-screen w-full bg-cover bg-center relative'
      style={{ backgroundImage: `${props.backgroundImage}` }}
    >
      <div className='w-full h-20 absolute lg:w-[35%] lg:h-full lg:backdrop-blur-sm lg:right-0'>
        <input
          type="search"
          placeholder='Search'
          className='w-[80%] h-14 px-5 absolute bottom-0 left-12 bg-transparent rounded-xl text-3xl backdrop-blur-xl lg:top-8 lg:text-black'
        />

        <div className='hidden lg:block lg:'>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>


      <div className='absolute bottom-[58%] left-7 w-[15%] text-center bg-blue-600 lg:bottom-10 lg:left-[25%] '>whether</div>

      <div className='w-full h-[57%] absolute bottom-0 backdrop-blur-md lg:hidden '>



      </div>



    </div>
  );
}

export default Layout;
