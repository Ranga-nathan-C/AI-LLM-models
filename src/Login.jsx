
const Login = () => {
    return(
        <div  className="modal back2 modal-sheet back position-static d-block  " tabIndex="-1" role="dialog" id="modalSignin"><nav
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
                <a className="nav-link nav1  link-light active" aria-current="page" href="/">
                Home
                </a>
            </li>
            </ul>
            <form className="col-md-3   text-end">
                
            <a  href="/Login" className="btn btn-primary btn-sm px-4 login  w-30 h-30 me-md-2   fw-bold" >Login</a>
            <a  href="/Signup" className="btn btn-primary btn-sm px-4  w-30 h-30 me-md-2  fw-bold" >Sign up</a>
            </form>
        </div>
        </div>
    </nav>
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-2">Login</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>

                <div className="modal-body p-5 pt-0">
                    <form className="">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <p>Don&apos;t have a account? <a  href="/Signup" className=" btn-light btn-sm sign  w-30 h-30 me-md-2  fw-bold" >Sign up</a></p>
                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" >Sign in</button>
                    <small className="text-body-secondary">By clicking Sign in, you agree to the terms of use.</small>
                    <hr className="my-4"/>
                    </form>
                </div>
                </div>
            </div>
        </div>
        
        
    )
};
export default Login;