var button = document.getElementById("request");
button.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3008/", true);
    xhr.onreadystatechange = function() {
        if(this.readyState ==this.DONE) {
            if(this.status != 200) {
                console.log("Ошибка: " + this.status);
            } else {
                console.log(this.responseText);
            }
        }
    };
    xhr.send();
})

// $("#request").on("click", function() {
//     var request = $.get("http://localhost:3008/");
//     request.done(function(data) {
//         console.log(data);
//     });
//     request.fail(function(jqXHR, textStatus, errorThrown) {
//         console.log(textStatus, errorThrown);
//     });
// });