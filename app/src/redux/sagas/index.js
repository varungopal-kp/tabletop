import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import playerSaga from "./playerSaga";


export default function* rootSaga() {
  yield all([authSaga(), playerSaga(),]);
}
