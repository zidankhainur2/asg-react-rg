import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const addStudent = async (newStudent) => {
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      const addedStudent = await response.json();
      setStudents((prevStudents) => [
        ...prevStudents,
        {
          ...newStudent,
          id: addedStudent.id || Date.now().toString(), 
        },
      ]);

      return addedStudent; 
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h2 className="nav-text">DASHBOARD ADMIN</h2>
      <Form addStudent={addStudent} />
      <br />
      <Table students={students} handleDelete={handleDelete} />
    </>
  );
};

export default App;
