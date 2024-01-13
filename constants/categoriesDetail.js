import { NOTE, PROJECTS } from './categories';

const PROGRAMMERS = 'programmers';
const ALGORITHMS = 'algorithms';
const JS = 'js';
const WOOTECOS = 'wootecos';
const NOTE_DETAILS = [PROGRAMMERS, ALGORITHMS, JS, WOOTECOS];

const VOCABULARYNOTE = 'vocabularynote';
const JOMOODEV = 'jomoodev';
const PROJECTS_DETAILS = [VOCABULARYNOTE, JOMOODEV];

export const CATEGORIES_DETAILS = [
  ...NOTE_DETAILS.map((detail) => {
    return { detail, category: NOTE };
  }),
  ...PROJECTS_DETAILS.map((detail) => {
    return { detail, category: PROJECTS };
  }),
];

const NOTE_DETAILS_PATHS = [
  { path: `/${NOTE}/${PROGRAMMERS}`, text: '프로그래머스' },
  { path: `/${NOTE}/${ALGORITHMS}`, text: '알고리즘' },
  { path: `/${NOTE}/${WOOTECOS}`, text: '우테코' },
  { path: `/${NOTE}/${JS}`, text: '자바스크립트' },
];

const PROJECTS_DETAILS_PATHS = [
  { path: `/${PROJECTS}/${VOCABULARYNOTE}`, text: 'vocabulary' },
  { path: `/${PROJECTS}/${JOMOODEV}`, text: 'jomoo.dev' },
];

export const CATEGORIES_DETAILS_PATHS = {
  [NOTE]: NOTE_DETAILS_PATHS,
  [PROJECTS]: PROJECTS_DETAILS_PATHS,
};
