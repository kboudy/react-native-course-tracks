// think of a custom hook as a module that can use other hooks (useState, useEffect, ...)

import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timerInterval: 1000, // sample the location every second
            distanceInterval: 10 // or every 10 meters (whichever comes first)
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      // cleanup
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  // by convention, hooks return arrays
  return [err];
};
