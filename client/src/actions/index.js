import axios from 'axios';

const URL ='/api/entries';

export const FETCH_ENTRIES = 'FETCH_ENTRIES'

export function fetchEntries() {
  // setting up the promise
  const request = axios.get(URL);

  return {
    type: FETCH_ENTRIES,
    payload: request
  };
}
