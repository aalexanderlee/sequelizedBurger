module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Date.now()
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Date.now()
		}
	}, {
		classMethods: {
			associate: function(models) {
			}
		}
	});
	return burgers;
};

// //import the orm to create functions that will interact with the database
// //refer to 00-CatsAppProblem for structure
// var orm = require("../config/orm.js");
//
// var burgers = {
// 	//returns whole res from burgers data
// 	all: function(cb) {
// 		orm.all("burgers", function(res) {
// 			cb(res);
// 		});
// 	},
// 	//the variables cols and vals are arrays
// 	create: function(col, vals, cb) {
// 		orm.create("burgers", col, vals, function(res) {
// 			cb(res);
// 		});
// 	},
// 	//update burgers data based off condition
// 	update: function(objColVals, condition, cb) {
// 		orm.update("burgers", objColVals, condition, function(res) {
// 			cb(res);
// 		});
// 	},
// 	// //delete data from burgers
// 	// delete: function(condition, cb) {
// 	// 	orm.delete("burgers", condition, function(res) {
// 	// 		cb(res);
// 	// 	})
// 	// }
//
// };
// //export this burger orm
// module.exports = burgers;
