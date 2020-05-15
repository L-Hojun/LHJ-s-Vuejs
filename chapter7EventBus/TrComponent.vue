<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="(cellData, index)" :cell-data="cellData" :cell-index="index" :row-index="rowIndex" :parent="parent"></td-component>
    </tr>
</template>

<script>
    import TdComponent from './TdComponent';

    export default {
        components: {
            TdComponent,
        },        
        data() {
            return {
                parent: '내가 네 애비다',
            }
        },
        props: {
            rowData: Array,
            rowIndex: Number,
        },
    };
</script>
    
<style>
    
</style>