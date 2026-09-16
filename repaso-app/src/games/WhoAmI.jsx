import React, { useMemo, useState } from 'react';
import { shuffle } from '../lib/content.js';
export default function WhoAmI({ item, onAnswer, disabled }) {
  const [hints, setHints] = useState(1);
  const options = useMemo(() => shuffle(item.options), [item.id]);
  return <>
    <div className="hints">{item.hints.slice(0,hints).map((h,i)=><div key={i}>💡 {h}</div>)}</div>
    {hints < item.hints.length && <button className="ghost-btn" onClick={() => setHints(h => h+1)}>Otra pista (-5 pts)</button>}
    <div className="answers-grid">{options.map(o=><button disabled={disabled} key={o} className="answer-btn" onClick={()=>onAnswer(o===item.answer,o,{hintPenalty:(hints-1)*5})}>{o}</button>)}</div>
  </>;
}
