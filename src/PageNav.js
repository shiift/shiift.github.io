'use strict';

var React = require('react');
var {Navbar, Nav, NavItem, MenuItem, DropdownButton} = require('react-bootstrap');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<Navbar className='navbar-fixed-top' brand='LiamD.com' toggleNavKey={0}>
				<Nav right eventKey={0}>
					<NavItem eventKey={1} href='#'>Home</NavItem>
					<NavItem eventKey={2} href='#'>Websites</NavItem>
					<NavItem eventKey={3} href='#'>Resume</NavItem>
					<NavItem eventKey={4} href='#'>Contact</NavItem>
				</Nav>
			</Navbar>
		);
	}
});