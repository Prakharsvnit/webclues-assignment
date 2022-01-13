const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

let userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    },
     {
        collection: 'users'
    })

    userSchema.pre("save", async function(next) {
        try {
            if (!this.isModified("password")) {
              return next();
            }
            let hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
            return next();
        } catch (err) {
            return next(err);
       }
      });
      

const User = mongoose.model('user', userSchema)
module.exports = User;