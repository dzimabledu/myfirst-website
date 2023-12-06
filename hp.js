function addGradeInputs() {
    const subjectsCount = parseInt(document.getElementById('subjects').value);
    const gradesContainer = document.getElementById('grades-container');
    gradesContainer.innerHTML = '';
  
    for (let i = 1; i <= subjectsCount; i++) {
      const subjectLabel = document.createElement('label');
      subjectLabel.innerHTML = `Subject ${i} Name: `;
      const subjectInput = document.createElement('input');
      subjectInput.type = 'text';
      subjectInput.name = `subject_${i}_name`;
      subjectInput.required = true;
  
      const creditLabel = document.createElement('label');
      creditLabel.innerHTML = `Credit Hours: `;
      const creditInput = document.createElement('input');
      creditInput.type = 'number';
      creditInput.min = '1';
      creditInput.name = `subject_${i}_credit`;
      creditInput.required = true;
  
      const gradeLabel = document.createElement('label');
      gradeLabel.innerHTML = `Grade Point: `;
      const gradeInput = document.createElement('input');
      gradeInput.type = 'number';
      gradeInput.min = '0';
      gradeInput.max = '4';
      gradeInput.step = '0.01';
      gradeInput.name = `subject_${i}_grade`;
      gradeInput.required = true;
  
      gradesContainer.appendChild(subjectLabel);
      gradesContainer.appendChild(subjectInput);
      gradesContainer.appendChild(creditLabel);
      gradesContainer.appendChild(creditInput);
      gradesContainer.appendChild(gradeLabel);
      gradesContainer.appendChild(gradeInput);
      gradesContainer.appendChild(document.createElement('br'));
    }
  }
  
  function calculateCGPA() {
    const subjectsCount = parseInt(document.getElementById('subjects').value);
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    for (let i = 1; i <= subjectsCount; i++) {
      const gradeInput = parseFloat(document.querySelector(`[name="subject_${i}_grade"]`).value);
      const creditInput = parseFloat(document.querySelector(`[name="subject_${i}_credit"]`).value);
  
      if (!isNaN(gradeInput) && !isNaN(creditInput)) {
        totalGradePoints += gradeInput * creditInput;
        totalCredits += creditInput;
      }
    }
  
    const cgpa = totalGradePoints / totalCredits;
    displayResult(`CGPA: ${cgpa.toFixed(2)}`);
  }
  
  function calculateGPA() {
    const subjectsCount = parseInt(document.getElementById('subjects').value);
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    for (let i = 1; i <= subjectsCount; i++) {
      const gradeInput = parseFloat(document.querySelector(`[name="subject_${i}_grade"]`).value);
      const creditInput = parseFloat(document.querySelector(`[name="subject_${i}_credit"]`).value);
  
      if (!isNaN(gradeInput) && !isNaN(creditInput) && gradeInput > 0) {
        totalGradePoints += gradeInput * creditInput;
        totalCredits += creditInput;
      }
    }
  
    const gpa = totalGradePoints / totalCredits;
    displayResult(`GPA: ${gpa.toFixed(2)}`);
  }
  
  function displayResult(result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = result;
  }
  