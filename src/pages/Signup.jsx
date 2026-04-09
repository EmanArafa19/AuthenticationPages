import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "../validation/authSchema";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function Signup() {
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
  width: "600px",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.55)", 
  borderRadius: "15px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.3)",
}}

    >
        <Formik
          initialValues={{
            firstName: "",
            secondName: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            localStorage.setItem("user", JSON.stringify(values));
            navigate("/");
          }}
        >
          <Form>
            <div className="row">
              <div className="col">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
                <ErrorMessage name="firstName" component="div" className="text-danger small" />
              </div>

              <div className="col">
                <Field
                  name="secondName"
                  placeholder="Second Name"
                  className="form-control"
                />
                <ErrorMessage name="secondName" component="div" className="text-danger small" />
              </div>
            </div>

            <div className="mt-3">
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

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Sign Up
            </button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/">Login</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
