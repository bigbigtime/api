<template>
    <svg class="svg-icon" :class="svgClassName" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>
<script>
export default {
    name: "svgIcon",
    props: {
        // 分页
        iconClass: {
            type: String,  // 定义接收的值类型
            default: ''
        },
        className : {
            type: String,
            default: ''
        }
    },
    computed: {
        icon(){
            return `#icon-${this.iconClass}`;
        },
        svgClassName(){
            return this.className;
        }
    }
}
</script>
<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>