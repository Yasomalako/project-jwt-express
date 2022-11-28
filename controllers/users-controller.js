const bcrypt = require('bcryptjs')
const userModal = require('../model/user-Modal')
const key = process.env.SECRET_KEY
const validation = require('../validation/validateor')
const validateLoginInputs = require('../validation/logIn-Validation')
const registerInputValidation = require('../validation/userRegister-Validation')
const { ExtractJwt } = require('passport-jwt')

const register = (res, req) => {
    const { errors, isValid } = registerInputValidation(req.body.user)
    if (!isValid) {
        res.status(400).json(errors)
    }
    bcrypt.genSalt()
        .then((salt) => {
            bcrypt.hash(req.body.user.password, salt)
                .then(async hashPassword => {
                    req.body.user.password = hashPassword;
                    await userModal.insertMany(req.body.user)
                        .then(() => res.send("success"))
                        .catch(error => res.send(error))
                })
                .catch(error => { console.log(error) })
        })
        .catch(error => { console.log(error) })


}


const logIn = async (res, req) => {
    const { errors, isValid } = validateLoginInputs(req.body.user)
    if (isValid) {
        res.status(400).json(errors)
    }
    const email = req.body.user.email
    const password = req.body.user.password
    await userModal.findOne({ email }, (error, user) => {
        if (!user) {
            res.status(400).json({ emailNotFound: "error email not find" })
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    email:user.email
                }
           
            Jwt.sign(payload, key.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
                res.json({ success: true, token: "Bearer " + token,user:{name:user.name,email:user.email} });
            }); 
        }
        else {
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
        })
    })
}

module.exports = {
    logIn,
    register
}

