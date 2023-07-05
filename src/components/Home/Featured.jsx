import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
      <section
        className="pt-20 pb-36"
        style={{
          background: `url(${require("../../assets/img/Home-Featured.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-white">
          <div className="w-[100%] max-w-[450px]">
            <h4 className="text-3xl">Lorem Ipsum</h4>
            <h1 className="text-5xl font-semibold my-3">
              Lorem Ipsum is simply dummy text of the printing
            </h1>
            <Link to={""}>
              <img
                src={require("../../assets/img/PlayIcon.png")}
                alt="Play Icon"
                className="inline"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
