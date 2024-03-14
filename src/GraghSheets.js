import React, { Component, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from "axios";
import TeacherNavBar from "./TeacherNavBar";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function GraphSheets() {
	const getTheStudent = async (name) => {
		console.log("fds")
		let url = `https://localhost:7052/api/school/StudentClass/${name}`
		await axios.get(url)
			.then((response) => {
				setStudents(response.data); console.log(students);
				students.forEach((student, index = 1) =>
					studentsName.push({
						x: index,
						y: calculateAverage(
							student.sheets.find(((sheet) => sheet.subjectName == document.getElementById("subject").value)).testSheets),
						label: student.name
					}))
				console.log(students)
				console.log(studentsName);
			})
	}

	const handleChange = (event) => {
		studentsName.length = 0;
		getTheStudent(event.target.value)

	}

	const calculateAverage = (array) => {
		console.log(array)
		var total = 0;
		var count = 0;
		array.forEach(function (item, index) {
			total += item;
			console.log(item);
			count++;
			console.log(count)

		});
		console.log(total / (count - 1))
		return total / (count - 1);
	}

	//studentsName.push({ x: student.name, y: student.sheets.find((sheet) => sheet == document.getElementById("subject").value).sheets[0] })
	const [students, setStudents] = useState([]);
	const [studentsName, setStudentsName] = useState([]);
	const [allStudentsName, setAllStudentsName] = useState([]);
	const options = {
		title: {
			text: "גרף  ממוצע ציוני תלמידים"

		},
		axisy:
		{
			interval: "5",
			title: "ציון"
		},
		axisX: {
			title: "שם התלמיד",
			labelFontFamily: "tahoma"
		},
		data: [
			{
				type: "line",
				dataPoints: studentsName
			}
		]
	}

	return (
		<div>
			<TeacherNavBar></TeacherNavBar>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
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
			<br></br>
			<br></br>
			{studentsName.length == 0 ? <h1>לא נמצאה כיתה</h1> : <CanvasJSChart options={options} />}
		</div>
	);

}
export default GraphSheets;