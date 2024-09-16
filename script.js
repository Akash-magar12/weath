// let api = fetch(
//   "https://api.weatherapi.com/v1/current.json?key=069dcc09dfd946b9b8e113849240708&q=London&aqi=yes"
// );
// api.then(res =>
//   res.json().then(data => console.log(data))
// );

async function getWeather() {
  try {
    tl.reverse();

    let city = document.querySelector("input");
    // console.log(city);
    let api = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=069dcc09dfd946b9b8e113849240708&q=${city.value}&aqi=yes`
    );
    let res = await api.json();

    if (city.value === "") {
      let error = (document.querySelector(
        ".content"
      ).innerHTML = `<h1 class='red'>Field cannot be empty</h1>`);
      // alert("Cannot be empty");
    }
    // console.log(res);
    else {
      document.querySelector(
        ".content"
      ).innerHTML = ` <h1 class="degree">27.9°</h1>
                <div class="info">
                    <h2 class="city">Dehradun</h2>
                    <p class="time">2024-08-08 13:18</p>
                </div>
                <div class="weather">
                    <h2 class="condition"> Partly Cloudy </h2>
                    <img class="img" src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="">
                </div>`;
      document.querySelector(".degree").innerHTML = `${res.current.temp_c}°`;
      document.querySelector(".city").innerHTML = `${res.location.name}`;
      document.querySelector(".time").innerHTML = `${res.location.localtime}`;
      document.querySelector(".img").src = `${res.current.condition.icon}`;
      document.querySelector(
        ".condition"
      ).innerHTML = `<h2 class="condition"> ${res.current.condition.text} </h2>`;
      document.querySelector(
        ".cloudy"
      ).innerHTML = `<h3 class="title">Cloudy</h3>
      <p class="value">${res.current.cloud}%</p>`;
      document.querySelector(
        ".humidity"
      ).innerHTML = `<h3 class="title">Humidity</h3>
                        <p class="value">${res.current.humidity}%</p>`;
      document.querySelector(".wind").innerHTML = `<h3 class="title">Wind</h3>
                        <p class="value">${res.current.wind_kph}/h</p>`;
      document.querySelector(
        ".Country"
      ).innerHTML = `<h3 class="title">Country</h3>
                        <p class="value">${res.location.country}</p>`;
      city.value = "";
    }
  } catch {
    console.log("no Cities Found");
  }
}

async function defaults(city) {
  tl.reverse();

  let api = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=069dcc09dfd946b9b8e113849240708&q=${city}&aqi=yes`
  );
  let res = await api.json();
  document.querySelector(".content").innerHTML = ` <h1 class="degree">27.9°</h1>
            <div class="info">
                <h2 class="city">Dehradun</h2>
                <p class="time">2024-08-08 13:18</p>
            </div>
            <div class="weather">
                <h2 class="condition"> Partly Cloudy </h2>
                <img class="img" src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="">
            </div>`;
  document.querySelector(".degree").innerHTML = `${res.current.temp_c}°`;
  document.querySelector(".city").innerHTML = res.location.name;
  document.querySelector(".time").innerHTML = res.location.localtime;
  document.querySelector(".img").src = `${res.current.condition.icon}`;
  document.querySelector(
    ".condition"
  ).innerHTML = `  <h2 class="condition"> ${res.current.condition.text} </h2>  `;
  document.querySelector(".cloudy").innerHTML = `<h3 class="title">Cloudy</h3>
  <p class="value">${res.current.cloud}%</p> `;
  document.querySelector(
    ".humidity"
  ).innerHTML = ` <h3 class="title">Humidity</h3>
                    <p class="value">${res.current.humidity}%</p>`;
  document.querySelector(".wind").innerHTML = `<h3 class="title">Wind</h3>
                    <p class="value">${res.current.wind_kph}/h</p>`;
  document.querySelector(".Country").innerHTML = `<h3 class="title">Country</h3>
                    <p class="value">${res.location.country}</p>`;
}

function ani() {
  let sideBar = document.querySelector(".sidebar");
  let open = document.querySelector(".ham");
  let close = document.querySelector(".clo");
  open.addEventListener("click", function () {
    tl.play();
  });
  close.addEventListener("click", function () {
    tl.reverse();
  });
}
var tl = gsap.timeline();
tl.to(".sidebar", {
  right: 0,
  duration: 0.5,
});

// tl.from(".sidebar h3 ,.sidebar p ", {
//   x: 150,
//   duration: 0.1,
//   opacity: 0,
//   // stagger: 0.1,
// });
tl.from(".sidebar i", {
  opacity: 0,
  duration: 0.1,
});

tl.pause();
ani();
