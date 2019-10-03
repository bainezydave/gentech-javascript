/*
CHALLENGE 3: Weather Terminal App

If you have a favourite weather API in mind already, feel free to use that. If not, use MetaWeather.
https://www.metaweather.com/api/
This app should be able to ask for the a location from the user, and show some weather data about that location. 

You need to show this data:
    - current temperature
    - minimum temperature
    - maximum temperature
    - weather state (eg. "cloudy")
    - sunrise time
    - sunset time
    - timezone

    (If you're using a different weather API and it doesn't show all of those data points, tough luck. We NEED this data!)

    Some of these APIs are kinda weird. MetaWeather in particular only gets weather data about locations by a location ID.
    So you have to figure out how to get a location ID, and THEN get the weather data. 
*/


const fetch = require("node-fetch");

let userInput = process.stdin.setEncoding('utf-8');
console.log("What city would you like to see weather info for?");
userInput.on('data', function (city)
{
    getWoeid(city);
});

function getWoeid(city)
{
    fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
        .then(res => res.json())
        .then(data =>
        {
            if (data[0].woeid === undefined) 
            {
                console.log("No WOEID Found");
                return;
            }
            getWeather(data[0].woeid)
        })
        .catch(err => console.log(err));
}

function getWeather(woeid)
{
    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
        .then(res => res.json())
        .then(data => printWeather(data))
        .catch(err => console.log(err));
}

function printWeather(weather)
{
    console.log("City: "          + weather.title);
    console.log("Current Temp: "  + weather.consolidated_weather[0].the_temp);
    console.log("Min Temp: "      + weather.consolidated_weather[0].min_temp);
    console.log("Max Temp: "      + weather.consolidated_weather[0].max_temp);
    console.log("Weather State: " + weather.consolidated_weather[0].weather_state_name);
    console.log("Sunrise: "       + weather.sun_rise);
    console.log("Sunset: "        + weather.sun_set);
    console.log("Timezone: "      + weather.timezone);
    process.exit()
}