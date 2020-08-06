const express=require("express")
const router=express.Router()

const Article=require("../models/sag")
const bodyParser=require("body-parser")

// In order to get access to the POST data
// we have to use body-parser. Basically what 
// the body-parser is which allows express to 
// read the body and then parse that into a 
// Json object that we can understand.

router.use(bodyParser.urlencoded({limit:"10mb", extended:false}))

router.get("/add",(req,res)=>{
	res.render("add")
})

router.get("/:id",async (req,res)=>{
   const art=await Article.findById(req.params.id)
   res.render("singlequote",{article:art})
})

router.get("/",async(req,res)=>{
	  limit=req.query.limit
	  page=req.query.page
	try{
	let list=await Article.find()
	let par=await Article.find()
	     .limit(limit*1)
	     .skip((page-1)*limit)
	     .exec()
	res.render("quotes",{
		cs:par,
		list:list
	})
         }catch{
         	res.send("error hua")
         }
})


router.post("/add",async(req,res)=>{
	var kar=new Article({
		title:req.body.title,
        content:req.body.content
	})
	try{
        const gsydg=await kar.save()
        res.redirect(`/quotes/${gsydg.id}`)
	}catch{
		res.send("garbar hua")
	}
})



module.exports=router