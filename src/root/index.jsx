import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { sidebar } from "../utils/sidebar";
import { Container } from "./style";

const Root = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          {sidebar.map(({ path, id }) => {
            return <Route key={id} path={path} element={<Sidebar />} />;
          })}
        </Routes>
        <Routes>
          {sidebar.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Routes>
      </Container>
    </>
  );
};

export default Root;
