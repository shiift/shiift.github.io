'use strict';

var _ = require('underscore');
var $ = require('jquery');
var React = require('react');
var {Navbar, Nav, NavItem, MenuItem, DropdownButton} = require('react-bootstrap');
var scroll = require('./helpers/scrollHelper').scroll;
var resumeScroll = require('./helpers/scrollHelper').resumeScroll;

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<Navbar className='navbar-fixed-top' brand='LiamD.com' toggleNavKey={0}>
				<Nav right eventKey={0}>
					<NavItem eventKey={1} href='#home' onClick={scroll}>Home</NavItem>
					<NavItem eventKey={3} href='#resume' onClick={_.partial(resumeScroll, this.props.toggleResume)}>Resume</NavItem>
					<NavItem eventKey={2} href='#work' onClick={scroll}>Work Experience</NavItem>
					<NavItem eventKey={4} href='#contact' onClick={scroll}>Contact</NavItem>
				</Nav>
			</Navbar>
		);
	}
});