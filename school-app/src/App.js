import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar, { MenuContent } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/students/Index";
import StudentsInfo from "./pages/students/Info";
import StudentCreate from "./pages/students/Create";
import Abuelo from "./pages/params/Abuelo";

function App() {
  return (
    <Fragment>
      <NavBar title="School App">
        <MenuContent />
      </NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/students/:id" element={<StudentsInfo />} />
        <Route exact path="/create/students" element={<StudentCreate />} />
        <Route exact path="/params" element={<Abuelo />} />
      </Routes>
    </Fragment>
  );
}

export default App;
