import './App.css';
import AddAttendStudent from './AddAttendStudent';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Teacher from './Teacher';
import AddSheets from './AddSheets';
import GetSheets from './GetSheets';
import GraphSheets from './GraghSheets';
import AddStudentsbehavior from './AddStudentsbehavior'
import StudentDetails from './StudentDetails';
import GetStudentShip from './GetStudentship';
import GetAttendStudent from './GetAttendStudent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/teacher' element={<Teacher/>}/>
              <Route exact path='/AddAttendStudent' element={<AddAttendStudent />}/>
              <Route exact path='/Home' element={<Home />}/>
              <Route exact path='/AddSheets' element={<AddSheets />}/>
              <Route exact path='/GetSheets' element={<GetSheets />}/>
              <Route exact path='/GraphSheets' element={<GraphSheets />}/>
              <Route exact path='/AddStudentsbehavior' element={<AddStudentsbehavior />}/>
              <Route exact path='/StudentDetails' element={<StudentDetails />}/>
              <Route exact path='/GetStudentShip' element={<GetStudentShip />}/>
              <Route exact path='/GetAttendStudent' element={<GetAttendStudent />}/>
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
