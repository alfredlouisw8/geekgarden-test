export interface Forecast {
	date: string;
	temperature: number;
	weather_description: string;
	humidity: number;
	wind_speed: number;
}

export interface Weather {
	city: string;
	country: string;
	temperature: number;
	weather_description: string;
	humidity: number;
	wind_speed: number;
	forecast: Forecast[];
}
