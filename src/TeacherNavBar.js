import { Button } from 'bootstrap';
import img from './imagesSchool/semelchatuch.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { MDBBtn } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TeacherNavBar() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Navbar bg="primary" expand="lg" 
     style={{ position: "fixed", width: "100%", zIndex: "1" }} >
        <Navbar.Brand>Teacher</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>  <MDBBtn color='dark'   onClick={() => navigate('/Teacher')}>Home</MDBBtn></Nav.Link>
          <NavDropdown title="ציונים" id="basic-nav-dropdown">
            <MDBBtn color='link'   onClick={() => navigate('/GraphSheets')}>הצגת ציונים - גרפים</MDBBtn>
             <MDBBtn color='link'   onClick={() => navigate('/GetSheets')}>הצגת ציונים</MDBBtn>
             <MDBBtn color='link'   onClick={() => navigate('/AddSheets')}>הוספת ציונים</MDBBtn>
             <MDBBtn color='link'   onClick={() => navigate('/StudentDetails')}> p</MDBBtn>
          </NavDropdown>
          <NavDropdown title="נוכחות" id="basic-nav-dropdown">
          <MDBBtn color='link'   onClick={() => navigate('/AddAttendStudent')}>סימון נוכחות</MDBBtn>
          <MDBBtn color='link'   onClick={() => navigate('/GetStudentship')}>הצגת ערכי תלמידאות</MDBBtn>
          <MDBBtn color='link'   onClick={() => navigate('/GetAttendStudent')}>הצגת נוכחות לפי תאריכים</MDBBtn>
          </NavDropdown>
         
        </Nav>
        <h3> {new Intl.DateTimeFormat('he-u-ca-hebrew',{weekday: 'long', month:'numeric', day:'numeric'}).format(new Date())}</h3>
     <img src={img} style={{height:"8rem",width:"14rem"}}></img>
  </Navbar>

  );
}

export default TeacherNavBar;
// style={{ position: "fixed", display: "flex", overflow: " hidden", width: "100%", zIndex: "1",color:"black" , boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.25) !important"}}