import React from "react";
import { WeatherSlice } from "../features/weather/ui/WeatherSlice";
import "./HomePage.css";

export const HomePage: React.FC = () => {
	return (
		<div className="homepage-container">
			<h1 className="homepage-header">Weather App</h1>
			<WeatherSlice />
		</div>
	);
};
