var bPlot = 1;
var cPlot = 0;
var vm = new Vue({
  el: '#app',
  // data: {
  //   number: 1
  // },
  // methods: {
  //   double: function(e) {
  //     console.log(e);
  //     this.number *= 2; 
  //   }
  // }

  data: {
    b: 1,
    c: 0
  },
  methods: {
    draw: function() {
      bPlot = this.b;
      cPlot = this.c;
      drawFunc();
    }
  }
});



vm.$watch(function() {
  return [this.b, this.c];
}, function(b, c) {
  console.log(b); 
});

function drawFunc() {
  functionPlot({
    target: "#plot",
    data: [{  
      fn: "x^2 + " + bPlot + "*x + " + cPlot
    }],
    grid: true
  })
}