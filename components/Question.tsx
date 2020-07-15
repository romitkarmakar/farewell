import React from "react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Snackbar,
  Hidden,
} from "@material-ui/core";
import { useTypedSelector } from "../lib/reducers";
import { useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import Cartoon from "./Cartoon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    "@media screen and (max-width: 450px)": {
      justifyContent: "center",
    },
  },
  root: {
    transform: "translateX(-20%)",
    "@media screen and (max-width: 450px)": {
      transform: "translate(0%)"
    }
  }
}));

export default () => {
  const classes = useStyles();
  const currentQuestion: number = useTypedSelector(
    (state) => state.user.currentQuestion
  );
  const questions = useTypedSelector((state) => state.user.questions);
  const message = useTypedSelector((state) => state.user.message);
  const dispatch = useDispatch();
  const [answerInput, setAnswerInput] = React.useState("");

  React.useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS",
    });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Hidden smDown>
            <CardContent>
              <Cartoon />
            </CardContent>
          </Hidden>
          <CardContent>
            <h2>{`Question No.${currentQuestion + 1}`}</h2>
            <Typography>{questions[currentQuestion]?.question}</Typography>
            <TextField
              fullWidth
              label="Enter your answer"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log(answerInput.toLowerCase());
                  dispatch({
                    type: "CHECK_ANSWER",
                    payload: answerInput.toLowerCase(),
                  });
                  setAnswerInput("");
                }
              }}
            />
          </CardContent>
        </div>
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch({
                type: "CHECK_ANSWER",
                payload: answerInput,
              });
              setAnswerInput("");
            }}
          >
            Submit Answer
          </Button>
        </CardActions>
      </div>
      <Snackbar
        open={message ? true : false}
        autoHideDuration={6000}
        onClose={() => dispatch({ type: "SET_MESSAGE", payload: null })}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => dispatch({ type: "SET_MESSAGE", payload: null })}
          severity={message?.type}
        >
          {message?.body}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
