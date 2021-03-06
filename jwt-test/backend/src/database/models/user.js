import { Schema, model } from 'mongoose'
import { compare } from 'bcrypt'

// Definimos os campos que nossos registros terão.
const userSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        unique: true,
        required: true
    }
})

// Podemos adicionar um método ao Schema. O método 'compare'
// que estamos definindo aqui, irá comparar a senha digitada pelo
// usuário no momento do 'login' (formPass) e a senha criptografada
// que está cadastrada no banco de dados (userPass). 
userSchema.method('compare', async (formPass, userPass) => { 
    return compare(formPass, userPass)
})

// Criamos o Model
const User = model("User", userSchema)

export default User