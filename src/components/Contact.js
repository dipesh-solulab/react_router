import React from "react";
import {useNavigate} from "react-router-dom"
// import { Navbar } from './Navbar'

const Contact = () => {
  const naviagte = useNavigate();

  const goBackPage=()=>{
    naviagte(-1);
  }
  return (
    <>
      {/* <Navbar/> */}
      <div className="container">
        <h1>This is contact Us Page</h1>
        {/* navigate(-1) is used to go previous page [back page] */}
        <button className="btn btn-success" onClick={goBackPage}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back Page
        </button>
      </div>
    </>
  );
};

export default Contact;
