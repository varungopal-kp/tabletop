import * as type from "../constants/player";

export function getPlayers(data) {
  return {
    type: type.GET_PLAYER_REQUEST,
    payload: data,
  };
}
export function getPlayersSuccess(data) {
  return {
    type: type.GET_PLAYER_SUCCESS,
    payload: data,
  };
}
export function getPlayersError(data) {
  return {
    type: type.GET_PLAYER_FAILED,
    payload: data,
  };
}

export function addPlayers(data) {
  return {
    type: type.ADD_PLAYER_REQUEST,
    payload: data,
  };
}
export function addPlayersSuccess(data) {
  return {
    type: type.ADD_PLAYER_SUCCESS,
    payload: data,
  };
}
export function addPlayersError(data) {
  return {
    type: type.ADD_PLAYER_FAILED,
    payload: data,
  };
}

export function editPlayers(data) {
  return {
    type: type.EDIT_PLAYER_REQUEST,
    payload: data,
  };
}
export function editPlayersSuccess(data) {
  return {
    type: type.EDIT_PLAYER_SUCCESS,
    payload: data,
  };
}
export function editPlayersError(data) {
  return {
    type: type.EDIT_PLAYER_FAILED,
    payload: data,
  };
}

export function deletePlayers(data) {
  return {
    type: type.DELETE_PLAYER_REQUEST,
    payload: data,
  };
}
export function deletePlayersSuccess(data) {
  return {
    type: type.DELETE_PLAYER_SUCCESS,
    payload: data,
  };
}
export function deletePlayersError(data) {
  return {
    type: type.DELETE_PLAYER_FAILED,
    payload: data,
  };
}