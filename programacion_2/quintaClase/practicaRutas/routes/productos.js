const express = require('express' );
const router  = express.Router();
/*const autos = require('../modulos/autos');*/
const productsController = require('../controllers/productsController');

router.get('/index' , productsController.index);

router.get('/marca/:marca' , productsController.porMarca);

router.get('/color/:color' , productsController.porColor);

router.get('/modelo/:modelo/:anio?', productsController.porModeloAnio);

router.get('/anio/:anio' , productsController.porAnio);


module.exports = router;