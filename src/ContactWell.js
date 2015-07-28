'use strict';

var React = require('react');
var {Well, Input, ButtonInput} = require('react-bootstrap');
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');

var WorkWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
				<h2 id='contact'>Contact Me</h2>
				<form>
					<Input type='text' label='Name' />
					<Input type='email' label='Email' />
					<Input className='contact-message' type='textarea' label='Message' />
					<div className='contact-recaptcha'>
						<div className='g-recaptcha' data-sitekey='6LduPvoSAAAAAOAlarIyHgQuhufOPoRdsju1STBC'></div>
					</div>
					<ButtonInput bsStyle='primary' type='submit' value='Submit' />
				</form>
			</Well>
		)
	}
});