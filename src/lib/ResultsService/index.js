import { AuthService } from "../index";

export default class ResultsService {
	static async getAllLockerClients() {
		if(AuthService.isLoggedIn()) {
			// const response = await axios({
			// 	data: {},
			// 	method: 'post',
			// 	url: `${process.env.REACT_APP_SERVER_URL}/lockerclients/all`,
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': `Bearer ${AuthService.getToken()}`
			// 	}
			// });
			const response = {
				data: {
					attempts: 45,
					inclination: {
						arts: 30,
						cs: 40,
						bio: 10,
						undecided: 20
					}
				}
			};
			return response.data;
		} else {
			return {};
		}
	};
}
