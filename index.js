require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/instagram", (req, res)=>{
    res.send("www.instagram.com/saikat7672")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})