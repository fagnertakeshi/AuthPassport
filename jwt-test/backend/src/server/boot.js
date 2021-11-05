// Importamos algumas variáveis de ambiente
import { port } from '../environment/vars'

// Importamos a função que retorna uma instância do mongoose
import conn from '../database/connection'

export default app => { 
 conn()
 .then(async () => { 
   console.log(`\nConnected to MongoDB`)  
    
   app.listen(port, () => { 
    console.log(`Server is listenning on port ${ port }`)
   })
 })
 .catch(error => { 
    console.log(error)
 }) 
}