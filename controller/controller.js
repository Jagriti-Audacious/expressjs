const profilepic = (req,res)=>{
    try{
        profilepic = req.body.profilepic
        const filepath = `/uploads/${req.file.filename}`;
            req.body.profilepic = filepath;
            res.send({
                success:"success",
                Message:"image uploaded sucessfully"
            })
    }catch(err){

        res.status(500).send({
            success:"failure",
            Message: "error occured"+ err.Message
        })
    }
}

module.exports = {
    profilepic
}