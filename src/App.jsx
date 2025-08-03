import React, { useState } from "react";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";
import CGPAView from "./components/CGPAView";
import "./index.css";

function App() {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject) => {
    setSubjects([...subjects, { ...subject, id: Date.now() }]);
  };

  const updateSubject = (id, updatedSubject) => {
    setSubjects(subjects.map(sub => (sub.id === id ? updatedSubject : sub)));
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
  };

  return (
    <div className="container">
      <h1>Subject & CGPA Management</h1>
      <SubjectForm onAdd={addSubject} />
      <SubjectList
        subjects={subjects}
        onUpdate={updateSubject}
        onDelete={deleteSubject}
      />
      <CGPAView subjects={subjects} />
    </div>
  );
}

export default App;
