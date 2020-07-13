import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  CardHeader,
} from "@material-ui/core";
import { useTypedSelector } from "../lib/reducers";
import { useDispatch } from "react-redux"

export default () => {
  const currentQuestion: number = useTypedSelector(
    (state) => state.user.currentQuestion
  );
  const questions = useTypedSelector((state) => state.user.questions)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
        type: "FETCH_QUESTIONS",
    })
  }, [])

  return (
    <Card>
      <CardHeader title="Question No.1" />
      <CardContent>
        <Typography>{questions[currentQuestion]?.question}</Typography>
        <TextField variant="outlined" fullWidth label="Enter your answer" />
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={() => dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion + 1})}>
          Submit Answer
        </Button>
      </CardActions>
    </Card>
  );
};
