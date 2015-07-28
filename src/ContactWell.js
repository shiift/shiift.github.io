'use strict';

var _ = require('underscore');
var React = require('react');
var {Well, Input, ButtonInput} = require('react-bootstrap');
var ReCATPCHA = require("react-google-recaptcha");
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');

var WorkWell = module.exports = React.createClass({
	getInitialState: function() {
    	return {name: false, email: false, message: false, captcha: false};
  	},
	validate: function (name, value) {
		value = value.target.value;
		this.setState(()=>{
			var obj = {}
			obj[name] = value;
			return obj;
		});
	},
	validateEmail: function (value) {
		value = value.target.value;
		if(/@.*\./.test(value)){
			this.setState({email: value});
		} else {
			this.setState({email: false});
		}
	},
	render: function () {
		console.log('send val:', EMAIL_SENT);
		console.log('error val:', EMAIL_ERROR);
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
				<form method="post" action="#contact">
					<Input bsStyle={this.state.name ? 'success' : 'error'} onChange={_.partial(this.validate,'name')}
						type='text' label='Name' />
					<Input bsStyle={this.state.email ? 'success' : 'error'} onChange={this.validateEmail}
						type='email' label='Email' />
					<Input bsStyle={this.state.message ? 'success' : 'error'} onChange={_.partial(this.validate,'message')}
						type='textarea' label='Message' className='contact-message' />
					<ReCATPCHA
						className='contact-recaptcha'
						refs="recaptcha"
						sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
						onChange={_.partial(this.validate,'captcha')}  />
					<ButtonInput disabled={
						!(this.state.name && this.state.email && this.state.message && this.state.recaptcha)
					} bsStyle='primary' type='submit' value='Send' />
				</form>
			</Well>
		)
	}
});