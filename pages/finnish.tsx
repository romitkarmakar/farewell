import React from "react";
import Layout from "../components/layout";
import { useTypedSelector } from "../lib/reducers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
  image: {
    height: "90vh",
  },
}));

export default () => {
  const classes = useStyles();
  const selectedUser = useTypedSelector((state) => state.user.selectedUser);

  return (
    <Layout>
      <div className={classes.root}>
        <img src={selectedUser.image} className={classes.image} />
      </div>
    </Layout>
  );
};
