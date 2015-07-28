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
	validate: function (value) {
		if (value) {
			this.setState({value: true});
		}
	},
	render: function () {
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
				<form>
					<Input onBlur={_.partial(this.validate,'name')} type='text' label='Name' />
					<Input onBlur={_.partial(this.validate,'email')} type='email' label='Email' />
					<Input onBlur={_.partial(this.validate,'message')} className='contact-message' type='textarea' label='Message' />
					<ReCATPCHA
						className='contact-recaptcha'
						refs="recaptcha"
						sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
						onChange={_.partial(this.validate,'captcha')}  />
					<ButtonInput disabled={
						!(this.state.name && this.state.email && this.state.message && this.state.captcha)
					} bsStyle='primary' type='submit' value='Send' />
				</form>
			</Well>
		)
	}
});