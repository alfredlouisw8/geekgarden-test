import React from "react";
import "./WeatherCard.css";
import { Weather } from "../../../entities/weather";

export const WeatherCard: React.FC<Weather> = ({
	city,
	country,
	temperature,
	weather_description,
	humidity,
	wind_speed,
	forecast,
}) => {
	return (
		<div className="weather-card">
			<div className="weather-card-header">
				<h2>
					{city}, {country}
				</h2>
				<h3>
					{temperature}°C - {weather_description}
				</h3>
			</div>
			<div className="weather-details">
				<p>Humidity: {humidity}%</p>
				<p>Wind Speed: {wind_speed} m/s</p>
			</div>

			<div className="forecast">
				<h4>3-Day Forecast</h4>
				<div className="forecast-list">
					{forecast.map((day, index) => (
						<div key={index} className="forecast-item">
							<p>{day.date}</p>
							<p>
								{day.temperature}°C - {day.weather_description}
							</p>
							<p>Humidity: {day.humidity}%</p>
							<p>Wind Speed: {day.wind_speed} m/s</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
