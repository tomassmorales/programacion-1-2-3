module.exports = function (sequelize, dataTypes) {

	let alias = "Postulacion";

	let cols = {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		usuario_id: {
			type: dataTypes.INTEGER,
		},
		beca_id: {
			type: dataTypes.INTEGER,
		},
	};

	let config = {
		tableName: "postulaciones",
		timestamps: false,
		underscored: true
	}

	const postulaciones = sequelize.define(alias, cols, config);

	postulaciones.associate = function(models){
		postulaciones.belongsTo(models.Usuario, {
			as: "postulado",
			foreignKey: "usuario_id"
		})
		postulaciones.belongsTo(models.Beca, {
			as: "beca",
			foreignKey: "beca_id"
		})
	}

	return postulaciones;

}