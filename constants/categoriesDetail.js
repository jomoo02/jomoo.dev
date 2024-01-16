import { NOTE, PROJECTS } from './categories';

const PROGRAMMERS = 'programmers';
const ALGORITHMS = 'algorithms';
const JS = 'js';
const WOOTECOS = 'wootecos';

const VOCABULARYNOTE = 'vocabularynote';
const JOMOODEV = 'jomoodev';

// 메인 페이지에서 사용, 삭제 예정
export const CATEGORIES_DETAIL = [
  ...[PROGRAMMERS, ALGORITHMS, JS, WOOTECOS].map((detail) => {
    return { detail, category: NOTE };
  }),
  ...[VOCABULARYNOTE, JOMOODEV].map((detail) => {
    return { detail, category: PROJECTS };
  }),
];

const NOTE_DETAILS = [
  { path: `/${NOTE}/${PROGRAMMERS}`, text: '프로그래머스', detail: PROGRAMMERS },
  { path: `/${NOTE}/${ALGORITHMS}`, text: '알고리즘', detail: ALGORITHMS },
  { path: `/${NOTE}/${WOOTECOS}`, text: '우테코', detail: WOOTECOS },
  { path: `/${NOTE}/${JS}`, text: '자바스크립트', detail: JS },
];

const PROJECTS_DETAILS = [
  { path: `/${PROJECTS}/${VOCABULARYNOTE}`, text: 'vocabulary', detail: VOCABULARYNOTE },
  { path: `/${PROJECTS}/${JOMOODEV}`, text: 'jomoo.dev', detail: JOMOODEV },
];

export const CATEGORIES_DETAILS = {
  [NOTE]: NOTE_DETAILS,
  [PROJECTS]: PROJECTS_DETAILS,
};
