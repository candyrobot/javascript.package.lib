import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

function AppBar(props) {
	const { style, drawer } = props;
	return (
	<AppBar position="static" style={style}>
		<Toolbar style={{ padding: 0 }}>
			<IconButton color="inherit" aria-label="Menu">
				<MenuIcon onClick={drawer.setState({ open: true })} />
			</IconButton>
			<Typography
				style={{ width: '100%' }}
				variant="inherit" color="inherit"
			>
				{text}
			</Typography>
			<IconButton
				color="inherit"
			>
				<AddIcon />
			</IconButton>
		</Toolbar>
	</AppBar>
	);
}

export default function(props) {
	const { className } = props;
	return (
	<div className={ className || 'App' }>
		<AppBar />
		<Drawer />
	</div>
	);
}
