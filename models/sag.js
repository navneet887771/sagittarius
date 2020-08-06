const mongoose=require("mongoose")
var autoIncrement = require('mongoose-auto-increment')

const articleSchema=new mongoose.Schema({
	title:{
		type:String
	},
	content:{
		type:String
	}
})

autoIncrement.initialize(mongoose.connection);
articleSchema.plugin(autoIncrement.plugin, 'Article');


module.exports=mongoose.model("Article",articleSchema)