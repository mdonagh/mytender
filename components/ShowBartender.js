import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";

function ShowBartender() {

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
      <Image style={{ flex: 6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth, 
                      width: width }}
        source={{uri: 'https://i1.wp.com/www.curiositymag.com/wp-content/uploads/2019/03/Maria-Varamo_Curiosity-1.jpeg'}}
      />
      <View style={{ flex: 1,
                     alignItems: 'center',
                     justifyContent: 'flex-start',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     padding: 10
                    }}>
        <View style={{flex: 1}}>
          <Image source={require('../assets/question-mark.png')} style={styles.image} />
        </View>
        <View style={{flex: 1}}>
          <Image source={require('../assets/money.png')} style={styles.image}  />
        </View>
        <View style={{flex: 1}}>
          <Image source={require('../assets/full-heart.png')} style={styles.image}  />
        </View>
        <View style={{flex: 1}}>
          <Image source={require('../assets/taxi.png')} style={styles.image}  />
        </View>
      </View>
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
  );
}

export default ShowBartender;
