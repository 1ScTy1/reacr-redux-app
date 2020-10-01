import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  email: String,
  password: String
})

userSchema.method({
  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {
  async findUser({ email, password }) {
    if (!email) {
      throw new Error('no Email')
    }
    if (!password) {
      throw new Error('no password')
    }
    const user = await this.findOne({ email })
    if (!user) {
      throw new Error('no user')
    }
    const correctPassword = await user.passwordMatches(password)
    if (!correctPassword) {
      throw new Error('incorrect password')
    }
    return user
  }
}

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  return next()
})

export default mongoose.model('users', userSchema)
