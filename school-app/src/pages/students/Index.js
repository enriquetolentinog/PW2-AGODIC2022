import React, { useEffect, useState } from "react";
import {getStudents} from '../../services/StudentService';

export default function Students(props) {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getStudents();
      setStudents(res);
    }
    fetchData();
    
  }, [])

  return (
    <>
    <h1>Students</h1>
    <table>
      <th>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Edad</td>
      </th>
      {students.map((student) => {
        return (
          <tr>
            <td>{student.nombre}</td>
            <td>{student.apellido}</td>
            <td>{student.edad}</td>
          </tr>
        )
      })}
    </table>
    </>
  )
}
