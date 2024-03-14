import axios from "axios";
import { useState } from "react";
import TeacherNavBar from "./TeacherNavBar";
import img from './imagesSchool/notbook.png'
import {
  MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import { MDBTable } from "mdbreact";


function GetAttendStudent() {

  const getTheStudent = async (name) => {
    console.log("fds")
    let url = `https://localhost:7052/api/school/StudentClass/${name}`
    await axios.get(url)
      .then((response) => { setStudents(response.data); console.log(students); })
  }

  const GetAttendSubject = async (className) => {
    let url = `https://localhost:7052/api/school/StudentClass/studentClass/${className}`
    await axios.get(url).then((response) => { setSudentClass(response.data); console.log(studentClass) })
  }

  const aa = (s) => {
    console.log(s)
  }

  const [studentClass, setSudentClass] = useState([[[]]])
  const [students, setStudents] = useState([]);
  const handleChange = () => {
    getTheStudent(document.getElementById("inputGroupSelect02").value)
    GetAttendSubject(document.getElementById("inputGroupSelect02").value)
  }
  return (
    <div>
      <TeacherNavBar></TeacherNavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div style={{backgroundColor:"lightskyblue"}}>
      <h4 style={{width:"50%"}}> :בחר כיתה ומקצוע בהם תרצה לראות את נוכחות התלמידים</h4>
      <img src={img} style={{height:"8rem",width:"8%", float:"inline-end" ,backgroundColor:"lightblue"}}></img>
      </div> */}

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
          <select class="custom-select" id="subject" onChange={handleChange} >
            <option value="English">אנגלית</option>
            <option value="עברית">עברית</option>
            <option value="היסטוריה">היסטוריה</option>
          </select>
          <div class="input-group-append">
            <label class="input-group-text" for="subject">מקצוע</label>
          </div>
        </div>
        <br></br>
        <br></br>
        {students.length === 0 || studentClass.length == 0 ? <h1> לא נמצאה כיתה</h1> :
          <div data-spy="scroll" style={{ position: "relative" }}>
            <MDBTable scrollY >
              <thead class="table-info">
                {studentClass.subjects.find((sub) => (sub.subjectName == document.getElementById("subject").value)).dates.map((date) =>
                  <th>
                    {new Intl.DateTimeFormat('he-u-ca-hebrew', { weekday: 'short', month: 'numeric', day: 'numeric' }).format(new Date(date.split('T')))}
                  </th>
                )}
                <th>שם</th>
              </thead>
              {students.map((student) =>
                <tr>
                  {studentClass.subjects.find((sub) => (sub.subjectName == document.getElementById("subject").value))
                    .dates.map((date) => student.sheets.find((sheet) => sheet.subjectName == document.getElementById("subject").value).
                      attendance.find((day) => day.slice(0, 16) == date.slice(0, 16)) == null ? <td><h3>-</h3></td> : <td><h3>*</h3></td>)}
                  <td>{student.name}</td>
                </tr>)}
            </MDBTable>
          </div>}
      </body>
    </div>
  )
}
export default GetAttendStudent;