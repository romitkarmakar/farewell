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
      dp: doc.data().dp,
      pdf: doc.data().pdf
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
  let i = 0;

  for (; i < questions[currentQuestion].answer.length; i++) {
    if (
      action.payload.toLowerCase().replace(/\s/g, "") ==
      questions[currentQuestion].answer[i].toLowerCase().replace(/\s/g, "")
    ) {
      yield put({
        type: "SET_MESSAGE",
        payload: {
          type: "success",
          body: "Your answer is correct",
        },
      });
      if (currentQuestion + 1 == questions.length)
        yield put({
          type: "SET_FINNISH",
          payload: true,
        });
      else
        yield put({
          type: "SET_CURRENT_QUESTION",
          payload: currentQuestion + 1,
        });
      break;
    }
  }
  console.log(i)
  if (i == questions[currentQuestion].answer.length)
    yield put({
      type: "SET_MESSAGE",
      payload: {
        type: "error",
        body: "Your answer is incorrect",
      },
    });
}

export default function* watchAsync() {
  yield takeEvery("FETCH_USERS", fetchUsers);
  yield takeEvery("FETCH_QUESTIONS", fetchQuestions);
  yield takeEvery("CHECK_ANSWER", checkAnswer);
}
