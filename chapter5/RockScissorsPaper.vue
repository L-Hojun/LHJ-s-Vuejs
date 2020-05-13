<template>
    <div>
        <div id="computer" v-bind:style="computedStyleObject"></div>
        <template>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('보')">보</button>
        </template>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };
    
    export default {
        data() {
            return{
                imgCoord: rspCoords.바위,  
                result: '',
                score: 0,
            }
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)`,
                };
            }
        },
        methods: {
            onClickButton(choice) {

            },
        },
    };
</script>

<style>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>