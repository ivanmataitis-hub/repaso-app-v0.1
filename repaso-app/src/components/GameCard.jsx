import React, { useState } from 'react';
import MultipleChoice from '../games/MultipleChoice.jsx';
import TrueFalse from '../games/TrueFalse.jsx';
import WhoAmI from '../games/WhoAmI.jsx';
import Timeline from '../games/Timeline.jsx';
import MatchPairs from '../games/MatchPairs.jsx';
import SourceBadges from './SourceBadges.jsx';

const gameName = { multiple_choice:'Elegí la respuesta', true_false:'Verdadero o falso', who_am_i:'¿Quién soy?', timeline:'Antes y después', match_pairs:'Uní con flechas' };

export default function GameCard({ item, number, total, onComplete }) {
  const [result,setResult] = useState(null);
  const answer = (correct, value, meta={}) => {
    if(result) return;
    setResult({correct,value,meta});
  };
  const common={item,onAnswer:answer,disabled:!!result};
  const Game = {multiple_choice:MultipleChoice,true_false:TrueFalse,who_am_i:WhoAmI,timeline:Timeline,match_pairs:MatchPairs}[item.type];
  return <section className="game-card">
    <div className="game-meta"><span>{gameName[item.type]}</span><span>{number}/{total}</span></div>
    {item.context && <div className="context"><strong>Para ubicarte</strong><p>{item.context}</p></div>}
    <h2>{item.prompt}</h2>
    <Game {...common}/>
    {result && <div className={`feedback ${result.correct?'correct':'wrong'}`}>
      <h3>{result.correct ? '✨ ¡Bien!' : '🧠 Casi. Lo repasamos.'}</h3>
      <p>{item.explanation}</p>
      <SourceBadges sourceIds={item.sourceIds}/>
      <button className="primary-btn" onClick={()=>onComplete(result.correct,item,result.meta)}>Continuar</button>
    </div>}
  </section>;
}
