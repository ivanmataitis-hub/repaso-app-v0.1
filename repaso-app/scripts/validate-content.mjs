import { items } from '../src/content/items.js';
import { sources } from '../src/content/sources.js';

const errors=[]; const warnings=[];
const seen=new Set();
const requiredChecks=['factual','curricular','age','ambiguity','license'];
const pronounPatterns=[/\besa noticia\b/i,/\blo anterior\b/i,/\bese hecho\b/i,/\bentonces\b/i];
for(const item of items){
  if(seen.has(item.id)) errors.push(`${item.id}: ID duplicado`); seen.add(item.id);
  for(const field of ['topicId','grades','difficulty','type','concept','prompt','explanation','sourceIds','validation']) if(item[field]===undefined) errors.push(`${item.id}: falta ${field}`);
  if(!item.sourceIds?.length) errors.push(`${item.id}: sin fuentes`);
  for(const sid of item.sourceIds||[]) if(!sources[sid]) errors.push(`${item.id}: fuente desconocida ${sid}`);
  for(const check of requiredChecks) if(!item.validation?.[check]) errors.push(`${item.id}: falta validación ${check}`);
  for(const pattern of pronounPatterns) if(pattern.test(item.prompt) && !item.context) warnings.push(`${item.id}: posible dependencia de contexto (${pattern})`);
  if(item.validation?.factual!=='approved') warnings.push(`${item.id}: factual=${item.validation?.factual}`);
  if(item.validation?.curricular!=='approved') warnings.push(`${item.id}: curricular=${item.validation?.curricular}`);
}
console.log(`REpaso content gate — ${items.length} ítems`);
if(warnings.length){console.log('\nADVERTENCIAS');warnings.forEach(x=>console.log(' -',x));}
if(errors.length){console.error('\nERRORES');errors.forEach(x=>console.error(' -',x));process.exit(1);} else console.log('\n✓ Sin errores bloqueantes.');
