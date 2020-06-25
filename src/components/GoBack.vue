<template>
           <span @click="goBack" class="back">
                <i class="fas fa-angle-left"></i>
            </span>
</template>


<script>
    export default {
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style>
    .back{
        background-color: black;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        position: absolute;
        top: 60px;
        left: 10px;
        z-index: 99999;
    }
</style>
