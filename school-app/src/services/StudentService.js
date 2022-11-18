import { AxiosConfig as axios } from "./AxiosConfig";

export const getStudents = async (token) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const response = await axios.get("/student", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createStudent = async (student) => {
  try {
    const response = await axios.post("/student", student);

    return "Creado con éxito";
  } catch (err) {
    console.error(err);
    return "Ocurrió un error inesperado";
  }
};
