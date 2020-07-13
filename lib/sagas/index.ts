import { all } from "redux-saga/effects";
import userWatchAsync from "./user";

export default function* rootSaga() {
  yield all([userWatchAsync()]);
}
