import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TeacherNavBar from "./TeacherNavBar";
import React from 'react'
import img from './imagesSchool/classroom4.webp'
import {
  MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol,MDBBtn
} from 'mdb-react-ui-kit';
import { MDBTable } from "mdbreact";
import { pluralize } from "i/lib/methods";


function AddAttendStudent() {
  const getTheStudent = async (name) => {
    let url = `https://localhost:7052/api/school/StudentClass/${name}`
    await axios.get(url)
      .then((response) => { setStudent(response.data); console.log(students) })
  }

  const addAttend = async (name, subject) => {
    await axios.put(`https://localhost:7052/api/Student/${name}/${subject}`).then(response => console.log(response.data));
  }

  const addBehavior = async (name, subject) => {
    await axios.put(`https://localhost:7052/api/Student/behavior/${name}/${subject}`).then(response => console.log(response.data));
  }

  const addHW = async (name, subject) => {
    await axios.put(`https://localhost:7052/api/Student/HW/${name}/${subject}`).then(response => console.log(response.data));
  }

  const addDateToClass = async (name, subject) => {
    await axios.put(`https://localhost:7052/api/school/StudentClass/${name}/${subject}`)
  }

  const [students, setStudent] = useState([]);

  const handleChange = (event) => {
    getTheStudent(event.target.value)
  }

  const addAttends = () => {
    console.log(document.getElementById("inputGroupSelect02").value, document.getElementById("subject").value)
    addDateToClass(document.getElementById("inputGroupSelect02").value, document.getElementById("subject").value)
    students.forEach((index) => {
      console.log(document.getElementById(index.name).checked);
      document.getElementById(index.name).checked == true ? addAttend(index.name, document.getElementById("subject").value) :
        <h1></h1>
    })

    students.forEach((index) => {
      console.log(document.getElementById(`b-${index.name}`).checked);
      document.getElementById(`b-${index.name}`).checked == true ? addBehavior(index.name, document.getElementById("subject").value) :
        <h1></h1>
    })

    students.forEach((index) => {
      console.log(document.getElementById(`h-${index.name}`).checked);
      document.getElementById(`h-${index.name}`).checked == true ? addHW(index.name, document.getElementById("subject").value) :
        <h1></h1>
    })
  }

  const navigate = useNavigate();
  return (
    <div>
      <TeacherNavBar></TeacherNavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MDBRow className='g-0' style={{ backgroundColor: "lightblue" }}>
        <MDBCol md='4'>
          <MDBCardImage  src={img} width={'60%'} height={'100%'} style={{border:"1px solid black",borderRadius:"4px"}} rounded/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardText>
              <br></br>
              <h3 style={{fontSize:"3rem",fontFamily:'revert'}}>סימון ערכי תלמידאות בשעת השיעור</h3> 
              :בחר כיתה ומקצוע כדי לסמן
              <br></br>
               נוחכות ,שיעורי בית ,התנהגות ,איחורים
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
<br></br>
      <body class="body">
        <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect02" onChange={handleChange}>
            <option value="ה1">ה1</option>
            <option value="ה2">ה2</option>
            <option value="ה3">ה3</option>
          </select>
          <div class="input-group-append">
            <label class="input-group-text" for="inputGroupSelect02">כיתה</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <select class="custom-select" id="subject" onChange={handleChange} >
            <option value="English">אנגלית</option>
            <option value="עברית">עברית</option>
            <option value="היסטוריה">היסטוריה</option>
          </select>
          <div class="input-group-append" id='testName'>
            <label class="input-group-text"  for="subject">מקצוע</label>
          </div>
        </div>
        <br></br>
        {students.length === 0 ? <h1> לא נבחרה כיתה</h1> :
        <div>
          <MDBTable scrollY>
            <thead class="table-info">
              <tr>
                <th>נוכחות</th>
                <th>אי הכנת שיעור בית</th>
                <th>הערת התנהגות</th>

                <th>שם</th>
              </tr>
            </thead>
            {students.map((item) => (
              <tr >
                <td><input type="checkbox" id={item.name} ></input></td>
                <td><input type="radio" id={`h-${item.name}`}></input></td>
                <td><input type="radio" id={`b-${item.name}`}></input></td>
                <td>{item.name}
                {console.log(item)}</td>
              </tr>
            ))}
             </MDBTable>
             <MDBBtn onClick={(e) => {
                addAttends()
                navigate('/Teacher')
              }}>לאישור והכנסת הנתונים למערכת </MDBBtn>
             </div>
            }        
      </body>
    </div>
  )
}
export default AddAttendStudent;