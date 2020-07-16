import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Login from "../components/Login";
import { useTypedSelector } from "../lib/reducers";
import Router from "next/router";
import Question from "../components/Question";

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
  "@global": {
    body: {
      backgroundColor: "#fcc624 !important",
    },
  },
  image: {
    width: "100vw",
    position: "fixed",
    bottom: "0px",
    height: 300,
    zIndex: -1,
    "@media screen and (max-width: 450px)": {
      height: 200,
      width: "100vw",
    },
  },
  imageT: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    bottom: "0px",
    zIndex: -1,
    "@media screen and (max-width: 450px)": {
      right: "0px",
      width: "170vw",
      height: "48vh"
    },
  },
}));

export default () => {
  const classes = styles();
  const selectedUser = useTypedSelector((state) => state.user.selectedUser);
  const isFinnish = useTypedSelector((state) => state.user.isFinnish);

  React.useEffect(() => {
    if (isFinnish) Router.push("/finnish");
  }, [isFinnish]);

  return (
    <Layout>
      {/* <Grid container justify="center">
        {selectedUser ? null : (
          <Backpack
            size={320}
            mood="excited"
            color="#FFD882"
            position="center"
          />
        )}
      </Grid> */}
      <Grid container justify="center">
        <Grid item xs={12} md={6} className={classes.hero}>
          {selectedUser ? <Question /> : <Login />}
        </Grid>
      </Grid>
      {/* <img src="/city.jpg" className={classes.image} /> */}
      <img src="/bg1.png" className={classes.imageT} />
    </Layout>
  );
};
