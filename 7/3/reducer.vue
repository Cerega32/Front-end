<template>
    <button type="button" v-on:click="reduce">{{ number }}</button>
</template>

<script>
    module.exports = {
        data: function() {
            return { number: 0 };
        },
        methods: {
            reduce: function() {
                this.number -= 1;
            }
        }
    };
</script>


<!-- <template>
    <button type="button" v-on:click="reduce">{{ referenced.value }}</button>
</template>

<script>
    var globals = require("./globals.js");

    module.exports = {
        data: function() {
            return { referenced: globals };
        },
        methods: {
            reduce: function() {
                this.referenced.value -= 1;
            }
        }
    };
</script> -->