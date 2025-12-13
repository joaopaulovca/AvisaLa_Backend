import express from 'express'
import { createUser, getAllUsers, deleteUser, getUserByID, updateUser, searchByPalavraChave } from './controllers/userController.js'

const router = express.Router()

router.post('/cadastro', createUser)
router.get('/todos', getAllUsers)
router.delete('/deletar/:id', deleteUser)
router.get('/getById/:id', getUserByID)
router.put('/updateUser/:id', updateUser)
router.get('/search', searchByPalavraChave)

export default router