import { FETCH_EMPLOYEE } from '../actions/types';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return action.employees;
    default:
      return state;
  }
}