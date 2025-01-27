// Utility function to show sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Add Patients
document.getElementById('patientForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const list = document.getElementById('patientList');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;
    list.appendChild(row);

    e.target.reset();
});

// Add Doctors
document.getElementById('doctorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('doctorName').value;
    const specialization = document.getElementById('specialization').value;
    const list = document.getElementById('doctorList');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${specialization}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;
    list.appendChild(row);

    e.target.reset();
});

// Add Appointments
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const patient = document.getElementById('appointmentPatient').value;
    const doctor = document.getElementById('appointmentDoctor').value;
    const time = document.getElementById('appointmentTime').value;
    const list = document.getElementById('appointmentList');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${patient}</td>
        <td>${doctor}</td>
        <td>${time}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;
    list.appendChild(row);

    e.target.reset();
});
