'use strict';

var _ = require('underscore');
var React = require('react');
var {Well, ButtonInput} = require('react-bootstrap');
var ReCATPCHA = require("react-google-recaptcha");
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');

var WorkWell = module.exports = React.createClass({
	getInitialState: function() {
    	return {valid: false};
  	},
	validate: function (value) {
		this.setState({valid: value});
		if (value) {
			var email = 'mail';
			email += 'to'
			email += ':liam'
			email += '@songdickson.com'
  			document.getElementById('formAction').action = email;
		}
	},
	render: function () {
		return (
			<Well>
				<h2 id='contact'>Contact Me<br /><small>contact form coming soon</small></h2>
				<form id='formAction' action='#'>
					<ReCATPCHA
						className='contact-recaptcha'
						refs="recaptcha"
						sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
						onChange={this.validate}  />
					<ButtonInput id='submitButton' disabled={!this.state.valid} bsStyle='primary' type='submit' value='Send an Email' />
				</form>
			</Well>
		)
	}
});