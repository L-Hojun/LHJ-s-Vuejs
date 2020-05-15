import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const SET_WINNER = 'SET WINNER'; //import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({ //import store from './store';
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: "O",
        winner: '',
    }, //Vue의 data와 비슷함.
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}) {
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O'; 
        },
        [RESET_GAME](state) {
            state.turn = state.turn ==='O' ? 'X' : 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    }, //state를 수정할때 사용. 동기적으로.
    getters: {

    }, // Vue의 computed와 비슷함. 캐싱됨!
    actions: {

    }, // vue를 비동기적으로 사용할 때, 또는 여러 뮤테이션을 연달아 실행할 때 사용.
});
