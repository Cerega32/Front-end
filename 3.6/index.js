var express = require("express"),
  cors = require("cors");
var app = express();
var fs = require("fs");

fs.readFile("database.txt", "utf-8", function(err, content) {
  content = JSON.parse(content);

  app.get("/quote", function(request, response) {
    const to = content.length;
    let randNumber = Math.floor(Math.random() * to);
    const quoteRandText = content[randNumber].text;
    const quoteRandNumber = content[randNumber].number;

    //es5 string
    //let htmlLayout = "<title>Цитата #${randNumber}</title><div>fuck<div>";
    //es6 string
    let htmlLayout = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Цитата #${randNumber + 1}</title>
            <style>
              html, body {
                height: 100%;
                margin: 0;
              }
              .red {
                  color: red;
              }
            </style>
        </head>
        <body>
            <div class="red">${quoteRandText}<div>
        </body>
      </html>
    `;
    response.send(htmlLayout);
  });
});

app.listen(3009);
