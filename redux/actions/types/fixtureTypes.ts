export const FETCH_FIXTURES_PENDING = 'FETCH_FIXTURES_PENDING';
export const FETCH_FIXTURES_COMPLETED = 'FETCH_FIXTURES_COMPLETED';
export const FETCH_FIXTURES_FAILED = 'FETCH_FIXTURES_FAILED';

export type Fixture = {
  fixture: {
    id: number;
    date: string;
    [key: string]: any;
  };
  teams: any;
//   goals: any;
  [key: string]: any;
};

export type FixtureState = {
  loading: boolean;
  error: string | null;
  data: Fixture[];
};

export type FetchFixturesPendingAction = {
  type: typeof FETCH_FIXTURES_PENDING;
};

export type FetchFixturesCompletedAction = {
  type: typeof FETCH_FIXTURES_COMPLETED;
  payload: Fixture[];
};

export type FetchFixturesFailedAction = {
  type: typeof FETCH_FIXTURES_FAILED;
  error: string;
};

export type FixtureAction =
  | FetchFixturesPendingAction
  | FetchFixturesCompletedAction
  | FetchFixturesFailedAction;
