function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <input type="text" placeholder="วิชา(ไม่จำเป็นต้องระบุ) Course" />
        <input type="number" placeholder="เกรด Grade (0-4)" class="grade" min="0" max="4" step="0.01" />
        <input type="number" placeholder="หน่วยกิต Weight" class="credit" min="1" />
    `;
    coursesDiv.appendChild(newCourse);
}

function calculateGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');
    let totalCredits = 0, totalPoints = 0;

    grades.forEach((grade, index) => {
        const credit = parseFloat(credits[index].value);
        const gradeValue = parseFloat(grade.value);

        if (!isNaN(gradeValue) && !isNaN(credit) && credit > 0 && gradeValue >= 0 && gradeValue <= 4) {
            totalCredits += credit;
            totalPoints += gradeValue * credit;
        }
    });

    if (totalCredits === 0) {
        document.getElementById('gpaResult').textContent = '-';
    } else {
        const gpa = totalPoints / totalCredits;
        document.getElementById('gpaResult').textContent = gpa.toFixed(2);
    }
}
