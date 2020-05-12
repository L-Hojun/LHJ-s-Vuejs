<template>
    <div>
        <div id="screen" v-bind:class="waiting">{{message}}</div>
        <div>
            <div>평균 시간 : {{}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                result: [],
                state: '',
                message: '클릭해서 시작하세요',
            }
        },
        methods: {
            onReset(e) {
            
            }
        }
    };
</script>

<style>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.waiting {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>