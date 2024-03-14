import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import TeacherNavBar from "./TeacherNavBar";
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable } from "mdbreact";
import ModelIfUpdate from "./ModelIfUpdete"


function AddSheets() {
  const navigate = useNavigate();

  const getTheStudent = async (name) => {
    let url = `https://localhost:7052/api/school/StudentClass/${name}`
    await axios.get(url)
      .then((response) => { setStudent(response.data); console.log(students) })
  }

  const addSheet = async (name, subject, sheet) => {
    console.log({ name }, { sheet }, { subject })
    await axios.put(`https://localhost:7052/api/Student/${name}/${subject}/${sheet}`).
      then(response => console.log(response.data));
  }

  const addTestName = async (name, subject, testName) => {
    console.log({ name }, { subject }, { testName })
    await axios.put(`https://localhost:7052/api/school/StudentClass/${name}/${subject}/${testName}`).
      then(response => console.log(response.data));
  }


  const [students, setStudent] = useState([]);

  const handleChange = (event) => {
    getTheStudent(event.target.value)
  }
  const aa = (a) => {
    console.log(a)
  }
  const addSheets = () => {
    students.forEach((index) => {
      console.log()
      let a = document.getElementById(index.name).value
      if (a > 0)
        addSheet(index.name, document.getElementById("subject").value, a)
      else
        addSheet(index.name, document.getElementById("subject").value, -1)
    })
    if (document.getElementById("testName").value == undefined)
      addTestName(document.getElementById("inputGroupSelect02").value, document.getElementById("subject").value, ("-----"))
    else
      addTestName(document.getElementById("inputGroupSelect02").value,
        document.getElementById("subject").value, document.getElementById("testName").value)
  }

  return (
    <div>
      <TeacherNavBar></TeacherNavBar>
      <br></br>
      <br></br>
      <br></br>
      <body class='body'>
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
          <select class="custom-select" id="subject" >
            <option value="English">אנגלית</option>
            <option value="עברית">עברית</option>
            <option value="היסטוריה">היסטוריה</option>
          </select>
          <div class="input-group-append">
            <label class="input-group-text" for="subject">מקצוע</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <input class="form-control"></input>
          <div class="input-group-append">
            <label class="input-group-text" for="subject" id="testName">שם המבחן</label>
          </div>
        </div>
        <br></br>
        <br></br>
        {students.length === 0 ? <h1> לא נמצאה כיתה</h1> :
          <div>
            <MDBTable scrollY >
              <thead class="table-info">
                <tr>
                  <th>{"..."}</th>
                  <th> ציון</th>
                  <th>שם</th>
                </tr>
              </thead>
              {students.map((item) => (
                <tr >
                  <td>
                    <h3>{"...."}</h3>
                  </td>
                  <td>
                    <input type="number" id={item.name} class="form-control" placeholder="0" step={0.5}></input>
                  </td>
                  <td>{item.name}
                    {aa(item)}</td>
                </tr>
              ))}

            </MDBTable>
            <MDBBtn onClick={(e) => {
              addSheets()
              navigate('/Teacher')
            }}>לאישור והכנסת הנתונים למערכת </MDBBtn>
            <ModelIfUpdate></ModelIfUpdate>
          </div>

        }
      </body>

    </div>


  )
}
export default AddSheets;