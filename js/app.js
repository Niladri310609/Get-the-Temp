// const API_KEY = `3ea4ac271749c479a81c6f2535fc1eb4`;
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  // setInnerText("icon", temperature.weather[0].icon);
  // set weather icon
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
  // console.log(temperature);
  document.getElementById("city-name").value = null;
};
