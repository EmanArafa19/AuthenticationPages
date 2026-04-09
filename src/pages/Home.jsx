import { useNavigate } from "react-router-dom";
import bb from "../assets/bb.jpg";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    navigate("/");
  };

  return (
  <div
    style={{
      backgroundImage: `url(${bb})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      backgroundBlendMode: "darken",
    }}
    className="d-flex justify-content-center align-items-center"
  >
    <div
      className="card shadow p-5 text-center"
      style={{
        width: "450px",
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.45)",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <h2 className="mb-4">
        Welcome {user?.firstName} {user?.secondName}
      </h2>
        <button onClick={logout} className="btn btn-danger mt-4">
          Logout
        </button>
      </div>
    </div>
  );
}
