import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../validation/authSchema";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
    style={{ 
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}
    className="d-flex justify-content-center align-items-center"
  >
    <div
      className="card shadow p-4"
      style={{
  width: "500px",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.55)", 
  borderRadius: "15px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.3)",
}}
>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (
              savedUser &&
              savedUser.email === values.email &&
              savedUser.password === values.password
            ) {
              navigate("/home");
            } else {
              alert("Invalid credentials");
            }
          }}
        >
          <Form>
            <div>
              <Field name="email" placeholder="Email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            <div className="mt-3">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="text-danger small" />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-4">
              Login
            </button>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
