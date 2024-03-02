import { put, takeEvery } from "redux-saga/effects";
import axios from "../../utilities/axios-config";
import {
  getPlayersSuccess,
  getPlayersError,
  addPlayersSuccess,
  addPlayersError,
  editPlayersSuccess,
  editPlayersError,
  deletePlayersSuccess,
  deletePlayersError,
} from "../actions/player";
import {
  GET_PLAYER_REQUEST,
  ADD_PLAYER_REQUEST,
  EDIT_PLAYER_REQUEST,
  DELETE_PLAYER_REQUEST,
} from "../constants/player";

function* getCall({ payload }) {
  try {
    console.log(payload);
    const users = yield axios
      .get(`players`, {
        params: payload,
      })
      .then((res) => {
        return res;
      })
      .catch(function (response) {
        return Promise.reject(response);
      });
    yield put(getPlayersSuccess(users));
  } catch (error) {
    yield put(getPlayersError(error));
  }
}

function* createCall({ payload }) {
  try {
    const player = yield axios
      .post(`players`, payload)
      .then((res) => {
        return res;
      })
      .catch(function (response) {
        return Promise.reject(response);
      });
    yield put(addPlayersSuccess(player));
  } catch (error) {
    const errorMsg = error?.response?.data.message || "Something went wrong";
    yield put(addPlayersError(errorMsg));
  }
}
function* editCall({ payload }) {
  try {
    const player = yield axios
      .put(`players/${payload._id}`, payload)
      .then((res) => {
        return res;
      })
      .catch(function (response) {
        return Promise.reject(response);
      });
    yield put(editPlayersSuccess(player));
  } catch (error) {
    const errorMsg = error?.response?.data.message || "Something went wrong";
    yield put(editPlayersError(errorMsg));
  }
}
function* deleteCall({ payload }) {
  try {
    const player = yield axios
      .delete(`players/${payload}`)
      .then((res) => {
        return res;
      })
      .catch(function (response) {
        return Promise.reject(response);
      });
    yield put(deletePlayersSuccess(player));
  } catch (error) {
    const errorMsg = error?.response?.data.message || "Something went wrong";
    yield put(deletePlayersError(errorMsg));
  }
}
function* playerSaga() {
  yield takeEvery(GET_PLAYER_REQUEST, getCall);
  yield takeEvery(ADD_PLAYER_REQUEST, createCall);
  yield takeEvery(EDIT_PLAYER_REQUEST, editCall);
  yield takeEvery(DELETE_PLAYER_REQUEST, deleteCall);
}

export default playerSaga;
