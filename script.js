// Liqian Zhang
// Creative Coding week 5 assignment - Data
// Mini Weather App 
// I decided to put major information on the right window for users' to read. Left top window for weather condition icon;
// and left bottom icon for my little advise for the weather. :))) I also created animations for rain & snow weather. 
// In order to make it look more like a weather app, I load some gifs on the background depending on the weather conditions. 

// references: Week 5 class demo & The Coding Train 10. Working with data
// https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&ab_channel=TheCodingTrain
// gif from: https://gifer.com/en/gifs/
// rain & snow animation reference: The Coding Train, Coding challenge #4
// https://www.youtube.com/watch?v=KkyIDI6rQJI&t=349s&ab_channel=TheCodingTrain


let weather;
let rainArray = [];
let snowArray = [];
let gif_loadCloudimg;
let gif_loadSunnyimg;
let gif_loadRainimg;
let gif_loadThunderimg;
let img_loadSnowimg;
let searchYourcity = false;

// ----- seperating urls so user can type their cities on "search" in order to get data
let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&appid=915f35e1aca8c1b45454d3a4c6e3e2c8';
let units = '&units=metric';
let input = 'New York';

function preload(){
  gif_loadCloudimg = loadImage("images/clouds.gif")
  gif_loadSunnyimg = loadImage("images/Sunny.gif")
  gif_loadRainimg = loadImage("images/Raining.gif")
  gif_loadThunderimg = loadImage("images/Thunder.gif")
  img_loadSnowimg = loadImage("images/snow.jfif")
}

function setup() {
  createCanvas(800, 500)
  background(255)

// ----- get user input infos
  let button = select('#search')
  let url = api + 'New York' + apiKey + units
  loadJSON(url, gotData)
  if(button.mousePressed){
    button.mousePressed(searchWeather)
    input = select('#city')
  }
  // button.mousePressed(searchWeather)
  // input = select('#city')

// ----- create rains/snow effect
  for(let i = 0; i < 500; i++){
    rainArray.push(new Rain(random(250, 780), random(height), color(196, 211, 223)))
}
  for(let g = 0; g < 500; g++){
    snowArray.push(new Snow(random(250, 780), random(height), color(255)))
  }
}


function draw() {
  noStroke()
  // background(255);
  // fill(50, 110, 20)
  // ----- drawing background software interface
  rect(10, 10, 230, 230, 30);
  rect(10, 260, 230, 230, 30);
  rect(250, 10, 540, 480, 30);



  if(weather){
  // if(data.weather[0].main == 'Clear'){
    weatherConditions();
  }
}




