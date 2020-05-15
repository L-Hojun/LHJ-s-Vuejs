<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData" :turn="turn" />
        <div v-if="winner">{{winner}}님의 승리입니다.</div>
    </div>
</template>

<script>
    import store from './store';
    import TableComponent from './TableComponent';
    //import Vue from 'vue';  Vue.set을 쓸 경우
    export default {
        store,
        computed: {
            turn() {
                return this.$store.state.turn;
            },
            winner() {
                return this.$store.state.winner;
            },
        },
        components: {
            TableComponent,
        },
        data() {
            return{
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
            };
        },
        methods: {
            onChangeData() {
                //Vue.set(this.tableData[1],0,'X');
                this.$set(this.tableData[1],0,'X');  //위의 코드와 동일
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