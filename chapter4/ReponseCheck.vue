<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <template v-show="result.length">
            <div>평균 시간 : {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </template>
    </div>
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeOut = null;
    export default {
        data() {
            return{
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요',
            }
        },
        computed: {
            average() {
                return Math.floor(this.result.reduce((a,c) => a + c, 0) / this.result.length) || 0;
            },
        },
        methods: {
            onReset(e) {
                this.result = [];
            },
            onClickScreen(e) {
                if (this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.';
                    timeOut = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000);
                } else if (this.state === 'ready') {
                    clearTimeout(timeOut);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 되면 클릭하세요.';
                } else if (this.state === 'now') {
                    this.message = '클릭해서 시작하세요.';
                    this.state = 'waiting';
                    endTime = new Date();
                    this.result.push(endTime - startTime);
                }
            },
        },
    };
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: blue;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>