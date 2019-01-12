<template>
    <div class="rowcolCenter">
        {{ msg }}
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
            <el-button type="primary">
                <router-link to='./detail'>跳转详情</router-link>
            </el-button>
            <div>{{reversedMessage}}</div>
            <input v-model="text" />
            <p>{{text}}</p>
            <select v-model="selected">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ selected }}</span>
        </el-row>
    </div>
</template>
<script>
import { Button, Select } from 'element-ui';
export default {
    data(){
        return {
            msg: 'this is list',
            items: this.items,
            text:'',
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    // 计算属性 复杂逻辑时使用
    computed: {
        // 匿名函数作为属性reversedMessage 的getter函数
        // 计算属性的 getter
        reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.msg.split('').reverse().join('')
        }
    },
    // 周期函数
    mounted: function(){
        console.log(this);
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
            headers: {
 
            },
            emulateJSON: true
        }).then(function(response) {
        // 这里是处理正确的回调
            this.items = response.body.subjects
            // this.articles = response.data["subjects"] 也可以
    
        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
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


