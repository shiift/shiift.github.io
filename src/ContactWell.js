'use strict';

var _ = require('underscore');
var React = require('react');
var {Well, ButtonInput, Input} = require('react-bootstrap');
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
				<h2 id='contact'>Contact Me</h2>
				<p>Please feel free to contact me!</p>
				<form id='formAction' action='http://vps.liamd.com/mail.php'>
					<Input type='text' label='Email' name='from' />
					<Input type='textarea' label='Message' name='message' />
					<ReCATPCHA
						className='contact-recaptcha'
						refs="recaptcha"
						sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
						onChange={this.validate} />
					<ButtonInput id='submitButton' disabled={!this.state.valid} bsStyle='primary' type='submit' value='Send an Email' />
				</form>
			</Well>
		)
	}
});