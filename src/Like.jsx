import PropTypes from 'prop-types'; 

function LikePage({ like }) {
    return (
        <div>
        <h2>Liked Items</h2>
        <div className="card-container">
            {like.map((data, dataid) => (
            <div className="card" key={dataid}>
                    
            <img src={data.image} className="card-img-top h-50" alt="..." />
            <div className="card-body" >
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.desc}</p>
                <div className="row">
                <div className="col">
                    <a className="nav-link spann link-light" href="/Favourite" >
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
                    <a className="nav-link spann1 link-light" href="/Liked" >
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
        </div>
    );
    }

    LikePage.propTypes = {
    like: PropTypes.array.isRequired, 
};

export default LikePage;
