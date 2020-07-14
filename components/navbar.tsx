import React from "react";
import { Typography, AppBar, Toolbar, Avatar } from "@material-ui/core";
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
  },
}));

export default function Navbar({}) {
  const classes = useStyles();
  const selectedUser = useTypedSelector((state) => state.user.selectedUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          GLUG Farewell
        </Typography>
        {selectedUser ? (
          <React.Fragment>
            <Avatar src={selectedUser.dp} />
            <Typography>&nbsp;Welcome {selectedUser.name}</Typography>
          </React.Fragment>
        ) : (
          null
        )}
      </Toolbar>
    </AppBar>
  );
}
