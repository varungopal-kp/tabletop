import * as type from "../constants/player";

const initialState = {
  players: [],
  loading: false,
  error: null,
  success: false,
  player: null,
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case type.GET_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
        players: [],
      };
    case type.GET_PLAYER_SUCCESS:
      return {
        ...state,
        players: action.payload.data.result,
        loading: false,
      };
    case type.GET_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case type.ADD_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
        player: null,
        error: null,
        success: false,
      };
    case type.ADD_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.payload.data.result,
        success: action.payload.data.message,
        loading: false,
      };
    case type.ADD_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case type.EDIT_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
        player: null,
        error: null,
        success: false,
      };
    case type.EDIT_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.payload.data.result,
        loading: false,
        success: action.payload.data.message,
      };
    case type.EDIT_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case type.DELETE_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
        player: null,
        error: null,
        success: false,
      };
    case type.DELETE_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.payload.data.result,
        success: action.payload.data.message,
        loading: false,
      };
    case type.DELETE_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
