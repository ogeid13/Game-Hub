const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:8080", "https://api.rawg.io"]
}

app.use(cors(corsOptions));

app.get('/api/test', function (req, res) {
  res.send({fruits: ["apple", "pineapple", "orange", "grapes"]})
})

// Rawg APIs
const axios = require("axios")
axios.defaults.baseURL = "https://api.rawg.io/api";
const axiosOptions = {
  params: {key: "1ba50861780a408b8b2870e25ca180e1"}
}

app.get('/api/getGames', async function (req, res){
  let dataResult;
  await axios.get("/games", axiosOptions).then(result => {
    dataResult = result.data;
    res.status(200);
  }).catch(err => {
    dataResult = err;
    res.status(err.status);
  });
  res.send(dataResult)
})

app.get('/api/getGenres', async function (req, res){
  let dataResult;
  await axios.get("/genres", axiosOptions).then(result => {
    dataResult = result.data;
    res.status(200);
  }).catch(err => {
    dataResult = err;
    res.status(err.status);
  });
  res.send(dataResult)
})

app.listen(2000, ()=>{
    console.log("Server Started at port 2000");
});