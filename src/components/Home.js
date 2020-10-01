import React from "react";
import { useUserContext, useUpdateContext } from "./Context";

function Home() {
  let user = useUserContext();
  let update = useUpdateContext();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={update}>click</button>
      <br />
      <p>{`user context:  ${user}`}</p>
    </div>
  );
}

export default Home;
