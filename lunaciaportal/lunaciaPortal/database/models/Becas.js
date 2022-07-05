module.exports = function (sequelize, dataTypes) {
	let alias = "Beca";
	let columnas = {
	    id: {
		autoIncrement: true,
		primaryKey: true,
		type: dataTypes.INTEGER,
	    },
	    axieBack: {
		type: dataTypes.STRING,
	    },
	    axieMid: {
		type: dataTypes.STRING,
	    },
	    axieFront: {
		type: dataTypes.STRING,
	    },
	    objetivo: {
		type: dataTypes.INTEGER,
	    },
	    cicloPago: {
		type: dataTypes.STRING,
	    },
	    descripcion: {
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
	    tableName: 'becas',
	    timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
	    underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
	}
	const becas = sequelize.define(alias, columnas, config);

	becas.associate = function(models){
		becas.belongsTo(models.Academia, {
			as: "academia",
			foreignKey: "academia_id"
		})
		becas.belongsTo(models.Usuario, {
			as: "becado",
			foreignKey: "usuario_id"
		})
		becas.hasMany(models.Postulacion, {
			as: "postulados",
			foreignKey: "beca_id",
		})
	}

	return becas;
    }