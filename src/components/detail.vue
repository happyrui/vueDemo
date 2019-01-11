<template>
    <div class="rowcolCenter">
        {{ msg }}
        <!-- <el-button onClick="toList()">跳转列表</el-button> -->
        <router-link to='./list'>跳转列表</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: 'this is detail'
        }
    }
}
</script>
<style scoped>
.rowcolCenter {
    width: '100%';
    height: '600px';
    display: flex;
    justify-content: center
}
</style>


