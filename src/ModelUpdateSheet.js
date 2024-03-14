import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ModelUpdateSheet(prop) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateSheets = () => {
    let updateSheets = [];
    prop.sheets.map((s, index) =>
      document.getElementById(index).value == null ? updateSheets.push(parseFloat(-1)):
        updateSheets.push(parseFloat(document.getElementById(index).value)));
    prop.student.sheets.find(s => s.subjectName == prop.subject).testSheets = updateSheets;
    console.log(prop.student)
    updateStudent(prop.student.name,prop.student)
    handleClose()
  }
  const aa = (obj) => {
    console.log(obj)
  }
  const updateStudent = async (name,student) => {
    console.log(name)
    let url = ` https://localhost:7052/api/Student/student/${name}`
    await axios.put(url,student)
      .then((response) => {  })
  }


  return (
    <>
      <Button variant="btn btn-light" style={{ hige: "3rem", width: "100%", borderRadius: "0" }} onClick={handleShow}>
        לעדכון ציון
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
      >
        {/* <div class="modal fade" id="centralModalInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true"> */}
        <div class="modal-dialog modal-notify modal-info" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <p class="heading lead">{`שינוי ציון לתלמיד ${prop.student.name} ${prop.student.lastName}`}</p>
            </div>

            <div class="modal-body">
              {prop.sheets.map((s, index) =>
                <div class="md-form mb-5">
                  <input type="number" id={index} class="form-control validate" defaultValue={s} step={0.5}></input>
                  <label data-error="wrong" data-success="right" for="defaultForm-email">{`מבחן ${index}`}</label>
                </div>)}
            </div>
            <div class="modal-footer justify-content-center">
              <a type="button" class="btn btn-primary" onClick={updateSheets}>לאישור ושינוי הציון</a>
              <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal" onClick={handleClose}>ביטול</a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </>
  )
}
export default ModelUpdateSheet;