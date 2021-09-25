const database = require('../services/database');
const Filme = require('../models/filme');
const filmesLogoMobileJSON = require('../data/filmeLogoMobile.json');

const addFilmesMobile = async () => {
   try {
      for (let filmeLogoMobile of filmesLogoMobileJSON) {
         await Filme.findByIdAndUpdate(filmeLogoMobile.filme_id, {
            logoMobile: filmeLogoMobile.logoMobile,
         });
      }
      console.log('Fim do script');
   } catch (err) {
      console.log(err.message);
   }
};

addFilmesMobile();