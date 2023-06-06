import config from '../../config';

const initialState = {
  login: '',
  password: '',
  isAuthenticated: false,
  isRegistered: false,
};

const userReducer = (state = initialState, action) => {
    
    const actions = config.todos.actions;

  switch (action.type) {
    case actions.SET_LOGIN:
      return { ...state, login: action.payload };
    case actions.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actions.SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case actions.SET_REGISTERED:
      return { ...state, isRegistered: action.payload };
    default:
      return state;
  }
};

export default userReducer;
