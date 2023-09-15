import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Find() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'option1', label: 'Marathalli' },
    { value: 'option2', label: 'Whitefield' },
    { value: 'option3', label: 'Bellandur' },
    { value: 'option4', label: 'Kormangla' },
    { value: 'option5', label: 'Indranagar' },
  ];

  const findNearestEVChargingStation = () => {
    if (selectedOption) {
      const selectedOptionValue = selectedOption.value;
      navigate(`/${selectedOptionValue.toLowerCase()}`);
    } else {
      console.log('Please select an option.');
    }
  };

  const useCurrentLocation = () => {
    // Implement logic to use current location and navigate to the appropriate page.
    navigate('/csnearyou');
  };

  return (
    <div >
        <div className="signupPage relative border lg:w-[550px] lg:min-h-[500px]   bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative  ">
            
            <p className='text-lg font-medium  mb-5 text-zinc-600 '>Go to Home - <span className='text-indigo-600 font-medium text-lg underline'><Link to='/signin'>Logout</Link></span></p>
      
      <div style={{ textAlign: 'center' }}>
      <h1 className='text-4xl mt-2 mb-8 text-black font-medium'>Nearest EV Charging Station</h1>
      <p className='text-lg font-medium  mb-5 text-zinc-600 '>Select an option or use your current location</p>
      <Select
        options={options}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        placeholder="Select a Location"
        isSearchable
      />
      <p> | </p>
      <button className='bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg' onClick={findNearestEVChargingStation}>Find Stations</button>
      <p className="text-lg font-medium  mb-5 text-zinc-600 "> OR</p>
      <button className='bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg' onClick={useCurrentLocation}>Use Current Location</button>
    </div>
    </div>
    </div>
  );
}

export default Find;