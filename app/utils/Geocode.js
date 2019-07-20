import axios from 'axios';

import { GEOCODE_URL, API_KEY } from '../../environment';

export const reverseGeocode = async (latlng) => {
	const { latitude, longitude } = latlng;
	const response = await axios.get(`${GEOCODE_URL}?lat=${latitude}&lon=${longitude}&format=json`);
	console.log(response.data.display_name);
	return response.data;
};
