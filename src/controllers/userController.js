import User from "../models/User.js"
import crypto from 'node:crypto'
import { Sequelize, DataTypes, Op } from 'sequelize'

export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }

        console.log(userToCreate)

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
  const user = await User.findByPk(req.params.id)
  res.status(200).json(user)
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
