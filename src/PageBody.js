'use strict';

var React = require('react');
var TopWell = require('./TopWell');
var WorkWell = require('./WorkWell');
var ResumePanel = require('./ResumePanel');
var ContactWell = require('./ContactWell');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<div className='page-body container'>
				<TopWell toggleResume={this.props.toggleResume} expanded={this.props.resume} />
				<ResumePanel expanded={this.props.resume} />
				<WorkWell toggleResume={this.props.toggleResume} />
				<ContactWell />
			</div>
		);
	}
});