// Import the ChargingStationDetails component at the top of your file
import CharStn1 from './CharStn1';

function Stn1() {
  return (
    <div className="App">
      <CharStn1 stationId={201} reviewId1={401} reviewId2={402} />
    </div>
  );
}

export default Stn1;
