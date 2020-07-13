import { all } from "redux-saga/effects";
import counterWatchAsync from "./counter";

export default function* rootSaga() {
  yield all([counterWatchAsync()]);
}
