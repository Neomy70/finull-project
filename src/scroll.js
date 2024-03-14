import React from "react";
import { MDBContainer } from "mdbreact";
import "./scrollbar.css";

const ScrollBarPage = () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
    <MDBContainer>
      <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
        <img
          alt=""
          src="https://mdbootstrap.com/img/Photos/Others/img%20(51).webp"
        />
      </div>

      <div className="scrollbar my-5 mx-auto" style={scrollContainerStyle}>
        <img
          alt=""
          src="https://mdbootstrap.com/img/Photos/Others/img%20(51).webp"
        />
      </div>
    </MDBContainer>
  );
}
export default ScrollBarPage;