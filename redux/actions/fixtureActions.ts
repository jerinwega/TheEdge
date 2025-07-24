import { Dispatch } from 'redux';
import { fetchAPI } from '../../utils/apiClient';
import {
  FETCH_FIXTURES_COMPLETED,
  FETCH_FIXTURES_FAILED,
  FETCH_FIXTURES_PENDING,
  Fixture,
  FixtureAction,
} from './types/fixtureTypes';

export const fetchFixturesPending = (): FixtureAction => ({
  type: FETCH_FIXTURES_PENDING,
});

export const fetchFixturesCompleted = (payload: Fixture[]): FixtureAction => ({
  type: FETCH_FIXTURES_COMPLETED,
  payload,
});

export const fetchFixturesFailed = (error: string): FixtureAction => ({
  type: FETCH_FIXTURES_FAILED,
  error,
});

export const fetchFixturesByDate = (date: string) => async (dispatch: Dispatch<FixtureAction>) => {
  try {
    dispatch(fetchFixturesPending());
    const response = await fetchAPI('fixtures', { date });
    dispatch(fetchFixturesCompleted(response.response));
    return response;
  } catch (error: any) {
    dispatch(fetchFixturesFailed(error.message || 'Failed to fetch fixtures'));
  }
};
