import React from 'react'
import { useState } from 'react';

function Field(props) {
    const [subjectName, setSubjectName] = useState([props.default]);
    const [subjectGrade, setSubjectGrade] = useState([4]);
    return (
        <div id='field'>
            <input type="text" name='subjectName' placeholder='subject-name' id='subjectName' value={subjectName} onChange={(e) => { setSubjectName(e.target.value) }} />
            <input type="number" name='credit' placeholder='credit' min={0} id='creditInput' value={subjectGrade} onChange={(e) => setSubjectGrade(e.target.value)} />
            <select name="grade" id="selectGrade">
                <option value="10">A+</option>
                <option value="9" >A</option>
                <option value="8">B+</option>
                <option value="7">B</option>
                <option value="6">C+</option>
                <option value="5">C</option>
            </select>
        </div>
    )
}

export default Field
