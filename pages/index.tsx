import React from "react";
import { Grid, Typography, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import { Add } from "@material-ui/icons";
import Count from "../components/Count";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../lib/reducers";

const styles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: "black",
    },
  },
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
    position: "absolute",
    left: "50%",
    top: "50%",
    color: "white",
    transform: "translate(-50%, -50%)",
    animation: "$move 1s ease-in-out",
    textAlign: "center",
  },
  fab: {
    position: "fixed",
    bottom: "3%",
    right: "3%",
  },
}));

export default () => {
  const classes = styles();
  const dispatch = useDispatch();
  const clicked: number = useTypedSelector((state) => state.counter.clicked);

  return (
    <Layout>
      <Grid container>
        <div className={classes.hero}>
          <Typography variant="h2">Next Material Template</Typography>
          <Count clicked={clicked} />
        </div>
      </Grid>
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => dispatch({ type: "CLICKED_ASYNC" })}
      >
        <Add />
      </Fab>
    </Layout>
  );
};
