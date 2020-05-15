<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table>
            <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
            </tr>
        </table>
        <div v-if="winner">{{winner}}님의 승리입니다.</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import store from './store';
    import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';
    //import TableComponent from './TableComponent';
    //import Vue from 'vue';  Vue.set을 쓸 경우
    export default {
        store,
        computed: {
            ...mapState(['turn','winner','tableData']),
            //turn() {
            //    return this.$store.state.turn;
            //},
            //winner() {
            //    return this.$store.state.winner;
            //},
        },
        components: {
            //TableComponent,
        },
        data() {
            return{
                //tableData: [
                //    ['', '', ''],
                //    ['', '', ''],
                //    ['', '', ''],
                //],
            };
        },
        methods: {
            onClickTd(rowIndex,cellIndex) {
                if (this.cellData) return;

                this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex });

                let win = false;
                if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                    win = true;
                } else if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                } else if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                } else if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }
                if (win) {
                    this.$store.commit(SET_WINNER, this.turn);
                    this.$store.commit(RESET_GAME);
                } else {
                    let all = true;
                    this.tableData.forEach((row) => {
                        row.forEach((cell) => {
                            if (!cell) {
                                all = false;
                            }
                        });
                    });
                    if(all){
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME);
                    } else {
                        this.$store.commit(CHANGE_TURN);
                    }
                }
            }
        }
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 200px;
        height: 200px;
        text-align: center; 
    }
</style>