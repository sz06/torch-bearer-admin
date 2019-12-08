import { AuthService } from "../index";
import axios from "axios";

export default class UserService {
	static retrieveUser() {
		if(AuthService.isLoggedIn()) {
			axios({
				method: 'get',
				url: `${process.env.REACT_APP_SERVER_URL}/users/me`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${AuthService.getToken()}`
				}
			})
				.then(function (response) {
					//handle success
					window.me = response.data;
					console.log(window.me);
				})
				.catch(function (response) {
					//handle error
					console.log(response);
				});
		}
	};
}
