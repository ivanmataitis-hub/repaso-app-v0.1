import React, { useMemo } from 'react';
import { shuffle } from '../lib/content.js';

export default function MultipleChoice({ item, onAnswer, disabled }) {
  const options = useMemo(() => shuffle(item.options), [item.id]);
  return <div className="answers-grid">
    {options.map(option => <button disabled={disabled} className="answer-btn" key={option} onClick={() => onAnswer(option === item.answer, option)}>{option}</button>)}
  </div>;
}
