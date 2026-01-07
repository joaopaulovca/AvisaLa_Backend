import Post from "../models/Post.js"
import crypto from 'node:crypto'
import { Sequelize, DataTypes, Op } from 'sequelize'

export const createPost = async (req, res) => {
    try {
        const postToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }

        const post = await Post.create(postToCreate)
        res.status(201).json(post) 
    } catch(err) {
        res.status(500).json(err)
    }
} 

export const getAllPosts = async (req, res) => {
  const posts = await Post.findAll()
  res.status(200).json(posts)
} 

export const deletePost = async (req, res) => {
    const post = await Post.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json(post)
} 

export const getPostByID = async (req, res) => {
  if (req.params.id === 'search') {
    searchDescriptionByKeyword(req, res)
  } else {
    const post = await Post.findByPk(req.params.id)
    res.status(200).json(post)
  }
} 

export const updatePost = async (req, res) => {
  const [affectedRows] = await Post.update(
    { category: req.body.category,
      ...req.body },
    {
        where: {
            id: req.params.id,
        },
    }
  );
  const post = await Post.findByPk(req.params.id)
  res.status(200).json(post)
} 

export const searchDescriptionByKeyword = async (req, res) => {
  const posts = await Post.findAll({
    where: { 
      [Op.or]: { 
        description: {[Op.like]: "%" + req.body.text + "%"}, 
        topic: {[Op.like]: "%" + req.body.text + "%"} 
      }
    }
  });
  res.status(200).json(posts)
}

export const searchByCategory = async (req, res) => {
  const posts = await Post.findAll({
    where: { category: req.body.category }
  });
  res.status(200).json(posts);
}