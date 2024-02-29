import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser,faHouse } from '@fortawesome/free-solid-svg-icons';

function Layout(props) {
  return (
    <div
      className='h-screen w-full bg-cover bg-center'
      style={{ backgroundImage: `${props.Image}` }}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faHouse} />
    </div>
  );
}

export default Layout;
