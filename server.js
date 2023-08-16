const express=require('express');
const cors=require('cors');
const app=express();
const port=5000;
const router=express.Router();

app.use(app.router);
app.use("/", create);
app.listen(port,function(err){
    console.log("Server running on port:", port);
});
app.use(express.bodyParser());

router.get("/view",function(req,res){
    if(book.find(req.body)){
        res.json(req.body);
    }
    else{
        res.status(400).send("Not Found");
    }
})

router.post("/add",function(req,res){
    const toAdd=new Book(req.body);
    toAdd.save();
    res.status(200).send("Added Successfully");
})

router.post("/update", function(req,res){
    book.findById(req.params.id,{
        bookName:req.body.bookName,
        bookGenre:req.body.bookGenre,
        bookPrice:req.body.bookPrice
    });
    Book.save();
    res.status(200).send("Successfully updated");
})

