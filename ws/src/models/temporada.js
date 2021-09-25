const mongoose = require('mongoose');

const Temporada = mongoose.model('Temporada', {
   filme_id: {
      type: mongoose.Types.ObjectId, //sempre que for referenciar chave estrangeira de outro model usa isso
      ref: 'Filme'                   //referencia o model Filme
   },
   titulo: String,
});

module.exports = Temporada;