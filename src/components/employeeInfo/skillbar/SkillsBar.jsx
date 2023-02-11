import React from 'react';

function SkillsBar() {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title">MS Excel</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">MS Word</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">SAP / R3</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
