function clothingRecommendation() {
  city = document.getElementById("cityTxt").value;
  weatherRequest = new XMLHttpRequest();

  weatherRequest.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=d2c152271c6ba88b6971b5317092885e&units=metric"
  );
  weatherRequest.send();
  weatherRequest.onload = () => {
    console.log(weatherRequest);
    if (weatherRequest.status === 200) {
        let wData = JSON.parse(weatherRequest.response)
        console.log(wData)
        let temp = wData.main.feels_like
        let result=document.getElementById("resultsDiv");

        result.innerHTML="Temperature: "+temp

        var br = document.createElement("br");
        result.appendChild(br);

        if(temp>=35){
            result.innerHTML+="Wear more Lighter Clothes"
        } else if(temp<=20){
            result.innerHTML+="Wear more Heavier Clothes"
        }else{
            result.innerHTML+="You can wear casual normal clothes"
        }
    } else {
      console.log(`error ${weatherRequest.status} ${weatherRequest.statusText}`);
    }

  };
}
