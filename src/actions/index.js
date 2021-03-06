
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import {  ADD_SERVICE,ADD_EMPLOYEE,FETCH_EMPLOYEE,FETCH_SERVICE,GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/services';
const apiUrl2 = 'http://localhost:5000/employees';

export const createEmployee = ({ firstname,lastname,job,photo,description }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl2}/add`, {firstname,lastname,job,photo,description })
      .then(response => {
        dispatch(createEmployeeSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createEmployeeSuccess =  (data) => {
  return {
    type: ADD_EMPLOYEE,
    payload: {
      _id: data._id,
      firstname: data.firstname,
      lasttname: data.lastname,
      job: data.job,
      photo: data.photo,
      description: data.description
    }
  }
};





export const fetchEmployees = (employees) => {
  return {
    type: FETCH_EMPLOYEE,
    employees
  }
};

export const fetchAllEmployees = () => {
  return (dispatch) => {
    return axios.get(apiUrl2)
      .then(response => {
        dispatch(fetchEmployees(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



export const createService = ({ name,description,price }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {name, description,price })
      .then(response => {
        dispatch(createServiceSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createServiceSuccess =  (data) => {
  return {
    type: ADD_SERVICE,
    payload: {
      _id: data._id,
      name: data.name,
      description: data.description,
      price:data.price
    }
  }
};





export const fetchServices = (services) => {
  return {
    type: FETCH_SERVICE,
    services
  }
};

export const fetchAllServices = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchServices(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const registerUser = (user, history) => dispatch => {
    axios.post('/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}
export const loginUser = (user) => dispatch => {
    axios.post('/users/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}