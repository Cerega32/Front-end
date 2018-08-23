<template>
    <div>
        <!-- Hello, world! -->

        <!-- <c-tag></c-tag> -->

        <p><input type="text" v-model="message"></p>
        <!-- <par-cap v-bind:p-text="message"></par-cap> -->
        <par-cap v-bind:p-text="message" v-on:update="receive"></par-cap>
    </div>
</template>
<script>
    // var Header = require("./header.vue");

    var ParCap = require("./par-cap.vue");

    // module.exports = {
    //     components: { cTag: Header }
    // };

    module.exports = {
        data: function() {
            return { message: "Hello, component!" };
        },
        components: { 
            parCap: ParCap 
        },

        methods: {
            receive: function(value) {
                this.message = value;
            }
        }
    };
</script>