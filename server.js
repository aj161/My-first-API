'use strict';

const express = require('express');//npm install express
const pokeData = require ('./assets/PokeAPI.json');
require('dotenv').config(); //npm i dotenv

const app = express();

const PORT = process.env.PORT;

//localhost:3000/
app.get('/', (request, response) => {
  response.status(200).send('home route');
})

//localhost:3000/test
app.get('/test', (request, response) => {
  response.send('alive!')
})

//localhost:3000/petsList
let myPetsList = ['Sherry', 'Sandy', 'Fluffy'];
app.get('/petsList', (request, response) => {
  response.status(200).send(myPetsList);
})

//localhost:3000/getPokeAbilities
app.get('/getPokeAbilities', (req, res) => {
  try {
    const pokeAbilityInfo = pokeData.results.map((ability) => {
      return ability.name
    })
      res.status(200).send(pokeAbilityInfo);
  } catch (error) {
    res.status(500).send(error)
  }
})

//localhost:3000/
app.get('*', (req,res) => {
  res.status(404).send('NOT FOUND')
})



app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})


