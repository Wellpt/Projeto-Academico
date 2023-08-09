import { Router } from 'express'
import { validacaoMiddleware } from '../middlewares/validacao'
import { createUser, getUser, listUser, deleteUser, updateUser } from '../controllers/user'

import { userValidations, userIdValidation, editUserValidations } from '../validacao/user'
import { deflate } from 'zlib'

const userRoutes = Router()

userRoutes.get ('/', listUser)
userRoutes.get ('/:id', getUser)
userRoutes.post('/', userValidations, validacaoMiddleware, createUser)
userRoutes.put('/:id', editUserValidations, validacaoMiddleware, updateUser)

export default userRoutes