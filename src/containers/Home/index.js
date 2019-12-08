import React from 'react';
import { Link } from 'react-router-dom'
import { Drawer } from '../../layouts';

export default function Auth () {
	return (
		<Drawer>
			<Link to="/login">Login</Link>
		</Drawer>
	);
};