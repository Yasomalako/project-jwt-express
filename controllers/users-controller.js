const bcrypt = require('bcryptjs')
const userModal = require('../model/user-Modal')
const { users } = require('../model/user-Modal')
const key = process.env.SECRET_KEY
const validation = require('../validation/validateor')

const register = (res, req) => {
    bcrypt.genSalt()
        .then((salt) => {
            bcrypt.hash(req.body.user.password, salt)
                .then( async hashPassword => {
                    req.body.user.password = hashPassword;
                    await userModal.insertMany(req.body.user)
                        .then(() => res.send("success"))
                        .catch(error => res.send(error))
                })
                .catch(error => { console.log(error) })
        })
        .catch(error => { console.log(error) })


    }


const logIn = (res, req) => {

}

module.exports = {
logIn,
register
}

