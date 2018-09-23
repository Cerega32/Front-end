function searchWiki() {
  $.ajax( {
    url: "https://ru.wikipedia.org/w/api.php",
    jsonp: "callback",
    dataType: 'jsonp',
    data: {
      action: "query",
      prop: "extracts",
      format: "json",
      exintro: "",
      redirects: "1",
      titles: userQuery
    },
    success: function(response) {
      var pages = response.query.pages, pageId, page;
      for(pageId in pages) {
        if (pageId == -1) {
          
        } else {
          page = pages[pageId];
          this.message = page.extract;
        }
        break;
      }
    }
  } );
}
var userQuery;

var vm = new Vue({
  el: '#app',
  data: {
    message: ""
  },
  methods: {
    search: function() {
      userQuery = this.message;
      searchWiki();
    }
  }
});
