import { useState, useEffect } from "react";

export function useWeather(city) {
    const [data, setData] = useState(null); // weather data
    const [loading, setLoading] = useState(false); // loading indicator
    const [error, setError] = useState(null); // error message

    /* create a function that will build the API URL
    call fetch()
    return a JSON data */
    async function fetchWeather() {
        setLoading(true); // start loading
        setError(null); // clear previous errors

        try {
            const apiKey = "0505494ac126d8cee42dc17848bc0684";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("City not found");
            }

            const json = await response.json();
            setData(json);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    }

    // calling the useEffect function to change state autmatically
    // (whenever the city changes)
    useEffect(() => {
        if(!city) return; // do nothing if input is empty
        fetchWeather();
    }, [city]); // this arrays tells react to run this effect
    // whenever city changes

    /* return will 
    show loading spinner
    show loading data
    show error message */
    return { data, loading, error };
}