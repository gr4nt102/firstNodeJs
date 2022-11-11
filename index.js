const express= require('express')
const app= express()
const port=3000

app.get('/', (req, res) => {
    res.send('Hello! Im Nghia and this is my first Nodejs!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })