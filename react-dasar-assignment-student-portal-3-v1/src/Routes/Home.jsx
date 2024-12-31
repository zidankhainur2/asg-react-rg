import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Studi Independent Kampus Merdeka</h1>
            <p className="hero-subtitle">by Ruangguru</p>
          </div>
        </div>
        <div className="features">
          <h2 className="features-title">Welcome to Student Portal</h2>
          <button
            data-testid="student-btn"
            onClick={() => navigate("/student")}
          >
            All Student
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
