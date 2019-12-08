import { AuthService } from "../index";
import axios from "axios";

export default class LockerService {
	static async getAllLockerClients() {
		if(AuthService.isLoggedIn()) {
			const response = await axios({
				data: {},
				method: 'post',
				url: `${process.env.REACT_APP_SERVER_URL}/lockerclients/all`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${AuthService.getToken()}`
				}
			});
			return response.data;
		} else {
			return [];
		}
	};
	static async unlockLockerCabinet(logId, lockerCabinetId_) {
		if(AuthService.isLoggedIn()) {
			const response = await axios({
				data: { logId: logId, cabinetId_: lockerCabinetId_ },
				method: 'post',
				url: `${process.env.REACT_APP_SERVER_URL}/lockers/unlockViaApp`,
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

	static async requestLocker(phoneNumber, locker, lockerSize) {
		if(AuthService.isLoggedIn()) {
			const response = await axios({
				data: { phoneNumber, locker, lockerSize },
				method: 'post',
				url: `${process.env.REACT_APP_SERVER_URL}/lockers/request`,
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

	static async getVacantCabinetsCount(id_) {
		if(AuthService.isLoggedIn()) {
			const response = await axios({
				method: 'get',
				url: `${process.env.REACT_APP_SERVER_URL}/lockercabinets/getVacantCount/${id_}`,
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
