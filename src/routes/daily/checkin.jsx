import DisplayBar from "../../components/displayBar";
import CheckinButtons from "../../components/checkinButtons";
const Checkin = () => (

  <div>
    <DisplayBar name="Daily Check-In"></DisplayBar>
   <CheckinButtons question="Did you vape today?" range={false} money={false}/>
  </div>

);

export default Checkin;
