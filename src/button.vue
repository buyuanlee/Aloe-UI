<template>
    <button class="a-button" :class="{[`position-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: "a-button",
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: "left"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }

    .a-button {
        font-size: 14px;
        font-weight: 500;
        color: deepskyblue;
        padding: 0 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {border-color: orangered;}

        &:active {border-color: bisque;}

        &:focus {border-color: green;}

        > .icon {order: 1;margin-right: .3em}

        > .content {order: 2;}

        &.position-left {
            > .icon {order: 1;margin-right: .3em}

            > .content {order: 2;}
        }

        &.position-right {
            > .icon {order: 2;margin-right: 0;margin-left: .3em}

            > .content {order: 1;}
        }
    }
</style>
