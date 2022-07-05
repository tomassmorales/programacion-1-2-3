module.exports = function (sequelize, dataTypes) {
	let alias = "Usuario";
	let columnas = {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		documento: {
			type: dataTypes.STRING,
		},
		documentoFrente: {
			type: dataTypes.STRING,
		},
		documentoAtras: {
			type: dataTypes.STRING,
		},
		pais: {
			type: dataTypes.STRING,
		},
		ronin: {
			type: dataTypes.STRING,
		},
		nombre: {
			type: dataTypes.STRING,
		},
		fotoPerfil: {
			type: dataTypes.STRING,
		},
		email: {
			type: dataTypes.STRING
		},
		contrasena: {
			type: dataTypes.STRING
		},
		fechaNacimiento: {
			type: dataTypes.DATE
		},
		cv: {
			type: dataTypes.STRING,
		},
		discord: {
			type: dataTypes.STRING,
		},
		telegram: {
			type: dataTypes.STRING,
		},
		disponibilidad: {
			type: dataTypes.TINYINT,
		},
		tipo: {
			type: dataTypes.STRING
		},
		createdAt: {
			type: dataTypes.DATE
		},
		updatedAt: {
			type: dataTypes.DATE
		},
		// becado_id: {
		// 	type: dataTypes.INTEGER
		// }
	}
	
	let config = {
		tableName: 'usuarios',
		timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
		underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
	}
	const usuario = sequelize.define(alias, columnas, config);

	usuario.associate = function(models){
		usuario.belongsToMany(models.Academia, {
			as: "usuarioAcademia",
			through: "usuarios_academias",
			foreignKey: "usuario_id",
			otherKey: "academia_id",
			timestamps:false
		}),
		usuario.hasMany(models.Solicitud, {
			as: "solicitudesUser",
			foreignKey: "usuario_id",
		}),
		usuario.hasMany(models.Beca, {
			as: "beca",
			foreignKey: "usuario_id"
		}),
		usuario.hasMany(models.Comentario, {
			as: "comentarios",
			foreignKey: "usuario_id"
		}),
		usuario.hasMany(models.Respuesta, {
			as: "respuestas",
			foreignKey: "respuesta_id"
		}),
		usuario.hasMany(models.Postulacion, {
			as: "postulaciones",
			foreignKey: "usuario_id"
		})
		usuario.hasMany(models.Becado, {
			as: "becaActual",
			foreignKey: "usuario_id"
		})
	}


	return usuario;
}