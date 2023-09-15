
import React from 'react';
import { Link } from 'react-router-dom';

function Option2() {
  return (
    <div className="signupPage relative border lg:w-[550px] lg:min-h-[500px]   bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative  ">
            
            <p className='text-lg font-medium  mb-5 text-zinc-600 '>Previous page - <span className='text-indigo-600 font-medium text-lg underline'><Link to='/find'>Find nearby stations</Link></span></p>
      
    <div style={{ textAlign: 'center' }}>
      <h1 className='text-4xl mt-2 mb-8 text-black font-medium'>Charging Stations Nearby WHITEFIELD</h1>
      <p className='text-lg font-medium  mb-5 text-zinc-600 '>Find charging stations near your location:</p>
      <ul>
        <li>
        <span className='text-indigo-600 font-medium text-lg underline'><Link to='/stn7'>Mahindra Electric Fast charger</Link></span>
        </li>
        <li>
        <span className='text-indigo-600 font-medium text-lg underline'><Link to='/stn2'>Ather Grid Charging Point</Link></span>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Option2;
