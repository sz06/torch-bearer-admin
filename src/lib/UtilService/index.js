import { AuthService } from "../index";
import axios from "axios";

export default class UtilService {
	static async getLogs() {
		if(AuthService.isLoggedIn()) {
			const response = await axios({
				method: 'post',
				url: `${process.env.REACT_APP_SERVER_URL}/logs/mine`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${AuthService.getToken()}`
				}
			});
			return response.data;
		} else {
			return {};
		}
	};
}
