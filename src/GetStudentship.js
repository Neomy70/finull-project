import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TeacherNavBar from "./TeacherNavBar";
import {
    MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import img from './imagesSchool/notbook.png'

function GetStudentShip() {
    const navigate = useNavigate();
    const getTheStudent = async (name) => {
        console.log("fds")
        let url = `https://localhost:7052/api/school/StudentClass/${name}`
        await axios.get(url)
            .then((response) => { setStudents(response.data); console.log(students); })
    }
    const aa = (s) => {
        console.log(s)
    }
    const [students, setStudents] = useState([]);
    const handleChange = (event) => {
        getTheStudent(event.target.value)
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
                            : לראות את ערכי תלמידאות של התלמידים
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
                    <select class="custom-select" id="subject" >
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
                {students.length === 0 ? <h1> לא נמצאה כיתה</h1> :
                    <table class="table">
                        <thead class="table-info">
                            <tr>
                                <th>הערות התנהגות</th>
                                <th>אי הכנת שיעורי בית</th>
                                <th>נוכחות</th>
                                <th>שם</th>
                            </tr>
                        </thead>
                        {students.map((student) => (
                            <tr >
                                <td>
                                    {student.sheets.find(() => (document.getElementById("subject").value)).behavior}
                                </td>
                                <td>
                                    {student.sheets.find(() => (document.getElementById("subject").value)).hw}
                                </td>
                                <td>
                                    {student.sheets.find(() => (document.getElementById("subject").value)).attendance.length}
                                </td>
                                <td>{student.name}</td>
                            </tr>
                        ))}
                    </table>
                }
            </body>
        </div>

    )
}
export default GetStudentShip;
