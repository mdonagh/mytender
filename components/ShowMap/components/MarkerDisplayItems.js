import { memo, useMemo } from 'react';
import { MarkerDisplayItem } from './MarkerDisplayItem';

export const MarkerDisplayItems = memo(({ shiftMarkers = [], navigation }) => {
  // we need to memoize and sort to avoid small blinking on the map
  const memoizedMarkers = useMemo(
    () => [...shiftMarkers].sort((a, b) => a.id - b.id),
    [JSON.stringify(shiftMarkers)],
  );

  return (
    <>
      {memoizedMarkers.map((shiftMarker) => (
        <MarkerDisplayItem
          key={shiftMarker.id}
          navigation={navigation}
          shiftMarker={shiftMarker}
        />
      ))}
    </>
  );
});
