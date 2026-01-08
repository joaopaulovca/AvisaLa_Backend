import express from 'express'
import { createUser, getAllUsers, deleteUser, getUserByID, updateUser, searchByPalavraChave, loginUsuario } from './controllers/userController.js'

const router = express.Router()

//Usuarios
router.post('/', createUser)
router.get('/', getAllUsers)
router.delete('/:id', deleteUser)
router.get('/:id', getUserByID)
router.put('/:id', updateUser)
router.get('/search', searchByPalavraChave)
router.get('/loginUsuario', loginUsuario)

//Posts

export default router