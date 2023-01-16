import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";

function Payment(props) {
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
        Payment
      </Text>
    </View>
    )


}

export default Payment;
