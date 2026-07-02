import express from 'express'
import { createArquivo, deleteArquivo, updateArquivo, getArquivosByPost}
from './controllers/arquivoController.js'

const router = express.Router()

router.post('/', createArquivo);
router.delete('/:id', deleteArquivo);
router.put('/:id', updateArquivo);
router.get('/:id', getArquivosByPost);

export default router;