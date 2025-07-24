import { combineReducers } from 'redux';
import fixtureReducer from './fixtureReducer';

const rootReducer = combineReducers({
  fixtures: fixtureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
