'use strict';

var React = require('react');
var {Panel, Button} = require('react-bootstrap');

module.exports = React.createClass({
	render: function () {
		return (
			<Panel collapsible expanded={this.props.expanded} className='panel-noborder'>
				<Button bsStyle='primary' className='pull-right' target='_blank' href='./resume.pdf'>Download</Button>
				<h2 id='resume'>My Resume</h2>
				<div className='text-center'>
					<object data='./resume.pdf' type='application/pdf' className='resume-pdf'>
						<p>It appears you do not have a PDF plugin for this browser.
						You can <a target='_blank' href='./resume.pdf'>click here</a> to download my resume.</p>
					</object>
				</div>
			</Panel>
		)
	}
});