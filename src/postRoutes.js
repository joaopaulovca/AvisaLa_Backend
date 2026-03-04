import express from 'express'
import { createPost, getAllPosts, deletePost, getPostByID, updatePost, searchDescriptionByKeyword, searchByCategory, searchByDescriptionAndCategory } from './controllers/postController.js'

const router = express.Router()

router.post('/', createPost)
router.put('/:id', updatePost);
router.delete('/:id', deletePost)
router.get('/', getAllPosts)
router.get('/:id', getPostByID);

router.get('/searchByKeyword', searchDescriptionByKeyword)
router.get('/searchByCategory', searchByCategory)
router.get('/searchByKeywordAndCategory', searchByDescriptionAndCategory)

//Posts

export default router