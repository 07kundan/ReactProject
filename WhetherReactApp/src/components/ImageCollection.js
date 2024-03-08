// import cityImage from '../assets/BigMonitorImage/city2.jpg';
// import Humidity from '../assets/BigMonitorImage/humidity.jpg';
// import Rain from '../assets/BigMonitorImage/rain.jpg';
// import Sunny from '../assets/BigMonitorImage/sunny.jpg';
// import Thunder from '../assets/BigMonitorImage/thunder.jpg';
// import rainVideo from '/src/assets/BigMonitorImage/Thunderstorm.mp4';

// import Mcity from '../assets/MobileImage/city.jpg';
// import Mhumidity from '../assets/MobileImage/humidity.jpg';
// import Mrain from '../assets/MobileImage/rain.jpg';
// import Msnowfall from '../assets/MobileImage/snowfall.jpg';
// import Msunny from '../assets/MobileImage/sunny.jpg';
// import Mthunder from '../assets/MobileImage/thunder.jpg';


import city from '../assets/BigMonitorImage/city.jpg'
import Clear from '../assets/BigMonitorImage/Clear.mp4'
import Clouds from '../assets/BigMonitorImage/Clouds.mp4'
import Mist from '../assets/BigMonitorImage/Mist.mp4'
import Rain from '../assets/BigMonitorImage/Rain.mp4'
import Thunderstorm from '../assets/BigMonitorImage/Thunderstorm.mp4'
import MClear from '../assets/MobileImage/Clear.mp4'
import MClouds from '../assets/MobileImage/Clouds.mp4'
import MMist from '../assets/MobileImage/Mist.mp4'
import MRain from '../assets/MobileImage/Rain.mp4'
import MThunderstorm from '../assets/MobileImage/Thunderstorm.mp4'


const ImageCollection={
  LargeScreen:{
      Clear: Clear,
      Clouds:Clouds,
      Rain:Rain,
      Thunderstorm:Thunderstorm,
      Mist:Mist,
      Haze:Mist,
      Smoke:Mist,
      Fog:Mist,
      Sand:Mist,
      Dust:Mist,
    },

    MobileScreen:{
      Clear:MClear,
      Clouds:MClouds,
      Rain:MRain,
      Thunderstorm:MThunderstorm,
      Mist:MMist,
      Haze:MMist,
      Smoke:MMist,
      Fog:MMist,
      Sand:MMist,
      Dust:MMist,
    }

  }


  export default ImageCollection;