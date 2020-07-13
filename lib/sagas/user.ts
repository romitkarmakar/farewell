import { takeEvery, put } from "redux-saga/effects";
import * as firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "..//firebaseconfig";

function* fetchUsers() {
  let db: firebase.firestore.Firestore;

  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  let result = [];

  let querySnapshot = yield db.collection("invitations").get();
  querySnapshot.forEach((doc) => result.push(doc.id));

  yield put({
    type: "SET_USERS",
    payload: result,
  });
}

export default function* watchAsync() {
  yield takeEvery("FETCH_USERS", fetchUsers);
}
