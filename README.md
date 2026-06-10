# Weather App

A simple React application that fetches real‑time weather data from the OpenWeather API.  
The user types a city name, and the app displays the current temperature, weather icon, humidity, 
and additional details.  
The interface updates automatically as the user types.

## Features

- Search for any city
- Automatic weather fetching on input change
- Custom React hook for API logic
- Loading spinner
- Error handling
- Weather icons from OpenWeather
- Dynamic background based on weather conditions
- Basic UI styling with CSS


## How It Works

- The SearchBar component sends the typed city name upward to App.jsx.
- App.jsx stores the city in state and passes it to the custom hook.
- The useWeather hook fetches weather data whenever the city changes.
- WeatherDisplay renders the weather information or a loading spinner.
- ErrorMessage displays API errors.
- The background changes based on the weather condition returned by the API.

## Requirements

- Node.js and npm
- OpenWeather API key

## Setup

1. Install dependencies  
   npm install

2. Add your OpenWeather API key inside useWeather.js  
   const apiKey = "MY_KEY"

3. Run the development server  
   npm run dev

## Bugs

- Weather animations are not fully synchronized with all weather types
- Rain animation may appear too subtle on some screen sizes
- Background transitions may override each other when switching cities quickly
- Some weather conditions from the API do not map cleanly to CSS classes
- Input triggers fetch on every keystroke (no debounce)
- No fallback animation for unknown weather codes

## Future Improvements

- Add debounce to reduce API calls
- Add 5‑day forecast
- Add animated icons
- Improve weather‑based background animations
- Add unit toggle (Celsius/Fahrenheit)
- Add Enter‑to‑search mode

## Author

Yoichi Dev
