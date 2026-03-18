import express from 'express'
import { createPost, getAllPosts, deletePost, getPostByID, updatePost, searchDescriptionByKeyword, 
         searchByCategory, searchByTopicAndCategory, 
         getAllPostsByTeacher,searchByTeacherCategory, searchByTeacherTopicAndCategory } from './controllers/postController.js'

const router = express.Router()

router.post('/', createPost)
router.put('/:id', updatePost);
router.delete('/:id', deletePost)
router.get('/', getAllPosts)
router.get('/:id', getPostByID);

//qProfessores
router.get('/prof/:user_id', getAllPostsByTeacher)
router.get('/prof/:user_id/category/:category', searchByTeacherCategory)
router.get('/prof/:user_id/category/:category/topic/:topic/description/:description', searchByTeacherTopicAndCategory)
// fim professores

router.get('/topic/:topic/description/:description', searchDescriptionByKeyword)
router.get('/category/:category', searchByCategory)
router.get('/category/:category/topic/:topic/description/:description', searchByTopicAndCategory)

//Posts

export default router