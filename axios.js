const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9b20c9f36amsh5065705565a9f84p10f866jsncd74d3107025",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeatherForBlocks = (ele, city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   ele.innerHTML = response.feels_like;
      ele.innerHTML = `${response.feels_like}°`;
      
      if (response.feels_like == undefined) {
        ele.innerHTML = 25;
      }
    })
    .catch((err) => console.error(err));
};

let caliRain = 2479;
let londonRain = 2930;
let delhiRain = 1300;
let tokyoRain = 1900;

const cali = document.querySelector("#california");
const tokyo = document.querySelector("#tokyo");
const london = document.querySelector("#london");


getWeatherForBlocks(cali, "California");
getWeatherForBlocks(tokyo, "Tokyo");
getWeatherForBlocks(london, "Seattle");

// CHART DIV
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["California", "London", "Delhi", "Tokyo"],
    datasets: [
      {
        label: "Rainfall (cm)",
        scaleFontColor: "#FFFFFF",
        pointLabelFontColor: "#FFFFFF",
        pointStrokeColor: "#000",
        scaleFontColor: "#000",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#ffd534", "pink"],
        data: [caliRain, londonRain, delhiRain, tokyoRain],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Chance of rain in these regions of the world",
    },
  },
});
