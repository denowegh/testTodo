import config from '../../config';


const actions = config.todos.actions;

export const setLogin = (login) => ({
    type: actions.SET_LOGIN,
    payload: login,
});

export const setPassword = (password) => ({
    type: actions.SET_PASSWORD,
    payload: password,
});

export const setAuthenticated = (isAuthenticated) => ({
    type: actions.SET_AUTHENTICATED,
    payload: isAuthenticated,
});

export const setRegistered = (isRegistered) => ({
    type: actions.SET_REGISTERED,
    payload: isRegistered,
});
  