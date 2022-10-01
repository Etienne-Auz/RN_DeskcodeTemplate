import createDataContext from './Utils/createDataContext';


const authReducer = (user, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'signup':
    case 'setbackup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return user;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return (data) => {
    dispatch({
      type: 'signin',
      payload: {
        token: data.token,
        mail: data.mail,
      },
    });
  };
};

const setbackup = dispatch => {
  return (data) => {
    dispatch({
      type: 'setbackup',
      payload: {
        token: data.token,
        mail: data.mail,
      },
    });
  };
}

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, setbackup},
  {token: null, email: ''},
);
