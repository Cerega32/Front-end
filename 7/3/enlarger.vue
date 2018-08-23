<template>
    <h1 v-on:mousemove="enlarge">{{ number }}</h1>
</template>

<script>
    module.exports = {
        data: function() {
            return { number: 0 };
        },
        methods: {
            enlarge: function() {
                this.number += 1;
            }
        }
    };
</script>


<!-- <template>
    <h1 v-on:mousemove="enlarge">{{ referenced.value }}</h1>
</template>

<script>
    var globals = require("./globals.js");

    module.exports = {
        data: function() {
            return { referenced: globals };
        },
        methods: {
            enlarge: function() {
                this.referenced.value += 1;
            }
        }
    };
</script> -->