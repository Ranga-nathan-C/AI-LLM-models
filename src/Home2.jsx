import ai from "./assets/ai1.jpg";
import ai1 from "./assets/ai3.jpg";
import ai4 from "./assets/ai.jpg";
import ai5 from "./assets/icon-user-15.jpg";

import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");


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
        setdata(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://my-json-server.typicode.com/Ranga-nathan-C/Ai-models/models"
      );
      const data = await res.json();
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setdata(filteredData);
      console.log(data);
      console.log("..");
    }
    fetchData();
  }, [query]);

  const handlefavourite = (title) => {
    try {
      const userDataString = localStorage.getItem("user");
      if (!userDataString) {
        throw new Error("User data not found in localStorage");
      }

      const userData = JSON.parse(userDataString);
      if (!userData) {
        throw new Error("Failed to parse user data from localStorage");
      }

      if (!userData.favoriteTitles) {
        userData.favoriteTitles = [];
      }

      if (userData.favoriteTitles.includes(title)) {
        console.log("Title already exists in favorites.");
        return; 
      }

      userData.favoriteTitles.push(title);

    
      localStorage.setItem("user", JSON.stringify(userData));

      console.log("User favorite updated successfully");
    } catch (error) {
      console.error("Error updating user favorite:", error);
    }
};



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
            className="navbar-toggler border-dark  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
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
                <a className="nav-link link-dark  " href="/Favourite">
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            <form className="col-md-3    text-end">
            <a
                    className=" btn rounded bg-light flex  link-dark "
                    aria-current="page"
                    href="/"
                    >
                    Logout
                    </a>

              <img
                src={ai5}
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle mr-2"
              ></img>
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
      <div className="grid-container container row-sm-12 mt-5 ml-5">
        {data.map((data) => (
          <div className="card" key={data.id}>
            <img src={data.image} className="card-img-top h-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.desc}</p>
              <div className="row">
                <div className="col">
                  <button
                    className="nav-link spann link-light"
                    onClick={() => handlefavourite(data.title)}
                  >
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
                  </button>
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
                <h6>E-mail : aimodels@gmail.com</h6>
                <h6>Address: abcde<br></br>
                    abcd
                </h6>
              </form>
            </div>
            <p>© 2024 AI Models Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
);
}