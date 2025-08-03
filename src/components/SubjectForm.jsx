import React, { useState } from "react";

function SubjectForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    credit: "",
    instructor: "",
    grade: "A"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", code: "", credit: "", instructor: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Subject Name" onChange={handleChange} value={form.name} required />
      <input name="code" placeholder="Subject Code" onChange={handleChange} value={form.code} required />
      <input name="credit" type="number" placeholder="Credit Hours" onChange={handleChange} value={form.credit} required />
      <input name="instructor" placeholder="Instructor Name" onChange={handleChange} value={form.instructor} required />
      <select name="grade" onChange={handleChange} value={form.grade}>
        <option>A</option><option>A-</option><option>B+</option>
        <option>B</option><option>C+</option><option>C</option>
        <option>D</option><option>F</option>
      </select>
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;
