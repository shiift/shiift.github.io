'use strict';

var React = require('react');
var {Row, Col, Well, Button} = require('react-bootstrap');

var TopWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
			    <h1>William Song Dickson</h1>
			    <Row>
			        <Col md={3} className='text-center'>
			            <img width='175px' height='175px' src='images/faceshot.JPG' className='img-rounded' />
			        </Col>
			        <Col md={9}>
			            <blockquote>&quot;Seeking an opportunity to further develop my skills as an engineer through real-world experience in
			            software development and research while working toward my goal of becoming a software engineering manager&quot;</blockquote>
			            <Button bsStyle='primary'>My Resume</Button>
			        </Col>
			    </Row>
			</Well>
		)
	}
});