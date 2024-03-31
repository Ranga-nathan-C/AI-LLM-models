import ai from "./assets/ai1.jpg";
import ai1 from "./assets/ai3.jpg";
import ai4 from "./assets/ai.jpg";

import { useEffect, useState } from "react";

export default function Home() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(
            "https://my-json-server.typicode.com/Ranga-nathan-C/Ai-models/models"
            );
            if (!response.ok) {
            throw new Error("Error fetching data");
            }
            const data = await response.json();
            console.log(data);
            setdata(data);
        } catch (error) {
            console.error("Error:", error);
        }
        };

        fetchData();
    }, []);
    return (
        <div className="container-fulid bg1">
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
                <ul className="navbar-nav me-auto   mb-md-0">
                <li className="nav-item  ">
                    <a
                    className="nav-link nav1 nav2  link-light active"
                    aria-current="page"
                    href="/"
                    >
                    Home
                    </a>
                </li>
                <li className="nav-item nav2">
                    <a className="nav-link  link-dark" href="/Liked">
                    Liked
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star mb-1"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                    </a>
                </li>
                <li className="nav-item nav2">
                    <a className="nav-link link-dark " href="/Favourite">
                    Favourite
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                    >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                    </a>
                </li>
                </ul>
                <form role="search">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                </form>
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
            id="myCarousel"
            className="carousel slide mb-6"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
            ></button>
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
            ></button>
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
            ></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={ai} className="img" alt="" />
                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Artificial Intelligence</h1>
                    <p className="opacity-75">
                    AI: Machines mimicking human intelligence.
                    </p>
                    <p>
                    <a
                        className="btn btn-lg btn-primary"
                        href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                    >
                        Learn more
                    </a>
                    </p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={ai1} className="img" alt="" />
                <div className="container">
                <div className="carousel-caption">
                    <h1>AI Tools and Frameworks</h1>
                    <p>Explore popular AI development tools and frameworks.</p>
                    <p>
                    <a
                        className="btn btn-lg btn-primary"
                        href="https://5ly.co/blog/best-ai-frameworks/"
                    >
                        Explore it
                    </a>
                    </p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={ai4} className="img" alt="" />
                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>Getting Started with AI</h1>
                    <p>
                    Learn from resources and guidance for individuals or
                    businesses looking to start their AI journey.
                    </p>
                    <p>
                    <a
                        className="btn btn-lg btn-primary"
                        href="https://microsoft.github.io/AI-For-Beginners/"
                    >
                        Resources
                    </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
            >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
            >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="grid-container row-sm-12 mt-5 ml-5">
            {data.map((data) => (
            <div className="card" key={data.id}>
                
                <img src={data.image} className="card-img-top h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.desc}</p>
                    <div className="row">
                    <div className="col">
                        <a className="nav-link spann link-light" href="/Favourite">
                        Favourite
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                        </a>
                    </div>
                    <div className="col">
                        <a className="nav-link spann1 link-light" href="/Liked">
                        Like
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star mb-1"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                        </svg>
                        </a>
                    </div>
                    <div className="col">
                    <a href={data.tryitout} className="btn spann btn-primary">
                    Try it out
                    </a>
                    </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className="container">
            <footer className="py-5">
            <div className="row">
                <div className="col-6 col-md-2 mb-3">
                <h5>Connect</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Home
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        About
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        AI Models
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        FAQs
                    </a>
                    </li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5>Explore</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        AI evolution
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Large Language Models
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Advanced ML Algorithms
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Deep Learning 
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        About
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-md-5 offset-md-1 mb-3">
                <form>
                    <p>Contact Us</p>
                    <h6>Phone no: 91+ 123 456789</h6>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                        Email address
                    </label>
                    <input
                        id="newsletter1"
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                        Send
                    </button>
                    </div>
                </form>
                </div>
                <p>© 2024 AI Models Company, Inc. All rights reserved.</p>
            </div>
            </footer>
        </div>
        </div>
    );
}