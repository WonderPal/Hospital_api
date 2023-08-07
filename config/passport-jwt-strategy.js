const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;


console.log("At jwt");


const Doctor = require("../models/doctor");

let OPD ={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "HospitalApi",
}

console.log("At jwt");

passport.use(
    new JWTStrategy(OPD, (jwtPayload, done) =>{
        console.log("At jwt");
        Doctor.findById(jwtPayload.id, (err,doctor) => {
            if(err)
                console.log("Error finding");
                if(doctor) return done(null, doctor);
                else return done(null, false);

              
        }
        );
        console.log("not");
        
    }
    )
);

module.exports = passport;

