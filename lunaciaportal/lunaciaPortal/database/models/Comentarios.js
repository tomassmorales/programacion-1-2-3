module.exports = function (sequelize, dataTypes) {
	let alias = "Comentario";
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
	    respuesta_id:{
		type: dataTypes.INTEGER,
	    },
	    razon:{
		type: dataTypes.STRING
	    }
	}

	let config = {
	    tableName: 'comentarios',
	    timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
	    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
	}
	const comentarios = sequelize.define(alias, columnas, config);

	comentarios.associate = function(models){
		comentarios.belongsTo(models.Academia, {
			as: "academia",
			foreignKey: "academia_id"
		}),
		comentarios.belongsTo(models.Usuario, {
			as: "usuario",
			foreignKey: "usuario_id"
		}),
		comentarios.belongsTo(models.Respuesta, {
			as: "respuesta",
			foreignKey: "respuesta_id"
		})
	}

	return comentarios;
    }