import React from 'react'
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ThreeDots type="Puff" color="#00BFF" height={550} width={80} />
    </div>
  );
}

export default Loading