<template>
    <div class="aloe-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-button-group",
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`button-group的子元素应该全部是button，而你的子元素包含了${name}标签`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .aloe-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .aloe-button {
            border-radius: 0;

            &:not(first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }

            &:last-child {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
