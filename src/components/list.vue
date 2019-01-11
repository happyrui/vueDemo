<template>
    <div class="rowcolCenter">
        {{ msg }}
        <!-- <el-button>跳转详情</el-button> -->
        <router-link to='./detail'>跳转详情</router-link>
    </div>
</template>
<script>
import { Button, Select } from 'element-ui';
export default {
    data(){
        return {
            msg: 'this is list'
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


