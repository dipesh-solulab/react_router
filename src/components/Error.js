import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      {/* <div>This is Error Page..</div> */}
      <div className="container">
        <div className="img_wrapper mt-2">
          <img
            src="https://betanews.com/wp-content/uploads/2016/01/Error-404-dark-clouds-warning-page-not-found-e1452851329452.jpg"
            className="img-responsive"
            alt="Error demo image"
          />
          <button className="btn btn-primary mt-4 m-auto d-flex justify-content-center">
            <Link className="text-light text-decoration-none" to="/">Home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
