const db = []

//signup

function create(req,res){
    try{
         const mydb = {
         userName:req.body.userName,
         email:req.body.email,
         password:req.body.password,
         address:req.body.address
        }
    
            db.push(mydb)
            for(let i in db){
                    console.log(db)
            }
            res.status(201).send({message:"user has created successfully"})
    }
    catch(error){
        res.status(500).send({message: "error occured" + error.message})
    }
}


//greet
function greet(req,res){
    try{
        //let name = req.query.name;
        //let contactno = req.query.contactno;
        res.status(200).send({message:`good morning : ${req.query.name} hiii ${req.query.contactno}`});
    }
    catch(err){
        res.status(500).send({message: "error occured" + err.message})

    }
}


//..
const person = []
    function signup(req, res){  
    const { name, email, password ,address} = req.body;
    if (!name || !email || !password||!address) {
        return res.status(400).send("Name, Email, and Password are required!");
    }
    const user = person.find((user) => user.email === email);
    if (user) {
        return res.status(400).send("Email already exists!");
    }
    const newUser = {
        name,
        email,
        password,
        address
    };
    person.push(newUser);
    console.log(`New user: ${JSON.stringify(newUser)}`);
    return res.status(201).send("Signup Successful!");

}

//console.log(db)

//export all funnction
module.exports = {
    create,
    greet,
    signup
}
