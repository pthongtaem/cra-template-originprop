// Actions
const CLEAR_AUTH = 'ori-portal/user/CLEAR_AUTH';

const initialState = {
  token: null,
  refreshToken: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLEAR_AUTH:
      return {
        ...state,
        token: null,
        refreshToken: null,
      };
    default:
      return state;
  }
}

// Action Creators
export function clearAuth() {
  return { type: CLEAR_AUTH };
}
