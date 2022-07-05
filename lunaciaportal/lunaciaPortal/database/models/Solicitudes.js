module.exports = function(sequelize, dataTypes){

	let alias = "Solicitud";
    
	let cols = {
	    id:{
		autoIncrement: true,
		primaryKey: true,
		type: dataTypes.INTEGER,
	    },
	    usuario_id:{
		type: dataTypes.INTEGER,
	    },
	    academia_id:{
		type: dataTypes.INTEGER,
	    },
	    tipo: {
		    type: dataTypes.STRING,
	    }
	};
	
	let config = {
	    tableName: "solicitudes",
	    timestamps: false,
	    underscored: true
	}
    
	const Solicitud = sequelize.define(alias, cols, config);

	Solicitud.associate = function(models){
		Solicitud.belongsTo(models.Academia, {
			as: "academia",
			foreignKey: "academia_id",
		})
		Solicitud.belongsTo(models.Usuario, {
			as: "usuario",
			foreignKey: "usuario_id",
		})
	}

	return Solicitud;
   
    }