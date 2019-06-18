/**
 * Type definitions
 */
export const Types = {
  SET_TO_ADD_USER: 'Markers/SET_TO_ADD_USER',
  CLEAR_TO_ADD_USER: 'Markers/CLEAR_TO_ADD_USER',
  ADD_USER_REQUEST: 'Markers/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'Markers/ADD_USER_SUCCESS',
  ADD_USER_FAILED: 'Markers/ADD_USER_FAILED',
};

/**
 * reducers
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  addingUserCoordinates: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TO_ADD_USER:
      return {
        ...state,
        loading: false,
        error: false,
        addingUserCoordinates: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    case Types.CLEAR_TO_ADD_USER:
      return {
        ...state,
        loading: false,
        error: false,
        addingUserCoordinates: null,
      };
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_USER_SUCCESS:
      if (state.addingUserCoordinates === null) {
        return state;
      }
      return {
        ...state,
        loading: false,
        error: false,
        addingUserCoordinates: null,
        data: [
          ...state.data,
          {
            latitude: state.addingUserCoordinates.latitude,
            longitude: state.addingUserCoordinates.longitude,
            user: action.payload.user,
          },
        ],
      };
    case Types.ADD_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  setToAddUser: (latitude, longitude) => ({
    type: Types.SET_TO_ADD_USER,
    payload: {
      latitude,
      longitude,
    },
  }),
  clearToAddUser: () => ({
    type: Types.CLEAR_TO_ADD_USER,
  }),
  addUserRequest: username => ({
    type: Types.ADD_USER_REQUEST,
    payload: {
      username,
    },
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: {
      user,
    },
  }),
  addUserFailed: error => ({
    type: Types.ADD_USER_FAILED,
    payload: {
      error,
    },
  }),
};
