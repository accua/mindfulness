import axios from 'axios';

const ROOT_URL ='/api';

export const FETCH_ENTRIES = 'FETCH_ENTRIES'
export const FETCH_ENTRY = 'FETCH_ENTRY'
export const CREATE_ENTRY = 'CREATE_ENTRY'

export function fetchEntries() {
  // setting up the promise
  const request = axios.get(`${ROOT_URL}/entries`);

  return {
    type: FETCH_ENTRIES,
    payload: request
  };
}

export function fetchEntry(id) {
  const request = axios.get(`${ROOT_URL}/entries/${id}`);

  return {
    type: FETCH_ENTRY,
    payload: request
  };
}

export function createEntry(values, callback) {
  console.log('values: ',values);
 const request = axios.post(`${ROOT_URL}/entries`, values)
    .then(() => callback());

 return {
   type: CREATE_ENTRY,
   payload: request
 };
}
