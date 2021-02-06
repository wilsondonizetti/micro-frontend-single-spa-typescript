import React from "react";
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <img src={`${process.env.REACT_APP_CONTENT_HOST}/logo.svg`} alt="logo" />
    </>
  );
};
export default Home;
