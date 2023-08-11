import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";
import { gql, useQuery } from '@apollo/client';

import { GET_SHIFT } from "../../gql/getShift";


function Description(props) {
  const {width, height} = Dimensions.get('window');
  console.log(props);
  console.log('in description');

  const { loading, error, data, refetch } = useQuery(GET_SHIFT, {
    variables:  {id: props.shiftId},
  });

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
  });

  if(loading){
    return <View style={{flex: 6}}></View>
  }

  let shift = data["shift"]
  return (
    <View style={{flex: 6}}>
      <Text style={{ flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 20
                    }}
      >
        {shift['barName']}
      </Text>
        
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
      >
        {shift["address"]}
      </Text>
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontWeight: 'bold',
                    }}
      >
        {shift["notes"]}
      </Text>
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontWeight: 'bold',
                    }}
      >
        {shift['user']['description']}
      </Text>
    </View>
    )


}

export default Description;
