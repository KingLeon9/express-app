const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pokemon', (req, res) => {
  res.json({
    pokemons: [
      "Charmander",
      "Pikachu",
      "Bulbasaur"
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})