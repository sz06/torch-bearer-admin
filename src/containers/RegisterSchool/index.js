import React from 'react';
import { Drawer } from '../../layouts';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));
// name, address, branch, email address, contact no.
export default function LayoutTextFields() {
	const classes = useStyles();

	return (
		<Drawer className={classes.root}>
			<div>
				<TextField
					id="standard-full-width"
					label="Name of the school"
					style={{ margin: 8 }}
					placeholder=""
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id="standard-full-width"
					label="Street address"
					style={{ margin: 8 }}
					placeholder=""
					helperText="Start typing address"
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					label="Branch identifier"
					id="margin-normal1"
					className={classes.textField}
					margin="normal"
				/>
				<TextField
					label="Email address"
					id="margin-normal2"
					className={classes.textField}
					type="email"
					margin="normal"
				/>
				<TextField
					label="Contact no."
					id="margin-normal3"
					className={classes.textField}
					margin="normal"
				/>
			</div>
		</Drawer>
	);
}
