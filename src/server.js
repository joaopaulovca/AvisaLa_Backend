import express from 'express'
import User from './models/User.js'
import Post from './models/Post.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'
import postRoutes from './postRoutes.js'

const app = express()
app.use(express.json())

config.host = process.env.DB_HOST;
config.username =  process.env.DB_USER;
config.password = process.env.DB_PASS,
config.database = process.env.DB_NAME;
config.port = process.env.DB_PORT;

const sequelize = new Sequelize(config)

User.init(sequelize)
Post.init(sequelize)

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

sequelize.authenticate().then(() => {
  console.log("BD conectado")
  app.listen(3000, () => console.log("Servidor Executando"))
}).catch((err) => {
    console.log(err);
})