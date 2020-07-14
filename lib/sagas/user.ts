import { takeEvery, put, select } from "redux-saga/effects";
import * as firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "..//firebaseconfig";

function* fetchUsers() {
  let db: firebase.firestore.Firestore;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore();
  let result = [];

  let querySnapshot = yield db.collection("invitations").get();
  querySnapshot.forEach((doc) =>
    result.push({
      name: doc.id,
      image: doc.data().image,
    })
  );

  yield put({
    type: "SET_USERS",
    payload: result,
  });
}

export function* fetchQuestions() {
  let db: firebase.firestore.Firestore;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore();
  let result = [];

  let querySnapshot = yield db.collection("questions").get();
  querySnapshot.forEach((doc) =>
    result.push({
      question: doc.data().question,
      answer: doc.data().answer,
    })
  );

  yield put({
    type: "SET_QUESTIONS",
    payload: result,
  });
}

export function* checkAnswer(action) {
  let questions = yield select((state) => state.user.questions);
  let currentQuestion = yield select((state) => state.user.currentQuestion);
  console.log(questions)

  if (action.payload == questions[currentQuestion].answer)
    yield put({
      type: "SET_MESSAGE",
      payload: {
        type: "success",
        body: "Your answer is correct",
      },
    });
  else
    yield put({
      type: "SET_MESSAGE",
      body: "Your answer is incorrect",
    });
}

export default function* watchAsync() {
  yield takeEvery("FETCH_USERS", fetchUsers);
  yield takeEvery("FETCH_QUESTIONS", fetchQuestions);
  yield takeEvery("CHECK_ANSWER", checkAnswer);
}
