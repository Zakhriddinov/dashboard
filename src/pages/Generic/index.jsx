import React from "react";
import { useLocation } from "react-router-dom";

const Generic = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default Generic;
