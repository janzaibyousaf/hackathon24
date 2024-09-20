const students = {}; // Simulated database

document.getElementById('editProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cnic = document.getElementById('cnic').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Update or add student profile
    students[cnic] = { firstName, lastName };

    document.getElementById('profileMessage').textContent = "Profile updated successfully!";
    this.reset();
});

document.getElementById('resultForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const resultCnic = document.getElementById('resultCnic').value;

    // Check if the CNIC exists in the simulated database
    const student = students[resultCnic];

    if (student) {
        document.getElementById('resultMessage').textContent = `Result: ${student.firstName} ${student.lastName}`;
    } else {
        document.getElementById('resultMessage').textContent = "No results found for this CNIC.";
    }
});
