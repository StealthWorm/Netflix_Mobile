const database = require('../services/database');
const Usuario = require('../models/usuario');
const usuariosJSON = require('../data/usuario.json');

const addUsers = async () => {
   try {
      for (let usuario of usuariosJSON) {
         await new Usuario(usuario).save();
      }
      console.log('Fim do script');
   } catch (err) {
      console.log(err.message);
   }
};

addUsers();