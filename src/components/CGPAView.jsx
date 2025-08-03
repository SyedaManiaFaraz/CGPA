import React from "react";
import { gradeToPoint } from "../utils/gradeScale";

function CGPAView({ subjects }) {
  const totalPoints = subjects.reduce((sum, sub) => {
    const gp = gradeToPoint[sub.grade] || 0;
    return sum + gp * Number(sub.credit);
  }, 0);

  const totalCredits = subjects.reduce((sum, sub) => sum + Number(sub.credit), 0);
  const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div className="cgpa">
      <h2>Calculated CGPA: {cgpa}</h2>
    </div>
  );
}

export default CGPAView;
