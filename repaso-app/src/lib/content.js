import { items } from '../content/items.js';

export const difficultyLabel = { facil: 'Principiante', medio: 'Intermedio', dificil: 'Difícil' };
export const gradeLabel = {
  '5P': '5.º grado', '6P': '6.º grado', '7P': '7.º grado',
  '1S': '1.º año', '2S': '2.º año', '3S': '3.º año', '4S': '4.º año'
};

export function getItems({ topicId, grade, difficulty, reviewConcepts = [] }) {
  let pool = items.filter(i => i.topicId === topicId && i.grades.includes(grade));
  if (difficulty) pool = pool.filter(i => i.difficulty === difficulty);
  if (reviewConcepts.length) {
    const review = pool.filter(i => reviewConcepts.includes(i.concept));
    if (review.length) pool = review;
  }
  return shuffle(pool);
}

export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
