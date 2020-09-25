import { combineReducers } from 'redux';
import movieLocationData from './locationData';

// Even if we have more reducers then we can use this
const rootReducer = combineReducers({
  movieLocationData,
});

export default rootReducer;
