import { View,
         Text,
         Image,
         StyleSheet,
         Dimensions} from "react-native";
import Description from './Description.js'
import Rideshare from './RideShare.js'
import Payment from './Payment.js'

function Content(props) {
  const {width, height} = Dimensions.get('window');
  const selected = props.selected;

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
  });

  if (selected == 'rideshare') {
    return <Rideshare />;
  } 
  else if (selected == 'payment'){
    return <Payment />;
  }
  else{
    return <Description />
  }
}

export default Content;
