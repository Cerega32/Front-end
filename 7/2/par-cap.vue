<style scoped>
    div {
        display: inline-block;
        background: yellow;
    }
</style>

<template>
    <div>
        <p>{{ pText.toUpperCase() }}</p>
        <!-- <p><input type="text" v-model="pText"></p> -->
        <!-- <p><input type="text" v-bind:value="pText" v-on:input="pText = $event.target.value"></p> -->
        <p><input type="text" v-bind:value="pText" v-on:input="send"></p>
    </div>
</template>

<script>
    // module.exports = { props: ["pText"] }

    module.exports = {
        props: ["pText"],
        methods: {
            send: function(event) {
                this.$emit("update", event.target.value);
            }
        }
    }
</script>