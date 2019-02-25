<template>
    <svg class="a-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "a-icon",
        props: {
            name: {
                type: String
            }
        }

    }
</script>

<style lang="scss" scoped>
    .a-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
