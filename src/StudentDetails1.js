import axios from "axios";
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TeacherNavBar from "./TeacherNavBar";
import React, { useState, useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
// import { useLocation } from 'react-router-dom';



export default function SingPassenger() {

  const [sheets, setSheest] = useState([])
  const createSheet=(subjectName)=>{
    let sheet = {
      subjectName: subjectName,
      sheets: [0],
      attendance: 0,
      behavior: 0,
      hW:0,
    }
    sheets.push(sheet);
  }

  const data = {};
  const createStudent = async () => {
    data.className = document.getElementById("className").value
    data.Name = document.getElementById("name").value
    data.lastName = document.getElementById("lastname").value
    console.log("data", data);
    let url = `https://localhost:7052/api/Student`;
    await axios.post(url,
      data
    )
  
  }

 const deleteStudent= async ()=>{
  console.log(document.getElementById("delete").value)
  let url= `https://localhost:7052/api/Student/delete/${document.getElementById("delete").value}`;
  await axios.post(url).then((response)=>setStudent(response.data)).then(ifThereStudent())

}

const [ifStudent,setIfStudent]=useState(true)
const ifThereStudent=()=>{
  console.log(ifStudent)
  if (!student)
  {
    setIfStudent(false)
  }
}
  return (
    <>
      <div className="register">
      <TeacherNavBar></TeacherNavBar>
        <h1>הוספת תלמיד</h1>
        <form >
          <MDBRow className='mb-4'>
            <MDBCol>
              <MDBInput id='lastname' label='שם משפחה' translate="last name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id='name' label='שם פרטי' translate="first name" />
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-4'>
            {/* <MDBCol>
              <MDBInput id='form6Example1' type='password' label='מספר זהות' translate="password" />
            </MDBCol> */}
            <MDBCol>
              <select class="custom-select" id='className' type='email' label='כיתה' translate="StudentClass" >
                <option value="ה1">ה1</option>
                <option value="ה2">ה2</option>
                <option value="ה3">ה3</option>
              </select>
            </MDBCol>
          </MDBRow>

          {/* <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='מספר טלפון' translate="phone number" {...register("phoneNumber")} />
          <MDBInput wrapperClass='mb-4' type="date" id='form6Example6' label='תאריך לידה' translate="birthday" onChange={(e) => { setTheBirthday(e.target.value) }} />
 */}



          <MDBBtn className='mb-4' type='submit' block  onClick={()=>createStudent()}>
            add
          </MDBBtn>

          <h1>מחיקת תלמיד</h1>
          <h3>נא הקלד את שם הילד שברצונך למחוק</h3>
          <MDBInput id='delete' label='שם'  />
          <MDBBtn className='mb-4' type='submit' block  id="delete" onClick={(e)=>deleteStudent()}>מחיקה </MDBBtn>


        </form>

       { ifStudent?<h1></h1> :<h1>לא נמצא תלמיד </h1>}
      </div>


    </>
  );
};


