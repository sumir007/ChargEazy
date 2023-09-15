// Import the ChargingStationDetails component at the top of your file
import CharStn1 from './CharStn1';

function Stn2() {
  return (
    <div className="App">
      <CharStn1 stationId={202} reviewId1={403} reviewId2={409} />
    </div>
  );
}

export default Stn2;
