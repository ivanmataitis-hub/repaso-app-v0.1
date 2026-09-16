import React, { useMemo, useState } from 'react';
import { shuffle } from '../lib/content.js';
export default function MatchPairs({ item, onAnswer, disabled }) {
  const left = useMemo(()=>shuffle(item.pairs.map((p,i)=>({id:i,text:p[0]}))),[item.id]);
  const right = useMemo(()=>shuffle(item.pairs.map((p,i)=>({id:i,text:p[1]}))),[item.id]);
  const [selected,setSelected] = useState(null);
  const [matched,setMatched] = useState([]);
  const [mistakes,setMistakes] = useState(0);
  const clickRight = r => {
    if(selected===null || disabled || matched.includes(r.id)) return;
    if(selected===r.id){
      const next=[...matched,r.id]; setMatched(next); setSelected(null);
      if(next.length===item.pairs.length) setTimeout(()=>onAnswer(mistakes===0,{matches:next.length}),200);
    } else { setMistakes(m=>m+1); setSelected(null); }
  };
  return <div className="pair-grid">
    <div>{left.map(x=><button key={x.id} className={`pair-btn ${selected===x.id?'selected':''} ${matched.includes(x.id)?'matched':''}`} disabled={disabled||matched.includes(x.id)} onClick={()=>setSelected(x.id)}>{x.text}</button>)}</div>
    <div>{right.map(x=><button key={x.id} className={`pair-btn ${matched.includes(x.id)?'matched':''}`} disabled={disabled||matched.includes(x.id)} onClick={()=>clickRight(x)}>{x.text}</button>)}</div>
  </div>;
}
