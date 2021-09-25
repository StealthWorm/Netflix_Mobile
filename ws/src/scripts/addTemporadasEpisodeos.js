const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Episodeo = require('../models/episodeo');

const addTemporadasEpisodeos = async () => {
   try {
      const series = await Filme.find({ tipo: 'serie' }).select('_id');
      for (let serie of series) {
         // id do doc. tipo serie
         console.log(`FILME ${serie}------`);

         // gera num aleatorio de temporadas
         const numTemporadas = Math.floor(Math.random() * 13) + 1;
         for (let i = 1; i <= numTemporadas; i++) {
            console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
            const temporada = await new Temporada({
               filme_id: serie,
               titulo: `Temporada ${i}`
            }).save();

            // gera num aleatorio de episodeos
            const numEpisodeos = Math.floor(Math.random() * 25) + 1;
            for (let x = 1; x <= numEpisodeos; x++) {
               console.log(`Inserindo episodeo ${x} de ${numEpisodeos}`);
               await new Episodeo({
                  temporada_id: temporada._id,
                  titulo: `Episódio ${x}`,
                  numero: x,
                  descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                  capa: 'https://picsum.photos/200/300',
               }).save();
            }
         }
      }

      console.log('Fim do scripts de criação de Temporadas e Episódios');
   } catch (err) {
      console.log(err.message);
   }
};

addTemporadasEpisodeos();