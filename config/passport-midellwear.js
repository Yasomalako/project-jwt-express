const keys = require('./keys')
const userModal = require('../model/user-Modal')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    secretOrKey: keys.secretKEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options,
            (jwt_payload, done) => {
                userModal.findById(jwt_payload.id)
                    .then((user) => {
                        console.log("user found")
                        return done(null, false);
                    })
                    .catch((err) => {
                        console.log(err)
                        return done(err, false);
                    })
            })
    )
}

