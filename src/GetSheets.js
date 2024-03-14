import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TeacherNavBar from "./TeacherNavBar";
import img from './imagesSchool/notbook.png'
import {
  MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn
} from 'mdb-react-ui-kit';
import { MDBTable } from "mdbreact";
import ModelUpdateSheet from "./ModelUpdateSheet";


function GetSheets() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const getTheStudent = async (name) => {
    console.log("fds")
    let url = `https://localhost:7052/api/school/StudentClass/${name}`
    await axios.get(url)
      .then((response) => { setStudents(response.data); console.log(students); })
  }

  const getTheStudentClass = async (name) => {
    console.log(name)
    let url = ` https://localhost:7052/api/school/StudentClass/studentClass/${name}`
    await axios.get(url)
      .then((response) => { setStudentClass(response.data); console.log(studentClass); })
  }

  const aa = (s) => {
    console.log(s)
  }

  const [students, setStudents] = useState([]);
  const [studentClass, setStudentClass] = useState([]);
  const handleChange = () => {
    getTheStudent(document.getElementById("inputGroupSelect02").value)
    getTheStudentClass(document.getElementById("inputGroupSelect02").value)
  }
  return (
    <div>
      <TeacherNavBar></TeacherNavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MDBRow className='g-0' style={{ backgroundColor: "lightblue" }}>
        <MDBCol md='4'>
          <MDBCardImage src={img} width={'50%'} height={'90%'} />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardText>
              <br></br>
              בחר כיתה ומקצוע בהם תרצה
              <br></br>
              : לראות את נוכחות התלמידים
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
          <select class="custom-select" id="subject" onChange={handleChange}>
            <option value="English">אנגלית</option>
            <option value="עברית">עברית</option>
            <option value="History">היטטוריה</option>
          </select>
          <div class="input-group-append">
            <label class="input-group-text" for="subject">מקצוע</label>
          </div>
        </div>
        <br></br>
        <br></br>
        {students.length === 0 || studentClass.length == 0 ? <h1> לא נמצאה כיתה</h1> :
        <div>
          <MDBTable scrollY>
            <thead class="table-info">
              <tr>
                <th>עדכון</th>
                {studentClass.subjects.find((s) => s.subjectName == document.getElementById("subject").value).tastesNames
                  .map((n, index) => <th>{`מבחן ${index}`}<br></br>{n}</th>)}
                <th >שם </th>
              </tr>
            </thead>
            {students.map((student) => (
              <tr>
                <td>
                  <ModelUpdateSheet student={student} sheets={student.sheets.
                    find((s) => s.subjectName == document.getElementById("subject").value).testSheets}
                    subject={document.getElementById("subject").value} ></ModelUpdateSheet>
                </td>
                {student.sheets.find((s) => s.subjectName == document.getElementById("subject").value).
                  testSheets.map((a) => a == -1 ? <td>{"אין ציון"}</td> : <td>{a}</td>)}
                <td><ap>{student.name}</ap></td>
              </tr>
            ))}
          </MDBTable>
           <MDBBtn onClick={(e) => {
           handleChange()
          }}>החל שינויים</MDBBtn>
         </div>
        }
      </body>
    </div>
  )
}
export default GetSheets;