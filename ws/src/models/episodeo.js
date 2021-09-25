const mongoose = require('mongoose');

const Episodeo = mongoose.model('Episodeo', {
   temporada_id: {
      type: mongoose.Types.ObjectId, //sempre que for referenciar chave estrangeira de outro model usa isso
      ref: 'Temporada'               //referencia o model Temporada
   },
   titulo: String,
   descricao: String,
   numero: Number,
   capa: String,
});

module.exports = Episodeo;