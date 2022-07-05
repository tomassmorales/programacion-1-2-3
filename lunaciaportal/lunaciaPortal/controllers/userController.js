let db = require('../database/models');
let bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

let userController = {
	search: function (req, res, next) {
		if (req.session.user != undefined) {
			let search = req.query.q;
			let disponibilidad = req.query.dispBec;
			let pais = req.query.pais;
			let numeroDoc = req.query.numeroDoc;
			if (disponibilidad == undefined) {
				db.Usuario.findAll({
						include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							},
							{
								association: "becaActual",
								include: [{
									association: "academia"
								}]
							}
						],
						order: [
							["createdAt", "DESC"]
						],
						limit: 6
					})
					.then(function (users) {
						res.render("buscadorUsuarios", {
							numeroDoc: numeroDoc,
							search: search,
							disponibilidad: disponibilidad,
							pais: pais,
							usuarios: users,
						})
					})
			} else {
				if (search != "" && pais != "cualquiera" && numeroDoc != "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}],
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								'nombre': {
									[op.like]: `%${search}%`
								},
								"disponibilidad": disponibilidad,
								"pais": pais,
								"documento": numeroDoc
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search == "" && pais != "cualquiera" && numeroDoc != "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								"disponibilidad": disponibilidad,
								"pais": pais,
								"documento": numeroDoc
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search == "" && pais == "cualquiera" && numeroDoc != "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								"disponibilidad": disponibilidad,
								"documento": numeroDoc
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search != "" && pais == "cualquiera" && numeroDoc == "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								'nombre': {
									[op.like]: `%${search}%`
								},
								"disponibilidad": disponibilidad,
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search != "" && pais != "cualquiera" && numeroDoc == "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								'nombre': {
									[op.like]: `%${search}%`
								},
								"disponibilidad": disponibilidad,
								"pais": pais,
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search != "" && pais == "cualquiera" && numeroDoc != "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								'nombre': {
									[op.like]: `%${search}%`
								},
								"disponibilidad": disponibilidad,
								"documento": numeroDoc
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search == "" && pais != "cualquiera" && numeroDoc == "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								"disponibilidad": disponibilidad,
								"pais": pais,
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				} else if (search == "" && pais == "cualquiera" && numeroDoc == "") {
					db.Usuario.findAll({
							include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								},
								{
									association: "becaActual",
									include: [{
										association: "academia"
									}]
								}
							],
							where: [{
								"disponibilidad": disponibilidad,
							}],
							order: [
								["createdAt", "DESC"]
							],
							limit: 6
						})
						.then(function (users) {
							res.render('buscadorUsuarios', {
								numeroDoc: numeroDoc,
								search: search,
								disponibilidad: disponibilidad,
								pais: pais,
								usuarios: users,
							});
						})
				}
			}
		} else {
			res.redirect("/user/login")
		}
	},
	detail: function (req, res) {
		if (req.session.user != undefined) {
			if (req.session.user.id != req.params.id) {
				db.Usuario.findByPk(req.params.id, {
						include: [{
								association: "usuarioAcademia"
							},
							{
								association: "postulaciones",
								include: [{
									association: "beca",
									include: [{
										association: "academia"
									}]
								}]
							},
							{
								association: "becaActual",
								include: [{
									association: "academia"
								}]
							},
							{
								association: "comentarios",
								include: [{
									association: "academia"
								}]
							},
							{
								association: "solicitudesUser",
								include: [
									{
										association: "academia"
									}
								]
							}
						]
					})
					.then(detail => {
						// return res.send(detail)
						if (req.session.user != undefined) {
							// let loSigue = false
							// for (let i = 0; i < detail.seguidor.length; i++) {
							// 	if (req.session.user.id == detail.seguidor[i].id) {
							// 		loSigue = true
							// 	}
							// }


							res.render("detalleUsuario", {
								detail: detail,
								// loSigue: loSigue
							})
						} else {
							res.redirect("/user/login")
						}
					})
					.catch(error => {
						console.log(error);
					})
			} else {
				res.redirect("/user/miPerfil")
			}
		} else {
			res.redirect("/user/login")
		}
	},
	login: function (req, res) {
		if (req.session.user == undefined) {
			res.render("login")
		} else {
			res.redirect("/")
		}
	},
	logeo: function (req, res) {

		let errors = {};

		if (req.body.email == "" || req.body.password == "") {
			errors.message = "El campo de email/contraseña no puede estar vacío";
			res.locals.error = errors;
			res.render("login")
		} else {
			db.Usuario.findOne({
					where: {
						email: req.body.email
					},
					include: [{
							association: "usuarioAcademia",
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual"
						},
						{
							association: "comentarios"
						}
					],
				})
				.then(function (user) {
					if (user != undefined) {
						let passwordCorrecta = bcrypt.compareSync(req.body.password, user.contrasena);
						if (passwordCorrecta == true) {
							req.session.user = user;
							if (req.body.recordame) {
								res.cookie("usuarioId", user.id, {
									maxAge: 1000 * 60 * 1440 // 24 horas
								})
							}
							return res.redirect("/lunacia");
						} else {
							errors.message = "La contraseña es incorrecta";
							res.locals.error = errors;
							res.render("login")
						}
					} else {
						errors.message = "No se encontró un usuario con ese email";
						res.locals.error = errors;
						res.render("login")
					}
				})
				.catch(function (error) {
					console.log(error);
					res.send(error);
				});
		}
	},
	register: function (req, res) {
		if (req.session.user == undefined) {
			res.render("register")
		} else {
			res.redirect("/")
		}
	},
	store: function (req, res) {
		let errors = {}
		let emailExistente;
		let roninExistente;
		let roninPromise = db.Usuario.findAll({
			where: {
				ronin: req.body.ronin
			}
		})

		let emailPromise = db.Usuario.findAll({
			where: {
				email: req.body.email
			}
		})

		Promise.all([roninPromise, emailPromise])
			.then(function ([roniner, emailer]) {

				emailExistente = emailer;
				roninExistente = roniner;

				if (req.body.email == "") {
					errors.message = "El campo del email no puede estar vacio";
					res.locals.error = errors;
					res.render("register")
				} else if (req.body.password == "" || req.body.password.length <= 3) {
					errors.message = "La contraseña tiene que tener más de 3 caracteres";
					res.locals.error = errors;
					res.render("register")
				} else if (emailExistente != "") {
					errors.message = "Ya existe un usuario con ese email";
					res.locals.error = errors;
					res.render("register")
				} else if (req.body.password != req.body.passwordRep) {
					errors.message = "Las contraseñas no coinciden";
					res.locals.error = errors;
					res.render("register")
				} else if (roninExistente != "") {
					errors.message = "Ya existe un usuario con ese ronin";
					res.locals.error = errors;
					res.render("register")
				} else {
					let passwordEncriptada = bcrypt.hashSync(req.body.password, 10)
					if (req.file != undefined) {
						db.Usuario.create({
								email: req.body.email,
								contrasena: passwordEncriptada,
								nombre: req.body.username,
								fechaNacimiento: req.body.fechaNacimiento,
								pais: req.body.pais,
								// documento: req.body.documento,
								// documentoFrente: req.file.documentoFrente,
								// documentoAtras: req.file.documentoAtras,
								ronin: req.body.ronin,
								disponibilidad: 1,
								tipo: req.body.type,
								createdAt: Date.now(),
							})
							.then(user => {
								res.redirect('/user/login')
							})
							.catch(err => {
								console.log(err);
								res.send(err)
							})
					} else {
						db.Usuario.create({
								email: req.body.email,
								contrasena: passwordEncriptada,
								nombre: req.body.username,
								fechaNacimiento: req.body.fechaNacimiento,
								pais: req.body.pais,
								ronin: req.body.ronin,
								disponibilidad: 1,
								tipo: req.body.type,
								createdAt: Date.now(),
							})
							.then(user => {
								// return res.render(user)
								res.redirect('/user/login')
							})
							.catch(err => {
								console.log(err);
								res.send(err)
							})
					}
				}
			})
	},
	miPerfil: function (req, res) {

		if (req.session.user != undefined) {
			db.Usuario.findByPk(req.session.user.id, {
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual",
							include: [{
								association: "academia"
							}]
						},
						{
							association: "comentarios",
							include: [{
								association: "academia"
							}]
						}
					]
				})
				.then(function (user) {
					// return res.send(req.session.user)
					res.render("miPerfil", {
						usuario: user
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	documentos: function (req, res) {
		if (req.session.user != undefined) {
			// return res.send(req.session.user)
			db.Usuario.findByPk(req.session.user.id, {
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual",
							include: [{
								association: "academia"
							}]
						},
						{
							association: "comentarios",
							include: [{
								association: "academia"
							}]
						}
					]
				})
				.then(function (usuario) {
					res.render("documentos", {
						usuario: usuario
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	edit: function (req, res) {
		if (req.session.user != undefined) {
			db.Usuario.findOne({
					where: {
						email: req.session.user.email
					},
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual",
							include: [{
								association: "academia"
							}]
						},
						{
							association: "comentarios",
							include: [{
								association: "academia"
							}]
						}
					]
				})
				.then(function (usuario) {
					res.render("editarPerfil", {
						usuario: usuario
					});
				})
		} else {
			res.redirect("/user/login");
		}
	},
	editar: function (req, res) {
		let errors = {}
		if (req.session.user != undefined) {
			db.Usuario.findAll({
					where: {
						ronin: req.body.ronin
					}
				})
				.then(function (ronin) {
					if (ronin != "" && req.body.ronin == ronin.ronin) {
						errors.message = "Ya existe un usuario con ese ronin";
						res.locals.error = errors;
						res.render("editarPerfil")
					} else {
						if (req.file != undefined) {
							// return res.render(req)
							db.Usuario.update({
									ronin: req.body.ronin,
									fotoPerfil: req.file.filename,
									discord: req.body.discord,
									telegram: req.body.telegram
								}, {
									where: {
										email: req.session.user.email
									}
								})
								.then(user => {
									db.Usuario.findOne({
											where: {
												email: req.session.user.email
											}
										})
										.then(user => {
											req.session.user = user;
											res.locals.user = req.session.user;
											res.redirect('/user/miPerfil');
										})
								})
								.catch(function (error) {
									res.send(error)
								})
						} else {
							db.Usuario.update({
									ronin: req.body.ronin,
									discord: req.body.discord,
									telegram: req.body.telegram,
								}, {
									where: {
										email: req.session.user.email
									}
								})
								.then(user => {
									db.Usuario.findOne({
											where: {
												email: req.session.user.email
											}
										})
										.then(user => {
											req.session.user = user;
											res.locals.user = req.session.user;
											res.redirect('/user/miPerfil');
										})
								})
								.catch(function (error) {
									res.send(error)
								})
						}
					}
				})
		} else {
			res.redirect("/user/login")
		}
	},
	editCv: function (req, res) {
		if (req.session.user != undefined) {
			db.Usuario.findByPk(req.session.user.id, {
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual",
							include: [{
								association: "academia"
							}]
						},
						{
							association: "comentarios",
							include: [{
								association: "academia"
							}]
						}
					]
				})
				.then(function (user) {
					// res.send(user)
					res.render("editarCurriculum", {
						usuario: user
					})
				})
		} else {
			res.redirect("/lunacia")
		}
	},
	editadoCv: function (req, res) {
		if (req.session.user != undefined) {
			db.Usuario.update({
					cv: req.body.cv
				}, {
					where: {
						email: req.session.user.email
					}
				})
				.then(user => {
					db.Usuario.findOne({
							where: {
								email: req.session.user.email
							}
						})
						.then(user => {
							req.session.user = user;
							res.locals.user = req.session.user;
							res.redirect('/user/miPerfil');
						})
				})
				.catch(function (error) {
					res.send(error)
				})
		} else {
			res.redirect("/")
		}
	},
	logout: function (req, res) {
		req.session.destroy();
		res.clearCookie("usuarioId");
		res.redirect("/user/login");
	},
	docFren: function (req, res) {
		if (req.session.user != undefined) {
			res.render("docFren");
		} else {
			res.redirect("/user/login")
		}
	},
	docAtras: function (req, res) {
		if (req.session.user != undefined) {
			res.render("docAtras");
		} else {
			res.redirect("/user/login")
		}
	},
	storeDocFren: function (req, res) {
		if (req.session.user != undefined) {
			if (req.file != undefined) {
				db.Usuario.update({
						documento: req.body.numeroDoc,
						documentoFrente: req.file.filename
					}, {
						where: {
							id: req.session.user.id
						}
					})
					.then(function (user) {
						res.redirect("/user/documentoAtras")
					})
			} else {
				errors.message = "Tienes que subir la foto de documento";
				res.locals.error = errors;
				res.render("docFren")
			}
		} else {
			res.redirect("/user/login")
		}
	},
	storeDocAtras: function (req, res) {
		if (req.session.user != undefined) {
			if (req.file != undefined) {
				db.Usuario.update({
						documentoAtras: req.file.filename
					}, {
						where: {
							id: req.session.user.id
						}
					})
					.then(function (user) {
						res.redirect("/user/documentos")
					})
			} else {
				errors.message = "Tienes que subir la foto de documento";
				res.locals.error = errors;
				res.render("docFren")
			}
		} else {
			res.redirect("/user/login")
		}
	},
	documentosDetalle: function (req, res) {
		if (req.session.user != undefined) {
			db.Usuario.findByPk(req.params.id, {
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "postulaciones",
							include: [{
								association: "beca",
								include: [{
									association: "academia"
								}]
							}]
						},
						{
							association: "becaActual",
							include: [{
								association: "academia"
							}]
						}
					]
				})
				.then(function (usuario) {
					// return res.send(usuario);
					let entrada = false;
					for (let i = 0; i < usuario.postulaciones.length; i++) {
						for (let k = 0; k < req.session.user.usuarioAcademia.length; k++) {
							if (usuario.postulaciones[i].beca.academia.id == req.session.user.usuarioAcademia[k].id) {
								entrada = true;
							}
						}

					}
					if (entrada == true) {
						res.render("documentoDetalle", {
							detail: usuario
						})
					} else {
						res.redirect("/user/detalle/id/" + usuario.id);
					}
				})
		} else {
			res.redirect("/user/login")
		}
	},
	enviarSolicitud: function(req,res){
		if(req.session.user != undefined){
			let idUsuario = req.params.id;
			db.Solicitud.create({
				usuario_id: idUsuario,
				academia_id: req.body.academia,
				tipo: req.body.becaOmanager
			})
			.then(function(solicitud){
				res.redirect("/lunacia/academia/id/" + req.body.academia)
			})
		} else {
			res.redirect("/user/login")
		}
	},
	eliminarSolicitud: function(req,res) {
		if(req.session.user != undefined){
			let idSolicitud = req.params.id;
			db.Solicitud.destroy({
				where: {
					id: idSolicitud
				}
			})
			.then(function(solicitud){
				res.redirect("/lunacia")
			})
		} else {
			res.redirect("/user/login")
		}
	},
	aceptarSolicitud: function(req,res){
		if(req.session.user != undefined){
			let idAcademia = req.params.idAcademia;
			let tipo = req.params.tipo;
			if(tipo == "manager"){
				db.Manager.create({
					usuario_id: req.session.user.id,
					academia_id: idAcademia
				})
				.then(function(manager){
					res.redirect("/lunacia/academia/id/" + idAcademia);
				})
			} else if (tipo == "beca")
		} else {
			res.redirect("/user/login")
		}
	}
}

module.exports = userController