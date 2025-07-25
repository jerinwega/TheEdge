import { TOP_LEAGUE_IDS } from '@/utils/constants';
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
     const filteredResponse = response.response.filter(
      (fixture: Fixture) => TOP_LEAGUE_IDS.includes(fixture.league.id)
    );

    dispatch(fetchFixturesCompleted(filteredResponse));
    return filteredResponse;
  } catch (error: any) {
    dispatch(fetchFixturesFailed(error.message || 'Failed to fetch fixtures'));
  }
};


//  const filtered = response.response
//       .filter((f: any) => TOP_20_LEAGUE_IDS.includes(f.league.id))
//       .map((f: any) => ({
//         id: f.fixture.id,
//         date: f.fixture.date,
//         status: f.fixture.status.short,
//         home: f.teams.home.name,
//         away: f.teams.away.name,
//         homeLogo: f.teams.home.logo,
//         awayLogo: f.teams.away.logo,
//         league: {
//           id: f.league.id,
//           name: f.league.name,
//           logo: f.league.logo,
//           country: f.league.country,
//         },
//         venue: f.fixture.venue.name,
//       }));