'use strict';

var _ = require('underscore');
var $ = require('jquery');
var React = require('react');
var {Well, ButtonInput, Input, Alert} = require('react-bootstrap');
var ReCATPCHA = require("react-google-recaptcha");
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');

var WorkWell = module.exports = React.createClass({
	getInitialState: function() {
    	return {valid: false};
  	},
	validate: function (value) {
		this.setState({valid: value});
	},
	sendEmail: function (e) {
		e.preventDefault();
		var from = this.refs.from.getValue();
		var message = this.refs.message.getValue();
		$.post("http://vps.liamd.com/mail.php", {
	        from: from,
	        message: message,
	        'g-recaptcha-response': this.state.valid 
	    }, (data, status)=>{
	        var response = JSON.parse(data);
	        grecaptcha.reset();
        	this.setState({response: response});
	    });
	},
	handleAlertDismiss: function () {
		this.setState({response: null});
	},
	render: function () {
		var alert = '';
		if (this.state.response) {
			if (this.state.response.success) {
				alert = (<Alert bsStyle='success' onDismiss={this.handleAlertDismiss} dismissAfter={5000}>
			          		<h4>Email successfully sent!</h4>
				        </Alert>);
			} else {
				alert = (<Alert bsStyle='danger' onDismiss={this.handleAlertDismiss} dismissAfter={5000}>
			          		<h4>Email form encountered an error!</h4>
				        </Alert>);
			}
		}
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
				{alert}
				<p>Please feel free to contact me!</p>
				<form id='formAction' onSubmit={this.sendEmail}>
					<Input type='text' ref='from' label='Email' name='from' />
					<div className='form-group'>
						<label className='control-label'>Message</label>
						<textarea style={{resize: 'vertical'}} rows='10' name='message' className='form-control' />
					</div>
					<div className='form-group'>
						<label className='control-label'>ReCATPCHA</label>
						<ReCATPCHA
							className='contact-recaptcha'
							refs="recaptcha"
							sitekey="6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC"
							onChange={this.validate} />
					</div>
					<ButtonInput id='submitButton' disabled={!this.state.valid} bsStyle='primary' type='submit' value='Send an Email' />
				</form>
			</Well>
		)
	}
});