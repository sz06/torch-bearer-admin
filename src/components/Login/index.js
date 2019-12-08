import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AuthService, UserService } from '../../lib';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(400 + theme.spacing(6))]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		marginTop: theme.spacing(3),
	},
}));

export default function Login() {
	const classes = useStyles();

	useEffect(() => {
		async function init() {
			if(AuthService.isLoggedIn())
				window.location.href = '/';
		}
		init();
	}, []);

	const [values, setValues] = useState({
		org_code: '',
		identifier: '',
		password: ''
	});

	const handleChange = name => event => {
		setValues({...values, [name]: event.target.value});
	};

	const onLogin = async (e) => {
		e.preventDefault();
		const response = await AuthService.login(
			values.org_code,
			values.identifier,
			values.password,
		);
		if (response.error) {
			alert(response.message);
		} else {
			UserService.retrieveUser();
			window.location.href = '/';
		}
	};

	return (
		<React.Fragment>
			<CssBaseline/>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={onLogin}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="org_code">Org Code</InputLabel>
							<Input id="org_code"
							       name="org_code"
							       autoFocus
							       onChange={handleChange('org_code')}/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="username">Username</InputLabel>
							<Input id="identifier" name="identifier"
							       onChange={handleChange('identifier')}/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								name="password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange('password')}
							/>
						</FormControl>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary"/>}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign in
						</Button>
					</form>
				</Paper>
			</main>
		</React.Fragment>
	);
}
