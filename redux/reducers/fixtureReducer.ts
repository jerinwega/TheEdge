import {
    FETCH_FIXTURES_COMPLETED,
    FETCH_FIXTURES_FAILED,
    FETCH_FIXTURES_PENDING,
    FixtureAction,
    FixtureState,
} from '../actions/types/fixtureTypes';

const initialState: FixtureState = {
  loading: false,
  error: null,
  data: [],
};

const fixtureReducer = (state: FixtureState = initialState, action: FixtureAction): FixtureState => {
  switch (action.type) {
    case FETCH_FIXTURES_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_FIXTURES_COMPLETED:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FIXTURES_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default fixtureReducer;
