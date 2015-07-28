'use strict';

var React = require('react');
var PageNav = require('./PageNav');
var PageBody = require('./PageBody');

var PageWrapper = module.exports = React.createClass({
	getInitialState: function() {
    	return {resume: false};
  	},
	toggleResume: function (bool) {
		var resume = bool ? true : !this.state.resume;
		this.setState({resume});
	},
	render: function () {
		return (
			<div className="pageWrapper">
				<PageNav toggleResume={this.toggleResume} />
				<PageBody toggleResume={this.toggleResume} resume={this.state.resume} />
			</div>
		);
	}
});