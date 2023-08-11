import Description from './Description.js'
import Rideshare from './RideShare.js'
import Payment from './Payment.js'

function Content(props) {
  const selected = props.selected;

  if (selected == 'rideshare') {
    return <Rideshare />;
  } 
  else if (selected == 'payment'){
    return <Payment />;
  }
  else{
    return <Description shiftId={props.shiftId} />
  }
}

export default Content;
