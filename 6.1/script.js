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
    list: ["Сдать ДЗ"],
    thing: ""
  },
  methods: {
    addItem: function(e) {
      // if(e.which == 13) {
        this.list.push(this.thing);
        this.thing = "";
      // }
    },
    removeItem: function(index) {
      this.list.splice(index, 1);
    }
  }
});
