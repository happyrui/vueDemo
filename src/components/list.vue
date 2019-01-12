<template>
    <div class="rowcolCenter">
        {{ msg }}
        <!-- <ul>
            <li v-for="item in items">
                {{item.title}}
            </li>
        </ul> -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
            </div>
            <div v-for="item in items" class="text item">
                {{item.title}}
            </div>
        </el-card>
        <router-link to='./detail'>跳转详情</router-link>
    </div>
</template>
<script>
import { Button, Select } from 'element-ui';
export default {
    data(){
        return {
            msg: 'this is list',
            items: this.items
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


