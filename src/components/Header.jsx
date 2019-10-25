import React, { Fragment } from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const Header = props => {
  return (
    <Fragment>
      <AppBar color="primary"  position="relative" style={{ height: 70, width: '100%' }}>
        <Toolbar style={{ height: 70 }}>
          <Typography color="textPrimary" style={{ fontSize: 25 }}>
            Enye 3.0
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
