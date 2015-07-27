'use strict';

var React = require('react');
var {Panel, Label, Row, Col, Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');

var TopWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
				<h2 id='work'>Work Experience</h2>
	            <p>The following is a list of the major jobs and internships I have had in my career. If you would like
	            a more concise version of this information please see my <a href="#resume">Resume</a> below.</p>
	            <Row>
	            	<Col md={8}>
			            <Panel bsStyle='primary' className='panel-left' header={<div>
			            	<Row>
			            		<Col sm={4}><a href='http://www.1stdibs.com'>1stdibs.com</a></Col>
			            		<div className='col-sm-8 text-right'>
				            		<Label className='padded-label' bsStyle='success'>Front-End SDE Intern</Label>
					            	<Label className='padded-label' bsStyle='info'>Summer 2015 - Present</Label>
				            	</div>
			            	</Row>
			            </div>}>
			            	I currently work for an online marketplace called <a href='https://www.1stdibs.com'>1stdibs.com</a>, which
			            	specializes in antiques and fine art. My responsibilities at 1stdibs include:
			            	<ul>
			            		<li>Implmeneting design changes and new website features</li>
			            		<li>Writing unit tests in Jasmine and more specialized integration tests (to verify
			            			back-end service behavior)</li>
			            		<li>Using React, Backbone, and Node.js to create tools for developers (Chrome
			            			extensions, test result database, etc.)</li>
			            	</ul>
			            </Panel>
		            </Col>
            	</Row>
            	<Row>
            		<Col md={8} mdOffset={4}>
            			<Panel bsStyle='primary' className='panel-left' header={<div>
			            	<Row>
			            		<Col sm={4}><a href='http://www.utc.com'>United Technologies</a></Col>
			            		<div className='col-sm-8 text-right'>
				            		<Label className='padded-label' bsStyle='success'>SDE Intern</Label>
					            	<Label className='padded-label' bsStyle='info'>May 2013 - February 2015</Label>
				            	</div>
			            	</Row>
		            	</div>}>
			            </Panel>
		            </Col>
	            </Row>
	            <div id='resume'></div>
			</Well>
		)
	}
});