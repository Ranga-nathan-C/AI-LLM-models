
const Login = () => {
    return(
        <div  className="modal back2 modal-sheet back position-static d-block bg-body-secondary " tabIndex="-1" role="dialog" id="modalSignin"><nav
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
            <li className="nav-item nav2">
                <a className="nav-link  link-dark" href="/Liked">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                </svg>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link link-dark " href="Favourite">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
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
                        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <p>Don&apos;t have a account? <a  href="/Signup" className=" btn-light btn-sm sign  w-30 h-30 me-md-2  fw-bold" >Sign up</a></p>
                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" >Sign in</button>
                    <small className="text-body-secondary">By clicking Sign in, you agree to the terms of use.</small>
                    <hr className="my-4"/>
                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                    <button className="w-100 py-2  mb-2 btn btn-outline-secondary rounded-3" type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x mx-2 " viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                        Sign in with Twitter
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mx-2" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                        Sign in with Facebook
                    </button>
                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mx-2" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                        Sign in with GitHub
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        
        
    )
};
export default Login;