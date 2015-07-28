'use strict';

var React = require('react');
var {Panel, Label, Row, Col, Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');

var WorkCell = module.exports = React.createClass({
	render: function () {
		return (
            <Row>
            	<Col md={8} mdOffset={this.props.alignRight ? 4 : 0}>
		            <Panel bsStyle='primary' className='panel-left' header={<div>
		            	<Row>
		            		<Col sm={4}><a target='_blank' href={this.props.hLink}>{this.props.hName}</a></Col>
		            		<div className='col-sm-8 text-right'>
			            		<Label className='padded-label' bsStyle='danger'>{this.props.position}</Label>
				            	<Label className='padded-label' bsStyle='warning'>{this.props.timeRange}</Label>
			            	</div>
		            	</Row>
		            </div>}>
		            	{this.props.template()}
		            </Panel>
	            </Col>
        	</Row>
		)
	}
});