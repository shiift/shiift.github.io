import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import amazon from './icons/amazon.svg';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
  titleBox: {
    marginBottom: 16,
  },
  amazonButton: {
    color: '#FFFFFF',
    backgroundColor: '#cf00c2',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    '&:hover': {
      backgroundColor: '#8e0085',
    },
  },
  icon: {
    paddingLeft: theme.spacing.unit,
    width: 25,
    height: 25,
  },
});

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card id="work" className={classes.card}>
      <CardHeader title="Work Experience" />
      <CardContent>
        <div className={classes.titleBox}>
          <Typography className={classes.title}>Amazon.com - Amazon Spark</Typography>
          <Typography className={classes.subtitle}>May 2017 - Present</Typography>
        </div>
        <Typography paragraph>More recently I have worked on the Amazon Spark team where we launched our product allowing people to
        discover, share, and shop their interests. On this team I have worked to develop many features including adding products on
        Spark to the Amazon wishlist, tagged interest recommendations while posting, and integration with partner teams such as
        Amazon Ask (Question and Answers).</Typography>
        <Button className={classes.amazonButton} variant="raised" target="_blank" href="https://www.amazon.com/b?node=16907772011">
          About Spark
          <img className={classes.icon} src={amazon} alt="Amazon Spark" />
        </Button>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={classes.titleBox}>
          <Typography className={classes.title}>Amazon.com - Seller Pricing</Typography>
          <Typography className={classes.subtitle}>August 2016 - May 2017</Typography>
        </div>
        <Typography paragraph>During my first year at Amazon I worked in the Marketplace organization on the Seller Pricing team.
        I started on the Seller Pricing team in Marketplace developing systems that react to price change events for third party
        sellers on Amazon.com. These systems controlled features ranging from real-time price error handling, to seller facing APIs,
        to pricing-related dashboards.</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={classes.titleBox}>
          <Typography className={classes.title}>1stdibs.com</Typography>
          <Typography className={classes.subtitle}>May 2015 - August 2015</Typography>
        </div>
        <Typography paragraph>During the summer of 2015 I worked for an online marketplace, 1stdibs.com, which specializes in antiques,
        designer items, and fine art. The company started as a kind of advertising business for dealers in the New York City area, but
        has grown to become a leader in e-commerce for antique and fine art dealers around the world. During my time at 1stdibs I learned
        Javascript along with many front-end development tools, workflows and coding conventions.
        <br />
        My responsibilities at 1stdibs included:
        </Typography>
        <Typography>
          <ul>
            <li>Implmeneting design changes and new website features</li>
            <li>Writing unit tests in Jasmine and more specialized integration tests (to verify back-end service behavior)</li>
            <li>Using React, Backbone, and Node.js to create tools for developers (Chrome extensions, test result database, etc.)</li>
          </ul>
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={classes.titleBox}>
          <Typography className={classes.title}>United Technologies</Typography>
          <Typography className={classes.subtitle}>May 2013 - February 2015</Typography>
        </div>
        <Typography paragraph>During the summers of my freshman and sophomore years at UConn I worked at United Technologies Aerospace
        Systems where I worked on the F-15 weapons control system called the PACS (Programmable Armament Control Set). This system is
        an embedded system that has been developed by United Technologies for many contries for decades. I was fortunate enough to get
        an opportunity to work with a very experienced team of embedded software engineers and testers to work on the newest version
        of this system for a few different countries.
        <br />
        My responsibilities at UTC included:
        </Typography>
        <Typography>
          <ul>
            <li>Extensively testing the PACS unit for software and hardware bugs through autorig simulations and test log analysis.</li>
            <li>Writing macros, automated CTLS scripts and Perl scripts for testing of the PACS unit and presenting results at weekly meetings.</li>
            <li>Discussing various requirements and code issues with the project manager and test lead.</li>
          </ul>
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={classes.titleBox}>
          <Typography className={classes.title}>BECAT: The Booth Engineering Center for Advanced Technology</Typography>
          <Typography className={classes.subtitle}>January 2013 - May 2016</Typography>
        </div>
        <Typography paragraph>BECAT is a computing research center at the University of Connecticut. I began work with the BECAT
        support team as the technical support person for the department, however, more recently I have been focusing my attention
        toward helping the team with management of the computing cluster and creating tools for managing users of the cluster.
        <br />
        My responsibilities at BECAT included:
        </Typography>
        <Typography>
          <ul>
            <li>Maintaining personal computer systems for staff, faculty and students in the BECAT Research Center.</li>
            <li>Providing technical support for issues including viruses, network problems, and malfunctioning hardware.</li>
            <li>Help with High Performance Computing (HPC) support and overall cluster management (primarily using the UNIX command line).</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);