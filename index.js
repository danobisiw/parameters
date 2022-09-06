const express = require("express");
const postRouter = require("./routes/post.routes");

//initialise app
const app = express();

app.get("/",(request, response)=>{
  response.status(200).send("Welcome")
})

app.use("/posts", postRouter)


//ports
app.listen(4000, (error) => {
  console.log(`Server Running on https://localhost:4000`);
});
