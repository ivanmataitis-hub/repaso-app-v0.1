import React, { useEffect, useMemo, useState } from 'react';
import { Trophy, Star, ShieldCheck, RotateCcw, Sparkles } from 'lucide-react';
import { topics } from './content/topics.js';
import { items } from './content/items.js';
import { getItems, gradeLabel, difficultyLabel } from './lib/content.js';
import { defaultProfile, loadProfile, saveProfile } from './lib/storage.js';
import GameCard from './components/GameCard.jsx';

const avatars=['🦊','🐙','🦄','🐲','👻','🤖','🦁','🐸','🦖','🐼','🦉','🐯'];
const grades=['5P','6P','7P','1S','2S','3S','4S'];
const difficulties=['facil','medio','dificil'];

function ProfileSetup({profile,onSave}){
  const [nickname,setNickname]=useState(profile.nickname||'');
  const [avatar,setAvatar]=useState(profile.avatar||'🦊');
  return <div className="panel">
    <h2>Tu personaje</h2><p className="muted">No hace falta usar tu nombre real.</p>
    <input value={nickname} maxLength={18} onChange={e=>setNickname(e.target.value)} placeholder="Apodo" />
    <div className="avatars">{avatars.map(a=><button key={a} className={avatar===a?'active':''} onClick={()=>setAvatar(a)}>{a}</button>)}</div>
    <button className="primary-btn" disabled={!nickname.trim()} onClick={()=>onSave({...profile,nickname:nickname.trim(),avatar})}>Guardar</button>
  </div>
}

function Home({profile,onStart,onEditProfile}){
  const [grade,setGrade]=useState('5P');
  const [topicId,setTopicId]=useState('revolucion-mayo');
  const [difficulty,setDifficulty]=useState('facil');
  const availableTopics=topics.filter(t=>t.grades.includes(grade));
  useEffect(()=>{ if(!availableTopics.find(t=>t.id===topicId) && availableTopics[0]) setTopicId(availableTopics[0].id); },[grade]);
  const count=items.filter(i=>i.topicId===topicId&&i.grades.includes(grade)&&i.difficulty===difficulty).length;
  return <>
    <div className="hero-card">
      <div className="avatar-large">{profile.avatar}</div>
      <div><h2>Hola, {profile.nickname}</h2><p>{profile.points} puntos · {profile.games} partidas · mejor racha {profile.bestStreak}</p></div>
      <button className="ghost-btn" onClick={onEditProfile}>Cambiar avatar</button>
    </div>
    <div className="panel setup-panel">
      <h2>¿Qué querés repasar hoy?</h2>
      <label>Año escolar<select value={grade} onChange={e=>setGrade(e.target.value)}>{grades.map(g=><option key={g} value={g}>{gradeLabel[g]}</option>)}</select></label>
      <div className="topic-grid">{availableTopics.map(t=><button key={t.id} className={`topic-card ${topicId===t.id?'selected':''}`} onClick={()=>setTopicId(t.id)}><span>{t.emoji}</span><strong>{t.title}</strong><small>{t.description}</small></button>)}</div>
      <label>Dificultad<div className="segmented">{difficulties.map(d=><button key={d} className={difficulty===d?'active':''} onClick={()=>setDifficulty(d)}>{difficultyLabel[d]}</button>)}</div></label>
      <div className="notice">El <strong>año escolar</strong> define el contenido. La dificultad cambia cuánto hay que razonar, no el curso.</div>
      <button className="primary-btn huge" disabled={!count} onClick={()=>onStart({grade,topicId,difficulty})}>{count ? `Jugar · ${count} desafíos piloto` : 'Todavía no hay desafíos para esta combinación'}</button>
      {!!profile.wrongConcepts.length && <button className="review-btn" onClick={()=>onStart({grade,topicId,difficulty,review:true})}><RotateCcw size={18}/> Repasar conceptos que me costaron</button>}
    </div>
  </>;
}

