module.exports = function (sequelize, dataTypes) {
	let alias = "Academia";
	let columnas = {
	    id: {
		autoIncrement: true,
		primaryKey: true,
		type: dataTypes.INTEGER,
	    },
	    nombre: {
		type: dataTypes.STRING,
	    },
	    logo: {
		type: dataTypes.STRING,
	    },
	    descripcion: {
		type: dataTypes.STRING,
	    },
	    discord: {
		type: dataTypes.STRING,
	    },
	    becasDisponibles: {
		type: dataTypes.TINYINT,
	    },
	    createdAt: {
		type: dataTypes.DATE
	    },
	    updatedAt: {
		type: dataTypes.DATE
	    }
    
	}
    
	let config = {
	    tableName: 'academias',
	    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
	    underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
	}
	const academia = sequelize.define(alias, columnas, config);

	academia.associate = function(models){
		academia.belongsToMany(models.Usuario, {
			as: "usuarioAcademia",
			through: "usuarios_academias",
			foreignKey: "academia_id",
			otherKey: "usuario_id",
			timestamps:false
		}),
		academia.hasMany(models.Solicitud, {
			as: "solicitudesAcade",
			foreignKey: "academia_id",
		}),
		academia.hasMany(models.Beca, {
			as: "becas",
			foreignKey: "academia_id"
		}),
		academia.hasMany(models.Comentario, {
			as: "comentarios",
			foreignKey: "academia_id"
		}),
		academia.hasMany(models.Respuesta, {
			as: "respuestas",
			foreignKey: "respuesta_id"
		}),
		academia.hasMany(models.Becado, {
			as: "becadosContratados",
			foreignKey: "academia_id"
		})
	}

	return academia;
    }