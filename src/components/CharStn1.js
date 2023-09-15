import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 

const CharStn1 = ({ stationId, reviewId1,reviewId2 }) => {
  const [stationData, setStationData] = useState({});
  const [providerData, setProviderData] = useState({});
  const [review1Data, setReview1Data] = useState({});
  const [review2Data, setReview2Data] = useState({});

 

  useEffect(() => {
    // Fetch Charging Station Details
    axios
      .get(`http://localhost:5099/api/ChargeEazy/GetStnById/${stationId}`)
      .then((response) => {
        setStationData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching charging station details:', error);
      });

 

    // Fetch Provider Details
    axios
      .get(`http://localhost:5099/api/ChargeEazy/GetProById/${stationData.providerId}`)
      .then((response) => {
        setProviderData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching provider details:', error);
      });

       // Fetch Review 1 Details
    axios
    .get(`http://localhost:5099/api/ChargeEazy/GetRevById/${reviewId1}`)
    .then((response) => {
      setReview1Data(response.data);
    })
    .catch((error) => {
      console.error('Error fetching provider details:', error);
    });

     // Fetch Review 2 Details
     axios
     .get(`http://localhost:5099/api/ChargeEazy/GetRevById/${reviewId2}`)
     .then((response) => {
       setReview2Data(response.data);
     })
     .catch((error) => {
       console.error('Error fetching provider details:', error);
     });

  });

 

  return (
<div>
<div className="signupPage relative border lg:w-[1350px] lg:min-h-[1100px] bg-white shadow-2xl rounded-2xl px-5 pt-5 text-zinc-400 font-medium relative">
<p className="text-lg font-medium mb-5 text-zinc-600">
          Previous page -{' '}
<span className="text-indigo-600 font-medium text-lg underline">
<Link to="/find">Find nearby stations</Link>
</span>
</p>

 

        <div style={{ textAlign: 'center' }}>
<h1 className="text-4xl mt-2 mb-8 text-black font-medium">Charging Station Details</h1>

 

          <h2 className="text-4xl mt-2 mb-8 text-black font-medium">Station Details</h2>

 

          <div className="overflow-x-auto">
<table className="w-full table-relative border-collapse border border-black">
<thead>
<tr>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Station ID
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Station Name
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Location
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Address
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Provider ID
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Capacity
</th>
<th className="w-1/7 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Status
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.stationId}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.stationname}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.location}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.address}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.providerId}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.chargingCapacity}
</td>
<td className="w-1/7 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {stationData.status}
</td>
</tr>
</tbody>
</table>
</div>

 

          <h2 className="text-4xl mt-2 mb-8 text-black font-medium">Provider Details</h2>

 

          <div className="overflow-x-auto">
<table className="w-full table-fixed border-collapse border border-black">
<thead>
<tr>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Provider ID
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Provider Name
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Contact
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Website
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {providerData.proId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {providerData.proname}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {providerData.contact}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {providerData.website}
</td>
</tr>
</tbody>
</table>
</div>




<h2 className="text-4xl mt-2 mb-8 text-black font-medium">Reviews</h2>

 

          <div className="overflow-x-auto">
<table className="w-full table-fixed border-collapse border border-black">
<thead>
<tr>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Review ID
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    User ID
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Station ID
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Rating
</th>
<th className="w-1/4 text-2xl mt-2 mb-8 text-black font-medium border border-black p-2">
                    Comment
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review1Data.reviewId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review1Data.userId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review1Data.stnId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review1Data.rating}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review1Data.comment}
</td>
</tr>
<tr>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review2Data.reviewId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review2Data.userId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review2Data.stnId}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review2Data.rating}
</td>
<td className="w-1/4 text-lg font-medium mb-5 text-zinc-600 border border-black p-2">
                    {review2Data.comment}
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
  );
};

 

export default CharStn1;