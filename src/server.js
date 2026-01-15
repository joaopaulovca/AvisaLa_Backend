import express from 'express'
import User from './models/User.js'
import Post from './models/Post.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'
import postRoutes from './postRoutes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)

User.init(sequelize)
Post.init(sequelize)

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

sequelize.authenticate().then(() => {
  console.log("BD conectado")
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => console.log("Servidor Executando"))



