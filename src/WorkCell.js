'use strict';

var React = require('react');
var {Panel, Label, Row, Col, Thumbnail, Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');

var WorkCell = module.exports = React.createClass({
	render: function () {
		return (
            <Row>
            	<Col md={this.props.img ? 8 : 12} mdPush={this.props.alignRight && this.props.img ? 4 : 0}>
		            <Panel bsStyle='primary' className='panel-left' header={<div>
		            	<Row>
		            		<Col sm={4}><a target='_blank' href={this.props.hLink}>{this.props.hName}</a></Col>
		            		<div className='col-sm-8 text-right'>
			            		<Label className='padded-label' bsStyle='danger'>{this.props.position}</Label>
				            	<Label className='padded-label' bsStyle='warning'>{this.props.timeRange}</Label>
			            	</div>
		            	</Row>
		            </div>}>
		            	{this.props.children}
		            </Panel>
	            </Col>
	            <Col md={4} mdPull={this.props.alignRight ? 8 : 0} className='hidden-xs hidden-sm'>
					{this.props.img ? <Thumbnail target='_blank' href={this.props.hLink} src={this.props.img} /> : ''}
	            </Col>
        	</Row>
		)
	}
});