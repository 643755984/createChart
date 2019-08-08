<template>
    <div class="home">
        <header>
            <h1 class="title">统计图</h1>
        </header>
        <div class="content">
            <div class="left">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item :index="index | getString" v-for="(item, index) in navData" :key="item.id" @click="jumpPages(index)">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navData: [
                {
                    id: 1,
                    name: '折线图',
                    routerName: 'polygonalChart'
                }
            ]
        }
    },
    filters: {
        getString: function(value) {
            if(!value) return '';
            return value.toString();
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        jumpPages(index) {
            let pageData = this.navData[index];
            this.$router.push({name: pageData.routerName});
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../common/css/color.scss";

    .home {
        height: 100%;
    }

    header {
        background-color: $theme-color;
        .title {
            margin: 0;
            padding: 15px 0;
            text-align: center;
            color: #fff;
            font-size: 20px;
        }
    }
    .content {
        display: flex;
        height: calc(100% - 53px);
        .left {
            width: 180px;
            height: 100%;
            .el-menu {
                height: 100%;
            }
        }
        .right {
            flex: 1;
        }
    }
</style>

