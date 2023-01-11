import React from 'react';
import { SkillBar } from 'react-skillbars';

export default function SkillBar2() {
  const colors = {
    bar: '#2f89fe',
    title: {
      text: 'fff',
      background: '#355886',
    },
  };
  const skills = [
    { type: 'MS Excel', level: 100 },
    { type: 'MS Word', level: 50 },
    { type: 'SAP / R3', level: 70 },
  ];

  return (
    <>
      <SkillBar
        skills={skills}
        height={'25px'}
        colors={colors}
        animationDelay={10}
        animationDuration={1000}
      />
    </>
  );
}
