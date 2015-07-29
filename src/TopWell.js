'use strict';

var _ = require('underscore');
var React = require('react');
var {Row, Col, Well, Button} = require('react-bootstrap');

var TopWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well id="home">
			    <h1>William Song Dickson</h1>
			    <Row>
			        <Col md={3} className='text-center'>
			            <img width='175px' height='175px' src='images/faceshot.JPG' className='img-rounded' />
			        </Col>
			        <Col md={9}>
			            <blockquote>&quot;Seeking an opportunity to further develop my skills as an engineer through real-world experience in
			            software development and research while working toward my goal of becoming a software engineering manager&quot;</blockquote>
			            <Row>
				            <Col md={2} xs={12}>
								<Button target='_blank' href='https://github.com/shiift' className='github padded-button'>Github</Button>
				            </Col>
				            <Col md={2} xs={6}>
								<Button target='_blank' href='https://www.linkedin.com/pub/william-dickson/70/5b2/521'
								bsStyle='primary' className='padded-button'>LinkedIn</Button>
				            </Col>
			            	<Col md={8} xs={6} className='text-right'>
					            <Button onClick={_.partial(this.props.toggleResume, false)} bsStyle='danger' className='padded-button'>
					            	{this.props.expanded ? 'Hide' : 'Show'} Resume
					            </Button>
				            </Col>
			            </Row>
			        </Col>
			    </Row>
			</Well>
		)
	}
});