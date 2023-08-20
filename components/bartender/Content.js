import Description from './Description.js'
import Rideshare from './RideShare.js'
import Payment from './Payment.js'

function Content(props) {
  const selected = props.selected;

  if (selected == 'rideshare') {
    return <Rideshare shiftId={props.shiftId} />;
  } 
  else if (selected == 'payment'){
    return <Payment data={props.data} />;
  }
  else{
    return <Description
              shiftId={props.shiftId}
              data={props.data}
            />
  }
}

export default Content;
