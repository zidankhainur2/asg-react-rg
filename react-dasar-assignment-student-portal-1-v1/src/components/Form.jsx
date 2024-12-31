import React, { useState } from "react";

const Form = ({ addStudent }) => {
  // State untuk menyimpan input dari form
  const [fullname, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Membuat objek student baru
    const newStudent = {
      fullname,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    // Memanggil fungsi addStudent dari props untuk menambahkan student baru
    addStudent(newStudent);

    // Reset input setelah submit
    setFullName("");
    setBirthDate("");
    setGender("");
    setFaculty("");
    setProgramStudy("");
  };

  return (
    <>
      <form id="form-student" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input-name">Fullname</label>
          <input
            type="text"
            id="input-name"
            value={fullname}
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
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-gender">Gender</label>
          <select
            id="input-gender"
            value={gender}
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
          <select
            id="input-faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            required
          >
            <option value="">Select Faculty</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="input-prody">Program Study</label>
          <select
            id="input-prody"
            value={programStudy}
            onChange={(e) => setProgramStudy(e.target.value)}
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
        <input type="submit" id="add-btn" value="Add student" />
      </form>
    </>
  );
};

export default Form;
