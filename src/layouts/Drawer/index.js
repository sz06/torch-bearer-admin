import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {Home, ContactMail, Settings, Work, Storage} from "@material-ui/icons";
import { AuthService } from "../../lib";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	avatar: {
		margin: 10,
	},
	drawer: {
		[theme.breakpoints.up('lg')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
		backgroundColor: theme.palette.primary
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('lg')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	}
});

const links = [
	{to: '/', label: 'Home', Icon: Home},
	{to: '/contact', label: 'Contact Us', Icon: ContactMail},
];

const secureLinks = [
	{to: '/dropoff', label: 'Package Dropoff', Icon: Work},
	{to: '/log', label: 'Log', Icon: Storage},
	{to: '/settings', label: 'Settings', Icon: Settings},
	// {to: '/logout', label: 'Logout', Icon: ExitToApp},
];

class Main extends React.Component {
	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState(state => ({mobileOpen: !state.mobileOpen}));
	};

	render() {
		const {classes, theme, children} = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar}/>
				<Divider/>
				<List>
					{links.map(link =>
						<ListItem
							key={link.to}
							component={Link}
							to={link.to}
						>
							<ListItemIcon>
								<link.Icon/>
							</ListItemIcon>
							<ListItemText primary={link.label}/>
						</ListItem>
					)}
				</List>
				<Divider/>
				<List>
				{(AuthService.isLoggedIn()) ?
					secureLinks.map(link =>
						<ListItem
							key={link.to}
							component={Link}
							to={link.to}
						>
							<ListItemIcon>
								<link.Icon/>
							</ListItemIcon>
							<ListItemText primary={link.label}/>
						</ListItem>
					) :
					""
				}
				</List>
				<Divider/>
			</div>
		);

		return (
			<div className={classes.root}>
				<CssBaseline/>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon/>
						</IconButton>
						{/*<Link to='/' style={{textDecoration: 'none'}}>*/}
						{/*	Icon*/}
						{/*</Link>*/}
						<div>
							<Typography variant="h6" color="inherit">
								eLocker
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden lgUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							onClick={this.handleDrawerToggle}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden mdDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar}/>
					<Grid item xs={12}>
						{children}
					</Grid>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, {withTheme: true})(Main);
