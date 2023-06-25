import React, { useState } from 'react';

const AttendanceTracker = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    { id: 3, name: 'Student 3', present: false },
    // Add more students as needed
  ]);

  const handleAttendanceChange = (studentId) => {
    setStudents((prevStudents) => {
      return prevStudents.map((student) => {
        if (student.id === studentId) {
          return { ...student, present: !student.present };
        }
        return student;
      });
    });
  };

  return (
    <div className="attendance-tracker">
      <h2>Attendance Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleAttendanceChange(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracker;
