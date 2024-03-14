import { useNavigate, useParams } from "react-router";
import TeacherNavBar from './TeacherNavBar'

function Teacher() {

    // const { teacher } = useParams();
    // const navigate=useNavigate();

    return (
        <div >          
            <TeacherNavBar></TeacherNavBar>
            <h1>מורה יקר שלום וברכה </h1>
           
        </div>

    )
}
export default Teacher;