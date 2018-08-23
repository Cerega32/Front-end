var Vue = require("vue");
var VueRouter = require("vue-router");
var App = require("./app.vue");
var Enlarger = require("./enlarger.vue");
var Reducer = require("./reducer.vue");

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: "/add", component: Enlarger },
        { path: "/deduct", component: Reducer }
    ]
});

var vm = new Vue({
    el: "#root",
    router: router,
    render: function(createElement) {
        return createElement(App);
    }
});