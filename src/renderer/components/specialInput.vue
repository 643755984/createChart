<template>
    <div>
        <div class="text" v-if="isShow" @click="switchMode(false)">{{inputVal}}</div>
        <el-input
            v-else
            ref="ipt"
            size="mini"
            placeholder="请输入内容"
            @blur="handleInputConfirm"
            @keyup.enter.native="handleInputConfirm"
            v-model="inputVal">
               <!-- @input="changeData" -->
        </el-input>
    </div>
</template>
<script>
export default {
    props: {
        itemData: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputVal: this.itemData,
            isShow: true
        }
    },
    methods: {
        switchMode(isTrue) {
            this.isShow = isTrue;
            this.$nextTick(_ => {
                this.$refs.ipt.$refs.input.focus()
            });
        },
        handleInputConfirm() {
            this.$emit('inputEvent', this.inputVal);
            this.isShow = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .text {
        height: 28px;
    }
</style>


