import React from "react";
import NormalLayout from "../../components/Layouts/NormalLayout";
import Categories from "../../components/Home/Categories";
import Featured from "../../components/Home/Featured";

const Home = () => {
  return (
    <>
      <NormalLayout>
        <Categories />
        <Featured />
      </NormalLayout>
    </>
  );
};

export default Home;
