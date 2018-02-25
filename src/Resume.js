import React from 'react';
import { Document, Page } from 'react-pdf';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import FileDownload from 'material-ui-icons/FileDownload';
import './Resume.css';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
  },
  resumeCardLarge: {
    minHeight: 800
  },
  resumeCardSmall: {
    minHeight: 460
  },
});

function Resume(props) {
  return (
    <Card>
      <CardHeader id="resume" title="Resume" />
      <Hidden implementation='css' mdUp>
        <div className={props.classes.resumeCardSmall}>
          <Document loading="" className="resume" file="/resume.pdf">
            <Page scale={0.58} pageNumber={1} />
          </Document>
        </div>
      </Hidden>
      <Hidden implementation='css' smDown>
        <div className={props.classes.resumeCardLarge}>
          <Document loading="" className="resume" file="/resume.pdf">
            <Page scale={1} pageNumber={1} />
          </Document>
        </div>
      </Hidden>
      <CardActions>
        <Button className={props.classes.button} variant="raised" color="secondary" href="/resume.pdf">
          Download
          <FileDownload />
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Resume);