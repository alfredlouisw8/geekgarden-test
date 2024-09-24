import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";
import { Weather } from "../../../entities/weather";
import "./WeatherSlice.css";
import { WeatherCard } from "./WeatherCard";
import { Input } from "../../../shared/ui/Input";
import { Button } from "../../../shared/ui/Button";

export const WeatherSlice: React.FC = () => {
	const [city, setCity] = useState("");
	const [weathers, setWeathers] = useState<Weather[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
		null
	);

	const handleSearch = async (searchCity: string) => {
		setLoading(true);
		setError("");
		try {
			const data = await fetchWeatherData(searchCity);
			setWeathers(data);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleSearch("");
	}, []);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCity = e.target.value;
		setCity(newCity);

		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		const timeout = setTimeout(() => {
			handleSearch(newCity);
		}, 1000);

		setDebounceTimeout(timeout);
	};

	return (
		<div className="weather-container">
			<div className="search-bar">
				<Input
					value={city}
					onChange={handleInputChange}
					placeholder="Enter city name"
					className="search-input"
				/>
				<Button onClick={() => handleSearch(city)} className="search-button">
					Search
				</Button>
			</div>

			{loading && <div className="spinner"></div>}

			{error && <p className="error-message">{error}</p>}

			{!loading && !error && (
				<div className="weather-list">
					{weathers.map((weather, index) => (
						<WeatherCard
							key={index}
							city={weather.city}
							country={weather.country}
							temperature={weather.temperature}
							weather_description={weather.weather_description}
							humidity={weather.humidity}
							wind_speed={weather.wind_speed}
							forecast={weather.forecast}
						/>
					))}
				</div>
			)}
		</div>
	);
};
