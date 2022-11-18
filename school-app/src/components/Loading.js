import React from "react";
import loadingImg from "../img/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading" />
  </div>
);

export default Loading;