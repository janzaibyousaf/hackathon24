document.getElementById('studentForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
 
   
    saveStudent(name, email, course, );

    document.getElementById('studentForm').reset();
}

function saveStudent(name, email, course,  ) {
    var newStudentRef = firebase.database().ref('students').push();
    newStudentRef.set({
        name: name,
        email: email,
        course: course,
    });
}

document.getElementById('showStudents').addEventListener('click', function() {
    var studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';

    firebase.database().ref('students').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var student = childSnapshot.val();
            var div = document.createElement('div');
            div.innerHTML = 'Name: ' + student.name + '<br>Email: ' + student.email + '<br>Course: ' + student.course + '<hr>';
            studentsList.appendChild(div);
        });
    });
});