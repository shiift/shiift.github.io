'use strict';

var React = require('react');
var {Panel, Row, Col, Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');

var TopWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
				<h2 id='websites'>Websites</h2>
	            <p>Below I have listed some of the most recent sites I have worked on.</p>
	            <Panel bsStyle='primary' header={<a href='http://www.1stdibs.com'>1stdibs.com</a>}>
	            	I spent the summer of my Junior year at UConn working for an online marketplace called 1stdibs.com.
	            </Panel>
			</Well>
		)
	}
});