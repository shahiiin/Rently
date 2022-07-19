import React from "react";
import Image from "next/image";
import Home from "@public/assets/home.svg";
import Ring from "@public/assets/ring.svg";

function ContentDashbord() {
  return (
    <div className="flex p-5 h-100">
      <div className="w-[350px] rounded-3xl shadow-lg shadow-cyan-500/50 m-20">
        <p className="p-10 text-purple font-bold text-2xl">My listings</p>
        <div className="text-center mt-12">
          <Image src={Home} alt="home" />
          <p className="text-purple">No listings in your account yet</p>
          <button className="bg-green-100 text-white w-[250px] h-[45px] rounded-xl mt-5">
            Sync with Property Guru
          </button>
          <button className="border  border-green-100 bg-transparent text-green-100 rounded-xl w-[250px] h-[45px] mt-5">
            Add a listing manually
          </button>
        </div>
      </div>
      <div className="w-[350px] shadow-lg shadow-cyan-500/50 rounded-3xl m-20 ">
        <p className="p-10 text-purple font-bold text-2xl">Activities</p>
        <div className="text-center mt-12">
          <Image src={Ring} alt="ring" />
          <p className="text-purple">No activities yet</p>
        </div>
      </div>
    </div>
  );
}

export default ContentDashbord;
