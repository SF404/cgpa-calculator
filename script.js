function calculate() {

    let c1 = document.getElementById('sub-1').value;
    let c2 = document.getElementById('sub-2').value;
    let c3 = document.getElementById('sub-3').value;
    let c4 = document.getElementById('sub-4').value;
    let c5 = document.getElementById('sub-5').value;
    let c6 = document.getElementById('sub-6').value;
    let c7 = document.getElementById('sub-7').value;
    let c8 = document.getElementById('sub-8').value;
    let c9 = document.getElementById('sub-9').value;
    c1 = parseInt(c1)
    c2 = parseInt(c2)
    c3 = parseInt(c3)
    c4 = parseInt(c4)
    c5 = parseInt(c5)
    c6 = parseInt(c6)
    c7 = parseInt(c7)
    c8 = parseInt(c8)
    c9 = parseInt(c9)
    let total_credit = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
    document.getElementById('total_credits').innerHTML = total_credit;

    let g1 = document.getElementById('grade1').value;
    let g2 = document.getElementById('grade2').value;
    let g3 = document.getElementById('grade3').value;
    let g4 = document.getElementById('grade4').value;
    let g5 = document.getElementById('grade5').value;
    let g6 = document.getElementById('grade6').value;
    let g7 = document.getElementById('grade7').value;
    let g8 = document.getElementById('grade8').value;
    let g9 = document.getElementById('grade9').value;

    g1 = g1 * c1;
    g2 = g2 * c2;
    g3 = g3 * c3;
    g4 = g4 * c4;
    g5 = g5 * c5;
    g6 = g6 * c6;
    g7 = g7 * c7;
    g8 = g8 * c8;
    g9 = g9 * c9;
    let total_grades = g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8 + g9;
    let cgpa = total_grades / total_credit;
    document.getElementById('CGPA').innerHTML = cgpa;

}

