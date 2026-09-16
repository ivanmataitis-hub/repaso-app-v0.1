import React, { useMemo, useState } from 'react';
import { shuffle } from '../lib/content.js';
export default function Timeline({ item, onAnswer, disabled }) {
  const shuffled = useMemo(()=>shuffle(item.events),[item.id]);
  const [chosen,setChosen] = useState([]);
  const choose = event => {
    if (disabled || chosen.some(x=>x.id===event.id)) return;
    const next=[...chosen,event];
    setChosen(next);
    if(next.length===item.events.length){
      const ok = next.every((e,idx)=>e.order===idx+1);
      setTimeout(()=>onAnswer(ok,next.map(x=>x.label)),200);
    }
  };
  return <div className="timeline-wrap">
    <div className="timeline-picked">{chosen.length ? chosen.map((e,i)=><span key={e.id}>{i+1}. {e.label}</span>) : <span className="muted">Tocá primero el hecho más antiguo.</span>}</div>
    <div className="answers-grid">{shuffled.map(e=><button key={e.id} disabled={disabled||chosen.some(x=>x.id===e.id)} className="answer-btn" onClick={()=>choose(e)}>{e.label}</button>)}</div>
  </div>;
}
