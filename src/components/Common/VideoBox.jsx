import React from "react";
import { Link } from "react-router-dom";

const VideoBox = ({ info, hidePlayBtn }) => {
  return (
    <>
      <div className="relative">
        {!hidePlayBtn && (
          <Link to={`./video/${info._id}`}>
            <img
              src={require("../../assets/img/PlayIcon2.png")}
              alt="Play Icon White"
              className="w-full max-w-[45px] absolute right-2 top-2"
            />
          </Link>
        )}
        <div
          style={{
            background: `url(${info.thumbnail})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[250px] w-full rounded-xl"
        ></div>
        <h2 className="text-md text-[#232323] font-semibold mt-2">
          <Link to={`./video/${info._id}`}>{info.title}</Link>
        </h2>
      </div>
    </>
  );
};

export default VideoBox;
