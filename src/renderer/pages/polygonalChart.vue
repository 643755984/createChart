<template>
    <div class="chartContent">
        <div class="middle_content">
            <div class="polygonalChart" ref="polygonalChart">
            
            </div>
            <div class="operate">
                <el-button type="primary" round @click="createChart">生成图形</el-button>
            </div>
        </div>
        <div class="setting">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="编辑数据" name="1">
                    <dataTbale @editTableData="editTableData"></dataTbale>
                </el-collapse-item>
                <el-collapse-item title="属性设置" name="2">
                    <div class="attr_item">
                        <span class="attr_name">图表名称：</span>
                        <div class="attr_value">
                            <el-input
                                placeholder="请输入内容"
                                v-model="chartName"
                                clearable>
                            </el-input>
                        </div>
                    </div>
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

let myChart;

export default {
    name: 'polygonalChart',
    data() {
        return {
            activeName: '1',
            tableData: [],
            legend: {},
            chartName: ''
        }
    },
    mounted() {
        this.$option.init('polygonalChart')
        myChart = this.$echarts.init(this.$refs.polygonalChart);
        myChart.setOption(this.$option.data)
    },
    components: {
        dataTbale
    },
    methods: {
        editTableData(option) {
            this.tableData = option;
        },
        createChart() {
            this.$option.setSeriesData(this.tableData);
            this.$option.setItemData('title', 'text', this.chartName);
            myChart.setOption(this.$option.data)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../common/css/color.scss";

    .chartContent {
        display: flex;
        height: 100%;
    }

    .middle_content {
        flex: 1;
        .polygonalChart {
            height: 700px;
            padding: 20px 10px 0;
        }
        .operate {
            text-align: center;
        }
    }
     

    .setting {
        width: 400px;
        background-color: $theme-color;
        .attr_item {
            display: flex;
            padding: 8px;
            .attr_name {
                width: 100px;
                text-align: center;
                font-size: 16px;
                line-height: 40px;
            }
            .attr_value {
                flex: 1;
            }
        }
    }


</style>
