import { Spinner } from "@material-tailwind/react";
import React from "react";
import GloabalLoading from "../../common/globalLoader/GloabalLoading";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className=" mt-1 font-medium  text-sm flex justify-center items-center flex-col py-5">
        {" "}
        {/* <img src={StageDrivingLogo} alt="" className="w-20 py-5" /> */}
        {/* <Spinner className="h-8 w-8"/>
        <p className="text-bold text-xl">Loading ...</p> */}
        <GloabalLoading />
      </span>
    </div>
  );
};

export default Loading;
