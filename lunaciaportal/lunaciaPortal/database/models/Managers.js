module.exports = function(sequelize, dataTypes){

	let alias = "Manager";
    
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
	};
   
	let config = {
	    tableName: "usuarios_academias",
	    timestamps: false,
	    underscored: true
	}
    
	const Manager = sequelize.define(alias, cols, config);
   
	return Manager;
   
    }