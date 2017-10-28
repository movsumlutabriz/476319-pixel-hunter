import GameStatsView from './game-stats-view';
import {questions} from './questions';

const view = new GameStatsView(questions);

export default () => view;
