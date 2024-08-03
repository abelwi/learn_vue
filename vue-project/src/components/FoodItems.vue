<template>
    <div @:click="countClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <button id="red">Click me {{ clicks }} times.</button>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                name: 'Chicken',
                message: 'I love chicken',
                clicks: 0
            }
        },
        methods: {
            countClicks() {
                this.clicks++
            }
        }
    }
</script>

<style>
    #red {
        font-weight: bold;
        color: rgb(122, 12, 12);
    }
</style>