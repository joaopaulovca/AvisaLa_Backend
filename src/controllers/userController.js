import User from "../models/User.js"
import crypto from 'node:crypto'
import { Sequelize, DataTypes, Op } from 'sequelize'

export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }

        const user = await User.create(userToCreate)
        res.status(201).json(user) 
    } catch(err) {
        res.status(500).json(err)
    }
} 

export const getAllUsers = async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users)
} 

export const deleteUser = async (req, res) => {
    const user = await User.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json(user)
} 

export const getUserByID = async (req, res) => {
  if (req.params.id === 'search') {
    searchByPalavraChave(req, res);
  } if (req.params.id === 'loginUsuario') {
    loginUsuario(req, res);
  } else {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  }
} 

export const updateUser = async (req, res) => {
  const [affectedRows] = await User.update(
    { name: req.body.name,
      ...req.body },
    {
        where: {
            id: req.params.id,
        },
    }
  );
  const user = await User.findByPk(req.params.id)
  res.status(200).json(user)
} 

export const searchByPalavraChave = async (req, res) => {
  const users = await User.findAll({
    where: { name: {
      [Op.like]: "%" + req.body.text + "%"
    } }
  });
  res.status(200).json(users)
}

export const loginUsuario = async (req, res) => {
  const users = await User.findAll({
    where: { username: req.body.username, password: req.body.password }
  });
  if (users.length === 1)
    res.status(200).json(users[0])
  else
    res.status(500).json("Usuário não encontrado !");
}
