import React from "react";
import { PaginationContainer } from "./style";

const Paginations = () => {
  return (
    <>
      <PaginationContainer
        total={100}
        defaultPageSize={10}
        pageSize="10"
      />
    </>
  );
};

export default Paginations;
