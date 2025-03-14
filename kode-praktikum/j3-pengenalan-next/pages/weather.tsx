import { useState, useEffect } from "react";

const WeatherStatus = () => {
    const [weathers, setWeather] = useState<{ local_datetime: string, weather_desc: string, t: number }[]>([]);

    useEffect(() => {
        const fetchWeathers = async () => {
            const response = await fetch('/api/weather');
            const weather = await response.json();
            
            // karena data json adalah nested array maka perlu di flatten agar hanya mengambil data pada array cuaca saja.
            const nestedCuaca = weather.data[0].cuaca;
            const flattenedCuaca = nestedCuaca.flat();
            setWeather(flattenedCuaca);
        };

        fetchWeathers();
    }, []);

    return (
        <div className="m-4">
            <h1 className="text-2xl text-center mb-4">Data prakiraan cuaca 3 hari kedepan, didapat dari <a href="https://bmkg.go.id" className="text-blue-200 hover:text-blue-500">BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)</a></h1>
            <div className="grid grid-cols-5 gap-4">
                {weathers.map((weather) => (
                    <div key={weather.local_datetime} className="border rounded-md p-2 my-2 hover:scale-110 transform transition duration-300 ease-in-out">
                        <div className="flex flex-row">
                            <div className="">
                                {weather.weather_desc}
                                <br />
                                {weather.local_datetime}
                            </div>
                            <div className="ml-2 my-auto text-2xl">
                                {weather.t} °C
                            </div>
                        </div>                        
                    </div>
                ))}
            </div>            
        </div>
    );
};

export default WeatherStatus;