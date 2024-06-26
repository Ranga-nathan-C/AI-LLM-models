import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [err, seterr] = useState("");
  const [remb, setRemb] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (password === cpassword) {
      seterr("");
      return;
    } else {
      seterr("Password does not match");
      return;
    }
  }, [cpassword, password]);
  const handleCheckboxChange = (e) => {
    setRemb(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cpassword || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/Ranga-nathan-C/Ai-models/users",
        {
          method: "POST",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!response.ok) {
        setError("User already exists or server error occurred!");
        setTimeout(() => {
          setError("");
        }, 3000);
        throw new Error("Sign-up failed");
      }
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      console.log("Sign-up successful");
      navigate("/Home");
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <div className="back2">
      <nav
        className="navbar navbar-expand-md navbar-dark bag"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                fill="currentColor"
                className="bi bi-robot"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
              <span className="fw-bold fs-4">Explore AI</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2  mb-md-0">
              <li className="nav-item  ">
                <a
                  className="nav-link nav1  link-light active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              
            </ul>
            <form className="col-md-3   text-end">
              <a
                href="/Login"
                className="btn btn-primary btn-sm px-4 login  w-30 h-30 me-md-2   fw-bold"
              >
                Login
              </a>
              <a
                href="/Signup"
                className="btn btn-primary btn-sm px-4  w-30 h-30 me-md-2  fw-bold"
              >
                Sign up
              </a>
            </form>
          </div>
        </div>
      </nav>
      <div
        className="modal modal-sheet  position-static d-block  p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Sign up </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingCPassword"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <p style={{ color: "red" }}>{err}</p>
                <div className="form-check text-start my-3 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                    checked={remb}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                  disabled={!remb}
                >
                  Sign up
                </button>
                {error && <p style={{ color: "red" }}>{err}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;