document.getElementById('marksForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;

    const messageElement = document.getElementById('message');

    // Simple validation
    if (marks > totalMarks) {
        messageElement.textContent = "Marks cannot exceed Total Marks.";
        messageElement.style.color = 'red';
        return;
    }

    // Simulate upload (e.g., save to server or local storage)
    const studentData = {
        studentId,
        course,
        marks,
        totalMarks,
    };

    // Here, you would typically send the data to a server
    console.log('Data uploaded:', studentData);
    
    messageElement.textContent = "Marks uploaded successfully!";
    messageElement.style.color = 'green';

    // Clear the form
    this.reset();
});
