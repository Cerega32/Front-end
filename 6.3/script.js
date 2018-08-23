var vm = new Vue({
  el: '#app',
  data: {
    number: 0,
    changesCount: 0
  },
  methods: {
    increase: function() {
      this.number +=1;
    },
    decrease: function() {
      this.number -=1;
    }
  }
});


vm.$watch("number", function(newValue) {
  console.log(newValue);
  this.changesCount += 1;
})