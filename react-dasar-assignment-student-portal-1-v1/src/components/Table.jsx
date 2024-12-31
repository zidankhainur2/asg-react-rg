const Table = ({ students = [], handleDelete }) => {
  return (
    <>
      <div className="table-container">
        <h2>Registered Students</h2>
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Student ID</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody id="student-data">
            {students.length > 0 ? (
              students.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.gender}</td>
                  <td>{item.studentId}</td>
                  <td>{item.faculty}</td>
                  <td>{item.programStudy}</td>
                  <td>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No students available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
