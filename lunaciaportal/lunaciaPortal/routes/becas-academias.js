var express = require('express');
var router = express.Router();
const academiaController = require("../controllers/academiaController");
const multer = require("multer");
const path = require ("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/images/logos");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

const upload = multer({
	storage: storage
})

/* GET home page. */

router.get("/", academiaController.hub);

router.get("/buscadorAcademias", academiaController.searchAcademy);

router.get("/misAcademias", academiaController.misAcademias);

router.get("/crearAcademia", academiaController.crearAcademia);

router.get("/academia/id/:id", academiaController.detalleAcademia);

router.get("/editarAcademia/id/:id", academiaController.editarAcademia);

router.get("/beca/id/:id", academiaController.detalleBeca);

router.get("/despedir/academia/id/:id", academiaController.despedir);

router.get("/renunciar/academia/id/:id", academiaController.renunciar);

router.get("/centroDeBecas", academiaController.centroBecas);

router.get("/editarBeca/id/:id", academiaController.editarBeca);

router.get("/crearBeca/academia/id/:id", academiaController.crearBeca);

// router.get("/comentario/:id", academiaController.comentario)

/*POST*/

router.post("/crearAcademia",upload.single("logo"), academiaController.storeAcademia);

router.post("/editarAcademia/id/:id", upload.single("logo"), academiaController.procesoEditarAcademia)

router.post("/renunciar/academia/id/:id", academiaController.procesoRenunciar);

router.post("/despedir/academia/id/:id/becado/:becadoId", academiaController.procesoDespedir);

router.post("/crearBeca/academia/id/:id", academiaController.procesoCrearBeca);

router.post("/editarBeca/id/:id/academia/:idAcademia", academiaController.edicionBeca);

router.post("/borrarPostulacion/:id/academia/:idAcademia", academiaController.borrarBeca)

router.post("/beca/id/:id/postularme", academiaController.postular)

router.post("/beca/id/:id/despostularme", academiaController.despostular)

router.post("/beca/id/:id/contratar/:idPostulado/academia/:idAcademia", academiaController.contratar)


module.exports = router;
