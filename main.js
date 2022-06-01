let searchBox = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let highLow = document.querySelector(".high-low");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// event
searchBox.addEventListener("keydown", searchCity);

function searchCity(event) {
  // console.log(event);
  // console.log(searchBox.value);

  // lấy ra value của input (giá trị khi cho vào input)
  if (event.key === "Enter") {
    // tạo hàm và chứa 1 param truyền xuống cityName sau khi nhấn Enter
    getResponse(searchBox.value);
  }
}

function getResponse(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=18fe270d70ffb5f6267ec44b6e02fc43`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      //   console.log(myJson)
      //   CITY
      city.textContent = `${myJson.name}, ${myJson.sys.country}`;

      // DATE
      const current = new Date();
      date.textContent = `${current.toLocaleDateString("vi-VN", options)}`;

      // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      // const getMonth = month[current.getMonth()];
      // const toDay = current.getDate();
      // date.innerHTML = `${getMonth}, ${toDay}`;

      // Weather
      weather.textContent = `${myJson.weather[0].main}`;

      // TEMPERATURE
      temperature.textContent = `${Math.round(myJson.main.temp)}°C`;

      // HIGH-LOW
      highLow.textContent = `${Math.round(
        myJson.main.temp_max
      )}°C, ${Math.round(myJson.main.temp_max)}°C`;
    });
}
