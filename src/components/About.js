import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigates = useNavigate();
  const redirectContactPage = () => {
    // console.log("its working...on click");
    navigates("/contact");
  };
  return (
    <>
      <div className="container">
        <h1>This is About Us Page</h1>
        {/* //redirect page using useNavigate hook from react-route-dom library */}
        <button className="btn btn-info" onClick={redirectContactPage}>
          Go to Contact us Page
        </button>
      </div>
    </>
  );
};

export default About;
