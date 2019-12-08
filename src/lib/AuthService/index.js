import decode from 'jwt-decode';
import md5 from 'md5';
import axios from "axios";

const domain = process.env.REACT_APP_SERVER_URL;

export default class AuthService {
	static login = async (org_code, identifier, password) => {
		try {
			const data = {
				identifier: org_code + "." + identifier,
				password: md5(password)
			};
			// const response = await axios({
			// 	data: data,
			// 	method: 'post',
			// 	url: `${domain}/auth/local`,
			// });
			const response = { data: {
				jwt: 'asdfasdfasfasdf'
			}};
			AuthService.setToken(response.data.jwt);
			AuthService.setUser(response.data.user);
			return response.data;
		} catch (error) {
			return error.response.data;
		}
	};

	static isLoggedIn() {
		const token = AuthService.getToken();
		return !!token && !AuthService.isTokenExpired(token);
	}

	static isTokenExpired(token) {
		try {
			const decoded = decode(token);
			return (decoded.exp < Date.now() / 1000);
		}
		catch (err) {
			return false;
		}
	}

	static setToken(idToken) {
		localStorage.setItem('id_token', idToken);
	}

	static setUser(user) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	static getUser() {
		return JSON.parse(localStorage.getItem('user'));
	}

	static getToken() {
		return localStorage.getItem('id_token');
	}

	static logout() {
		localStorage.removeItem('id_token');
	}
}
