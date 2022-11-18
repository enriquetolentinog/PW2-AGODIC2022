import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/StudentService";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";

const Students = (props) => {
  const [students, setStudents] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function fetchData() {
      const token = await getAccessTokenSilently();
      //console.log(token);
      const res = await getStudents(token);
      setStudents(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student.nombre}</td>
                <td>{student.apellido}</td>
                <td>{student.edad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default withAuthenticationRequired(Students, {
  onRedirecting: () => <Loading />,
});
