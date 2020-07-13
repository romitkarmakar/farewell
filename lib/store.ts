import { createStore, applyMiddleware, Store } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import reducer from "./reducers";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./sagas";

export interface SagaStore extends Store {
  sagaTask?: Task;
  websocketsagaTask?: Task;
}

const store: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const tempStore = createStore(reducer, applyMiddleware(sagaMiddleware));
  (tempStore as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return tempStore;
};

export const wrapper = createWrapper(store, { debug: true });
