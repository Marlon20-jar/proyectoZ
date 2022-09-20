import { Schema, model } from 'mongoose'
const {appConfig } = require('../config')
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    matricula: {
        type: Number,
        unique: true
    },
    imgUrl: {
        type: String,
    },
    Roles:  [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
}
);

userSchema.methods.setImgUrl = function setImgUrl (filename) {
    const {host, port } = appConfig
    this.imgUrl `${host}:${port}/public/${filename}`
}

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);   