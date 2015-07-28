'use strict';

var _ = require('underscore');
var React = require('react');
var {Well, Input, ButtonInput} = require('react-bootstrap');
var ReCATPCHA = require("react-google-recaptcha");
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');
require('helpers/mailhider');

var WorkWell = module.exports = React.createClass({
	getInitialState: function() {
    	return {name: false, email: false, message: false, captcha: false};
  	},
	validate: function (value) {
		this.setState({valid: value});
	},
	render: function () {
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
				<ReCATPCHA
					className='contact-recaptcha'
					refs="recaptcha"
					sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
					onChange={this.validate}  />
				<ButtonInput disabled={!this.state.valid} href={this.state.valid ? 'liam@songdickson.com' : '#'} bsStyle='primary' type='submit' value='Send an Email' />
			</Well>
		)
	}
});