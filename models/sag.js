const mongoose=require("mongoose")


const articleSchema=new mongoose.Schema({
	title:{
		type:String
	},
	content:{
		type:String
	}
})


module.exports=mongoose.model("Article",articleSchema)