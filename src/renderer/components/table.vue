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
            height="60px"
            >
                <template slot-scope="scope">
                    <myInput :itemData="scope.row.name" @inputEvent="changeData(arguments, scope)"></myInput>
                </template>
            </el-table-column>
            <el-table-column
            prop="a"
            align="center"
            label="B">
            </el-table-column>
            <el-table-column
            prop="b"
            align="center"
            label="C">
            </el-table-column>
            <el-table-column
            prop="c"
            align="center"
            label="D">
            </el-table-column>
            <el-table-column
            prop="d"
            align="center"
            label="E">
            </el-table-column>
            <el-table-column
            prop="e"
            align="center"
            label="F">
            </el-table-column>
            <el-table-column
            prop="f"
            align="center"
            label="G">
            </el-table-column>
            <el-table-column
            prop="g"
            align="center"
            label="H">
            </el-table-column>
            <el-table-column
            prop="h"
            align="center"
            label="I">
            </el-table-column>
            <el-table-column
            prop="i"
            align="center"
            label="J">
            </el-table-column>
            <el-table-column
            prop="j"
            align="center"
            label="K">
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
                { name: 'a', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
                { name: '', a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: ''},
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
            var val = arguments[0]
            item = val;
        }
    }
}
</script>
<style lang="scss" scoped>
    .my_table {
        border-left: 2px solid #545C64;
    }
</style>
