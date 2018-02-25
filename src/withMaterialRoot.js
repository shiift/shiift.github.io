import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C5CAE9',
      main: '#3F51B5',
      dark: '#303F9F',
    },
    secondary: {
      main: '#FF5722',
    },
  },
});

function withMaterialRoot(Component) {
  function WithMaterialRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Reboot />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithMaterialRoot;
}

export default withMaterialRoot;