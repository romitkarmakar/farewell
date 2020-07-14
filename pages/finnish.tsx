import React from "react";
import Layout from "../components/layout";
import { useTypedSelector } from "../lib/reducers";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

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

  React.useEffect(() => {
    // @ts-ignore
    //download(selectedUser.image, "invitation.png", "image/png")
  }, []);

  return (
    <React.Fragment>
      <Head>
        <script src="/download.js"></script>
      </Head>
      <Layout>
        <div className={classes.root}>
          <a href={selectedUser?.image} download="invitation.png">
            <img src={selectedUser?.image} className={classes.image} />
          </a>
        </div>
      </Layout>
    </React.Fragment>
  );
};
