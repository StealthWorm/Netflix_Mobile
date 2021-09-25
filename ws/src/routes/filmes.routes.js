const express = require('express');
const router = express.Router();
const _ = require('underscore');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');


//Recuparar tela Home
router.get('/home', async (req, res) => {
   try {
      //recuperar todos os filmes
      let filmes = await Filme.find({});
      let finalFilmes = [];

      // recuperar todas temporadas que pertencem ao filme atual
      for (let filme of filmes) {
         const temporadas = await Temporada.find({
            filme_id: filme._id
         });

         //copiando todos os parametros do _doc e de temporadas e criando um objeto com isso
         const newFilme = { ...filme._doc, temporadas };
         finalFilmes.push(newFilme);
      }

      // misturar resultados aleatoriamente
      finalFilmes = _.shuffle(finalFilmes);

      //filme principal
      const principal = finalFilmes[0];

      //separar em seções. A função chunck vem da lib underscore
      const secoes = _.chunk(finalFilmes, 5);

      res.json({ error: false, principal, secoes });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }
});

//Recuperar todos os registros
router.get('/', async (req, res) => {
   try {
      const filmes = await Filme.find({});
      res.json({ error: false, filmes });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }
});

// pegar somente o registro com o id
router.get('/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const filme = await Filme.findById(id);
      res.json({ error: false, filme });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }

   res.json({ mensagem: `GET ISOLATED ID: ${id}` });
});

// criar um registro
router.post('/', async (req, res) => {
   try {
      const filme = req.body;
      const response = await new Filme(filme).save();
      res.json({ error: false, filme: response });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }

});

// atualizar um registro
router.put('/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const novo_filme = req.body;

      const filme = await Filme.findByIdAndUpdate(id, novo_filme);
      res.json({ error: false, filme });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }
});

// deletar um registro
router.delete('/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const deleted = await Filme.findByIdAndDelete(id);
      res.json({ error: false });
   } catch (err) {
      res.json({ error: true, message: err.message });
   }
});

module.exports = router;