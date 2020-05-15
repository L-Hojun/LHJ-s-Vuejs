<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="(cellData, index)" :cell-index="index" :row-index="rowIndex" :parent="parent"></td-component>
    </tr>
</template>

<script>
    import TdComponent from './TdComponent';

    export default {
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        },
        components: {
            TdComponent,
        },        
        data() {
            return {
                parent: '내가 네 애비다',
            }
        },
        props: {
            rowIndex: Number,
        },
    };
</script>
    
<style>
    
</style>