function Results({score,total,streak,onHome,onRetry}){
  const pct=Math.round(score/total*100);
  const medal=pct>=80?'🥇':pct>=60?'🥈':'🥉';
  return <div className="panel result-panel">
    <div className="celebration">{pct>=80?'🎆 🌈 🎆':'✨'}</div>
    <h1>{medal} {pct}%</h1><p>{score} de {total} respuestas correctas.</p>
    <p>Mejor racha de esta partida: <strong>{streak}</strong></p>
    <div className="result-actions"><button className="primary-btn" onClick={onRetry}>Jugar otra vez</button><button className="ghost-btn" onClick={onHome}>Volver al inicio</button></div>
  </div>;
}

function App(){
  const [profile,setProfile]=useState(()=>loadProfile());
  const [screen,setScreen]=useState('home');
  const [config,setConfig]=useState(null);
  const [rounds,setRounds]=useState([]);
  const [idx,setIdx]=useState(0);
  const [score,setScore]=useState(0);
  const [streak,setStreak]=useState(0);
  const [best,setBest]=useState(0);

  useEffect(()=>saveProfile(profile),[profile]);
  const topic=useMemo(()=>topics.find(t=>t.id===config?.topicId),[config]);

  const start=(cfg)=>{
    let pool=getItems({topicId:cfg.topicId,grade:cfg.grade,difficulty:cfg.difficulty,reviewConcepts:cfg.review?profile.wrongConcepts:[]});
    if(!pool.length) pool=getItems({topicId:cfg.topicId,grade:cfg.grade,difficulty:cfg.difficulty});
    setConfig(cfg);setRounds(pool);setIdx(0);setScore(0);setStreak(0);setBest(0);setScreen('game');
  };
  const complete=(correct,item,meta={})=>{
    const base=20-(meta.hintPenalty||0);
    if(correct){
      const next=streak+1;setScore(s=>s+1);setStreak(next);setBest(b=>Math.max(b,next));
      setProfile(p=>({...p,points:p.points+Math.max(5,base)+Math.min(next*2,10),wrongConcepts:p.wrongConcepts.filter(c=>c!==item.concept)}));
    } else {
      setStreak(0);setProfile(p=>({...p,wrongConcepts:[...new Set([...p.wrongConcepts,item.concept])]}));
    }
    if(idx+1>=rounds.length){
      setProfile(p=>({...p,games:p.games+1,bestStreak:Math.max(p.bestStreak,best,streak+(correct?1:0))}));
      setScreen('results');
    } else setIdx(i=>i+1);
  };
  const saveNewProfile=(p)=>{setProfile(p);setScreen('home');};

  return <main className="app-shell">
    <header className="brand"><div className="brand-mark">↪</div><div><div className="logo">RE<span>paso</span></div><small>REPASÁS Y PASÁS</small></div><div className="quality-pill"><ShieldCheck size={16}/> fuentes visibles</div></header>
    <div className="tagline">Juegos para repasar el programa escolar argentino. Año escolar y dificultad son cosas distintas.</div>
    {screen==='profile' && <ProfileSetup profile={profile} onSave={saveNewProfile}/>} 
    {screen==='home' && <Home profile={profile} onStart={start} onEditProfile={()=>setScreen('profile')}/>} 
    {screen==='game' && rounds[idx] && <>
      <div className="session-head"><div><strong>{topic?.emoji} {topic?.title}</strong><span>{gradeLabel[config.grade]} · {difficultyLabel[config.difficulty]}</span></div><div className="session-score"><Star size={17}/>{score}<Sparkles size={17}/>{streak}</div></div>
      <div className="progress"><div style={{width:`${((idx)/rounds.length)*100}%`}}/></div>
      <GameCard key={rounds[idx].id} item={rounds[idx]} number={idx+1} total={rounds.length} onComplete={complete}/>
    </>}
    {screen==='results' && <Results score={score} total={rounds.length} streak={best} onHome={()=>setScreen('home')} onRetry={()=>start(config)}/>} 
    <footer><Trophy size={15}/> REpaso v0.1 · Piloto editorial con trazabilidad de fuentes · Sin registro ni datos personales.</footer>
  </main>;
}

export default App;
