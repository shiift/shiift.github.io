'use strict';

var _ = require('underscore');
var React = require('react');
var {Navbar, Nav, NavItem} = require('react-bootstrap');
var scroll = require('./helpers/scrollHelper').scroll;
var resumeScroll = require('./helpers/scrollHelper').resumeScroll;

module.exports = React.createClass({
	render: function () {
		return (
			<Navbar className='navbar-fixed-top' brand='LiamD.com' toggleNavKey={0}>
				<Nav right eventKey={0}>
					<NavItem eventKey={1} href='#home' onClick={scroll}>Home</NavItem>
					<NavItem eventKey={3} href='#resume' onClick={_.partial(resumeScroll, this.props.toggleResume)}>Resume</NavItem>
					<NavItem eventKey={2} href='#work' onClick={scroll}>Work Experience</NavItem>
				</Nav>
			</Navbar>
		);
	}
});