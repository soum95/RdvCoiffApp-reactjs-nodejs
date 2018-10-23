import { FETCH_SERVICE } from '../actions/types';

export default function serviceReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SERVICE:
      return action.services;
    default:
      return state;
  }
}