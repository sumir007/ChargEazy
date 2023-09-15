// Import the ChargingStationDetails component at the top of your file
import CharStn1 from './CharStn1';

function Stn3() {
  return (
    <div className="App">
      <CharStn1 stationId={203} reviewId1={404} reviewId2={405} />
    </div>
  );
}

export default Stn3;
