const token1 = function (req, res, next) {
    let x = true

    if (x) {
        next()
    }
    else {
        res.status(401).send({ message: "not authorised 1" })
        return;
    }

}

const token2 = function (req, res, next) {
    let email = req.body.email

    if (email) {
        console.log("this email is alredy exist")
    }
    else {
        next();
    }
}

//validation
const Validation = (req, res, next) => {

    let username = req.query.name
    let contactno = req.query.contactno
    if (!username) {
        res.send({ messge: "please enter your name" })
        return;
    }
    if (!contactno) {
        res.send({ message: "please enter your" })
        return;
    }
    next()
}    


module.exports = {
    token1,
    token2,
    Validation
}