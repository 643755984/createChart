<template>
    <div class="content">
        <h1>折线图生成</h1>
        <div class="axis_data">
            <h3>X轴数据</h3>
            <el-tag
                :key="tag"
                v-for="tag in xAxis.data"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-input
                class="input-new-tag"
                v-if="xAxis.visible"
                v-model="xAxis.inputValue"
                ref="xSaveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm('xAxis')"
                @blur="handleInputConfirm('xAxis')"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput('xAxis')">+ 添加数据</el-button>
        </div>
        <div class="axis_data">
            <h3>图例数据</h3>
            <el-tag
                :key="tag"
                v-for="tag in legend.data"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-input
                class="input-new-tag"
                v-if="legend.visible"
                v-model="legend.inputValue"
                ref="xSaveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm('legend')"
                @blur="handleInputConfirm('legend')"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput('legend')">+ 添加数据</el-button>
        </div>

        <div class="axis_data">
            <h3>节点数据</h3>
            <div class="data_box">
                <div class="item" v-for="(item, index) in seriesItems" :key="index">
                    <span class="item_name">{{item.name}}：</span>
                    <el-input
                        placeholder="请输入内容"
                        v-model="item.data"
                        clearable>
                    </el-input>
                </div>
            </div>
        </div>

        <el-button size="medium" type="primary" @click="createChart">生成图形</el-button>
        <div class="graphical">
            <h3>折线图</h3>
            <div class="grap_content" ref="graphical">
                
            </div>
        </div>
    </div>
</template>
<script>

// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/dataZoom')
require('echarts/lib/component/legendScroll')

export default {
    name: 'home',
    data() {
        return {
            xAxis: {
                data: [],
                visible: false,
                inputValue: ''
            },
            legend: {
                data: [],
                visible: false,
                inputValue: ''
            },
            seriesItems: []
        }
    },
    methods: {
        setSeriesData() {
            let arr = [];
            arr = this.legend.data.map(item => {
                let obj = {};
                obj.name = item
                obj.type = 'line',
                obj.data = '';
                return obj;
            })

            this.seriesItems = arr;
        },
        handleClose(tag) {
            this.xData.splice(this.xData.indexOf(tag), 1);
        },
        showInput(type) {
            let obj = this.getObjData(type)
            this.accessShow(obj)
        },
        handleInputConfirm(type) {
            let obj = this.getObjData(type)
            this.accessConfirm(obj)
        },
        accessShow(data) {
            data.visible = true;
            this.$nextTick(_ => {
                this.$refs.xSaveTagInput.$refs.input.focus();
            });
        },
        accessConfirm(data) {
            if(!data.inputValue){
                data.visible = false;
                return;
            }
            data.data.push(data.inputValue);
            data.inputValue = '';
            data.visible = false;
            this.setSeriesData()
        },
        getObjData(type) {
            if(type == 'xAxis'){
                return this.xAxis
            }else if(type == 'legend'){
                return this.legend
            }
        },
        createChart() {
            var myChart = echarts.init(this.$refs.graphical);
            var option = {};

            option.title = { text: '教师折线图'}

            option.tooltip = { trigger: 'axis'}

            option.legend = { data: this.legend.data}

            option.grid = {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            }

            option.toolbox = {
                feature: {
                    saveAsImage: {}
                }
            }

            option.xAxis = {
                type: 'category',
                boundaryGap: false,
                data: this.xAxis.data
            }

            option.yAxis = {
                type: 'value'
            }

            let series = this.handleSeriesData()

            option.series = series;
            console.log('option--->',option);
            myChart.setOption(option);
        },
        handleSeriesData() {
            let dataArr = this.seriesItems.map(item => {
                let str = JSON.parse(JSON.stringify(item))
                str.data = str.data.split(',');
                return str;
            })
            return dataArr;
        }
    }
}
</script>
<style lang="scss">
    .content {
        padding: 0 10px 10px;
        .axis_data {
            .el-tag + .el-tag {
                margin-left: 10px;
            }
            .button-new-tag {
                margin-left: 10px;
                height: 32px;
                line-height: 30px;
                padding-top: 0;
                padding-bottom: 0;
            }
            .input-new-tag {
                width: 90px;
                margin-left: 10px;
                vertical-align: bottom;
            }
        }
    }


    .graphical {
        width: 100%;
        height: 400px;
        .grap_content {
            width: 100%;
            height: 100%;
        }
    }

    .data_box {
         .item {
            display: flex;
            .item_name {
                text-align: center;
                line-height: 40px;
            }
        }
    }
</style>
