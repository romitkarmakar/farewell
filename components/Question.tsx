import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  CardHeader,
  Snackbar,
} from "@material-ui/core";
import { useTypedSelector } from "../lib/reducers";
import { useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import Cartoon from "./Cartoon";

export default () => {
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
      <Card>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CardContent>
            <Cartoon />
          </CardContent>
          <CardContent>
            <CardHeader title="Question No.1" />
            <Typography>{questions[currentQuestion]?.question}</Typography>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter your answer"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: "CHECK_ANSWER",
                    payload: answerInput,
                  });
                  setAnswerInput("");
                }
              }}
            />
          </CardContent>
        </div>
        <CardActions>
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
      </Card>
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
