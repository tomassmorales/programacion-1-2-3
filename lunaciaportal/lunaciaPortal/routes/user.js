var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
const multer = require("multer");
const path = require ("path");
const academiaController = require('../controllers/academiaController');

/*Multer*/

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/images/avatars");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

const upload = multer({
	storage: storage
})

const storage_documentoFrente = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/images/doc_fren");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

const uploadDocumentoFrente = multer({
	storage: storage_documentoFrente
})

const storage_documentoAtras = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/images/doc_at");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
	}
})

const uploadDocumentoAtras = multer({
	storage: storage_documentoAtras
})


/* GET users listing. */

router.get('/search', userController.search );

router.get("/detalle/id/:id", userController.detail);

router.get("/login", userController.login);

router.get("/register", userController.register);

router.get("/miPerfil", userController.miPerfil);

router.get("/documentos", userController.documentos);

router.get("/editarPerfil", userController.edit);

router.get("/editarCurriculum", userController.editCv);

router.get("/documentoFrente", userController.docFren);

router.get("/documentoAtras", userController.docAtras);

router.get("/detalle/id/:id/documentos", userController.documentosDetalle);

/*POST users listing*/

router.post("/login", userController.logeo);

router.post("/register",userController.store);

router.post ("/logout", userController.logout);

router.post ("/editarPerfil",upload.single("fotoPerfil"),userController.editar);

router.post ("/editarCurriculum", userController.editadoCv)

router.post("/documentoFrente",uploadDocumentoFrente.single("docFren") ,userController.storeDocFren);

router.post("/documentoAtras",uploadDocumentoAtras.single("docAtras") ,userController.storeDocAtras);

router.post("/solicitud/:id", userController.enviarSolicitud);

router.post("/eliminarSolicitud/:id", userController.eliminarSolicitud)

router.post("/aceptarSolicitud/:idSolicitud/academia/id/:idAcademia/tipo/:tipo", userController.aceptarSolicitud);

module.exports = router;
