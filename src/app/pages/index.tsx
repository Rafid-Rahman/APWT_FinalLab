'use client'
import { useState } from 'react';
 
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}
 
export default function StdInfo() {
  const [students, setStudents] = useState<Student[]>([]);
 
  const handleAdd = () => {
    const newStudent = { id: Date.now(), name: '', age: 0, grade: '' };
    setStudents([...students, newStudent]);
  };
 
  const handleUpdate = (id: number, field: string, value: string) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );
    setStudents(updatedStudents);
  };
 
  const handleDelete = (id: number) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };
 
  return (
    <div>
      <h1>Student Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => handleUpdate(student.id, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.age}
                  onChange={(e) => handleUpdate(student.id, 'age', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.grade}
                  onChange={(e) => handleUpdate(student.id, 'grade', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}
 
StdInfo.isClientSafe = true;
 