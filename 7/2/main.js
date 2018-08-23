var Vue = require("vue");
var App = require("./app.vue");

var vm = new Vue({
    el: "#root",
    render: function(createElement) {
        return createElement(App);
    }
});