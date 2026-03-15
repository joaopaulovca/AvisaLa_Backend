//Node 20
//Postgres 16
import express from 'express'
import User from './models/User.js'
import Post from './models/Post.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'
import postRoutes from './postRoutes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Substitua * pelo seu domínio em produção
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Request-Method", '*');
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

config.host = process.env.DB_HOST;
config.username =  process.env.DB_USER;
config.password = process.env.DB_PASS,
config.database = process.env.DB_NAME;
config.port = process.env.DB_PORT;

const sequelize = new Sequelize(config)

User.init(sequelize)
Post.init(sequelize)

Post.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Post, { foreignKey: 'id' });

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

sequelize.authenticate().then(() => {
  console.log("BD conectado")
  app.listen(3000, () => console.log("Servidor Executando"))
}).catch((err) => {
    console.log(err);
})