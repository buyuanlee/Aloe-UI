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

<style lang="scss">
    .a-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }

    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: circle 2s linear infinite;
    }
</style>
