import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [facultyFilter, setFacultyFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
      setFilteredStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleFilterChange = (e) => {
    const selectedFaculty = e.target.value;
    setFacultyFilter(selectedFaculty);
    if (selectedFaculty === "All") {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(
        students.filter((student) => student.faculty === selectedFaculty)
      );
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <div>
        <select
          name="filter"
          data-testid="filter"
          value={facultyFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </select>

        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="student-data-row">
                <td>{index + 1}</td>
                <td>
                  <Link
                    to={`/student/${student.id}`}
                    data-testid={`student-link-${student.id}`}
                  >
                    {student.fullname}
                  </Link>
                </td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <button
                    data-testid={`delete-${student.id}`}
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Student;
