

const apiKey = 'b2c9980e25e35208ef72b2ee5b337154';

export async function fetchWeatherData(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function fetchWeatherDataByCords(latitude, longitude) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}