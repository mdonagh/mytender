import { InMemoryCache } from '@apollo/client/core';
import { nearbyShiftsCacheStrategy } from './nearbyShifts';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // This fix a blinking issue when the map is loading new markers
        // the markers was blinking because the cache not was able to
        // merge the new markers with the existing ones since the variables
        // was not the same, so the cache was not able to find the existing
        // markers and merge them.
        nearbyShifts: nearbyShiftsCacheStrategy,
      },
    },
  },
});

export default cache;
