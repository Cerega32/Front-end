<style scoped>
    h1 {
        color: blue;
    }
</style>

<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: "Hello, component!"
            };
        }
    };
</script>