import express from 'express'

const app = express()
const port = process.env.PORT || 3000
const appName = process.env.APP_NAME || 'App'

app.get('/', (req, res) => {
  const helloMessage = `I am ${appName}: Running on Port ${port}`
  res.send(helloMessage)
})

app.listen(port, () => {
  console.log(`${appName} listening at http://localhost:${port}`)
})