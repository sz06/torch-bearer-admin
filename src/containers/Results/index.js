import React from 'react';
import {Drawer} from '../../layouts';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

function createData(branch, cs, bio, arts, inconclusive, total) {
	return {branch, cs, bio, arts, inconclusive, total};
}

const rows = [
	createData('Branch #1', 40, 20, 30, 20, 110),
	createData('Branch #2', 30, 15, 10, 15, 70),
	createData('Branch #3', 35, 20, 30, 22, 107),
	createData('Branch #4', 25, 25, 12, 21, 83),
	createData('Branch #5', 40, 21, 17, 30, 108),
];

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

export default function CustomizedTables() {
	const classes = useStyles();

	return (
		<Drawer>
			<Paper className={classes.root}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Branch name</StyledTableCell>
							<StyledTableCell align="right">CS</StyledTableCell>
							<StyledTableCell align="right">BIO</StyledTableCell>
							<StyledTableCell align="right">Arts</StyledTableCell>
							<StyledTableCell align="right">Inconclusive</StyledTableCell>
							<StyledTableCell align="right">Total</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<StyledTableRow key={row.branch}>
								<StyledTableCell component="th" scope="row">
									{row.branch}
								</StyledTableCell>
								<StyledTableCell align="right">{row.cs}</StyledTableCell>
								<StyledTableCell align="right">{row.bio}</StyledTableCell>
								<StyledTableCell align="right">{row.arts}</StyledTableCell>
								<StyledTableCell align="right">{row.inconclusive}</StyledTableCell>
								<StyledTableCell align="right">{row.total}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</Drawer>
	);
}
