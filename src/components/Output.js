import React from 'react'

function Output({ cgpa, score, totalCredits }) {
    return (
        <div id='output'>
            <p>CGPA: {cgpa.toPrecision(3)}</p><br />
            <p>SCORE: {score}/{totalCredits*10}</p> <br />
            <p>Total Credits: {totalCredits}</p>
        </div>
    )
}

export default Output
