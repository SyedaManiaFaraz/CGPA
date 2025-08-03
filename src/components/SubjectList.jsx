import React from "react";

function SubjectList({ subjects, onUpdate, onDelete }) {
  const handleGradeChange = (id, grade) => {
    const updated = subjects.find(sub => sub.id === id);
    updated.grade = grade;
    onUpdate(id, { ...updated });
  };

  return (
    <div className="subject-list">
      {subjects.map(subject => (
        <div key={subject.id} className="card">
          <h3>{subject.name} ({subject.code})</h3>
          <p>Instructor: {subject.instructor}</p>
          <p>Credit Hours: {subject.credit}</p>
          <select
            value={subject.grade}
            onChange={(e) => handleGradeChange(subject.id, e.target.value)}
          >
            <option>A</option><option>A-</option><option>B+</option>
            <option>B</option><option>C+</option><option>C</option>
            <option>D</option><option>F</option>
          </select>
          <button onClick={() => onDelete(subject.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default SubjectList;
