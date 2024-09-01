// console.log("Let's learn backend");
require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 2024

app.get('/', (req, res) => {
  res.send('Hello Dev!')
})

app.get("/run",(req,res)=>{
    res.send("Hello my port listeners")
})

app.get("/move",(req,res)=>{
    res.send("<h1>Backend</h1>")
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })
// app.listen(port)