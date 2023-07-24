import { useState } from 'react';
import Field from './components/Field';
import Output from './components/Output';
import './App.css';

function App() {
  const [field, setField] = useState([<Field key={0} default={"Subject-" + (1)} />]);
  const [output, setOutput] = useState([]);
  function setInputField() {
    setField(field.concat(<Field key={field.length} default={"Subject-" + (field.length + 1)} />))
  }
  function calculateCGPA() {
    let credits = [];
    let grades = [];
    let totalCredits = 0, score = 0, cgpa;

    const creditsElement = document.querySelectorAll('#creditInput');
    creditsElement.forEach(credit => {
      credits.push(credit.value)
      totalCredits += parseInt(credit.value);
    })

    const gradesElement = document.querySelectorAll('#selectGrade');
    gradesElement.forEach(grade => {
      grades.push(grade.value);
    })

    for (let i = 0; i < credits.length; i++) {
      score += credits[i] * grades[i];
    }

    cgpa = score / totalCredits;

    setOutput(<Output cgpa={cgpa} score={score} totalCredits={totalCredits} key={0} />)
  }

  return (
    <>
      <div className="header">CGPA Calculator</div>
      <form action="" id='form'>
        <div id="bar"></div>
        {field}
        <div id='buttons'>
          <input type="submit" value={"Calculate"} onClick={(e) => { e.preventDefault(); calculateCGPA() }} />
          <input type="button" value={"+"} onClick={setInputField} />
        </div>
      </form>

      {output}
    </>
  );
}

export default App;
