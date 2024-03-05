import cityImage from '../assets/BigMonitorImage/city2.jpg';
import Humidity from '../assets/BigMonitorImage/humidity.jpg';
import Rain from '../assets/BigMonitorImage/rain.jpg';
import Sunny from '../assets/BigMonitorImage/sunny.jpg';
import Thunder from '../assets/BigMonitorImage/thunder.jpg';
import rainVideo from '/src/assets/BigMonitorImage/rain.mp4';

import Mcity from '../assets/MobileImage/city.jpg';
import Mhumidity from '../assets/MobileImage/humidity.jpg';
import Mrain from '../assets/MobileImage/rain.jpg';
import Msnowfall from '../assets/MobileImage/snowfall.jpg';
import Msunny from '../assets/MobileImage/sunny.jpg';
import Mthunder from '../assets/MobileImage/thunder.jpg';


const ImageCollection={
  MobileScreen:{
    city: `url(${Mcity})`,
    humidity:`url(${Mhumidity})`,
    rain:`url(${Mrain})`,
    snowfall:`url(${Msnowfall})`,
    sunny:`url(${Msunny})`,
    thunder:`url(${Mthunder})`,
  }, 
  LargeScreen:{
      city: `url(${cityImage})`,
      humidity:`url(${Humidity})`,
      rain:`url(${Rain})`,
      sunny:`url(${Sunny})`,
      thunder:`url(${Thunder})`,
      rainVideo: rainVideo,
    },

  }


  export default ImageCollection;