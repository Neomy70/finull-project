import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { MDBBtn, MDBValidationItem, MDBInput } from 'mdb-react-ui-kit';



function Home() {

  const getTheName = async (name) => {
    let url = `https://localhost:7052/api/school/TeachersClass/${name}`
    await axios.get(url)
      .then((response) => { setTeacher(response.data); console.log(teacher.name) })


  }

  const getTeacherByPassword = async (name, identity) => {
    console.log("jjjjj")
    let url = `https://localhost:7052/api/Teacher/${name}/${identity}`
    await axios.get(url)
      .then((response) => { setTeacher(response.data); console.log(teacher.name) })
  }
  const [teacher, setTeacher] = useState(0);


  const navigate = useNavigate();
  return (
    <div>
      <h1>fdggg</h1>
      
      <MDBValidationItem className='mb-3' size='sm' textBefore='name'>
        <MDBInput className='form-control' type='text' id="TeacherName" label="שם" />
      </MDBValidationItem>

      <MDBValidationItem className='mb-3' textBefore='password'>
        <MDBInput className='form-control' type='text' id="TeacherPassword" label="סיסמה" />
      </MDBValidationItem>

      <MDBValidationItem className='mb-3' >
        <MDBBtn id="shopNaevigate" onClick={() => {
          setTeacher(0)
          console.log(teacher)
          // console.log(document.getElementById("TeacherName").value, document.getElementById("TeacherPassword").value)
          getTeacherByPassword(document.getElementById("TeacherName").value, document.getElementById("TeacherPassword").value)
          teacher == 0 ? <h1 style={{ color: "black" }}>The username or password is incorrect</h1> : navigate('/Teacher')
        }}
        >כניסה</MDBBtn>
      </MDBValidationItem>

    </div>

  )

}

export default Home;