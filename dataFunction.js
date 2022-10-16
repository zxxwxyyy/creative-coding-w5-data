function weatherConditions(){
  // ----- fill different colors for different temperature
    if(weather.main.temp > 15){
      fill(245, 167, 87, 90)
    }if(weather.main.temp > 30){
      fill(255, 90, 0)
    }if(weather.main.temp < 15){
      fill(118,132,220)
    }if(weather.main.temp < 0){
      fill(65,93,177)
    }
  // ----- get data for weather conditions and use specific icons to indicate them
    if(weather.weather[0].main=='Rain'){
      // ----- load gif for rain background
      image(gif_loadRainimg, 0, 0, 800, 500)
      tint(255, 25)
      // ----- bring up raining animation
      for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].raining()
      }
      rainingIcon();
      umbrella();
      printCityinfo();

    } 
    if(weather.weather[0].main=='Thunderstorm'){
      // ----- load background thunder gif
      image(gif_loadThunderimg, 0, 0, 800, 500)
      tint(255, 35)
      // ----- bring up raining animation
      for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].raining()
      }
      thunderStorm();
      umbrella();
      printCityinfo();
      
    } 

    if(weather.weather[0].main=='Clear'){
      // fill(255, 187, 87, 100)
      // ----- load background clear day gif
      image(gif_loadSunnyimg, 0, 0, 800, 500)
      tint(255, 30)
      sunIcon();
      // ----- if temperature >20, my advise is ice cream! Else it would be put on sun glasses
      if(weather.main.temp > 20){
      iceCream();}
      else{
        sunGlasses();
      }
      printCityinfo();
    }
    if(weather.weather[0].main=='Clouds'){
      // fill(255, 187, 87, 100)
      // ----- load background cloud img
      image(gif_loadCloudimg, 0, 0, 800, 500)
      tint(255, 35)
      cloudyIcon();
      coffee();
      // console.log(weather)
      printCityinfo();
    }
    
    if(weather.weather[0].main=='Smoke'){
      // fill(255, 187, 87, 100)
      // ----- load background cloud img
      image(gif_loadCloudimg, 0, 0, 800, 500)
      tint(255, 35)
      cloudyIcon();
      coffee();
      // console.log(weather)
      printCityinfo();
    }

    if(weather.weather[0].main=='Haze'){
      image(gif_loadCloudimg, 0, 0, 800, 500)
      tint(255, 35)
      hazeIcon();
      coffee();
      printCityinfo();
    }

    if(weather.weather[0].main=='Mist'){
      image(gif_loadCloudimg, 0, 0, 800, 500)
      tint(255, 35)
      hazeIcon();
      coffee();
      printCityinfo();
    }

    if(weather.weather[0].main=='Drizzle'){
      image(gif_loadCloudimg, 0, 0, 800, 500)
      tint(255, 35)
      hazeIcon();
      coffee();
      printCityinfo();
    }

    if(weather.weather[0].main=='Snow'){
      image(img_loadSnowimg, 0, 0, 800, 500)
      tint(255, 35)
      for (let g = 0; g < snowArray.length; g++) {
        snowArray[g].snowing()
      }
      snowMan();
      snowIcon();
      printCityinfo();
    }
    
   }

function printCityinfo(){
// ----- print out city name, temperature information, humidity.
  push()
  fill(255)
  textSize(80)
  text(weather.name, 280, 120)
// ----- print out current temperature
  textSize(60)
  text(weather.main.temp + "°C", 280, 220)
  textSize(25)
  text(weather.main.temp_max + "°C" + "  →  " + 
   weather.main.temp_min + "°C", 285, 290)
  // console.log(weather.weather[0].description)
  text(weather.weather[0].description, 285, 350)
  text("Humidity: " + weather.main.humidity, 285, 410)
  pop()
}

// ----- getting url together by get user input value
function searchWeather(){
  let url = api + input.value() + apiKey + units
  loadJSON(url, gotData);
}

function gotData(data){
  // println(data)
  weather = data;
  // console.log(data.weather[0].main)
}

