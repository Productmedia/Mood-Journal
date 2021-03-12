const { readFile, readFileSync } = require("fs");
const express = require("express");
const aboutRouter = require("./routes/about");
const app = express();

//homepage
app.get("/", function(request, response) {
  readFile("./index.html", "utf8", (err, html) => {
    if(err) {
      response.status(500).send("Sorry something went wrong");
    }

    response.send(html)
  });

})



let post = {
  title: "title",
  colorCard: "rgb(val, val, val)",
  textBox: "orijgirojgirjgirjgirjgirjgirejge",
  date: "date of post",
  time: "time of post" 
}

const user = {
  username: "productmedia",
  email: "fijfijfi@grigok.com",
  password: "should be hashed",
  id: "1989384595",
  posts: [post]

}

console.log(user);

app.use(aboutRouter)
app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));