module.exports = function (sequelize, dataTypes) {

	let alias = "Becado";

	let cols = {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		academia_id: {
			type: dataTypes.INTEGER,
		},
		usuario_id: {
			type: dataTypes.INTEGER,
		}
	};

	let config = {
		tableName: "becados",
		timestamps: false,
		underscored: true
	}

	const becados = sequelize.define(alias, cols, config);

	becados.associate = function(models){
		becados.belongsTo(models.Usuario, {
			as: "becado",
			foreignKey: "usuario_id"
		})
		becados.belongsTo(models.Academia, {
			as: "academia",
			foreignKey: "academia_id"
		})
	}

	return becados;

}