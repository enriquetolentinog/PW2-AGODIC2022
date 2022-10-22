import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar, { MenuContent } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/students/Index";
import StudentsInfo from "./pages/students/Info";
import StudentCreate from "./pages/students/Create";
import Abuelo from "./pages/params/Abuelo";
import Footer from "./components/Footer";
import UpdateStudent from "./pages/students/Update";

function App() {
  return (
    <>
      <NavBar title="School App">
        <MenuContent />
      </NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/params" element={<Abuelo />} />
        <Route exact path="/students" element={<Students />} /> {/** consulta todos */}
        <Route exact path="/students/:id" element={<StudentsInfo />} /> {/** consulta uno */}
        <Route exact path="/create/students" element={<StudentCreate />} /> {/** agregar uno */}
        <Route exact path="/update/students/:id" element={<UpdateStudent />} /> {/** agregar uno */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
