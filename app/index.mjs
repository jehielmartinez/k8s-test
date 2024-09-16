import express from 'express'
import os from 'os'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const helloMessage = `Hello World from ${os.hostname()}, version 3.0`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
  const url = "http://nginx"
  const response = await fetch(url)
  const body = await response.text()
  res.send(body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})