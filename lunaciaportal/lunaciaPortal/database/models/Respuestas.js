module.exports = function (sequelize, dataTypes) {
	let alias = "Respuesta";
	let columnas = {
	    id: {
		autoIncrement: true,
		primaryKey: true,
		type: dataTypes.INTEGER,
	    },
	    comentario: {
		type: dataTypes.STRING,
	    },
	    fecha_creacion: {
		type: dataTypes.DATE
	    },
	    usuario_id:{
		type: dataTypes.INTEGER,
	    },
	    academia_id:{
		type: dataTypes.INTEGER,
	    },
	}
  
	let config = {
	    tableName: 'respuestas',
	    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
	    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
	}
	const respuestas = sequelize.define(alias, columnas, config);

	respuestas.associate = function(models){
		respuestas.belongsTo(models.Academia, {
			as: "academia",
			foreignKey: "academia_id"
		}),
		respuestas.belongsTo(models.Usuario, {
			as: "usuario",
			foreignKey: "usuario_id"
		}),
		respuestas.belongsTo(models.Comentario, {
			as: "comentarioRaiz",
			foreignKey: "respuesta_id"
		})
	}

	return respuestas;
    }