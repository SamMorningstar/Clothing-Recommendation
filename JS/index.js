function clothingRecommendation() {
  city = document.getElementById("cityTxt").value;
  weatherRequest = new XMLHttpRequest();
  weatherRequest.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=d2c152271c6ba88b6971b5317092885e"
  );
  weatherRequest.send();
  weatherRequest.onload = () => {
    console.log(weatherRequest);
    if (weatherRequest.status === 200) {
      console.log(JSON.parse(weatherRequest.response));
    } else {
      console.log(`error ${weatherRequest.status} ${weatherRequest.statusText}`);
    }
  };
}
