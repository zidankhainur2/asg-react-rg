import React, { useState } from "react";

const Form = ({ addStudent }) => {
  const [fullname, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const facultyMapping = {
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

  const handleProgramStudyChange = (e) => {
    const selectedProgramStudy = e.target.value;
    setProgramStudy(selectedProgramStudy);
    setFaculty(facultyMapping[selectedProgramStudy] || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      fullname,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    addStudent(newStudent);

    setFullName("");
    setBirthDate("");
    setGender("");
    setFaculty("");
    setProgramStudy("");
  };

  return (
    <form id="form-student" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="input-name">Fullname</label>
        <input
          type="text"
          id="input-name"
          value={fullname}
          data-testid="name"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-date">Birth Date</label>
        <input
          type="date"
          id="input-date"
          value={birthDate}
          data-testid="date"
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-gender">Gender</label>
        <select
          id="input-gender"
          value={gender}
          data-testid="gender"
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="input-faculty">Faculty</label>
        <input
          type="text"
          id="input-faculty"
          value={faculty}
          readOnly
          data-testid="faculty"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-prody">Program Study</label>
        <select
          id="input-prody"
          value={programStudy}
          data-testid="prody"
          onChange={handleProgramStudyChange}
          required
        >
          <option value="">Select Program Study</option>
          <option value="Ekonomi">Ekonomi</option>
          <option value="Manajemen">Manajemen</option>
          <option value="Akuntansi">Akuntansi</option>
          <option value="Administrasi Publik">Administrasi Publik</option>
          <option value="Administrasi Bisnis">Administrasi Bisnis</option>
          <option value="Hubungan Internasional">Hubungan Internasional</option>
          <option value="Teknik Sipil">Teknik Sipil</option>
          <option value="Arsitektur">Arsitektur</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Informatika">Informatika</option>
        </select>
      </div>
      <input
        type="submit"
        id="add-btn"
        value="Add student"
        data-testid="submit"
      />
    </form>
  );
};

export default Form;
