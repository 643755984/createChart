<template>
    <div class="chartContent">
        <div class="polygonalChart" ref="polygonalChart">
            
        </div>
        <div class="setting">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="编辑数据" name="1">
                    <dataTbale></dataTbale>
                </el-collapse-item>
                <el-collapse-item title="属性设置" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="配设方案" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
            </el-collapse>
            
        </div>
    </div>
</template>
<script>
import dataTbale from "../components/table"

let option = {}

export default {
    name: 'polygonalChart',
    data() {
        return {
            activeName: '1'
        }
    },
    mounted() {
        option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
        let myChart = this.$echarts.init(this.$refs.polygonalChart);
        myChart.setOption(option)
        // console.log(this.tableData)
    },
    components: {
        dataTbale
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
    @import "../common/css/color.scss";

    .chartContent {
        display: flex;
        height: 100%;
    }

     .polygonalChart {
        flex: 1;
        height: 700px;
        padding: 20px 10px 0;
    }

    .setting {
        width: 400px;
        background-color: $theme-color;
    }
</style>
