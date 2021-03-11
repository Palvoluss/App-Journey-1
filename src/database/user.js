import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true
    },
    bio: {
      type: String,
      maxlenght: 500
    },
    profileImage: {
      type: String
    },
    uploads: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pollution'
    },
    hash: String,
    salt: String
  },
  {
    timestamps: true
  })

// Virtuals

// Exports

export default mongoose.model('User', UserSchema)











// import uniqueValidator from 'mongoose-unique-validator'
// userSchema.plugin(uniqueValidator, { message: 'is already taken' })

// // userSchema.methods.setPassword = function (password) {
// //   this.salt = crypto.randomBytes(16).toString('hex');
// //   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex')
// // }

// // userSchema.methods.validPassword = function (password) {
// //   let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex')
// //   return this.hash === hash
// // }

// userSchema.statics.findByLogin = async function (login) {
//   let user = await this.findOne({
//     username: login
//   })

//   if (!user) {
//     user = await this.findOne({ email: login })
//   }

//   return user
// }

// userSchema.pre('remove', function (next) {
//   this.model('Message').deleteMany({ user: this.id }, next)
// })
