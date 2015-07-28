'use strict';

var React = require('react');
var {Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');

var WorkWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
			</Well>
		)
	}
});