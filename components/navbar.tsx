import React from "react";
import { AppBar, Toolbar, Avatar, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTypedSelector } from "../lib/reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: 0,
    fontSize: "1rem",
  },
}));

export default function Navbar({}) {
  const classes = useStyles();
  const selectedUser = useTypedSelector((state) => state.user.selectedUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <h2 className={classes.title}>GLUG Farewell 2020</h2>
        <div style={{ flex: 1 }} />
        {selectedUser ? (
          <React.Fragment>
            <Avatar src={selectedUser.dp} />
            <Hidden smDown>
              <span style={{ textTransform: "capitalize" }}>&nbsp;Welcome {selectedUser.name}</span>
            </Hidden>
          </React.Fragment>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
