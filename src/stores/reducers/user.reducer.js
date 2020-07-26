const initialState = {
  users: [],
  isLoading: false
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: payload,
        isLoading: false
      }
    case 'FETCH_USER_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default userReducer
