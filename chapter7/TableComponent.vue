<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="(rowData, index)" :row-data="rowData" :row-index="index"></tr-component>
    </table>
</template>

<script>3
    import TrComponent from './TrComponent';

    export default {
        components: {
            TrComponent,
        },
        props: {
            tableData: Array,
        },
    };
</script>
    
<style>
    
</style>