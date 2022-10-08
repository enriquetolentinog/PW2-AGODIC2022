import React from "react";
import { useParams } from "react-router-dom";

export default function StudentsInfo() {
  const { id } = useParams();

  return <div>Info student {id}</div>;
}
