if (process.env.NODE_ENV !== "production"){
	require("dotenv").config()
}


const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
const ejs=require("ejs")
const Article=require("./models/sag")


mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true })
const db=mongoose.connection


db.on("error",(error)=>{console.log("error")})
db.once("open",()=>{
	console.log("mongodb ok.........")
})


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))


app.get("/",(req,res)=>{
	let articles=Article.find()
	res.render("sag",{
		articles:articles
	})
})


app.listen(process.env.PoRT || 3000)