import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Login from "../components/Login";
import { useTypedSelector } from "../lib/reducers";
import Question from "../components/Question";
import { Backpack } from 'react-kawaii';

const styles = makeStyles(() => ({
  "@keyframes move": {
    from: {
      transform: "translate(-50%, 200%)",
      opacity: 0,
    },
    to: {
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60vh",
  },
  fab: {
    position: "fixed",
    bottom: "3%",
    right: "3%",
  },
}));

export default () => {
  const classes = styles();
  const selectedUser = useTypedSelector((state) => state.user.selectedUser);

  return (
    <Layout>
      <Grid container justify="center">
        <Backpack size={320} mood="excited" color="#FFD882" position="center" />
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} md={6} className={classes.hero}>
          {selectedUser ? <Question /> : <Login />}
        </Grid>
      </Grid>
    </Layout>
  );
};
