import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        const data = await response.json();
        setFormData({
          fullname: data.fullname,
          profilePicture: data.profilePicture,
          address: data.address,
          phoneNumber: data.phoneNumber,
          birthDate: data.birthDate,
          gender: data.gender,
          programStudy: data.programStudy,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const facultyMap = {
      Ekonomi: "Fakultas Ekonomi",
      Manajemen: "Fakultas Ekonomi",
      Akuntansi: "Fakultas Ekonomi",
      "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
      "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
      "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
      "Teknik Sipil": "Fakultas Teknik",
      Arsitektur: "Fakultas Teknik",
      Matematika: "Fakultas Teknologi Informasi dan Sains",
      Fisika: "Fakultas Teknologi Informasi dan Sains",
      Informatika: "Fakultas Teknologi Informasi dan Sains",
    };

    const faculty = facultyMap[formData.programStudy] || "";

    const updatedStudent = {
      ...formData,
      faculty,
    };

    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      navigate("/student");
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      
      <div>
        <img src={formData.profilePicture} alt={formData.fullname} />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              data-testid="name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Profile Picture:</label>
            <input
              type="text"
              data-testid="profilePicture"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              data-testid="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              data-testid="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Birth Date:</label>
            <input
              type="date"
              data-testid="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              data-testid="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label>Program Study:</label>
            <select
              data-testid="prody"
              name="programStudy"
              value={formData.programStudy}
              onChange={handleChange}
              required
            >
              <option value="">Select Program Study</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">
                Hubungan Internasional
              </option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </select>
          </div>
          <button type="submit" data-testid="edit-btn">
            Update student
          </button>
        </form>
      </div>
    </>
  );
}

export default EditStudent;
