'use strict';

var React = require('react');
var PageWrapper = require('./PageWrapper');
require('./helpers/scrollHelper');

React.render(
	<PageWrapper />,
    document.getElementById('main')
);