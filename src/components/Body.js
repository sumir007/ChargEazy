import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="signupPage relative border lg:w-[550px] lg:min-h-[500px]   bg-grey shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative  ">
    <div className="flex flex-col items-center mt-[150px]">
      <div className="w-[950px] h-32 text-center mb-12 text-zinc-600">\
      
        <span className='text-4xl mt-2 mb-8 text-black font-medium'>Welcome to </span>
        <span className='text-4xl mt-2 mb-8 text-black font-medium'>ChargEazy</span>
      </div>

      <Link to="/signup">
        <button className="w-[413px]  flex text-center px-3 py-3 bg-blue-700 hover:bg-blue-800 transition  rounded-xl justify-center items-center text-white text-3xl       font-normal  mb-5">
          Create an Account
        </button>
      </Link>

      <div className=" w-72 h-8 text-center text-zinc-600 text-lg font-normal">
        {" "}
        <span>Already a member?</span>{" "}
        <Link to="/signin">
          {" "}
          <span className="w-24 h-6  text-center text-lg font-semibold underline text-indigo-600 ">
            Login
          </span>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Body;
