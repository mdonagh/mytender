import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";

function ShowBartender() {

  const {width, height} = Dimensions.get('window');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
      <Image style={{ flex: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      width: width }}
        source={{uri: 'https://i1.wp.com/www.curiositymag.com/wp-content/uploads/2019/03/Maria-Varamo_Curiosity-1.jpeg'}}
      />

      <Text style={{ flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
      >
        Bridget DeLandi
      </Text>
      <Text style={{ flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
      >
        My name is Bridget and this is a bio I composed for my followers on MyTender!
      </Text>
      <Text style={{ flex: 1,
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
  );
}

export default ShowBartender;
