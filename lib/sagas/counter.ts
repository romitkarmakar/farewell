import { takeEvery, put } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
    yield delay(1000)
    yield put({
        type: "CLICKED"
    })
}

export default function* watchAsync() {
    yield takeEvery("CLICKED_ASYNC", incrementAsync);
}