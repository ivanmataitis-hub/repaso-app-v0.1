import React from 'react';
export default function TrueFalse({ item, onAnswer, disabled }) {
  return <div className="answers-grid two">
    <button disabled={disabled} className="answer-btn" onClick={() => onAnswer(item.answer === true, true)}>Verdadero</button>
    <button disabled={disabled} className="answer-btn" onClick={() => onAnswer(item.answer === false, false)}>Falso</button>
  </div>;
}
