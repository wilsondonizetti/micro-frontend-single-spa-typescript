import React from "react";
import Home from "./home.component";

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted! React</section>
      <Home />
    </>
  );
}
