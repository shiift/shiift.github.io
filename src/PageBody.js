'use strict';

var React = require('react');
var TopWell = require('./TopWell');
var WorkWell = require('./WorkWell');

var PageNav = module.exports = React.createClass({
	render: function () {
		return (
			<div className='pageBody container'>
				<TopWell />
				<WorkWell />
			</div>
		);
	}
});