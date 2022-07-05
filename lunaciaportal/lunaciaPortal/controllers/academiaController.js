let db = require('../database/models');
const op = db.Sequelize.Op;

let academiaController = {

	hub: function (req, res) {
		if (req.session.user != undefined) {
			let usuario = db.Usuario.findByPk(req.session.user.id, {
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
			});
			let postulacionesUsuario = db.Postulacion.findAll({
				include: [{
					association: "beca",
					include: [{
						association: "academia"
					}]
				}],
				where: {
					usuario_id: req.session.user.id
				}
			})
			let becas = db.Beca.findAll({
				order: [
					["fecha_creacion", "DESC"]
				],
				limit: 7,
				include: [{
					association: "academia"
				}]
			});
			let academias = db.Academia.findAll({
				order: [
					["createdAt", "DESC"]
				],
				limit: 10
			});
			Promise.all([becas, academias, usuario, postulacionesUsuario])
				.then(function ([becas, academias, usuario, postulacionesUsuario]) {
					// return res.send(usuario)
					res.render("hub", {
						becas: becas,
						academias: academias,
						usuario: usuario,
						postulaciones: postulacionesUsuario
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	detalleAcademia: function (req, res) {
		if (req.session.user != undefined) {
			let user = db.Usuario.findByPk(req.session.user.id, {
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
						association: "becaActual"
					},
					{
						association: "comentarios"
					}
				]
			})
			let academia = db.Academia.findByPk(req.params.id, {
				include: [{
						association: "usuarioAcademia"
					},
					{
						association: "becas"
					},
					{
						association: "comentarios",
						include: [{
							association: "usuario"
						}]
					},
					{
						association: "becadosContratados",
						include: [{
							association: "becado"
						}]
					},
					{
						association: "solicitudesAcade",
						include: [
							{
								association: "usuario"
							}
						]
					}
				]
			})
			Promise.all([user, academia])
				.then(function ([user, academia]) {
					// return res.send(academia)
					res.render("detalleAcademia", {
						academia: academia,
						user: user
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	editarAcademia: function (req, res) {
		let esSuya = false
		for (let i = 0; i < req.session.user.usuarioAcademia.length; i++) {
			if (req.session.user.usuarioAcademia[i].id == req.params.id) {
				esSuya = true
			}
		}
		if (req.session.user != undefined && esSuya == true) {
			db.Academia.findOne({
					where: {
						id: req.params.id
					},
					include: [{
							association: "usuarioAcademia"
						},
						{
							association: "becas"
						},
						{
							association: "comentarios",
							include: [{
								association: "usuario"
							}]
						},
						{
							association: "becadosContratados",
							include: [{
								association: "becado"
							}]
						}
					]
				})
				.then(function (academia) {
					res.render("editarAcademia", {
						academia: academia
					})
				})
		} else if (esSuya != true && req.session.user != undefined) {
			res.redirect("/lunacia/misAcademias")
		} else {
			res.redirect("/user/login")
		}
	},
	procesoEditarAcademia: function (req, res) {
		let esSuya = false
		for (let i = 0; i < req.session.user.usuarioAcademia.length; i++) {
			if (req.session.user.usuarioAcademia[i].id == req.params.id) {
				esSuya = true
			}
		}
		if (req.file != undefined && esSuya == true) {
			db.Academia.update({
					nombre: req.body.nombre,
					logo: req.file.filename,
					descripcion: req.body.academiaDesc,
					discord: req.body.discord
				}, {
					where: {
						id: req.params.id
					}
				})
				.then(academia => {
					db.Usuario.findOne({
							where: {
								email: req.session.user.id
							},
							include: [{
									association: "usuarioAcademia",
								},
								{
									association: "postulaciones"
								},
								{
									association: "becaActual"
								},
								{
									association: "comentarios"
								}
							],
						})
						.then(user => {
							req.session.user = user;
							res.locals.user = req.session.user;
							res.redirect('/lunacia/academia/id/' + academia.id);
						})
				})
				.catch(function (error) {
					res.send(error)
				})
		} else if (esSuya == true && req.file == undefined) {
			db.Academia.update({
					nombre: req.body.nombre,
					descripcion: req.body.academiaDesc,
					discord: req.body.discord
				}, {
					where: {
						id: req.params.id
					}
				})
				.then(academia => {
					db.Usuario.findOne({
							where: {
								email: req.session.user.id
							},
							include: [{
									association: "usuarioAcademia",
								},
								{
									association: "postulaciones"
								}
							],
						})
						.then(user => {
							req.session.user = user;
							res.locals.user = req.session.user;
							res.redirect('/lunacia/academia/id/' + academia.id);
						})
				})
				.catch(function (error) {
					res.send(error)
				})
		}
	},
	detalleBeca: function (req, res) {
		if (req.session.user != undefined) {
			let usuario = db.Usuario.findByPk(req.session.user.id, {
				include: [{
					association: "becaActual",
					include: [{
						association: "academia"
					}]
				}, ]
			})
			let beca = db.Beca.findByPk(req.params.id, {
					include: [{
							association: "postulados",
							include: [{
								association: "postulado"
							}]
						},
						{
							association: "academia",
							include: [{
								association: "usuarioAcademia"
							}]
						}
					]
				})
				Promise.all([usuario,beca])
				.then(function ([usuario,beca]) {
					// return res.send(beca);
					res.render("detallePostulacion", {
						beca: beca,
						usuario: usuario
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	despedir: function (req, res) {
		if (req.session.user != undefined) {
			let user = db.Usuario.findByPk(req.query.becado, {
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
						association: "becaActual"
					},
					{
						association: "comentarios"
					}
				]
			})
			let academia = db.Academia.findByPk(req.params.id, {
				include: [{
						association: "usuarioAcademia"
					},
					{
						association: "becas"
					},
					{
						association: "comentarios",
						include: [{
							association: "usuario"
						}]
					},
					{
						association: "becadosContratados",
						include: [{
							association: "becado"
						}]
					}
				]
			})
			Promise.all([user, academia])
				.then(function ([user, academia]) {
					// return res.send(academia)
					res.render("despedir", {
						academia: academia,
						usuario: user,
						becadoId: req.query.becado
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	procesoDespedir: function (req, res) {
		if (req.session.user != undefined) {
			let usuario = db.Usuario.findByPk(req.params.becadoId, {
				include: [{
					association: "usuarioAcademia"
				}]
			})
			let academia = db.Academia.findByPk(req.params.id, {
				include: [{
					association: "becadosContratados",
					include: [{
						association: "becado"
					}]
				}]
			})
			Promise.all([usuario, academia])
				.then(function ([usuario, academia]) {
					// return res.send([usuario, academia])

					let esBecado = false;
					let idRelacion;
					for (let k = 0; k < academia.becadosContratados.length; k++) {
						if (academia.becadosContratados[k].becado.nombre == usuario.nombre) {
							esBecado = true;
							idRelacion = academia.becadosContratados[k].id;
						}
					}
					let esManager = false;
					for (let i = 0; i < usuario.usuarioAcademia.length; i++) {
						if (usuario.usuarioAcademia[i].nombre == academia.nombre) {
							esManager = true;
						}
					}

					if (esManager != true && esBecado == true && req.body.comentarioRenuncia != "") {
						let crearComentario = db.Comentario.create({
							comentario: req.body.comentarioDespido,
							usuario_id: usuario.id,
							academia_id: academia.id,
							fecha_creacion: Date.now(),
							razon: "despido"
						});
						let eliminarRelacion = db.Becado.destroy({
							where: {
								id: idRelacion
							}
						})
						let userDisponible = db.Usuario.update({
							disponibilidad: 1
						}, {
							where: {
								id: usuario.id
							}
						})
						Promise.all([eliminarRelacion, crearComentario, userDisponible])
							.then(function ([relacion, comentario, user]) {
								res.redirect("/lunacia/academia/id/" + academia.id)
							})
					} else if (esManager != true && esBecado == true && req.body.comentarioRenuncia == "") {
						let userDisponible = db.Usuario.update({
							disponibilidad: 1
						}, {
							where: {
								id: usuario.id
							}
						})
						let becaDestroy = db.Becado.destroy({
							where: {
								id: idRelacion
							}
						})
						Promise.all([userDisponible, becaDestroy])
							.then(function ([userDisponible, becaDestroy]) {
								res.redirect("/lunacia/academia/id/" + academia.id)
							})
					} else if (esManager == true || esBecado != true) {
						res.redirect("/lunacia/academia/id/" + academia.id)
					}
				})
				.catch(function (error) {
					console.log(error);
				})
		} else {
			res.redirect("/user/login")
		}
	},
	renunciar: function (req, res) {
		if (req.session.user != undefined) {
			let user = db.Usuario.findByPk(req.session.user.id, {
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
						association: "becaActual"
					},
					{
						association: "comentarios"
					}
				]
			})
			let academia = db.Academia.findByPk(req.params.id, {
				include: [{
						association: "usuarioAcademia"
					},
					{
						association: "becas"
					},
					{
						association: "comentarios",
						include: [{
							association: "usuario"
						}]
					},
					{
						association: "becadosContratados",
						include: [{
							association: "becado"
						}]
					}
				]
			})
			Promise.all([user, academia])
				.then(function ([user, academia]) {
					// return res.send(academia)
					res.render("renunciar", {
						academia: academia,
						user: user
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	procesoRenunciar: function (req, res) {
		if (req.session.user != undefined) {
			let usuario = db.Usuario.findByPk(req.session.user.id, {
				include: [{
					association: "usuarioAcademia"
				}]
			})
			let academia = db.Academia.findByPk(req.params.id, {
				include: [{
					association: "becadosContratados",
					include: [{
						association: "becado"
					}]
				}]
			})
			Promise.all([usuario, academia])
				.then(function ([usuario, academia]) {
					// return res.send([usuario, academia])

					let esBecado = false;
					let idRelacion;
					for (let k = 0; k < academia.becadosContratados.length; k++) {
						if (academia.becadosContratados[k].becado.nombre == usuario.nombre) {
							esBecado = true;
							idRelacion = academia.becadosContratados[k].id;
						}
					}
					let esManager = false;
					for (let i = 0; i < usuario.usuarioAcademia.length; i++) {
						if (usuario.usuarioAcademia[i].nombre == academia.nombre) {
							esManager = true;
						}
					}

					if (esManager != true && esBecado == true && req.body.comentarioRenuncia != "") {
						let crearComentario = db.Comentario.create({
							comentario: req.body.comentarioRenuncia,
							usuario_id: usuario.id,
							academia_id: academia.id,
							fecha_creacion: Date.now(),
							razon: "renuncia"
						});
						let eliminarRelacion = db.Becado.destroy({
							where: {
								id: idRelacion
							}
						})
						let userDisponible = db.Usuario.update({
							disponibilidad: 1
						}, {
							where: {
								id: usuario.id
							}
						})
						Promise.all([eliminarRelacion, crearComentario, userDisponible])
							.then(function ([relacion, comentario, user]) {
								res.redirect("/user/miPerfil")
							})
					} else if (esManager != true && esBecado == true && req.body.comentarioRenuncia == "") {
						let userDisponible = db.Usuario.update({
							disponibilidad: 1
						}, {
							where: {
								id: usuario.id
							}
						})
						let becaDestroy = db.Becado.destroy({
							where: {
								id: idRelacion
							}
						})
						Promise.all([userDisponible, becaDestroy])
							.then(function ([user, beca]) {
								res.redirect("/user/miPerfil")
							})
					} else if (esManager == true || esBecado != true) {
						res.redirect("/lunacia/academia/id/" + academia.id)
					}
				})
				.catch(function (error) {
					console.log(error);
				})
		} else {
			res.redirect("/user/login")
		}
	},
	searchAcademy: function (req, res) {
		if (req.session.user != undefined) {
			let search = req.query.q
			db.Academia.findAll({
					where: {
						'nombre': {
							[op.like]: `%${search}%`
						}
					},
					limit: 6
				})
				.then(function (academias) {
					res.render("resultadosAcademia", {
						academias: academias,
						search: search
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	centroBecas: function (req, res) {

		if (req.session.user != undefined) {
			let search = req.query.q;
			let mep = req.query.mep;
			//Equipo
			let back = req.query.back;
			let mid = req.query.mid;
			let front = req.query.front;
			if (mep == undefined) {
				db.Beca.findAll({
						order: [
							["fecha_creacion", "DESC"]
						],
						limit: 6,
						include: [{
							association: "academia"
						}]
					})
					.then(function (becas) {
						res.render("centroDeBecas", {
							becas: becas,
							search: search,
							mep: mep,
							back: back,
							mid: mid,
							front: front
						})
					})
			} else {
				if (search != "" && back == "cualquiera" && mid == "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back != "cualquiera" && mid == "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieBack": back,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back != "cualquiera" && mid != "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieBack": back,
								"axieMid": mid,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back != "cualquiera" && mid == "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieBack": back,
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back == "cualquiera" && mid != "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieFront": front,
								"axieMid": mid,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back == "cualquiera" && mid != "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieMid": mid,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back == "cualquiera" && mid == "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search != "" && back != "cualquiera" && mid != "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								'descripcion': {
									[op.like]: `%${search}%`
								},
								"axieBack": back,
								"axieMid": mid,
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back != "cualquiera" && mid == "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieBack": back,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back != "cualquiera" && mid != "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieBack": back,
								"axieMid": mid,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back != "cualquiera" && mid != "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieBack": back,
								"axieMid": mid,
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back == "cualquiera" && mid != "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieMid": mid,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back == "cualquiera" && mid != "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieMid": mid,
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back == "cualquiera" && mid == "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieFront": front,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back != "cualquiera" && mid == "cualquiera" && front != "cualquiera") {
					db.Beca.findAll({
							where: [{
								"axieFront": front,
								"axieBack": back,
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				} else if (search == "" && back == "cualquiera" && mid == "cualquiera" && front == "cualquiera") {
					db.Beca.findAll({
							where: [{
								"objetivo": {
									[op.lte]: mep
								}
							}],
							order: [
								["fecha_creacion", "DESC"]
							],
							limit: 6,
							include: [{
								association: "academia"
							}]
						})
						.then(function (becas) {
							res.render("centroDeBecas", {
								becas: becas,
								search: search,
								mep: mep,
								back: back,
								mid: mid,
								front: front
							})
						})
				}
			}

		} else {
			res.redirect("/user/login")
		}

	},
	editarBeca: function (req, res) {
		if (req.session.user != undefined) {
			db.Beca.findByPk(req.params.id, {
					include: [{
							association: "postulados",
							include: [{
								association: "postulado"
							}]
						},
						{
							association: "academia",
							include: [{
								association: "usuarioAcademia"
							}]
						}
					]
				})
				.then(function (beca) {
					// return res.send(beca);
					res.render("editarBeca", {
						beca: beca
					})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	edicionBeca: function (req, res) {
		if (req.session.user != undefined) {
			let idAcademia = req.params.idAcademia;
			db.Academia.findByPk(idAcademia, {
					include: [{
						association: "usuarioAcademia"
					}]
				})
				.then(function (academia) {
					// return res.send(academia)

					let errors = {};

					let esManager = false;
					for (let i = 0; i < academia.usuarioAcademia.length; i++) {
						if (academia.usuarioAcademia[i].id == req.session.user.id) {
							esManager = true;
						}
					}

					if (esManager == true) {
						db.Beca.update({
								axieBack: req.body.back,
								axieMid: req.body.mid,
								axieFront: req.body.front,
								objetivo: req.body.objetivoDiario,
								cicloPago: req.body.ciclo,
								descripcion: req.body.academiaDesc,
							}, {
								where: {
									id: req.params.id
								}
							})
							.then(function (beca) {
								// return res.send(req.body);
								res.redirect("/lunacia/beca/id/" + req.params.id)
							})
					} else {
						res.redirect("/lunacia/misAcademias")
					}
				})
		} else {
			res.redirect("/user/login")
		}
	},
	misAcademias: function (req, res) {
		if (req.session.user != undefined) {
			// return res.send(req.session.user)
			res.render("misAcademias");
		} else {
			res.redirect("/user/login")
		}
	},
	crearAcademia: function (req, res) {
		if (req.session.user != undefined) {
			res.render("crearAcademia");
		} else {
			res.redirect("/user/login")
		}
	},
	storeAcademia: function (req, res) {
		if (req.session.user != undefined) {

			let errors = {};

			if (req.session.user.usuarioAcademia.length <= 2) {
				db.Academia.create({
						logo: req.file.filename,
						nombre: req.body.nombre,
						descripcion: req.body.academiaDesc,
						discord: req.body.discord
					})
					.then(function (academia) {
						db.Usuario.findOne({
								where: {
									email: req.session.user.id
								},
								include: [{
										association: "usuarioAcademia",
									},
									{
										association: "postulaciones"
									},
									{
										association: "becaActual"
									},
									{
										association: "comentarios"
									}
								],
							})
							.then(user => {
								let managerCreate = db.Manager.create({
									usuario_id: req.session.user.id,
									academia_id: academia.id
								});
								let managerSet = db.Usuario.update({
									tipo: "Manager"
								}, {
									where: {
										id: req.session.user.id
									}
								})
								Promise.all([managerCreate, managerSet])
									.then(function ([managerCreado, managerSeteado]) {
										req.session.user = user;
										res.locals.user = req.session.user;
										res.redirect("/lunacia/academia/id/" + academia.id);
									})
							})
					})
			} else {
				errors.message = "Por ahora no puedes tener más de 2 academias";
				res.locals.error = errors;
				res.render("misAcademias")
			}
		} else {
			res.redirect("/user/login")
		}
	},
	crearBeca: function (req, res) {
		if (req.session.user != undefined) {
			db.Academia.findByPk(req.params.id)
				.then(function (academia) {
					res.render("crearBeca", {
						academia: academia
					});
				})
		} else {
			res.redirect("/user/login")
		}
	},
	procesoCrearBeca: function (req, res) {
		if (req.session.user != undefined) {
			let idAcademia = req.params.id;
			db.Academia.findByPk(idAcademia, {
					include: [{
						association: "usuarioAcademia"
					}]
				})
				.then(function (academia) {
					// return res.send(academia)

					let errors = {};

					let esManager = false;
					for (let i = 0; i < academia.usuarioAcademia.length; i++) {
						if (academia.usuarioAcademia[i].id == req.session.user.id) {
							esManager = true;
						}
					}

					if (esManager == true) {
						db.Beca.create({
								axieBack: req.body.back,
								axieMid: req.body.mid,
								axieFront: req.body.front,
								objetivo: req.body.objetivoDiario,
								cicloPago: req.body.ciclo,
								descripcion: req.body.academiaDesc,
								academia_id: idAcademia,
								fecha_creacion: Date.now()
							})
							.then(function (beca) {
								// return res.send(req.body);
								res.redirect("/lunacia/beca/id/" + beca.id)
							})
					} else {
						errors.message = "Tienes que ser manager de esta academia para poder crear una beca";
						res.locals.error = errors;
						res.render("crearBeca", {
							academia: academia
						})
					}
				})
		} else {
			res.redirect("/user/login")
		}
	},
	borrarBeca: function (req, res) {
		if (req.session.user != undefined) {

			let idAcademia = req.params.idAcademia

			db.Academia.findByPk(idAcademia, {
					include: [{
						association: "usuarioAcademia"
					}]
				})
				.then(function (academia) {
					let esManager = false;
					for (let i = 0; i < academia.usuarioAcademia.length; i++) {
						if (academia.usuarioAcademia[i].id == req.session.user.id) {
							esManager = true;
						}
					}
					if (esManager == true) {
						db.Postulacion.destroy({
								where: {
									beca_id: req.params.id
								}
							})
							.then(function (post) {
								db.Beca.destroy({
										where: {
											id: req.params.id
										}
									})
									.then(function (beca) {
										res.redirect("/")
									})
							})
					} else {
						res.redirect("lunacia/misAcademias")
					}
				})
		} else {
			res.redirect("/user/login")
		}
	},
	postular: function (req, res) {
		if (req.session.user != undefined) {
			db.Postulacion.create({
					usuario_id: req.session.user.id,
					beca_id: req.params.id
				})
				.then(function (postulacion) {
					res.redirect("/lunacia/beca/id/" + req.params.id)
				})
		} else {
			res.redirect("/user/login")
		}
	},
	despostular: function (req, res) {
		if (req.session.user != undefined) {
			db.Postulacion.destroy({
					where: {
						usuario_id: req.session.user.id,
						beca_id: req.params.id
					}
				})
				.then(function (postulacion) {
					res.redirect("/lunacia/beca/id/" + req.params.id)
				})
		} else {
			res.redirect("/user/login")
		}
	},
	contratar: function (req, res) {
		if (req.session.user != undefined) {
			let idAcademia = req.params.idAcademia;
			let idPostulado = req.params.idPostulado;
			let idBeca = req.params.id;
			db.Usuario.update({
					disponibilidad: 0
				}, {
					where: {
						id: idPostulado
					}
				})
				.then(function (user) {
					db.Becado.create({
							usuario_id: idPostulado,
							academia_id: idAcademia
						})
						.then(function (becado) {
							let postulacionBecaEliminar = db.Postulacion.destroy({
								where: {
									beca_id: idBeca
								}
							})
							let postulacionesUsuarioEliminar = db.Postulacion.destroy({
								where: {
									usuario_id: idPostulado
								}
							})
							Promise.all([postulacionBecaEliminar, postulacionesUsuarioEliminar])
								.then(function ([postBecas, postUsuario]) {
									db.Beca.destroy({
											where: {
												id: idBeca
											}
										})
										.then(function (beca) {
											res.redirect("/")
										})
								})
						})
				})
		} else {
			res.redirect("/user/login")
		}
	},
	// comentario: function(req,res){
	// 	if(req.session.user != undefined){
	// 		let idComentario = req.params.id;
	// 		db.Comentario.findByPk(idComentario, {
	// 			include: [
	// 				{
	// 					association: "respuesta"
	// 				}
	// 			]
	// 		})
	// 		.then(function(comentario){
	// 			res.render("detalleComentario", {
	// 				comentario: comentario
	// 			})
	// 		})
	// 	} else {
	// 		res.redirect("/user/login")
	// 	}
	// }
}

module.exports = academiaController