import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";

function Description(props) {
  const {width, height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
  });

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
        Bridget
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
        Noble Experiment
      </Text>
      <Text style={{ flex: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontWeight: 'bold',
                    }}
      >
        Half off hot wings!
      </Text>
    </View>
    )


}

export default Description;
