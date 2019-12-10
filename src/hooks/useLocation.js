// think of a custom hook as a module that can use other hooks (useState, useEffect, ...)

import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timerInterval: 1000, // sample the location every second
          distanceInterval: 10 // or every 10 meters (whichever comes first)
        },
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  // by convention, hooks return arrays
  return [err];
};
