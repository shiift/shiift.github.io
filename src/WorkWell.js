'use strict';

var React = require('react');
var {Panel, Label, Row, Col, Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');

var TopWell = module.exports = React.createClass({
	render: function () {
		var d = new Date();
		var yr = d.getFullYear();
		var mn = d.getMonth();
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
				            		<Label className='padded-label' bsStyle='danger'>Front-End SDE Intern</Label>
					            	<Label className='padded-label' bsStyle='warning'>Summer 2015 - Present</Label>
				            	</div>
			            	</Row>
			            </div>}>
			            	<div>
				            	I currently work for an online marketplace called <a href='https://www.1stdibs.com'>1stdibs.com</a>, which
				            	specializes in antiques and fine art. My responsibilities at 1stdibs include:
				            	<ul>
				            		<li>Implmeneting design changes and new website features</li>
				            		<li>Writing unit tests in Jasmine and more specialized integration tests (to verify
				            			back-end service behavior)</li>
				            		<li>Using React, Backbone, and Node.js to create tools for developers (Chrome
				            			extensions, test result database, etc.)</li>
				            	</ul>
			            	</div>
			            </Panel>
		            </Col>
            	</Row>
            	<Row>
            		<Col md={8} mdOffset={4}>
            			<Panel bsStyle='primary' className='panel-left' header={<div>
			            	<Row>
			            		<Col sm={4}><a href='http://www.utc.com'>United Technologies</a></Col>
			            		<div className='col-sm-8 text-right'>
				            		<Label className='padded-label' bsStyle='danger'>SDE Intern</Label>
					            	<Label className='padded-label' bsStyle='warning'>May 2013 - February 2015</Label>
				            	</div>
			            	</Row>
		            	</div>}>
		            		<div>
		            			During the summers of my freshman and sophomore years at UConn I worked at United Technologies Aerospace Systems
		            			where I worked on the F-15 weapons control system called the PACS (Programmable Armament Control Set). This
		            			system is an embedded system that has been developed by United Technologies for many contries for decades. I was
		            			fortunate enough to get an opportunity to work with a very experienced team of embedded software engineers and
		            			testers to work on the newest version of this system for a few different countries. My responsibilities included:
		            			<ul>
		            				<li>Extensively testing the PACS unit for software and hardware bugs through autorig simulations and test
		            				log analysis.</li>
		            				<li>Writing macros, automated CTLS scripts and Perl scripts for testing of the PACS unit and presenting
		            				results at weekly meetings.</li>
		            				<li>Discussing various requirements and code issues with the project manager and test lead.</li>
		            			</ul>
	            			</div>
			            </Panel>
		            </Col>
	            </Row>
	            <div id='resume'></div>
			</Well>
		)
	}
});