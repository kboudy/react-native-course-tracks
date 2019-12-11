import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {
  dispatch({ type: 'fetch_tracks', payload: null });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack
  },
  []
);
