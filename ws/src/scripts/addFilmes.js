const database = require('../services/database');
const Filme = require('../models/filme');
const filmesJSON = require('../data/filme.json');

const addFilme = async () => {
   try {
      for (let filme of filmesJSON) {
         await new Filme(filme).save();
      }
      console.log('Fim do script');
   } catch (err) {
      console.log(err.message);
   }
};

addFilme();