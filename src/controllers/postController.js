import Post from "../models/Post.js"
import User from "../models/User.js"
import crypto from 'node:crypto'
import { Sequelize, DataTypes, Op, Model } from 'sequelize'

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
  const posts = await Post.findAll(
    {
      include: [{model: User}],  
      order: [
        ['created_at', 'DESC'] 
      ]
    }
  )
  res.status(200).json(posts)
} 

export const deletePost = async (req, res) => {
    const post = await Post.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json(post)
} 

export const getPostByID = async (req, res) => {
  if (req.params.id === 'searchByKeyword') {
    searchDescriptionByKeyword(req, res)
  } else if (req.params.id === 'searchByKeywordAndCategory') {
    searchByDescriptionAndCategory(req, res)
  } else if (req.params.id === 'searchByCategory') {
    searchByCategory(req, res)
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
    include: [{model: User}],  
    where: { 
      [Op.or]: { 
        description: {[Op.like]: "%" + req.params.description + "%"}, 
        topic: {[Op.like]: "%" + req.params.topic + "%"} 
      }
    }
  });
  res.status(200).json(posts)
}

export const searchByTopicAndCategory = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{model: User}],      
      where: {
        category: { [Op.eq]: req.params.category },
        [Op.or]: { topic: { [Op.like]: "%" + req.params.topic + "%" } },
        [Op.or]: { description: { [Op.like]: "%" + req.params.description + "%" } }
      }
    })

    posts.forEach((post) => {
      post.user_id += '-' + post.autor.name;
    })

    res.status(200).json(posts)

  } catch (err) {
    res.status(500).json(err)
  }
}  

export const searchByCategory = async (req, res) => {
  const posts = await Post.findAll({
    include: [{model: User}],  
    where: { category: req.params.category }
  });
  res.status(200).json(posts);
}