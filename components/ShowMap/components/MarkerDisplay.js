import { useQuery } from '@apollo/client';
import { NEARBY_SHIFTS } from '../../../gql/nearbyShifts';
import { MarkerDisplayItems } from './MarkerDisplayItems';

export const MarkerDisplay = ({ coordinates, navigation }) => {
  const { loading, error, data } = useQuery(NEARBY_SHIFTS, {
    variables: coordinates,
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    Toast.show({
      type: 'error',
      text1: error.message,
    });
  }

  if (loading && !data) {
    return null;
  } else {
    return (
      <MarkerDisplayItems
        navigation={navigation}
        shiftMarkers={data?.nearbyShifts?.nodes}
      />
    );
  }
};
