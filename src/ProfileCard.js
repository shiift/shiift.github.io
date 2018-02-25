import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';

const styles = theme => ({
  card: {
    minWidth: 250,
  },
  title: {
    fontSize: 24,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  githubButton: {
    backgroundColor: '#181717',
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography className={classes.title}>Liam Song Dickson</Typography>
        }
        subheader="Software Development Engineer, Amazon.com"
        avatar={
          <Avatar alt="Liam" src="/images/faceshot.jpg" className={classes.bigAvatar} />
        }
      />
      <CardContent className={classes.details}>
        <Typography>Working to develop my skills as an engineer by tacking large-scale real-world problems in software engineering.</Typography>
      </CardContent>
      <CardActions>
        <Button className={classnames(classes.button, classes.githubButton)} variant="raised" target="_blank" href="https://github.com/shiift/">
          <img className={classes.icon} src={github} alt="Github" />
        </Button>
        <Button className={classnames(classes.button, classes.linkedinButton)} variant="raised" target="_blank" href="https://www.linkedin.com/in/williamsongdickson/">
          <img className={classes.icon} src={linkedin} alt="LinkedIn" />
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);