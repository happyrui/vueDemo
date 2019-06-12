<template>
    <div class="rowcolCenter">
        <!-- <ul>
            <li v-for="item in items">
                {{item.title}}
            </li>
        </ul> -->
        <!-- ele中属性比较少 class都是自定义 -->
        <el-card shadow='hover'>
            <!-- 头部 -->
            <div slot="header">
                <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
                <p>sfdsf</p>
            </div>
            <div v-for="item in items">
                {{item.title}}
            </div>
        </el-card>
        <el-row>
            <el-button type="success" @click="getData">获取</el-button>
            <el-button type="primary">
                <router-link to='./detail'>跳转详情</router-link>
            </el-button>
            <!-- <div>{{reversedMessage}}</div>
            <input v-model="text" />
            <p>{{text}}</p>
            <select v-model="selected">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ selected }}</span> -->
            <!-- 向一个组件传递内容 -->
            <Item 
                @fuAdd="addFun" 
                :changeNum = "changeNum"
            >
             {{changeNum}}</Item>
        </el-row>
    </div>
</template>
<script>
import Item from './item';
import { mapState, mapActions, mapMutations  } from 'vuex';
export default {
    // 引入 子组件
    components: {
        Item
    },
    // 使用Vuex时，之后在页面vue中只写 生命周期钩子，计算属性，方法等
    // 对于 初始化data，actions，getters，mutations 已经更改数据源 都放在对应的 vuex文件中
    data(){
        return {
            // items: this.$store.getters.items,   //获取store中state的数据
        }
    },
    // 计算属性 复杂逻辑时使用
    computed: mapState({
        // 匿名函数作为属性reversedMessage 的getter函数
        // 计算属性的 getter
        // reversedMessage: function (state) {
        //     let [ a, b, c, d ] = ['1', '2', '3', '4'];
        //     console.log(a,b,c,d)
        //     // `this` 指向 vm 实例
        //     console.log(state)
        //     return state.list.msg.split('').reverse().join('')
        // },
        // count: function(state) {
        //     console.log(this.$store) 
        //     return state.list.count++
        // },
        // message: function(state) {
        //     return state.list.message
        // }
        items: function(state) {
            // 使用modules时，需要使用 state.moduleA.xx 来取值
            return state.list.items
        },
        changeNum: function(state) {
            // 使用modules时，需要使用 state.moduleA.xx 来取值
            return state.list.changeNum
        }
    }),
    // 周期函数
    // 所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算
    // 不能使用 箭头函数 定义生命周期函数 这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，
    mounted: function(){
        // 触发action
        this.$store.dispatch('actionItems'); // 使用actions 异步触发
        // 提交 mutations
        // this.$store.commit('getItems') // 使用 mutations 同步触发
        // this.getData();
        console.log(this)
    },
    methods: { 
        ...mapActions({   
            // add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
            getData: 'actionItems'
        }),
        ...mapMutations({
            // add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            // 父组件调用的方法
            addFun: 'changeNum'
        })
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


