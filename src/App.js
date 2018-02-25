import React from 'react';
import withMaterialRoot from './withMaterialRoot';
import { withStyles } from 'material-ui/styles';
import TopBar from './TopBar';
import Grid from 'material-ui/Grid';
import SimpleCard from './SimpleCard';
import ProfileCard from './ProfileCard';
import Resume from './Resume';

const styles = {
  main: {
    marginTop: 60,
    flexGrow: 1,
  },
};

function App(props) {
  return (
    <div style={{ padding: 24 }}>
      <TopBar />
      <div id="home" />
      <div className={props.classes.main}>
        <Grid justify="center" container spacing={24}>
          <Grid item xs={12} md={8}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <Resume />
          </Grid>
          <Grid item xs={12} md={8}>
            <SimpleCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withMaterialRoot(withStyles(styles)(App));
