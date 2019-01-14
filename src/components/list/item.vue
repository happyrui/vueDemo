<template>
    <div>
        <el-row>
            <input v-model="beginNum">
            <el-button type="success" @click="add">点击求幂</el-button>
        </el-row>
        <el-row>
            结果：<label>{{changeNum}}</label>
        </el-row>
        <el-row>
            <div>wsds</div>
            <!-- 使用插槽 -->
            <slot></slot>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        changeNum: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            beginNum: 0
        }
    },
    methods: {
        add() {
            //  函数名 与 父组件属性名一致
            this.$emit('fuAdd', this.beginNum)
        }
    }
}
</script>

