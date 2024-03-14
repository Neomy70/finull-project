import { Button } from 'bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { MDBBtn } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function secretaryNavBar() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Navbar bg="primary" expand="lg" >
       
       <Navbar.Brand>Teacher</Navbar.Brand>
        <Nav className="me-auto">
         
          <Nav.Link>  <MDBBtn color='dark'   onClick={() => navigate('/Teacher')}>Home</MDBBtn></Nav.Link>
          <NavDropdown title="תלמידים" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2"> <MDBBtn color='link'   onClick={() => navigate('/GraphSheets')}>ציונים</MDBBtn></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> <MDBBtn color='link'   onClick={() => navigate('/Student details')}>פרטים</MDBBtn></NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="נוכחות" id="basic-nav-dropdown">
          <MDBBtn color='link'   onClick={() => navigate('/AddAttendStudent')}>סימון נוכחות</MDBBtn>
          </NavDropdown>
          <NavDropdown title="התנהגות" id="basic-nav-dropdown">
          <MDBBtn color="link" onClick={() => navigate('/AddStudentsbehavior')}>הערות התנהגות</MDBBtn>
          </NavDropdown>
        </Nav>
     
  </Navbar>

  );
}

export default secretaryNavBar;
