if (process.env.NODE_ENV !== "production"){
	require("dotenv").config()
}


const express=require("express")
const quotesRouter=require("./routes/quotes")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
const ejs=require("ejs")
const Article=require("./models/sag")



mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false,useCreateIndex: true})
const db=mongoose.connection


db.on("error",(error)=>{console.log("error")})
db.once("open",()=>{
	console.log("mongodb ok.........")
})


app.set("view engine","ejs")

app.use("/quotes",quotesRouter)

app.set("views",path.join(__dirname,"views"))
app.use(express.static('public'));



app.get("/",async(req,res)=>{
	try{
	res.render("home")
         }catch{
         	res.send("error happened")
         }
})

app.listen(process.env.PORT || 3000)