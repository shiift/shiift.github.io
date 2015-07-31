'use strict';

var _ = require('underscore');
var React = require('react');
var {Well, Button} = require('react-bootstrap');
var partial = require('lodash.partial');
var WorkCell = require('./WorkCell');
var resumeScroll = require('./helpers/scrollHelper').resumeScroll;

var WorkWell = module.exports = React.createClass({
	render: function () {
		return (
			<Well>
				<h2 id='work'>Work Experience</h2>
	            <p>The following is a list of the major jobs and internships I have had in my career. If you would like
	            a more concise version of this information please see my <a href="#resume"
	            onClick={_.partial(resumeScroll, this.props.toggleResume)}>Resume</a>.</p>
	            <WorkCell
	            	hName='1stdibs'
	            	hLink='http://www.1stdibs.com/'
	            	position='Front-End SDE Intern'
	            	timeRange='May 2015 - Present'
	            	img='http://i.imgur.com/vXud02e.png'>
	            	<div>
						I currently work for an online marketplace, <a target='_blank' href='https://www.1stdibs.com'>1stdibs.com</a>, which
						specializes in antiques and fine art. The company started as a kind of advertising business for dealers in
						the New York City area, but has grown to become a leader in e-commerce for antique and fine art dealers
						around the world. During my time at 1stdibs I have learned Javascript along with many front-end development
						tools, workflows and coding conventions. My responsibilities at 1stdibs include:
						<ul>
							<li>Implmeneting design changes and new website features</li>
							<li>Writing unit tests in Jasmine and more specialized integration tests (to verify
								back-end service behavior)</li>
							<li>Using React, Backbone, and Node.js to create tools for developers (Chrome
								extensions, test result database, etc.)</li>
						</ul>
					</div>
            	</WorkCell>
            	<WorkCell
            		hName = 'United Technologies'
            		hLink = 'http://www.utc.com/'
            		position = 'SDE Intern'
            		timeRange = 'May 2013 - February 2015'
	            	img='http://i.imgur.com/uYf9XcT.png'
            		alignRight>
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
        		</WorkCell>
        		<WorkCell
            		hName = 'BECAT Support'
            		hLink = 'http://becat.uconn.edu/'
            		position = 'Technical/HPC Support'
            		timeRange = 'January 2013 - Present'
            		img='http://i.imgur.com/khF3aCS.png'>
            		<div>
						BECAT is a computing research center at the University of Connecticut. I began work with the BECAT support team
						as the technical support person for the department, however, more recently I have been focusing my attention toward
						helping the team with management of the <a target='_blank' href='http://becat.uconn.edu/hpc/'>computing cluster</a> and
						creating tools for managing users of the cluster. My responsibilities at BECAT includes:
						<ul>
							<li>Maintaining personal computer systems for staff, faculty and students in the BECAT Research Center.</li>
							<li>Providing technical support for issues including viruses, network problems, and malfunctioning hardware.</li>
							<li>Help with High Performance Computing (HPC) support and overall cluster management (primarily using the
								UNIX command line).</li>
						</ul>
					</div>
        		</WorkCell>
        		<WorkCell
            		hName = 'Computer Services Unlimited'
            		position = 'Head Computer Technician'
            		timeRange = 'Summer 2012'
            		alignRight>
					<div>
						At Computer Services Unlimited I was responsible for interacting with customers throughout every step of the repair
						process including the diagnostics, service estimates and the repair work itself. The business received multiple
						repairs daily and after some time an intern was hired. I was given the responsibility of teaching and delegating work
						to the new employees. The repair work included fixing software and hardware problems on all types of computers as well
						as the occasional monitor and printer.
					</div>
            	</WorkCell>
        		<WorkCell
            		hName = 'Computer Trades Unlimited'
            		position = 'Computer Technician'
            		timeRange = 'June 2011 - June 2012'
            		alignRight>
            		<div>
						Not to be confused with Computer Services Unlimited, Computer Trades is a the small business in West Hartford, Connecticut
						where I first developed my skills working with computers in a professional environment. I started as an intern during the
						summer of my Junior year in high school at followed the internship with a part-time position during the school year. I
						learned a great deal about how to solve problems using processes that since helped me with my work a software developer.
					</div>
        		</WorkCell>
			</Well>
		)
	}
});