const API_URL = "https://freetestapi.com/api/v1/weathers";

export const fetchWeatherData = async (city: string) => {
	const response = await fetch(`${API_URL}?search=${city}`);
	if (!response.ok) {
		throw new Error("City not found");
	}
	return response.json();
};
