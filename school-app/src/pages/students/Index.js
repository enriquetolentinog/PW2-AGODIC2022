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

  return <div>Students</div>;
}
