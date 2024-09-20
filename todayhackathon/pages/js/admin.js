// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLiplPXzM1LklZcshBLjCssSEEO90E9vY",
    authDomain: "practicefirebase-57679.firebaseapp.com",
    databaseURL: "https://practicefirebase-57679-default-rtdb.firebaseio.com",
    projectId: "practicefirebase-57679",
    storageBucket: "practicefirebase-57679.appspot.com",
    messagingSenderId: "368964161282",
    appId: "1:368964161282:web:44dfb33bdc1fd8b0cbfc1b",
    measurementId: "G-BBQEVJ2Y2W"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();




document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cnic = e.target.cnic.value;
    const userType = e.target.userType.value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userId = userCredential.user.uid;

        // Save student data in Realtime Database
        await db.ref('students/' + userId).set({
            firstName,
            lastName,
            email,
            cnic,
            userType
        });

        alert('Student added successfully!');
    } catch (error) {
        console.error('Error adding student:', error);
    }
});

document.getElementById('uploadMarksForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const course = e.target.course.value;
    const studentId = e.target.studentId.value;
    const marks = e.target.marks.value;
    const totalMarks = e.target.totalMarks.value;
    const grade = e.target.grade.value;

    try {
        // Save marks in Realtime Database
        await db.ref('marks/' + studentId + '/' + course).set({
            marks,
            totalMarks,
            grade
        });

        alert('Marks uploaded successfully!');
    } catch (error) {
        console.error('Error uploading marks:', error);
    }
});



document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cnic = e.target.cnic.value;
    const userType = e.target.userType.value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await db.collection('students').doc(userCredential.user.uid).set({
            firstName,
            lastName,
            email,
            cnic,
            userType
        });
        alert('Student added successfully!');
    } catch (error) {
        console.error('Error adding student:', error);
    }
});

document.getElementById('uploadMarksForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const course = e.target.course.value;
    const studentId = e.target.studentId.value;
    const marks = e.target.marks.value;
    const totalMarks = e.target.totalMarks.value;
    const grade = e.target.grade.value;

    try {
        await db.collection('marks').add({
            course,
            studentId,
            marks,
            totalMarks,
            grade
        });
        alert('Marks uploaded successfully!');
    } catch (error) {
        console.error('Error uploading marks:', error);
    }
});
