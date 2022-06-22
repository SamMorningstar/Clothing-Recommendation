let city;
let cityRequest = new XMLHttpRequest();
let weatherRequest = new XMLHttpRequest();

function getCity(params) {
  city = document.getElementById("cityTxt").value;
  cityRequest.open(
    "GET",
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=d2c152271c6ba88b6971b5317092885e"
  );
  cityRequest.send();
  cityRequest.onload = () => {
    console.log(cityRequest);
    if (cityRequest.status === 200) {
      console.log(JSON.parse(cityRequest.response));
    } else {
      console.log(`error ${cityRequest.status} ${cityRequest.statusText}`);
    }
  };
}
