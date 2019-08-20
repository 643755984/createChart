<template>
     <div class="my_table">
         <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            type="index"
            width="50"
            fixed>
            </el-table-column>
            <el-table-column
            prop="name"
            align="center"
            label="A"
            min-width="100px"
            >
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.name" @inputEvent="changeData(arguments, scope, 'name')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="a"
            align="center"
            min-width="90px"
            label="B">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.a" @inputEvent="changeData(arguments, scope, 'a')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="b"
            align="center"
            min-width="90px"
            label="C">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.b" @inputEvent="changeData(arguments, scope, 'b')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="c"
            align="center"
            min-width="90px"
            label="D">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.c" @inputEvent="changeData(arguments, scope, 'c')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="d"
            align="center"
            min-width="90px"
            label="E">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.d" @inputEvent="changeData(arguments, scope, 'd')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="e"
            align="center"
            min-width="90px"
            label="F">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.e" @inputEvent="changeData(arguments, scope, 'e')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="f"
            align="center"
            min-width="90px"
            label="G">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.f" @inputEvent="changeData(arguments, scope, 'f')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="g"
            align="center"
            min-width="90px"
            label="H">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.g" @inputEvent="changeData(arguments, scope, 'g')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="h"
            align="center"
            min-width="90px"
            label="I">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.h" @inputEvent="changeData(arguments, scope, 'h')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="i"
            align="center"
            min-width="90px"
            label="J">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.i" @inputEvent="changeData(arguments, scope, 'i')"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="j"
            align="center"
            min-width="90px"
            label="K">
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.j" @inputEvent="changeData(arguments, scope, 'j')"></myInput>
                </template>
            </el-table-column>
        </el-table>
     </div>
</template>
<script>
import myInput from './specialInput'

export default {
    data() {
        return {
             input: '',
             tableData: [
                { name: '', a: '周一', b: '周二', c: '周三', d: '周四', e: '周五', f: '周六', g: '周日', h: '', i: '', j: ''},
                { name: '邮件营销', a: '120', b: '132', c: '101', d: '172', e: '180', f: '270', g: '290', h: '', i: '', j: ''},
                { name: '联盟广告', a: '220', b: '182', c: '191', d: '182', e: '230', f: '250', g: '320', h: '', i: '', j: ''},
                { name: '视频广告', a: '150', b: '232', c: '201', d: '210', e: '270', f: '260', g: '290', h: '', i: '', j: ''},
                { name: '直接访问', a: '320', b: '332', c: '301', d: '280', e: '290', f: '320', g: '340', h: '', i: '', j: ''},
                { name: '搜索引擎', a: '820', b: '932', c: '901', d: '802', e: '750', f: '890', g: '920', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''}
            ]   
        }
    },
    components: {
        myInput
    },
    methods: {
        changeData() {
            var item = arguments[1]
            var val = arguments[0][0]
            var key = arguments[2]
            
            this.tableData[item.$index][key] = val;
            console.log('this.tableData-->', this.tableData)
            this.$emit('editTableData', this.tableData)
        }
    }
}
</script>
<style lang="scss" scoped>
    .my_table {
        border-left: 2px solid #545C64;
    }
</style>
